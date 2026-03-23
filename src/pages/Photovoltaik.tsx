import { useEffect } from "react";
import { CheckCircle2, Phone, Sun, Zap, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Photovoltaik() {
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    document.title = "Photovoltaik Hamburg | Solaranlage vom Dachdecker – Lehmann Dächer";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Photovoltaik-Installation in Hamburg vom Meisterbetrieb. Solaranlage auf Ihrem Dach – Energiekosten senken und Umwelt schützen. Jetzt beraten lassen!");
  }, []);

  const benefits = [
    { icon: Zap, title: "Kosten senken", desc: "Produzieren Sie Strom zu Preisen weit unter den Netzkosten." },
    { icon: Leaf, title: "Umwelt schützen", desc: "Nutzen Sie saubere, erneuerbare Energie direkt vom Dach." },
    { icon: Sun, title: "Unabhängigkeit", desc: "Eigener Strom macht Sie unabhängiger von steigenden Energiepreisen." },
  ];

  return (
    <Layout>
      <PageHero
        title="Photovoltaik"
        subtitle="Ihr Dach als persönlicher Energieproduzent – mit Solaranlagen von Lehmann Dächer."
        breadcrumb="Leistungen / Photovoltaik"
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`max-w-3xl mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Solarenergie vom Profi</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
              Dächer – Ihre persönlichen Energieproduzenten
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mit einer Solaranlage auf Ihrem Dach reduzieren Sie nicht nur Ihre Energiekosten erheblich, sondern leisten auch einen aktiven Beitrag zum Umweltschutz. Die Ersparnisse beim Eigenverbrauch decken schnell Ihre Anschaffungskosten, und die Vergütung für überschüssig produzierte Energie trägt zur positiven Kosten-Nutzen-Rechnung bei.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-card border border-border rounded-xl p-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100 + 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
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
