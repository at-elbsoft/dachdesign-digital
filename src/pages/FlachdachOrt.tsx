import { Link, useParams } from "react-router-dom";
import { AlertTriangle, ArrowLeft, CheckCircle2, Clock, Droplets, Phone, ShieldAlert, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { flachdachOrte, getFlachdachOrt } from "@/data/flachdachOrte";
import flatRoofImg from "@/assets/worker-flat-roof.png";
import repairImg from "@/assets/worker-repair.png";
import NotFound from "./NotFound";

const speedBullets = [
  { icon: Droplets, text: "Sofortige Schadensbegrenzung bei Wassereintritt" },
  { icon: Wrench, text: "Leckortung + dauerhafte Abdichtung im selben Zug" },
  { icon: Clock, text: "Kurzfristige Termine, auch bei hoher Auslastung" },
  { icon: ShieldAlert, text: "24h-Notdienst bei akutem Wasserschaden" },
];

const steps = [
  "Anruf oder Kontaktformular – kurze Schilderung der Situation",
  "Zeitnaher Vor-Ort-Termin oder Sofort-Einsatz bei Notfall",
  "Leckortung und transparentes Festpreis-Angebot",
  "Fachgerechte Abdichtung / Reparatur mit geprüften Materialien",
  "Dokumentation und Gewährleistung",
];

export default function FlachdachOrt() {
  const { ort: slug } = useParams<{ ort: string }>();
  const ort = slug ? getFlachdachOrt(slug) : undefined;
  const { ref, isVisible } = useScrollReveal();
  const { ref: emergencyRef, isVisible: emergencyVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal();

  if (!ort) return <NotFound />;

  const path = `/flachdach/${ort.slug}`;
  const title = `Flachdach ${ort.name} – Abdichtung, Reparatur & 24h-Notdienst | Lehmann Dächer`;
  const description = `Flachdach undicht in ${ort.name}? Schnelle Abdichtung, Reparatur und 24h-Notdienst vom Meisterbetrieb aus Seevetal. Leckortung + Reparatur aus einer Hand.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Lehmann Dächer & Bauklempnerei GmbH – Flachdach ${ort.name}`,
    "url": `https://ldbauklempnerei.de${path}`,
    "telephone": "+4917613514385",
    "email": "kontakt@ldbauklempnerei.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Graubergen 19",
      "addressLocality": "Seevetal",
      "postalCode": "21218",
      "addressCountry": "DE",
    },
    "areaServed": { "@type": "City", "name": ort.name },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "description": "24h-Notdienst bei Wassereintritt und akuten Flachdachschäden",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Flachdachabdichtung und -reparatur",
        "areaServed": { "@type": "City", "name": ort.name },
      },
    },
    "priceRange": "$$",
  };

  const otherOrte = flachdachOrte.filter((o) => o.slug !== ort.slug);

  return (
    <Layout>
      <SEOHead title={title} description={description} path={path} schema={schema} />
      <PageHero
        title={`Flachdach ${ort.name}`}
        subtitle={ort.hero}
        breadcrumb={`Leistungen / Flachdach / ${ort.name}`}
        image={flatRoofImg}
      />

      {/* Speed-/Notdienst-Banner */}
      <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-accent/5 border-b border-accent/20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <AlertTriangle className="w-4 h-4" />
              24h-Notdienst · Kurzfristige Termine
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-4">
              Flachdach abdichten & reparieren in {ort.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Schnell vor Ort, wenn's drauf ankommt: Leckortung und Abdichtung aus einer Hand – bei akutem Wasserschaden rund um die Uhr erreichbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <a
                href="tel:+4917613514385"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-4 rounded-lg font-bold text-base hover:shadow-xl hover:shadow-accent/30 transition-all duration-150 active:scale-[0.97]"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen: 0176 1351 4385
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-background border-2 border-accent text-accent px-7 py-4 rounded-lg font-semibold text-base hover:bg-accent/10 transition-all duration-150 active:scale-[0.97]"
              >
                Kostenloses Angebot anfordern
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Einleitung + lokaler Bezug */}
      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                Ihr Meisterbetrieb für Flachdächer in {ort.name}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 leading-tight">
                Flachdach in {ort.name} – schnell abgedichtet, dauerhaft repariert
              </h2>
              {ort.intro.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {ort.localContext && (
                <p className="text-sm text-muted-foreground italic mb-6">{ort.localContext}</p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+4917613514385"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt Angebot für {ort.name} anfordern
                </a>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3 rounded-lg font-semibold text-sm hover:bg-muted transition-all duration-150"
                >
                  Kontaktformular
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Alle Leistungen rund ums Flachdach finden Sie auf unserer{" "}
                <Link to="/flachdach" className="text-accent font-medium underline underline-offset-2">
                  Übersichtsseite zum Flachdach
                </Link>
                .
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={flatRoofImg}
                alt={`Fachgerechte Flachdacharbeiten in ${ort.name}`}
                width={800}
                height={600}
                loading="lazy"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
              <img
                src={repairImg}
                alt={`Reparatur eines undichten Flachdachs in ${ort.name}`}
                width={800}
                height={600}
                loading="lazy"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notfall / Reparatur */}
      <section ref={emergencyRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`max-w-4xl mx-auto ${emergencyVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Notfall & Reparatur</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Flachdach undicht in {ort.name}? Schnelle Hilfe aus einer Hand
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Bei Wassereintritt zählt jede Stunde. Wir übernehmen Leckortung und Abdichtung im selben Zug – Sie müssen nicht erst einen Leckorter und dann einen ausgebuchten Handwerker suchen.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {speedBullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 items-start bg-background rounded-lg px-4 py-3 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium pt-1.5">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <a
                href="tel:+4917613514385"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
              >
                <Phone className="w-4 h-4" />
                Jetzt Notfall in {ort.name} melden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section ref={stepsRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`${stepsVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Ablauf</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              So läuft der Einsatz in {ort.name} ab
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Klare Kommunikation, transparente Preise und geprüfte Materialien – vom ersten Anruf bis zur dokumentierten Abnahme.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative bg-background rounded-xl p-6 shadow-sm border border-border text-center">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interne Verlinkung */}
      <section ref={linksRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`${linksVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Weitere Orte</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Flachdach in Ihrer Region
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Wir sind im Großraum Hamburg und im nördlichen Niedersachsen für Sie unterwegs. Ihr Ort ist nicht dabei? Rufen Sie uns an – wir prüfen die Anfahrt.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {otherOrte.map((o) => (
                <Link
                  key={o.slug}
                  to={`/flachdach/${o.slug}`}
                  className="flex items-center justify-between gap-2 bg-background rounded-lg px-4 py-3 shadow-sm border border-border hover:border-accent hover:shadow-md transition-all duration-150"
                >
                  <span className="text-sm font-medium">Flachdach {o.name}</span>
                  <span aria-hidden className="text-accent">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/flachdach"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Übersicht Flachdach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
