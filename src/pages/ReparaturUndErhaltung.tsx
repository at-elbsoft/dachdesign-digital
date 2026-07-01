import { CheckCircle2, Phone } from "lucide-react";
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
import dachdeckerImg from "@/assets/dachdecker-hamburg.jpeg";
import scaffoldImg from "@/assets/scaffold.png";

const targetGroups = [
  "Eigentümer mit akutem Sturm- oder Wasserschaden",
  "Hausverwaltungen und Eigentümergemeinschaften",
  "Vermieter mit regelmäßigem Wartungsbedarf",
  "Käufer, die den Zustand eines Daches prüfen lassen möchten",
  "Bestandsobjekte mit über 15 Jahren Dachalter",
];

const steps = [
  "Schadensmeldung – telefonisch, per WhatsApp oder Formular",
  "Kurzfristige Besichtigung, bei Notfall 24h-Einsatz",
  "Schriftlicher Prüfbericht mit Fotodokumentation",
  "Transparentes Angebot – auch für die Versicherung",
  "Fachgerechte Reparatur und Freigabe",
];

const faqs = [
  {
    question: "Bieten Sie einen Notdienst bei akuten Dachschäden an?",
    answer: "Ja. Bei Sturm-, Hagel- oder Wasserschäden erreichen Sie uns telefonisch – wir kommen im Großraum Hamburg in der Regel noch am gleichen oder folgenden Werktag zur Sicherung.",
  },
  {
    question: "Wie oft sollte mein Dach gewartet werden?",
    answer: "Wir empfehlen einen jährlichen Dach-Check, mindestens jedoch alle zwei Jahre. So werden Schäden erkannt, bevor teure Folgeschäden an Dämmung oder Fassade entstehen.",
  },
  {
    question: "Was enthält Ihr Dach-Check?",
    answer: "Sichtprüfung der Eindeckung, Kontrolle von Dunstrohren, Kaminanschlüssen, Blitzschutz, Dachrinnen, Fallrohren und Wärmedämmung – Sie erhalten einen schriftlichen Bericht mit Fotos und Handlungsempfehlungen.",
  },
  {
    question: "Übernimmt die Versicherung die Kosten?",
    answer: "Bei versicherten Schäden (z. B. Sturm ab Windstärke 8) meist ja. Wir erstellen die für die Wohngebäudeversicherung nötige Dokumentation und rechnen auf Wunsch direkt mit der Versicherung ab.",
  },
  {
    question: "Was kostet ein Wartungsvertrag?",
    answer: "Die Kosten hängen von Dachgröße, Anzahl der Anschlüsse und Umfang ab. Für Ein- und Zweifamilienhäuser starten Wartungsverträge im niedrigen dreistelligen Bereich pro Jahr – Sie erhalten ein individuelles Angebot.",
  },
  {
    question: "Reparieren Sie auch Dächer, die nicht von Ihnen gebaut wurden?",
    answer: "Selbstverständlich. Wir übernehmen Reparaturen und Wartung an allen Dachtypen und Materialien, unabhängig davon, wer das Dach ursprünglich errichtet hat.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Dachreparatur & Wartung",
  "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "description": "Dachreparatur, Wartung und 24h-Notdienst in Hamburg und Umgebung.",
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

export default function ReparaturUndErhaltung() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: targetRef, isVisible: targetVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Dachreparatur Hamburg | Wartung & Erhaltung – Lehmann Dächer"
        description="Dachreparatur und Wartung in Hamburg: Dach-Check, Sturmschäden, Wartungsverträge. Schnell, fachgerecht und zuverlässig. 24h Notdienst verfügbar!"
        path="/reparatur-und-erhaltung"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />

      <PageHero
        title="Reparatur & Erhaltung"
        subtitle="Dach-Check, schnelle Reparaturen und Wartungsverträge – bei uns erhalten Sie alles aus einer Hand."
        breadcrumb="Leistungen / Reparatur & Erhaltung"
        image={dachdeckerImg}
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Dach-Check</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Wir kümmern uns um alles
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein Dach altert – langsam, aber stetig. Verschobene Ziegel, gerissene Bleianschlüsse, verstopfte Kehlbleche oder Undichtigkeiten am Kamin bleiben oft lange unbemerkt und führen zu teuren Folgeschäden an Dämmung, Dachstuhl und Fassade. Mit unserem systematischen Dach-Check erkennen wir Schwachstellen frühzeitig – bevor der erste Wasserfleck an der Zimmerdecke auftaucht.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bei akuten Sturm-, Hagel- oder Wasserschäden sind wir mit unserem 24h-Notdienst schnell vor Ort, sichern Ihr Dach ab und dokumentieren den Schaden versicherungsgerecht. Auf Wunsch übernehmen wir die komplette Abwicklung mit Ihrer Wohngebäudeversicherung.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dach-Check als Grundlage für Reparaturen und Erneuerungen",
                  "Vermeidung teurer Folge- und Spätschäden",
                  "Wartungsverträge für regelmäßige Kontrollen",
                  "Schnelle Hilfe bei Sturmschäden",
                  "Energetische Optimierungen",
                ].map((b) => (
                  <li key={b} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+4917613514385" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
                <Phone className="w-4 h-4" />
                Jetzt Dach-Check anfordern
              </a>
            </div>
            <div className="space-y-6">
              <img src={dachdeckerImg} alt="Dachdecker bei Reparaturarbeiten in Hamburg" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={scaffoldImg} alt="Gerüstbau für sichere Dacharbeiten" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section ref={targetRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto ${targetVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Zielgruppen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Für wen ist unsere Reparatur & Erhaltung ideal?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Ob Sofortmaßnahme nach einem Sturm oder planmäßige Wartung: Wir arbeiten für Eigentümer, Verwaltungen und Gewerbekunden in Hamburg und im nördlichen Niedersachsen.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {targetGroups.map((group) => (
                <li key={group} className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 shadow-sm border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm">{group}</span>
                </li>
              ))}
            </ul>
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
              Von der Schadensmeldung bis zur fertigen Reparatur – schnell, transparent und versicherungssicher dokumentiert.
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

      <section ref={faqRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide max-w-3xl">
          <div className={`${faqVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center leading-tight">
              Häufige Fragen zu Reparatur & Wartung
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
