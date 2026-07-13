const nodemailer = require("nodemailer");

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
