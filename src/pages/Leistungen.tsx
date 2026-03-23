import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    title: "Flachdach",
    desc: "Ein modernes Flachdach überzeugt durch Langlebigkeit, minimale Wartung und Kosteneffizienz – eine zukunftssichere Wahl für Ihr Gebäude.",
    href: "/flachdach",
  },
  {
    title: "Steildach",
    desc: "Individuell nach Ihren Wünschen gestaltet und mit verschiedenen Materialien eingedeckt – optimaler Schutz und starkes Design.",
    href: "/steildach",
  },
  {
    title: "Photovoltaik",
    desc: "Sonnenenergie effizient nutzen. Unsere maßgeschneiderten Lösungen helfen Ihnen, langfristig Energiekosten zu senken.",
    href: "/photovoltaik",
  },
  {
    title: "Reparatur & Erhaltung",
    desc: "Von der Dachinspektion über fachgerechte Reparaturen bis hin zur regelmäßigen Wartung – alles aus einer Hand.",
    href: "/reparatur-und-erhaltung",
  },
  {
    title: "Metall- & Klempnerarbeiten",
    desc: "Hochwertige Metallverkleidungen für Schutz und Eleganz – Kantungen, Stehfalz, Einfassungen und mehr.",
    href: "/metall-und-klempnerarbeiten",
  },
];

export default function Leistungen() {
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    document.title = "Leistungen | Dachdecker Hamburg – Lehmann Dächer & Bauklempnerei";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Unsere Dachdeckerleistungen: Flachdach, Steildach, Photovoltaik, Reparatur, Metall- & Klempnerarbeiten. Meisterbetrieb in Hamburg mit über 25 Jahren Erfahrung.");
  }, []);

  return (
    <Layout>
      <PageHero
        title="Unsere Leistungen"
        subtitle="Ob Flach- oder Steildach – wir übernehmen Neubau, Reparatur und Instandhaltung. Dazu zählen Metall- und Klempnerarbeiten sowie Photovoltaik."
        breadcrumb="Leistungen"
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.href}
                to={s.href}
                className={`group bg-card border border-border rounded-xl p-7 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="text-sm font-medium text-accent flex items-center gap-1">
                  Details ansehen <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
