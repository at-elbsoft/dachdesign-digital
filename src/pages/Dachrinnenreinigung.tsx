import { CheckCircle2, Phone, Receipt, Banknote, FileCheck, BadgeEuro, ShieldCheck, PackageCheck, CalendarClock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { orte } from "@/data/dachrinnenreinigungOrte";
import dachrinnenImg from "@/assets/dachrinnenreinigung.jpeg";
import dachrinnenDetailImg from "@/assets/dachrinnen-reinigung-detail.jpg";
import dachrinneVorherImg from "@/assets/dachrinne-vorher.jpg";
import dachrinneNachherImg from "@/assets/dachrinne-nachher.jpg";

const faqs = [
  {
    question: "Ist die Dachrinnenreinigung steuerlich absetzbar?",
    answer: "Ja. Als Handwerkerleistung nach § 35a EStG können Privatkund:innen 20 % der Lohnkosten (max. 1.200 € pro Jahr) direkt von der Steuer absetzen. Wir stellen eine Rechnung mit separat ausgewiesenem Lohnanteil aus – Voraussetzung ist die Zahlung per Überweisung. Bitte im Einzelfall mit Finanzamt/Steuerberater klären.",
  },
  {
    question: "Was ist im Preis enthalten?",
    answer: "Reinigung der Dachrinnen, Kontrolle und Reinigung der Fallrohre, Sichtprüfung des Daches und fachgerechte Entsorgung von Laub und Schmutz. Auf Wunsch inklusive Foto-Dokumentation. Faire Festpreise – keine versteckten Kosten.",
  },
  {
    question: "Wie oft sollte man die Dachrinne reinigen lassen?",
    answer: "In der Regel ein- bis zweimal pro Jahr, idealerweise im Herbst nach dem Laubfall und im Frühjahr. Bei vielen Bäumen in der Umgebung häufiger.",
  },
  {
    question: "Woran erkenne ich eine verstopfte Dachrinne?",
    answer: "Überlaufendes Wasser bei Regen, Pflanzenbewuchs in der Rinne, Feuchtigkeitsflecken an der Fassade oder tropfende Fallrohre sind typische Anzeichen.",
  },
  {
    question: "Was kostet eine Dachrinnenreinigung?",
    answer: "Der Preis hängt von Länge der Rinnen, Höhe und Zugänglichkeit ab. Sie erhalten von uns vorab ein kostenloses, unverbindliches Angebot.",
  },
  {
    question: "Reinigen Sie auch die Fallrohre?",
    answer: "Ja, Fallrohre gehören dazu. Wir prüfen und spülen sie, damit das Wasser vollständig abfließen kann.",
  },
  {
    question: "Was passiert mit dem entfernten Laub und Schmutz?",
    answer: "Wir sammeln alles ein und entsorgen es fachgerecht – nichts bleibt in Beeten oder auf dem Grundstück.",
  },
  {
    question: "Ab welcher Höhe/Gebäudeart reinigen Sie?",
    answer: "Von Einfamilienhäusern bis zu Mehrfamilienhäusern, Gewerbeobjekten und Hallen. Wir arbeiten mit geeigneter Sicherheitsausrüstung und Hebetechnik.",
  },
  {
    question: "Prüfen Sie die Dachrinne auch auf Schäden?",
    answer: "Ja, auf Wunsch führen wir eine Sichtprüfung durch und erledigen kleinere Reparaturen direkt vor Ort.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer: "In der Regel kurzfristig. Rufen Sie an oder senden Sie eine Anfrage – wir melden uns zeitnah.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Dachrinnenreinigung",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Lehmann Dächer & Bauklempnerei GmbH",
  },
  "areaServed": {
    "@type": "City",
    "name": "Hamburg",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const targetGroups = [
  "Einfamilienhäuser",
  "Mehrfamilienhäuser",
  "Eigentümergemeinschaften",
  "Hausverwaltungen",
  "Gewerbeimmobilien/Hallen",
];

const steps = [
  "Kontakt aufnehmen – anrufen oder Formular ausfüllen",
  "Kostenlosen Vor-Ort-Termin vereinbaren",
  "Unverbindliches Angebot erhalten",
  "Reinigungstermin abstimmen",
  "Freie Dachrinne genießen – ohne Verstopfungsrisiko",
];

export default function Dachrinnenreinigung() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: targetRef, isVisible: targetVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: beforeAfterRef, isVisible: beforeAfterVisible } = useScrollReveal();
  const { ref: locationsRef, isVisible: locationsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Dachrinnenreinigung Hamburg | Lehmann Dächer & Bauklempnerei"
        description="Professionelle Dachrinnenreinigung in Hamburg: Reinigung von Dachrinnen und Fallrohren, Entfernung von Laub und Moos, Sichtprüfung und kleine Reparaturen."
        path="/dachrinnenreinigung"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />
      <PageHero
        title="Dachrinnenreinigung"
        subtitle="Laub, Moos und Schmutz verstopfen Dachrinnen – wir sorgen dafür, dass Regenwasser wieder ungehindert abfließen kann."
        breadcrumb="Leistungen / Dachrinnenreinigung"
        image={dachrinnenImg}
      />

      {/* Trust / USP chip bar – Message-Match zu den Anzeigen */}
      <section className="border-b border-border bg-muted/40">
        <div className="container-wide py-4">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
            {[
              { icon: BadgeEuro, label: "Faire Festpreise" },
              { icon: ShieldCheck, label: "Keine versteckten Kosten" },
              { icon: PackageCheck, label: "Inkl. Fallrohr, Sichtprüfung & Entsorgung" },
              { icon: CalendarClock, label: "Kurzfristige Termine" },
              { icon: Award, label: "Meisterbetrieb aus Seevetal – über 25 Jahre Erfahrung" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1.5 font-medium shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Zuverlässiger Service</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Schutz vor Feuchtigkeitsschäden
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Laub, Moos und Schmutz können Dachrinnen verstopfen und langfristig zu Feuchtigkeitsschäden an Fassade, Dach und Fundament führen. Mit unserer professionellen Dachrinnenreinigung sorgen wir dafür, dass Regenwasser wieder ungehindert abfließen kann und teure Folgeschäden vermieden werden.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir reinigen Dachrinnen und Fallrohre gründlich, sicher und zuverlässig – sowohl an Einfamilienhäusern als auch an Mehrfamilienhäusern, Gewerbeobjekten und Hallen. Auf Wunsch überprüfen wir die Dachrinne zusätzlich auf Beschädigungen und führen kleinere Reparaturen direkt durch.
              </p>
              <ul className="space-y-3">
                {[
                  "Reinigung der Dachrinnen",
                  "Kontrolle & Reinigung der Fallrohre",
                  "Sichtprüfung des Daches",
                  "Fachgerechte Entsorgung von Laub und Schmutz",
                  "Auf Wunsch Foto-Dokumentation",
                  "Faire Festpreise – keine versteckten Kosten",
                ].map((b) => (
                  <li key={b} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="tel:+4917613514385" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
                  <Phone className="w-4 h-4" />
                  Jetzt Angebot anfordern
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <img src={dachrinnenImg} alt="Dachrinnenreinigung in Hamburg" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={dachrinnenDetailImg} alt="Dachrinnenreinigung - Laub und Schmutz entfernen" width={1024} height={768} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section ref={targetRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto ${targetVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Für jedes Objekt</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Für wen ist unsere Dachrinnenreinigung ideal?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Eine regelmäßige Dachrinnenreinigung schützt den Wert Ihrer Immobilie und verhindert kostspielige Feuchtigkeitsschäden. Unser Service ist die richtige Wahl für:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {targetGroups.map((group) => (
                <li key={group} className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 shadow-sm border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm">{group}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed text-center">
              Ob Privatkunde, Verwaltung oder Gewerbetreibender: Wir sorgen dafür, dass Ihre Dachrinne und Fallrohre das ganze Jahr über zuverlässig funktionieren.
            </p>
          </div>
        </div>
      </section>

      <section ref={stepsRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`${stepsVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Ablauf</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              So einfach geht's
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              In fünf Schritten zu einer freien Dachrinne – transparent, unverbindlich und auf Ihre Terminwünsche abgestimmt.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative bg-background rounded-xl p-6 shadow-sm border border-border text-center">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={beforeAfterRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`${beforeAfterVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Ergebnis</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Vorher / Nachher
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Der Unterschied ist deutlich sichtbar: Während eine verstopfte Dachrinne Wasser überlaufen lässt, leitet eine saubere Rinne Regenwasser zuverlässig ab.
            </p>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              <div className="space-y-3">
                <img src={dachrinneVorherImg} alt="Dachrinne vor der Reinigung – voll mit Laub und Schmutz" width={1024} height={768} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
                <p className="text-center font-semibold text-sm">Vorher – verstopfte, verlaubte Rinne</p>
              </div>
              <div className="space-y-3">
                <img src={dachrinneNachherImg} alt="Dachrinne nach der Reinigung – sauber und frei" width={1024} height={768} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
                <p className="text-center font-semibold text-sm">Nachher – saubere, freie Dachrinne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={locationsRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`${locationsVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Vor Ort</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Dachrinnenreinigung in Ihrer Region
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Wir sind im gesamten Großraum Hamburg und im nördlichen Niedersachsen im Einsatz. Wählen Sie Ihren Ort für Details zu unserer Dachrinnenreinigung vor Ort.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {orte.map((o) => (
                <Link
                  key={o.slug}
                  to={`/dachrinnenreinigung/${o.slug}`}
                  className="flex items-center justify-between gap-2 bg-background rounded-lg px-4 py-3 shadow-sm border border-border hover:border-accent hover:shadow-md transition-all duration-150"
                >
                  <span className="text-sm font-medium">Dachrinnenreinigung {o.name}</span>
                  <span aria-hidden className="text-accent">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide max-w-3xl">
          <div className={`${faqVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center leading-tight">
              Häufige Fragen zur Dachrinnenreinigung
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
