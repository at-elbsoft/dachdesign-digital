import { useEffect } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function MetallUndKlempnerarbeiten() {
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    document.title = "Metall- & Klempnerarbeiten Hamburg | Lehmann Dächer & Bauklempnerei";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professionelle Metall- und Klempnerarbeiten in Hamburg: Kupfer, Titanzink, Aluminium, Stehfalz. Schutz und Eleganz für Ihr Dach vom Meisterbetrieb.");
  }, []);

  return (
    <Layout>
      <PageHero
        title="Metall- & Klempnerarbeiten"
        subtitle="Hochwertige Blecharbeiten – Schutz und Eleganz für Ihr Dach mit Kupfer, Titanzink, Aluminium und mehr."
        breadcrumb="Leistungen / Metall- & Klempnerarbeiten"
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`max-w-3xl mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
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
          </div>

          <div className="text-center">
            <a href="tel:01761351438" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]">
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
