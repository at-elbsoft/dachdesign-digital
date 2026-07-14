import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";
import { getAttributionPayload } from "@/lib/attribution";

const quickSchema = z
  .object({
    name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an.").max(200),
    phone: z.string().trim().max(50).optional().or(z.literal("")),
    email: z.string().trim().max(320).optional().or(z.literal("")),
    objektart: z.string().trim().min(1, "Bitte Objektart wählen."),
    message: z.string().trim().max(2000).optional().or(z.literal("")),
    consent: z.literal(true, {
      errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
    }),
  })
  .refine((d) => (d.phone && d.phone.length > 0) || (d.email && d.email.length > 0), {
    message: "Bitte Telefon oder E-Mail angeben.",
    path: ["phone"],
  })
  .refine(
    (d) => !d.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email),
    { message: "Bitte eine gültige E-Mail-Adresse angeben.", path: ["email"] }
  );

type Status = "idle" | "submitting" | "success" | "error";

interface Props {
  id?: string;
  formName?: string;
  defaultSubject?: string;
}

export default function QuickLeadForm({
  id = "kurzformular",
  formName = "kurzformular_dachrinnenreinigung",
  defaultSubject = "Dachrinnenreinigung – Angebotsanfrage",
}: Props) {
  const initial = {
    name: "",
    phone: "",
    email: "",
    objektart: "",
    message: "",
    company: "",
    consent: false,
  };
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const parsed = quickSchema.safeParse(data);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Bitte prüfen Sie Ihre Eingaben.");
      return;
    }

    setStatus("submitting");
    try {
      const attribution = await getAttributionPayload();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email || "",
          phone: parsed.data.phone || "",
          subject: `${defaultSubject} (${parsed.data.objektart})`,
          message:
            (parsed.data.message || "").trim() ||
            `Anfrage über Kurzformular – Objektart: ${parsed.data.objektart}`,
          company: data.company,
          ...attribution,
        }),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(
          json.error ||
            "Senden fehlgeschlagen. Bitte später erneut versuchen oder unter 0176 1351 4385 anrufen."
        );
        return;
      }
      trackEvent("generate_lead", { form_name: formName, value: 1 });
      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
      setError(
        "Senden fehlgeschlagen. Bitte später erneut versuchen oder unter 0176 1351 4385 anrufen."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        id={id}
        className="bg-card border border-accent/30 rounded-xl p-6 md:p-8 shadow-sm text-center scroll-mt-32"
      >
        <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-3" />
        <h3 className="text-lg font-heading font-bold mb-2">Anfrage eingegangen</h3>
        <p className="text-sm text-muted-foreground">
          Vielen Dank! Wir melden uns kurzfristig zurück.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm scroll-mt-32"
      aria-label="Kurzformular Angebotsanfrage"
    >
      <h3 className="text-lg md:text-xl font-heading font-bold mb-1">
        Angebot in 60 Sekunden anfragen
      </h3>
      <p className="text-xs text-muted-foreground mb-4">
        Wir melden uns kurzfristig zurück.
      </p>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor={`${id}-company`}>Firma (nicht ausfüllen)</label>
        <input
          type="text"
          id={`${id}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor={`${id}-name`} className="block text-xs font-medium text-muted-foreground mb-1.5">
            Name *
          </label>
          <input
            id={`${id}-name`}
            type="text"
            required
            autoComplete="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div>
          <label htmlFor={`${id}-objektart`} className="block text-xs font-medium text-muted-foreground mb-1.5">
            Objektart *
          </label>
          <select
            id={`${id}-objektart`}
            required
            value={data.objektart}
            onChange={(e) => setData({ ...data, objektart: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            <option value="">Bitte wählen</option>
            <option value="Einfamilienhaus">Einfamilienhaus</option>
            <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
            <option value="Gewerbe">Gewerbe</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor={`${id}-phone`} className="block text-xs font-medium text-muted-foreground mb-1.5">
            Telefon
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-xs font-medium text-muted-foreground mb-1.5">
            E-Mail
          </label>
          <input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground -mt-1 mb-3">
        Telefon <em>oder</em> E-Mail – eines von beidem genügt.
      </p>

      <div className="mb-3">
        <label htmlFor={`${id}-message`} className="block text-xs font-medium text-muted-foreground mb-1.5">
          Nachricht (optional)
        </label>
        <textarea
          id={`${id}-message`}
          rows={3}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-y"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-muted-foreground mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => setData({ ...data, consent: e.target.checked })}
          className="mt-0.5 shrink-0"
          required
        />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="underline hover:text-accent">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Kontaktaufnahme zu.
        </span>
      </label>

      {status === "error" && error && (
        <p className="text-xs text-destructive mb-3" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Wird gesendet…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Kostenloses Angebot anfragen
          </>
        )}
      </button>
    </form>
  );
}
