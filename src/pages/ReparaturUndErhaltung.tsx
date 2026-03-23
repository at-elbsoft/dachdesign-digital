import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dachdeckerImg from "@/assets/dachdecker-hamburg.jpeg";
import scaffoldImg from "@/assets/scaffold.png";

export default function ReparaturUndErhaltung() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Dachreparatur Hamburg | Wartung & Erhaltung – Lehmann Dächer"
        description="Dachreparatur und Wartung in Hamburg: Dach-Check, Sturmschäden, Wartungsverträge. Schnell, fachgerecht und zuverlässig. 24h Notdienst verfügbar!"
        path="/reparatur-und-erhaltung"
        schema={{ "@context": "https://schema.org", "@type": "Service", "serviceType": "Dachreparatur & Wartung", "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" }, "areaServed": { "@type": "City", "name": "Hamburg" } }}
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                Als Experten im Dachdeckerhandwerk bieten wir Ihnen eine umfassende Analyse des Zustands Ihres Daches. Wir überprüfen Wärmedämmung, Dunstrohre, Blitzschutz, Regenrinnen, Dachanschlüsse, Kamine und Entwässerung. Das Ergebnis erhalten Sie detailliert und schriftlich.
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
              <a href="tel:01761351438" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
                <Phone className="w-4 h-4" />
                Jetzt Dach-Check anfordern
              </a>
            </div>
            <div className="space-y-6">
              <img src={dachdeckerImg} alt="Dachdecker bei Reparaturarbeiten in Hamburg" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
              <img src={scaffoldImg} alt="Gerüstbau für Dacharbeiten" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
