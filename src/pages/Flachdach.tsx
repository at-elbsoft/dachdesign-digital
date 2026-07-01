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
import flatRoofImg from "@/assets/worker-flat-roof.png";

interface ServiceDetailProps {
  title: string;
  text: string;
  benefits: string[];
}

function ServiceDetail({ title, text, benefits }: ServiceDetailProps) {
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
  "Gewerbe-, Industrie- und Logistikhallen",
  "Bürogebäude und Verwaltungsbauten",
  "Mehrfamilienhäuser und Wohnanlagen",
  "Anbauten, Garagen und Carports",
  "Bauherren mit Wunsch nach Dachterrasse oder Gründach",
];

const steps = [
  "Objektbesichtigung und Bestandsaufnahme",
  "Konzeption: Abdichtungssystem, Dämmung, Entwässerung",
  "Transparentes Festpreis-Angebot",
  "Fachgerechte Ausführung mit geprüften Materialien",
  "Dokumentation, Fotodokumentation und Gewährleistung",
];

const faqs = [
  {
    question: "Welche Abdichtung ist für mein Flachdach die richtige?",
    answer: "Wir arbeiten je nach Anforderung mit Bitumen-Schweißbahnen, EPDM-Folie oder Kunststoff-Dachbahnen (FPO/PVC). Die Wahl richtet sich nach Untergrund, Nutzung (begehbar, begrünt) und Budget – wir beraten Sie herstellerunabhängig.",
  },
  {
    question: "Wie lange hält ein modernes Flachdach?",
    answer: "Bei fachgerechter Ausführung und regelmäßiger Wartung erreichen moderne Abdichtungssysteme 25 bis 40 Jahre. Ein jährlicher Dach-Check verlängert die Lebensdauer deutlich.",
  },
  {
    question: "Kann mein bestehendes Flachdach saniert statt abgerissen werden?",
    answer: "In vielen Fällen ja. Wir prüfen die Restsubstanz mit einer Feuchtemessung und einer Bestandsaufnahme und schlagen die wirtschaftlichste Lösung vor – Sanierung im Bestand ist meist deutlich günstiger als ein Komplettabriss.",
  },
  {
    question: "Ist eine Dachbegrünung auf jedem Flachdach möglich?",
    answer: "Statik und Abdichtung müssen dafür ausgelegt sein. Wir prüfen die Tragfähigkeit und ergänzen bei Bedarf Wurzelschutzbahn und Drainschicht. Extensivbegrünung ist meist auch nachträglich möglich.",
  },
  {
    question: "Übernehmen Sie auch die Blitzschutz- und Absturzsicherung?",
    answer: "Ja. Wir installieren geprüfte Blitzschutzsysteme, Anschlagpunkte nach DIN EN 795 und Sekuranten für Wartungsarbeiten – alles aus einer Hand.",
  },
  {
    question: "Ist ein Flachdach für Photovoltaik geeignet?",
    answer: "Sehr gut sogar. Wir bereiten das Dach fachgerecht vor, planen die Aufständerung und arbeiten mit qualifizierten PV-Partnern zusammen, ohne die Dichtigkeit zu gefährden.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Flachdach",
  "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "description": "Flachdach-Experten in Hamburg: Abdichtung, Dämmung, Begrünung und Sanierung.",
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
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: targetRef, isVisible: targetVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Flachdach Hamburg | Abdichtung & Sanierung – Lehmann Dächer"
        description="Flachdach-Experten in Hamburg: Abdichtung, Dämmung, Begrünung und Sanierung. Langlebig, energieeffizient und pflegeleicht. Jetzt beraten lassen!"
        path="/flachdach"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />
      <PageHero
        title="Flachdach"
        subtitle="Langlebige, energieeffiziente und pflegeleichte Flachdachlösungen für Gewerbe und Wohnbau."
        breadcrumb="Leistungen / Flachdach"
        image={flatRoofImg}
      />
      <section ref={introRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 ${introVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Ihr Partner für Flachdächer</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Langlebig und kosteneffizient
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein professionell ausgeführtes Flachdach ist heute weit mehr als eine funktionale Abdeckung. Es ist Wärmeschutz, Nutzfläche und Gestaltungselement zugleich – ob als klassisches Warmdach mit Bitumen-Schweißbahn, als Umkehrdach mit Kiesauflast oder als begrüntes Gründach mit Schallschutz und ökologischem Mehrwert.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir planen und realisieren Flachdächer für Gewerbebauten, Bürogebäude, Wohnhäuser, Anbauten und Garagen. Dabei setzen wir konsequent auf geprüfte Systeme namhafter Hersteller, saubere Anschlussdetails und die Fachregeln des Deutschen Dachdeckerhandwerks – für maximale Dichtheit und Langlebigkeit.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Langlebig", "Pflegeleicht", "Sicher", "Energieeffizient", "Umweltfreundlich", "Vielseitig"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <img src={flatRoofImg} alt="Fachgerechte Flachdacharbeiten in Hamburg" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceDetail
              title="Flachdach-Dämmung"
              text="Fast 2/3 der Wärmeverluste entstehen über das Dach. Mit professioneller Dämmung reduzieren Sie Heizkosten und erhalten den Wert Ihrer Immobilie."
              benefits={["Fachgerechte Dämmung für Gauben, Kamine und Dachterrassen", "Planung und Ausführung aus einer Hand", "Verbessertes Raumklima und Wohnkomfort"]}
            />
            <ServiceDetail
              title="Flachdachbegrünung"
              text="Ein begrüntes Flachdach bietet Schallschutz, längere Lebensdauer und ein ökologisches Kleinklima."
              benefits={["Individuelle Begrünungskonzepte", "Optimale Klimaregulierung", "Schaffung eines ökologischen Kleinklimas"]}
            />
            <ServiceDetail
              title="Dachsanierung"
              text="Komplette Planung und Durchführung Ihrer Flachdachsanierung – von der Erneuerung bis zum Blitzschutz."
              benefits={["Qualifizierte Mitarbeiter und hochwertige Materialien", "Einhaltung aller Vorschriften und DIN-Normen", "Optionale Nachrüstungen wie Solaranlagen"]}
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+4917613514385"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
            >
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
              Für wen ist unser Flachdach-Service ideal?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Vom kleinen Garagenanbau bis zur mehreren Tausend Quadratmeter großen Gewerbehalle – wir passen Aufbau, Material und Bauablauf an Ihr Objekt an.
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
              Strukturiertes Vorgehen, klare Kommunikation und geprüfte Systeme – so realisieren wir Ihr Flachdach.
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
              Häufige Fragen zum Flachdach
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
