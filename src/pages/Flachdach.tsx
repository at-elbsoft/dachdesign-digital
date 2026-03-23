import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import flatRoofImg from "@/assets/worker-flat-roof.png";

interface ServiceDetailProps {
  title: string;
  text: string;
  benefits: string[];
  reverse?: boolean;
}

function ServiceDetail({ title, text, benefits, reverse }: ServiceDetailProps) {
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

const flachdachSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Flachdach",
  "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "description": "Flachdach-Experten in Hamburg: Abdichtung, Dämmung, Begrünung und Sanierung."
};

export default function Flachdach() {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();

  return (
    <Layout>
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                Moderne Flachdächer überzeugen durch Langlebigkeit, einfache Wartung, Sicherheit, Energieeffizienz und vielfältige Gestaltungsmöglichkeiten. Egal ob Gewerbebauten, Bürogebäude oder Wohnhäuser – wir bieten Ihnen eine Komplettlösung.
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
            <img src={flatRoofImg} alt="Flachdacharbeiten in Hamburg" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
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
              href="tel:01761351438"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              Jetzt beraten lassen
            </a>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
