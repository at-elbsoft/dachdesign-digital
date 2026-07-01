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
import housesImg from "@/assets/houses.png";
import rooferSmilingImg from "@/assets/roofer-smiling.png";
import roofTilesImg from "@/assets/roof-tiles-close.png";

function DetailBlock({ title, text, benefits }: { title: string; text: string; benefits: string[] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{text}</p>
      <ul className="space-y-2">
        {benefits.map((b) => (
          <li key={b} className="flex gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const targetGroups = [
  "Bauherren im Neubau",
  "Eigentümer bestehender Ein- und Mehrfamilienhäuser",
  "Denkmalgeschützte Gebäude & Altbau-Sanierung",
  "Landwirtschaftliche Betriebe & Höfe",
  "Wohnbauträger und Architekten",
];

const steps = [
  "Kostenlose Erstberatung – vor Ort oder telefonisch",
  "Aufmaß, Materialauswahl und detailliertes Angebot",
  "Terminplanung inkl. Gerüst und Materiallogistik",
  "Fachgerechte Ausführung durch unser Meister-Team",
  "Abnahme, Dokumentation und Gewährleistung",
];

const faqs = [
  {
    question: "Wie lange hält ein neues Steildach?",
    answer: "Bei fachgerechter Ausführung und regelmäßiger Wartung erreicht ein Steildach 40 bis 80 Jahre Lebensdauer – Tondachziegel und Naturschiefer sogar deutlich länger.",
  },
  {
    question: "Welche Materialien empfehlen Sie für die Eindeckung?",
    answer: "Wir arbeiten mit Tonziegeln, Betondachsteinen, Naturschiefer, Faserzement und Metall. Die Auswahl richtet sich nach Dachneigung, Statik, Gestaltungswunsch und Budget – wir beraten Sie individuell.",
  },
  {
    question: "Wird für ein Steildach eine Baugenehmigung benötigt?",
    answer: "Reine Neueindeckungen sind meist genehmigungsfrei. Bei Änderungen der Dachform, Gauben oder Dachfenstern kann eine Genehmigung nötig sein – wir prüfen das für Sie und übernehmen die Abstimmung mit dem Bauamt.",
  },
  {
    question: "Können Sie mein Dach zusätzlich dämmen?",
    answer: "Ja. Im Zuge der Sanierung kombinieren wir Neueindeckung und Aufsparren- bzw. Zwischensparrendämmung – häufig förderfähig über BAFA/KfW. Wir informieren Sie zu aktuellen Förderprogrammen.",
  },
  {
    question: "Wie lange dauern die Arbeiten am Steildach?",
    answer: "Ein Einfamilienhaus ist – abhängig von Größe, Wetter und Umfang – in ein bis drei Wochen fertig. Den genauen Zeitplan erhalten Sie mit dem Angebot.",
  },
  {
    question: "Übernehmen Sie auch Gauben, Dachfenster und Dachbalkone?",
    answer: "Ja, aus einer Hand. Vom klassischen Velux-Fenster bis zur individuell geplanten Gaube oder einem Dachbalkon planen und realisieren wir alle Zimmerer- und Klempnerarbeiten.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Steildach",
  "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "description": "Steildach-Spezialist in Hamburg: Dacheindeckung, Fassadendämmung, Dachausbau und Sanierung.",
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

export default function Steildach() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: targetRef, isVisible: targetVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Steildach Hamburg | Dacheindeckung & Sanierung – Lehmann Dächer"
        description="Steildach-Spezialist in Hamburg: Dacheindeckung, Fassadendämmung, Dachausbau und Sanierung. Individuelle Lösungen vom Meisterbetrieb. Jetzt anfragen!"
        path="/steildach"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />
      <PageHero
        title="Steildach"
        subtitle="Individuell gestaltete Steildächer – optimaler Schutz und starke Ästhetik für Ihr Zuhause."
        breadcrumb="Leistungen / Steildach"
        image={housesImg}
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Ihr maßgeschneidertes Steildach</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Schutz & Ästhetik vereint
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein Steildach prägt den Charakter Ihres Hauses – und ist gleichzeitig sein wichtigster Wetterschutz. Als Meisterbetrieb in Hamburg planen und errichten wir Steildächer, die technisch auf dem neuesten Stand sind und optisch überzeugen: von klassischer Ziegeleindeckung über Naturschiefer bis hin zu modernen Metalldächern.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unsere Leistung reicht von der Neueindeckung über energetische Sanierung mit Dämmung bis zum kompletten Dachausbau mit Gauben, Dachfenstern und Dachbalkonen. Dabei achten wir konsequent auf saubere Details, geprüfte Materialien und geltende Fachregeln des Deutschen Dachdeckerhandwerks (ZVDH).
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Individuelle Gestaltung", "Hochwertige Materialien", "Optimaler Witterungsschutz", "Architektonische Akzente"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img src={rooferSmilingImg} alt="Dachdecker bei Ziegelarbeiten am Steildach in Hamburg" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={roofTilesImg} alt="Nahaufnahme eines fachgerecht eingedeckten Ziegeldachs" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DetailBlock
              title="Dacheindeckung"
              text="Entscheidend für die Werterhaltung Ihrer Immobilie – wir garantieren höchste Qualität bei Dach-, Zimmerer- und Klempnerarbeiten."
              benefits={["Traditionelle Handwerksqualität", "Große Auswahl an Dachziegeln", "Moderne Wärmedämmung", "Regelmäßige Kontrolle und Wartung"]}
            />
            <DetailBlock
              title="Fassadendämmung"
              text="Dach und Fassade schützen Ihr Haus und reduzieren Heizkosten mit der richtigen Dämmung."
              benefits={["Holz, Naturschiefer, Faserzement, Metall oder Keramik", "Effektive Reduzierung von Energieverlusten", "Verbessertes Wärmespeichervermögen"]}
            />
            <DetailBlock
              title="Dachausbau & Fenster"
              text="Schaffen Sie zusätzliche Wohnfläche mit gemütlichem Ambiente unter dem Dach."
              benefits={["Gauben für mehr Raum und Stehhöhe", "Große Auswahl an Fensteroptionen", "Dachbalkone für Neu- und Bestandsdächer"]}
            />
          </div>

          <div className="mt-12 text-center">
            <a href="tel:+4917613514385" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
              <Phone className="w-4 h-4" />
              Jetzt beraten lassen
            </a>
          </div>
        </div>
      </section>

      <section ref={targetRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto ${targetVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Zielgruppen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Für wen ist unser Steildach-Service ideal?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Ob Neubau, Sanierung oder Aufstockung – wir arbeiten für Bauherren, Eigentümer und Verwaltungen im gesamten Großraum Hamburg und im nördlichen Niedersachsen.
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
              Von der ersten Idee bis zur Abnahme begleiten wir Sie in fünf klar strukturierten Schritten.
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
              Häufige Fragen zum Steildach
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
