import { AlertTriangle, Award, BadgeEuro, CheckCircle2, Clock, Droplets, Layers, PackageCheck, Phone, Search, Shield, ShieldAlert, Thermometer, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import QuickLeadForm from "@/components/QuickLeadForm";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import flatRoofImg from "@/assets/worker-flat-roof.png";

const trustPoints = [
  { icon: Award, label: "Meisterbetrieb Seevetal – über 25 Jahre" },
  { icon: BadgeEuro, label: "Faire Festpreise" },
  { icon: PackageCheck, label: "Leckortung + Abdichtung aus einer Hand" },
  { icon: ShieldAlert, label: "24h-Notdienst" },
];

const emergencyPoints = [
  { icon: Droplets, text: "Sofortige Schadensbegrenzung bei Wassereintritt" },
  { icon: Wrench, text: "Leckortung und dauerhafte Abdichtung im selben Zug" },
  { icon: Clock, text: "Kurzfristige Termine im Großraum Hamburg / Seevetal" },
  { icon: ShieldAlert, text: "24h-Notdienst rund um die Uhr" },
];

const preisliste = [
  { label: "Flachdachabdichtung", value: "ab 85 €/m²" },
  { label: "Flachdachsanierung", value: "ab 120 €/m²" },
  { label: "Komplette Flachdacherneuerung", value: "ab 220 €/m²" },
  { label: "Rückbau / Abriss inkl. Entsorgung", value: "ab 30 €/m²" },
  { label: "Leckortung", value: "ab ca. 300 €", hint: true },
  { label: "Reparatur einzelner Schadstellen", value: "nach Aufwand" },
];

const leistungen = [
  { icon: Wrench, title: "Flachdachsanierung", text: "Wirtschaftliche Erneuerung im Bestand statt teurem Komplettabriss." },
  { icon: Shield, title: "Flachdachabdichtung", text: "Dauerhaft dichte Systeme – Bitumen, EPDM oder FPO/PVC." },
  { icon: Layers, title: "Flachdach-Reparatur", text: "Gezielte Reparatur einzelner Schadstellen ohne unnötigen Materialtausch." },
  { icon: Search, title: "Leckortung", text: "Präzise Ortung von Undichtigkeiten – anschließende Abdichtung aus einer Hand." },
  { icon: Thermometer, title: "Flachdach-Dämmung", text: "Fachgerechte Aufdach- oder Zwischensparrendämmung – senkt Heizkosten spürbar." },
  { icon: AlertTriangle, title: "Notabdichtung", text: "Sofortmaßnahmen bei akutem Wassereintritt – über den 24h-Notdienst." },
];

const steps = [
  "Anruf oder Anfrage – wir melden uns kurzfristig.",
  "Besichtigung vor Ort und Bestandsaufnahme.",
  "Transparentes Angebot mit klaren Positionen.",
  "Fachgerechte Ausführung durch unser Team.",
  "Abnahme, Dokumentation und Gewährleistung.",
];

const faqs = [
  {
    question: "Wie schnell können Sie bei einem undichten Flachdach kommen?",
    answer: "Bei akutem Wassereintritt sind wir über unseren 24h-Notdienst rund um die Uhr erreichbar und sichern den Schaden schnellstmöglich ab. Auch für nicht akute Anfragen im Großraum Hamburg und Seevetal vergeben wir kurzfristige Termine.",
  },
  {
    question: "Können Sie mein Flachdach abdichten, ohne es komplett abzureißen?",
    answer: "In den meisten Fällen ja. Wir prüfen die Restsubstanz mit einer Feuchtemessung und einer Bestandsaufnahme und dichten anschließend gezielt ab – oft reicht eine Sanierung im Bestand statt eines teuren Komplettabrisses.",
  },
  {
    question: "Welche Abdichtung ist die richtige?",
    answer: "Je nach Anforderung arbeiten wir mit Bitumen-Schweißbahnen, EPDM-Folie oder Kunststoff-Dachbahnen (FPO/PVC). Die Wahl richtet sich nach Untergrund, Nutzung und Budget – wir beraten Sie herstellerunabhängig.",
  },
  {
    question: "Wie lange hält ein modernes Flachdach?",
    answer: "Bei fachgerechter Ausführung und regelmäßiger Wartung erreichen moderne Abdichtungssysteme 25 bis 40 Jahre. Ein jährlicher Dach-Check verlängert die Lebensdauer deutlich.",
  },
  {
    question: "Sind die genannten Preise verbindlich?",
    answer: "Nein. Es handelt sich um Orientierungswerte (netto, zzgl. MwSt.). Der genaue Preis ergibt sich nach der Besichtigung vor Ort – transparent und ohne versteckte Kosten.",
  },
  {
    question: "Übernehmen Sie auch Blitzschutz und Absturzsicherung?",
    answer: "Ja. Wir installieren geprüfte Blitzschutzsysteme, Anschlagpunkte nach DIN EN 795 und Sekuranten für Wartungsarbeiten – alles aus einer Hand.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Flachdach",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Lehmann Dächer & Bauklempnerei GmbH",
    "telephone": "+4917613514385",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Graubergen 19",
      "postalCode": "21218",
      "addressLocality": "Seevetal",
      "addressCountry": "DE",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "description": "24h-Notdienst bei Wassereintritt und akuten Dachschäden",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
  },
  "areaServed": [
    { "@type": "City", "name": "Hamburg" },
    { "@type": "City", "name": "Seevetal" },
    { "@type": "City", "name": "Buchholz in der Nordheide" },
    { "@type": "City", "name": "Buxtehude" },
    { "@type": "City", "name": "Winsen (Luhe)" },
    { "@type": "City", "name": "Neu Wulmstorf" },
    { "@type": "City", "name": "Tostedt" },
  ],
  "description": "Flachdach-Experten in Hamburg: Abdichtung, Reparatur, Sanierung und 24h-Notdienst bei Wassereintritt.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
};

export default function Flachdach() {
  return (
    <Layout>
      <SEOHead
        title="Flachdachsanierung Hamburg – Abdichtung, Reparatur & 24h-Notdienst | Lehmann Dächer"
        description="Flachdachsanierung & Flachdachabdichtung im Großraum Hamburg: Reparatur, Leckortung, 24h-Notdienst. Meisterbetrieb aus Seevetal – jetzt kostenlos beraten lassen!"
        path="/flachdach"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />

      {/* 1. HERO – Telefon zuerst */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={flatRoofImg} alt="" width={1920} height={600} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container-wide py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80 mb-3">
              Flachdach · Hamburg &amp; Seevetal
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-[1.15] mb-4">
              Flachdach undicht? Wir kommen kurzfristig – auch wenn andere ausgebucht sind.
            </h1>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-7 max-w-2xl mx-auto">
              Schnelle Flachdachabdichtung, Reparatur und Sanierung im Großraum Hamburg. 24h-Notdienst bei Wassereintritt.
            </p>

            {/* Primärer CTA: Anrufen (groß) */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <a
                href="tel:+4917613514385"
                aria-label="Jetzt anrufen unter 0176 1351 4385"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-7 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl shadow-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-150 active:scale-[0.98] w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                <span>Jetzt anrufen: 0176 1351 4385</span>
              </a>
              <a
                href="#kurzformular"
                className="text-sm md:text-base font-semibold underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                oder kostenloses Angebot per Formular anfragen
              </a>
            </div>

            {/* Trust-Leiste */}
            <ul className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5 font-medium"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Kurzformular */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <QuickLeadForm
              id="kurzformular"
              formName="kurzformular_flachdach"
              defaultSubject="Flachdach – Angebotsanfrage"
            />
          </div>
        </div>
      </section>

      {/* 3. Schnell & im Notfall da (zusammengeführt) */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Schnell &amp; im Notfall da</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-3">
              Bei undichtem Flachdach zählt jede Stunde
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Als Meisterbetrieb aus Seevetal sind wir im Großraum Hamburg schnell vor Ort. Mo–Fr 06:00–18:00 Uhr regulär – und bei akutem Wasserschaden über unseren 24h-Notdienst rund um die Uhr.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {emergencyPoints.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-3 items-start bg-background rounded-xl border border-border p-4 md:p-5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <span className="text-base font-medium leading-snug pt-1">{text}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <a
              href="tel:+4917613514385"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-accent/25 transition-all duration-150 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Jetzt Notfall melden: 0176 1351 4385
            </a>
          </div>
        </div>
      </section>

      {/* 4. Kosten & Orientierung */}
      <section id="kosten" className="section-padding scroll-mt-24">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Kosten &amp; Orientierung</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-3">
              Was kostet eine Flachdachsanierung?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Jedes Flachdach ist anders – deshalb gibt es keinen pauschalen Preis. Zur groben Orientierung unsere Richtpreise:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {preisliste.map((item) => (
              <div key={item.label} className="bg-background rounded-xl border border-border p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <BadgeEuro className="w-5 h-5 text-accent shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-base">{item.label}</p>
                    <p className="text-base text-muted-foreground">
                      {item.value}
                      {item.hint && <span className="text-xs"> (Orientierung)</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mb-8">
            Alle Preise <strong>netto, zzgl. gesetzl. MwSt.</strong> · Unverbindliche Orientierung, kein Festpreis. Genauer Preis nach Besichtigung vor Ort.
          </p>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-base md:text-lg font-heading font-semibold leading-snug mb-2">
              Oft ist eine gezielte Sanierung möglich – ohne teuren Komplettabriss.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Sanierung <strong>ab 120 €/m²</strong> statt kompletter Erneuerung <strong>ab 220 €/m²</strong> – das spart Abriss, Gerüst und Entsorgung und senkt die Kosten deutlich.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="tel:+4917613514385"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-accent/25 transition-all duration-150 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Kostenlose Einschätzung: 0176 1351 4385
            </a>
          </div>
        </div>
      </section>

      {/* 5. Unsere Flachdach-Leistungen */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Leistungen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-3">
              Unsere Flachdach-Leistungen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Alles rund ums Flachdach – aus einer Hand.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leistungen.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Ablauf */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Ablauf</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-3">
              So einfach geht's
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <div key={index} className="bg-background rounded-xl p-5 shadow-sm border border-border text-center">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="text-base font-medium leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
              Häufige Fragen zum Flachdach
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
      <MobileStickyCTA whatsappUrl="https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Flachdach-Anfrage" />
    </Layout>
  );
}
