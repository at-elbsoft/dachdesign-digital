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
import klempnerImg from "@/assets/klempner-work.png";
import rooferImg from "@/assets/roofer-tiles.png";

const targetGroups = [
  "Architekten und Bauherren mit Anspruch an Details",
  "Altbau- und Denkmalsanierungen (Kupfer, Naturschiefer)",
  "Villen und repräsentative Wohnhäuser",
  "Gewerbe- und Verwaltungsbauten mit Fassadenverkleidung",
  "Bestandsobjekte mit undichten Anschlüssen und Kehlen",
];

const steps = [
  "Objektaufnahme, Detailplanung und Materialauswahl",
  "Werkstattvorfertigung von Kantungen und Formteilen",
  "Vorbereitung des Untergrunds und Unterkonstruktion",
  "Fachgerechte Montage nach Klempnerfachregeln",
  "Dichtigkeitsprüfung und saubere Übergabe",
];

const faqs = [
  {
    question: "Welches Metall eignet sich für mein Dach am besten?",
    answer: "Titanzink ist der bewährte Klassiker – langlebig, wartungsarm und optisch neutral. Kupfer bietet edle Optik und höchste Lebensdauer, ideal für Repräsentativbauten. Aluminium ist leicht und farblich flexibel, Edelstahl besonders robust in salzhaltiger Küstenluft.",
  },
  {
    question: "Was ist eine Stehfalz-Deckung?",
    answer: "Beim Stehfalz werden Metallbahnen mit hochgekanteten, verfalzten Nähten verbunden. Das Ergebnis ist eine extrem dichte, langlebige und optisch klare Dach- oder Fassadenfläche – ohne sichtbare Befestigungen.",
  },
  {
    question: "Wie lange hält eine Kupfer- oder Titanzinkeindeckung?",
    answer: "Fachgerecht ausgeführte Kupfereindeckungen erreichen 100 Jahre und mehr. Titanzink liegt bei 80 bis 100 Jahren – deutlich länger als konventionelle Alternativen. Voraussetzung ist eine belüftete Konstruktion und saubere Detailausbildung.",
  },
  {
    question: "Übernehmen Sie auch Kaminanschlüsse und Kehlbleche?",
    answer: "Ja, das gehört zum Kerngeschäft der Klempnerei. Wir fertigen und montieren Kaminanschlüsse, Kehl- und Traufbleche, Wandanschlüsse und Einfassungen für Dachfenster in allen gängigen Metallen.",
  },
  {
    question: "Können Metallarbeiten patinieren oder farbig beschichtet werden?",
    answer: "Titanzink und Kupfer entwickeln über die Jahre eine natürliche Patina. Alternativ liefern wir vorbewitterte, patinierte oder farbig beschichtete Bleche – z. B. anthrazit, schiefergrau oder in individueller Wunschfarbe.",
  },
  {
    question: "Sind Metalldächer für Photovoltaik geeignet?",
    answer: "Ja, insbesondere Stehfalzdächer. Die PV-Module werden mit speziellen Falzklemmen befestigt – ganz ohne Dachdurchdringung. Die Dichtigkeit bleibt vollständig erhalten.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Metall- und Klempnerarbeiten",
  "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "description": "Professionelle Metall- und Klempnerarbeiten in Hamburg: Kupfer, Titanzink, Aluminium und Stehfalz.",
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

export default function MetallUndKlempnerarbeiten() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: targetRef, isVisible: targetVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Metall- & Klempnerarbeiten Hamburg | Lehmann Dächer & Bauklempnerei"
        description="Professionelle Metall- und Klempnerarbeiten in Hamburg: Kupfer, Titanzink, Aluminium, Stehfalz. Schutz und Eleganz für Ihr Dach vom Meisterbetrieb."
        path="/metall-und-klempnerarbeiten"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />
      <PageHero
        title="Metall- & Klempnerarbeiten"
        subtitle="Hochwertige Blecharbeiten – Schutz und Eleganz für Ihr Dach mit Kupfer, Titanzink, Aluminium und mehr."
        breadcrumb="Leistungen / Metall- & Klempnerarbeiten"
        image={klempnerImg}
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Präzision in Metall</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Schutz und Eleganz für Ihr Dach
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Klempnerarbeiten am Bau sind Handwerk auf höchstem Niveau. Hier entscheiden Millimeter über die Dichtigkeit und Ästhetik einer Dachkante, eines Kaminanschlusses oder einer Fassadenverkleidung. Als Bauklempnerei mit langjähriger Erfahrung fertigen wir Kantungen, Stehfalz- und Doppelstehfalz-Deckungen, Einfassungen, Traufbleche und Kehlen präzise in unserer Werkstatt vor und montieren sie fachgerecht vor Ort.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir arbeiten mit den bewährten Werkstoffen des Dachhandwerks: Titanzink, Kupfer, Aluminium, Edelstahl und Stahl – in blank, gebürstet, vorbewittert oder farbig beschichtet. Auch die Integration von Photovoltaikmodulen und Sonnenkollektoren übernehmen wir aus einer Hand – ohne die Dichtigkeit Ihres Daches zu gefährden.
              </p>
              <ul className="space-y-3">
                {[
                  "Kantungen, Stehfalz, Einfassungen, Anschlüsse und Abflüsse",
                  "Kupfer, Titanzink, Aluminium, Stahl und Edelstahl",
                  "Verschiedene Oberflächenqualitäten: versiegelt, gebürstet, patiniert",
                  "Integration von Photovoltaikmodulen und Sonnenkollektoren",
                  "Betreuung aller Dachtypen – Flachdächer bis Gefälledächer",
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
                  Jetzt beraten lassen
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <img src={klempnerImg} alt="Klempnerarbeiten an einer Metalleinfassung" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={rooferImg} alt="Dachdecker bei präzisen Arbeiten am Ziegeldach" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section ref={targetRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto ${targetVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Zielgruppen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Für wen sind unsere Metallarbeiten ideal?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Wo hoher gestalterischer Anspruch auf technische Perfektion trifft, sind Sie bei uns richtig – vom Denkmal bis zum modernen Neubau.
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
              Von der Detailplanung bis zur Montage – hochwertige Klempnerarbeit erfordert Präzision in jedem Schritt.
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
              Häufige Fragen zu Metall- & Klempnerarbeiten
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
