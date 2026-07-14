const nodemailer = require("nodemailer");
const dns = require("dns").promises;

// Bekannte Wegwerf-/Temp-Mail-Domains (lowercase). Liste bei Bedarf erweitern.
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamail.biz",
  "guerrillamail.de",
  "guerrillamailblock.com",
  "sharklasers.com",
  "grr.la",
  "10minutemail.com",
  "10minutemail.net",
  "10minutemail.org",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "tempmailo.com",
  "tempr.email",
  "yopmail.com",
  "yopmail.net",
  "yopmail.fr",
  "trashmail.com",
  "trashmail.de",
  "trashmail.net",
  "trashmail.io",
  "wegwerfmail.de",
  "wegwerfmail.net",
  "wegwerfmail.org",
  "wegwerfemail.de",
  "maildrop.cc",
  "getnada.com",
  "nada.email",
  "mohmal.com",
  "fakeinbox.com",
  "discard.email",
  "discardmail.com",
  "mailsac.com",
  "moakt.com",
  "spambog.com",
  "spambog.de",
  "spambog.ru",
  "dispostable.com",
  "throwawaymail.com",
  "mytemp.email",
  "mailnesia.com",
  "mailcatch.com",
  "mintemail.com",
  "einrot.com",
  "spam4.me",
  "byom.de",
  "emailondeck.com",
  "inboxbear.com",
  "harakirimail.com",
  "mail-temp.com",
  "mail-temporaire.fr",
  "tmpmail.org",
  "tmpmail.net",
  "tmpeml.com",
  "burnermail.io",
  "anonaddy.me",
]);

module.exports = async function (context, req) {
  const respond = (status, body) => {
    context.res = {
      status,
      headers: { "Content-Type": "application/json" },
      body,
    };
  };

  if (req.method !== "POST") return respond(405, { ok: false, error: "Method not allowed" });

  const data = req.body || {};
  const { name, email, phone, subject, message } = data;

  // 1) Honeypot: hidden "company" field must be empty
  if (data.company) return respond(200, { ok: true });

  // 2) Validation: Name Pflicht, mindestens Telefon ODER E-Mail, Nachricht optional
  const isEmail = (e) => typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const hasEmail = typeof email === "string" && email.trim().length > 0;
  const hasPhone = typeof phone === "string" && phone.trim().length > 0;

  if (!name || String(name).trim().length === 0) {
    return respond(400, { ok: false, error: "Bitte Name und mindestens Telefon oder E-Mail angeben." });
  }
  if (!hasEmail && !hasPhone) {
    return respond(400, { ok: false, error: "Bitte Name und mindestens Telefon oder E-Mail angeben." });
  }
  if ([name, email, phone, subject, message].some((v) => v && String(v).length > 5000)) {
    return respond(400, { ok: false, error: "Eingabe zu lang." });
  }

  // 2b) E-Mail-Prüfungen nur, wenn E-Mail angegeben
  if (hasEmail) {
    if (!isEmail(email)) {
      return respond(400, { ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." });
    }
    const domain = String(email).split("@")[1]?.toLowerCase().trim();
    if (!domain) {
      return respond(400, { ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." });
    }
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return respond(400, {
        ok: false,
        error: "Bitte eine dauerhaft erreichbare E-Mail-Adresse verwenden (keine Wegwerf-Adresse).",
      });
    }
    try {
      const mx = await dns.resolveMx(domain);
      if (!Array.isArray(mx) || mx.length === 0) {
        return respond(400, { ok: false, error: "Die E-Mail-Domain ist nicht erreichbar. Bitte E-Mail prüfen." });
      }
    } catch (err) {
      if (err && (err.code === "ENOTFOUND" || err.code === "ENODATA")) {
        return respond(400, { ok: false, error: "Die E-Mail-Domain ist nicht erreichbar. Bitte E-Mail prüfen." });
      }
      // Transienter DNS-Fehler → fail-open, nicht blockieren
      context.log.warn("MX-Lookup fehlgeschlagen (fail-open):", domain, err && err.code);
    }
  }


  // 3) SMTP transport (all-inkl / kasserver)
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const text =
    "Neue Anfrage über die Website ldbauklempnerei.de\n\n" +
    `Name:    ${name}\n` +
    `E-Mail:  ${hasEmail ? email : "-"}\n` +
    `Telefon: ${phone || "-"}\n` +
    `Betreff: ${subject || "-"}\n\n` +
    `Nachricht:\n${message && String(message).trim().length > 0 ? message : "-"}\n`;

  try {
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Website-Anfrage: ${subject || "Kontaktformular"} – ${name}`,
      text,
    };
    if (hasEmail) mailOptions.replyTo = email;
    await transporter.sendMail(mailOptions);
    return respond(200, { ok: true });
  } catch (err) {
    context.log.error("Mailversand fehlgeschlagen:", err && err.message);
    return respond(502, {
      ok: false,
      error: "Versand fehlgeschlagen. Bitte später erneut versuchen oder anrufen.",
    });
  }
};
