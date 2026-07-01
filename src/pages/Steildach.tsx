import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
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

const steildachSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "serviceType": "Steildach", "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "description": "Steildach-Spezialist in Hamburg: Dacheindeckung, Fassadendämmung, Dachausbau und Sanierung."
};

export default function Steildach() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Steildach Hamburg | Dacheindeckung & Sanierung – Lehmann Dächer"
        description="Steildach-Spezialist in Hamburg: Dacheindeckung, Fassadendämmung, Dachausbau und Sanierung. Individuelle Lösungen vom Meisterbetrieb. Jetzt anfragen!"
        path="/steildach"
        schema={steildachSchema}
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ein Steildach bietet optimalen Schutz vor Witterungseinflüssen und verleiht Ihrem Haus einen einzigartigen Charakter. Wir gestalten Ihr Steildach nach Ihren Wünschen mit hochwertigen Materialien.
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
              <img src={rooferSmilingImg} alt="Dachdecker bei Ziegelarbeiten am Steildach" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={roofTilesImg} alt="Nahaufnahme eines Ziegeldachs" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
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
      <CTASection />
    </Layout>
  );
}
