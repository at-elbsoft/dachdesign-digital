import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import flatRoofImg from "@/assets/worker-flat-roof.png";
import roofTilesImg from "@/assets/roof-tiles-close.png";

import dachdeckerImg from "@/assets/dachdecker-hamburg.jpeg";
import dachrinnenImg from "@/assets/dachrinnenreinigung.jpeg";
import klempnerImg from "@/assets/klempner-work.png";

const services = [
  {
    title: "Flachdach",
    desc: "Ein modernes Flachdach überzeugt durch Langlebigkeit, minimale Wartung und Kosteneffizienz – eine zukunftssichere Wahl für Ihr Gebäude.",
    href: "/flachdach",
    image: flatRoofImg,
  },
  {
    title: "Steildach",
    desc: "Individuell nach Ihren Wünschen gestaltet und mit verschiedenen Materialien eingedeckt – optimaler Schutz und starkes Design.",
    href: "/steildach",
    image: roofTilesImg,
  },
  {
    title: "Reparatur & Erhaltung",
    desc: "Von der Dachinspektion über fachgerechte Reparaturen bis hin zur regelmäßigen Wartung – alles aus einer Hand.",
    href: "/reparatur-und-erhaltung",
    image: dachdeckerImg,
  },
  {
    title: "Dachrinnenreinigung",
    desc: "Laub, Moos und Schmutz verstopfen Dachrinnen – wir sorgen dafür, dass Regenwasser wieder ungehindert abfließen kann.",
    href: "/dachrinnenreinigung",
    image: dachrinnenImg,
  },
  {
    title: "Metall- & Klempnerarbeiten",
    desc: "Hochwertige Metallverkleidungen für Schutz und Eleganz – Kantungen, Stehfalz, Einfassungen und mehr.",
    href: "/metall-und-klempnerarbeiten",
    image: klempnerImg,
  },
];

export default function Leistungen() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Leistungen | Dachdecker Hamburg – Lehmann Dächer & Bauklempnerei"
        description="Unsere Dachdeckerleistungen: Flachdach, Steildach, Reparatur, Metall- & Klempnerarbeiten. Meisterbetrieb in Hamburg mit über 25 Jahren Erfahrung."
        path="/leistungen"
      />
      <PageHero
        title="Unsere Leistungen"
        subtitle="Ob Flach- oder Steildach – wir übernehmen Neubau, Reparatur und Instandhaltung. Dazu zählen Metall- und Klempnerarbeiten."
        breadcrumb="Leistungen"
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.href}
                to={s.href}
                className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800} height={500} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-sm font-medium text-accent flex items-center gap-1">
                    Details ansehen <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
