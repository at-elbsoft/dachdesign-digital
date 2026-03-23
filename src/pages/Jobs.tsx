import { Briefcase, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const jobs = [
  {
    title: "Dachdecker (m/w/d)",
    location: "Seevetal",
    experience: "Abgeschlossene Ausbildung als Dachdecker oder einschlägige Berufserfahrung",
  },
  {
    title: "Sekretär/in (m/w/d)",
    location: "Seevetal",
    experience: "Abgeschlossene kaufmännische Ausbildung oder Erfahrung im Bürobereich (Quereinsteiger willkommen)",
  },
];

export default function Jobs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Jobs | Karriere bei Lehmann Dächer & Bauklempnerei Hamburg"
        description="Karriere bei Lehmann Dächer & Bauklempnerei GmbH. Offene Stellen für Dachdecker und Bürokräfte in Seevetal/Hamburg. Jetzt bewerben!"
        path="/jobs"
      />
      <PageHero
        title="Karriere"
        subtitle="Werden Sie Teil unseres Teams. Wir suchen engagierte Mitarbeiter für unser wachsendes Unternehmen."
        breadcrumb="Jobs"
      />
      <section ref={ref} className="section-padding-lg">
        <div className="container-tight">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Offene Stellen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Jetzt bewerben</h2>
          </div>
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div
                key={job.title}
                className={`bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100 + 100}ms` }}
              >
                <h3 className="font-heading font-bold text-lg mb-3">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" /> {job.experience}
                  </span>
                </div>
                <a
                  href={`mailto:kontakt@ldbauklempnerei.de?subject=Bewerbung: ${job.title}`}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
                >
                  Jetzt bewerben
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
