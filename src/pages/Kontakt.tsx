import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { trackEvent } from "@/lib/analytics";

const contactSchema = z
  .object({
    name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an.").max(200),
    phone: z.string().trim().max(50).optional().or(z.literal("")),
    email: z.string().trim().max(320).optional().or(z.literal("")),
    subject: z.string().trim().max(300).optional().or(z.literal("")),
    message: z.string().trim().max(5000).optional().or(z.literal("")),
    consent: z.literal(true, { errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklärung zu." }) }),
  })
  .refine((d) => (d.phone && d.phone.length > 0) || (d.email && d.email.length > 0), {
    message: "Bitte Telefon oder E-Mail angeben.",
    path: ["phone"],
  })
  .refine(
    (d) => !d.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email),
    { message: "Bitte eine gültige E-Mail-Adresse angeben.", path: ["email"] }
  );

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Kontakt() {
  const { ref, isVisible } = useScrollReveal();

  const initialForm = { name: '', phone: '', email: '', subject: '', message: '', company: '', consent: false };
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message ?? "Bitte prüfen Sie Ihre Eingaben.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email || "",
          phone: parsed.data.phone || "",
          subject: parsed.data.subject || "",
          message: parsed.data.message || "",
          company: formData.company, // honeypot
        }),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(
          json.error ||
            "Senden fehlgeschlagen. Bitte später erneut versuchen oder unter 0176 1351 4385 anrufen."
        );
        return;
      }
      trackEvent("generate_lead", { form_name: "kontaktformular", value: 1 });
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Senden fehlgeschlagen. Bitte später erneut versuchen oder unter 0176 1351 4385 anrufen."
      );
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Kontakt | Dachdecker Hamburg – Lehmann Dächer & Bauklempnerei"
        description="Kontaktieren Sie Lehmann Dächer & Bauklempnerei GmbH in Hamburg. Tel: 0176 1351 4385, E-Mail: kontakt@ldbauklempnerei.de. Mo-Fr 06-18 Uhr, 24h Notdienst."
        path="/kontakt"
      />
      <PageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns für eine unverbindliche Beratung."
        breadcrumb="Kontakt"
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-5 gap-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-heading font-bold mb-6">So erreichen Sie uns</h2>
                <div className="space-y-5">
                  <a href="tel:+4917613514385" className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Telefon (24h Notdienst)</p>
                      <p className="font-semibold group-hover:text-accent transition-colors">0176 1351 4385</p>
                    </div>
                  </a>
                  <a href="mailto:kontakt@ldbauklempnerei.de" className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">E-Mail</p>
                      <p className="font-semibold group-hover:text-accent transition-colors">kontakt@ldbauklempnerei.de</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Dachrinnenreinigung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold group-hover:text-[#25D366] transition-colors">0176 1351 4385</p>
                    </div>
                  </a>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Adresse</p>
                      <p className="font-semibold">Graubergen 19, 21218 Seevetal</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm mb-2">Servicezeiten</h3>
                <p className="text-sm text-muted-foreground">Mo – Fr: 06:00 – 18:00 Uhr</p>
                <p className="text-sm font-semibold text-accent">24h Notdienst verfügbar</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-heading font-bold mb-6">Nachricht senden</h2>

                {/* Honeypot - hidden from users, bots may fill it */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
                >
                  <label htmlFor="company">Firma (nicht ausfüllen)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">E-Mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Thema</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Nachricht *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow resize-none"
                  />
                </div>
                <label className="flex items-start gap-2 mb-6 text-xs text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5"
                  />
                  <span>
                    Ich habe die <a href="/datenschutz" className="underline hover:text-accent">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu. *
                  </span>
                </label>
                {status === "success" && (
                  <div className="flex gap-3 items-start bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">Vielen Dank – wir melden uns schnellstmöglich bei Ihnen.</p>
                      <p className="text-muted-foreground mt-1">Bei Notfällen erreichen Sie uns rund um die Uhr unter <a href="tel:+4917613514385" className="font-semibold text-accent hover:underline">0176 1351 4385</a>.</p>
                    </div>
                  </div>
                )}
                {status === "error" && errorMessage && (
                  <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4">
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Wird gesendet …
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nachricht absenden
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-0">
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.5!2d10.0836!3d53.3922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1752c16e6b3a3%3A0x9e4e2a4a9b0e3e0a!2sGr%C3%BCtzm%C3%BChle%2023%2C%2021218%20Seevetal!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Lehmann Dächer & Bauklempnerei GmbH"
          />
        </div>
      </section>
    </Layout>
  );
}
