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
import dachrinnenImg from "@/assets/dachrinnenreinigung.jpeg";
import dachrinnenDetailImg from "@/assets/dachrinnen-reinigung-detail.jpg";

const faqs = [
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

export default function Dachrinnenreinigung() {
  const { ref, isVisible } = useScrollReveal();
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
                  "Gründliche Reinigung von Dachrinnen und Fallrohren",
                  "Entfernung von Laub, Moos und Verschmutzungen",
                  "Sichtprüfung auf Schäden und Undichtigkeiten",
                  "Kleine Reparaturen auf Wunsch",
                  "Zuverlässiger Service für Privat- und Gewerbekunden",
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
