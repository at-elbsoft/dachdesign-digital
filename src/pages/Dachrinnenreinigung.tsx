import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dachrinnenImg from "@/assets/dachrinnenreinigung.jpeg";
import dachrinnenDetailImg from "@/assets/dachrinnen-reinigung-detail.jpg";

export default function Dachrinnenreinigung() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Dachrinnenreinigung Hamburg | Lehmann Dächer & Bauklempnerei"
        description="Professionelle Dachrinnenreinigung in Hamburg: Reinigung von Dachrinnen und Fallrohren, Entfernung von Laub und Moos, Sichtprüfung und kleine Reparaturen."
        path="/dachrinnenreinigung"
        schema={{ "@context": "https://schema.org", "@type": "Service", "serviceType": "Dachrinnenreinigung", "provider": { "@type": "RoofingContractor", "name": "Lehmann Dächer & Bauklempnerei GmbH" }, "areaServed": { "@type": "City", "name": "Hamburg" } }}
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
                <a href="tel:01761351438" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
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
      <CTASection />
    </Layout>
  );
}
