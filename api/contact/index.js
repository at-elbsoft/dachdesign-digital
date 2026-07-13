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

  // 2) Validation
  const isEmail = (e) => typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  if (!name || !message || !isEmail(email)) {
    return respond(400, { ok: false, error: "Bitte Name, gültige E-Mail und Nachricht ausfüllen." });
  }
  if ([name, email, phone, subject, message].some((v) => v && String(v).length > 5000)) {
    return respond(400, { ok: false, error: "Eingabe zu lang." });
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
    `E-Mail:  ${email}\n` +
    `Telefon: ${phone || "-"}\n` +
    `Betreff: ${subject || "-"}\n\n` +
    `Nachricht:\n${message}\n`;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Website-Anfrage: ${subject || "Kontaktformular"} – ${name}`,
      text,
    });
    return respond(200, { ok: true });
  } catch (err) {
    context.log.error("Mailversand fehlgeschlagen:", err && err.message);
    return respond(502, {
      ok: false,
      error: "Versand fehlgeschlagen. Bitte später erneut versuchen oder anrufen.",
    });
  }
};
