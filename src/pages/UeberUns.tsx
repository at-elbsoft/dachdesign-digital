import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Clock, Users, Award, ThumbsUp, Wrench, Eye, MessageCircle } from "lucide-react";
import houseImg from "@/assets/house-garden.jpg";
import workerImg from "@/assets/worker-pointing.jpg";

function ValuesSection() {
  const { ref, isVisible } = useScrollReveal();
  const values = [
    { icon: Shield, title: "Erfahrung", desc: "Über 25 Jahre Expertise in Dachdeckerei und Bauklempnerei." },
    { icon: Award, title: "Qualität", desc: "Höchste Standards in Materialien und Ausführung." },
    { icon: Users, title: "Kundenzufriedenheit", desc: "Individuelle Beratung und maßgeschneiderte Lösungen." },
    { icon: Clock, title: "Zuverlässigkeit", desc: "Termingerechte Fertigstellung und umfassender Service." },
  ];

  return (
    <section ref={ref} className="section-padding-lg">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={isVisible ? 'animate-slide-left' : 'opacity-0'}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Über uns</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
              Warum Lehmann Dächer & Bauklempnerei?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Seit über 25 Jahren sind wir als Meisterbetrieb in Hamburg Ihr verlässlicher Partner für Dachdeckerarbeiten und Bauklempnerei. Mit unserem erfahrenen Team bieten wir umfassende Lösungen rund ums Dach, stets mit einem Fokus auf Qualität, Sicherheit und Nachhaltigkeit.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm mb-1">{v.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-right delay-200' : 'opacity-0'}`}>
            <img src={houseImg} alt="Fertiggestelltes Dachprojekt" className="rounded-xl shadow-lg object-cover aspect-[3/4] w-full" />
            <img src={workerImg} alt="Dachdecker bei der Arbeit" className="rounded-xl shadow-lg object-cover aspect-[3/4] w-full mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePromise() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    { icon: ThumbsUp, title: "Individuelle Beratung", desc: "Passgenaue Lösungen für Ihr Projekt." },
    { icon: Wrench, title: "Wartungsverträge", desc: "Sichern Sie Ihr Dach langfristig." },
    { icon: Eye, title: "Regelmäßige Inspektionen", desc: "Prävention für langanhaltende Qualität." },
    { icon: MessageCircle, title: "24/7 Notdienst", desc: "Rund um die Uhr für Sie da." },
  ];

  return (
    <section ref={ref} className="section-padding bg-section-alt">
      <div className="container-wide">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Unser Versprechen</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Ihre Zufriedenheit ist unser Anspruch</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-xl p-6 border border-border text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 80 + 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { number: "25+", label: "Jahre Erfahrung" },
    { number: "100+", label: "Fertige Projekte" },
    { number: "8", label: "Fachexperten" },
    { number: "52+", label: "Zertifikate" },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${isVisible ? 'animate-counter-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
              <span className="text-3xl md:text-4xl font-heading font-bold text-accent tabular-nums">{stat.number}</span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UeberUns() {
  useEffect(() => {
    document.title = "Über uns | Lehmann Dächer & Bauklempnerei GmbH Hamburg";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Lernen Sie Lehmann Dächer & Bauklempnerei GmbH kennen – Ihr Meisterbetrieb mit über 25 Jahren Erfahrung in Hamburg. Qualität, Zuverlässigkeit und persönliche Beratung.");
  }, []);

  return (
    <Layout>
      <PageHero
        title="Über Lehmann Dächer & Bauklempnerei"
        subtitle="Seit über 25 Jahren Ihr verlässlicher Partner für Dacharbeiten in Hamburg und Umgebung."
        breadcrumb="Über uns"
      />
      <ValuesSection />
      <StatsSection />
      <ServicePromise />
      <CTASection />
    </Layout>
  );
}
