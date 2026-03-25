import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Users, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroImg from "@/assets/hero-roofing.png";
import housesImg from "@/assets/houses.png";
import workerImg from "@/assets/worker-flat-roof.png";
import dachdeckereiImg from "@/assets/dachdeckerei.jpeg";
import dachrinnenImg from "@/assets/dachrinnenreinigung.jpeg";
import wuerthLogo from "@/assets/partners/wuerth.png";
import veluxLogo from "@/assets/partners/velux.png";
import rohhaeppchenLogo from "@/assets/partners/rohhaeppchen.png";
import zenHausLogo from "@/assets/partners/zen-haus.png";
import dammersLogo from "@/assets/partners/dammers.png";

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Dacharbeiten in Hamburg" width={1920} height={1080} className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>
      <div className="relative container-wide py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 animate-fade-up">
            Meisterbetrieb seit über 25 Jahren
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] mb-6 animate-fade-up delay-100" style={{ lineHeight: '1.05' }}>
            Ihr Dachdecker in Hamburg & Umgebung
          </h1>
          <p className="text-base md:text-lg opacity-85 leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
            Von der Reparatur bis zur kompletten Sanierung – maßgeschneiderte Dachlösungen für Ihr Zuhause oder Ihre Immobilie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a
              href="tel:01761351438"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-150 active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              Jetzt anrufen – 24h Notdienst
            </a>
            <Link
              to="/kontakt"
              className="flex items-center justify-center gap-2 border border-primary-foreground/30 px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-150 active:scale-[0.97]"
            >
              Kontakt aufnehmen
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
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
    { number: "10k+", label: "Zufriedene Kunden" },
  ];

  return (
    <section ref={ref} className="bg-card border-b border-border">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? `animate-counter-up` : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl md:text-4xl font-heading font-bold text-accent tabular-nums">{stat.number}</span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal();
  const benefits = [
    { icon: Shield, title: "Meisterbetrieb", desc: "Höchste Standards in Materialien und fachgerechter Ausführung." },
    { icon: Clock, title: "Termingerecht", desc: "Pünktliche Fertigstellung und transparente Kommunikation." },
    { icon: Users, title: "Persönliche Beratung", desc: "Individuelle Lösungen, abgestimmt auf Ihre Bedürfnisse." },
    { icon: Award, title: "24/7 Notdienst", desc: "Rund um die Uhr für dringende Dachreparaturen erreichbar." },
  ];

  return (
    <section ref={ref} className="section-padding-lg">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={isVisible ? 'animate-slide-left' : 'opacity-0'}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Warum wir?</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
              Ihre erste Wahl für Dacharbeiten in Hamburg
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lehmann Dächer & Bauklempnerei GmbH ist Ihr vertrauenswürdiger Partner für Dacharbeiten aller Art. Mit über 25 Jahren Erfahrung bieten wir maßgeschneiderte Lösungen für Steildächer, Flachdächer und Gründächer.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <div key={b.title} className="flex gap-3" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm mb-1">{b.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-right delay-200' : 'opacity-0'}`}>
            <img
              src={dachdeckereiImg}
              alt="Dachdecker bei der Arbeit auf einem Dach in Hamburg"
              width={480} height={384} loading="lazy"
              className="rounded-xl shadow-2xl shadow-foreground/10 w-full object-cover aspect-[4/3]"
            />
            <img
              src={dachrinnenImg}
              alt="Dachrinnenreinigung und Wartung"
              width={480} height={720} loading="lazy"
              className="rounded-xl shadow-2xl shadow-foreground/10 w-full object-cover aspect-[3/4] mt-8"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <span className="font-heading font-bold text-2xl block">25+</span>
              <span className="text-xs opacity-90">Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const { ref, isVisible } = useScrollReveal();
  const partners = [
    { src: wuerthLogo, alt: "Würth" },
    { src: veluxLogo, alt: "Velux" },
    { src: rohhaeppchenLogo, alt: "Rohhäppchen" },
    { src: zenHausLogo, alt: "Zen Haus" },
    { src: dammersLogo, alt: "Dammers – Alles fürs Dach" },
  ];

  return (
    <section ref={ref} className="section-padding bg-section-alt border-y border-border">
      <div className="container-wide">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Unsere Partner</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Vertraut von erstklassigen Marken
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Wir arbeiten mit führenden Herstellern und Marken der Dachbranche zusammen.
          </p>
        </div>
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-14 ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          {partners.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const { ref, isVisible } = useScrollReveal();
  const steps = [
    { num: "01", title: "Planung & Beratung", desc: "Gemeinsam besprechen wir Ihre Wünsche und erstellen einen optimalen Plan für Ihr Dach." },
    { num: "02", title: "Materialauswahl", desc: "Wir wählen hochwertige, langlebige und umweltfreundliche Materialien passend zu Ihrem Projekt." },
    { num: "03", title: "Fachgerechte Ausführung", desc: "Unser erfahrenes Team führt die Arbeiten professionell und termingerecht aus." },
    { num: "04", title: "Abnahme & Nachbetreuung", desc: "Gemeinsame Abnahme und langfristige Betreuung für die Werterhaltung Ihres Daches." },
  ];

  return (
    <section ref={ref} className="section-padding bg-section-alt">
      <div className="container-wide">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Unser Ablauf</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Dacharbeit in 4 Schritten</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-card rounded-xl p-6 shadow-sm shadow-foreground/5 border border-border hover:shadow-md hover:shadow-foreground/10 transition-shadow duration-300 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100 + 100}ms` }}
            >
              <span className="font-heading text-4xl font-bold text-accent/20">{step.num}</span>
              <h3 className="font-heading font-semibold text-base mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const { ref, isVisible } = useScrollReveal();
  const services = [
    { title: "Flachdach", desc: "Langlebig, kosteneffizient und zukunftssicher – für Gewerbe und Wohnbau.", href: "/flachdach" },
    { title: "Steildach", desc: "Individuell gestaltete Steildächer mit optimalen Schutz und Ästhetik.", href: "/steildach" },
    
    { title: "Reparatur & Erhaltung", desc: "Dach-Check, Reparaturen und Wartungsverträge aus einer Hand.", href: "/reparatur-und-erhaltung" },
    { title: "Metall- & Klempnerarbeiten", desc: "Hochwertige Blecharbeiten mit Kupfer, Titanzink und mehr.", href: "/metall-und-klempnerarbeiten" },
  ];

  return (
    <section ref={ref} className="section-padding-lg">
      <div className="container-wide">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Unsere Leistungen</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Für Ihr Dach ist ein Spezialist gefragt?</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Ob Flach- oder Steildach – wir übernehmen Neubau, Reparatur und Instandhaltung.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.href}
              to={s.href}
              className={`group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80 + 100}ms` }}
            >
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="text-sm font-medium text-accent flex items-center gap-1">
                Mehr erfahren <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isVisible } = useScrollReveal();
  const faqs = [
    { q: "Wie lange dauert eine Dachsanierung?", a: "Die Dauer hängt vom Umfang der Arbeiten ab. Wir besprechen den Zeitplan individuell nach einer Bestandsaufnahme." },
    { q: "Welche Dacharten decken Sie ab?", a: "Wir sind auf Steildächer, Flachdächer und Gründächer spezialisiert und bieten Lösungen für jede Dachform." },
    { q: "Bieten Sie Wartungsverträge an?", a: "Ja, wir bieten regelmäßige Dachinspektionen und Wartungsverträge für die langfristige Werterhaltung." },
    { q: "Welche Materialien verwenden Sie?", a: "Wir verwenden nur hochwertige Materialien, darunter Ziegel, Schiefer, Bitumen und moderne Abdichtungsfolien, um eine lange Lebensdauer zu gewährleisten." },
    { q: "Wie hoch sind die Kosten für eine Dachreparatur?", a: "Die Kosten variieren je nach Schadensumfang und Material. Eine genaue Einschätzung geben wir Ihnen nach einer Besichtigung." },
    { q: "Sind Sie in Notfällen erreichbar?", a: "Ja, unser 24/7-Notdienst steht Ihnen für dringende Dachreparaturen jederzeit zur Verfügung." },
  ];

  return (
    <section ref={ref} className="section-padding bg-section-alt">
      <div className="container-tight">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Häufig gestellte Fragen</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className={`group bg-card border border-border rounded-xl overflow-hidden ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80 + 100}ms` }}
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-semibold text-sm md:text-base hover:text-accent transition-colors list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 shrink-0 text-muted-foreground group-open:rotate-90 transition-transform duration-200" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegionsSection() {
  const { ref, isVisible } = useScrollReveal();
  const regions = [
    "Hamburg", "Schleswig-Holstein", "Niedersachsen", "Bremen",
    "Berlin", "Brandenburg", "Mecklenburg-Vorpommern",
    "Nordrhein-Westfalen", "Hessen", "Bayern",
    "Baden-Württemberg", "Rheinland-Pfalz", "Saarland",
    "Sachsen-Anhalt", "Thüringen",
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Einsatzgebiet</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Deutschlandweit für Sie tätig</h2>
        </div>
        <div className={`flex flex-wrap justify-center gap-3 ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          {regions.map((r) => (
            <span key={r} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wie lange dauert eine Dachsanierung?", "acceptedAnswer": { "@type": "Answer", "text": "Die Dauer hängt vom Umfang der Arbeiten ab. Wir besprechen den Zeitplan individuell nach einer Bestandsaufnahme." } },
    { "@type": "Question", "name": "Welche Dacharten decken Sie ab?", "acceptedAnswer": { "@type": "Answer", "text": "Wir sind auf Steildächer, Flachdächer und Gründächer spezialisiert und bieten Lösungen für jede Dachform." } },
    { "@type": "Question", "name": "Bieten Sie Wartungsverträge an?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten regelmäßige Dachinspektionen und Wartungsverträge für die langfristige Werterhaltung." } },
    { "@type": "Question", "name": "Welche Materialien verwenden Sie?", "acceptedAnswer": { "@type": "Answer", "text": "Wir verwenden nur hochwertige Materialien, darunter Ziegel, Schiefer, Bitumen und moderne Abdichtungsfolien, um eine lange Lebensdauer zu gewährleisten." } },
    { "@type": "Question", "name": "Wie hoch sind die Kosten für eine Dachreparatur?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten variieren je nach Schadensumfang und Material. Eine genaue Einschätzung geben wir Ihnen nach einer Besichtigung." } },
    { "@type": "Question", "name": "Sind Sie in Notfällen erreichbar?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, unser 24/7-Notdienst steht Ihnen für dringende Dachreparaturen jederzeit zur Verfügung." } },
  ]
};

export default function Index() {
  return (
    <Layout>
      <SEOHead
        title="Dachdecker Hamburg | Lehmann Dächer & Bauklempnerei GmbH"
        description="Ihr Meisterbetrieb für Dachdeckerarbeiten in Hamburg. Über 25 Jahre Erfahrung in Flachdach, Steildach und Bauklempnerei. 24h Notdienst ✓"
        path="/"
        schema={faqSchema}
      />
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <StepsSection />
      <ServicesOverview />
      <PartnersSection />
      <RegionsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
