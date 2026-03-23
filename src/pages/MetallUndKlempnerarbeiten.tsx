import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import klempnerImg from "@/assets/klempner-work.png";
import rooferImg from "@/assets/roofer-tiles.png";

export default function MetallUndKlempnerarbeiten() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Metall- & Klempnerarbeiten Hamburg | Lehmann Dächer & Bauklempnerei"
        description="Professionelle Metall- und Klempnerarbeiten in Hamburg: Kupfer, Titanzink, Aluminium, Stehfalz. Schutz und Eleganz für Ihr Dach vom Meisterbetrieb."
        path="/metall-und-klempnerarbeiten"
        schema={{ "@context": "https://schema.org", "@type": "Service", "serviceType": "Metall- und Klempnerarbeiten", "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" }, "areaServed": { "@type": "City", "name": "Hamburg" } }}
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blecharbeiten gehören zu den anspruchsvollsten Aufgaben im Dachdeckerhandwerk. Wir planen, organisieren und führen diese Arbeiten so aus, dass Sie auch nach vielen Jahren noch Freude an Ihrem Dach haben.
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
                <a href="tel:01761351438" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
                  <Phone className="w-4 h-4" />
                  Jetzt beraten lassen
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <img src={klempnerImg} alt="Klempnerarbeiten an Metalleinfassung" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={rooferImg} alt="Dachdecker bei Arbeiten auf Ziegeldach" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
