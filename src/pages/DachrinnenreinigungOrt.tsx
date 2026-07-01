import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { getOrt, orte } from "@/data/dachrinnenreinigungOrte";
import dachrinnenImg from "@/assets/dachrinnenreinigung.jpeg";
import dachrinnenDetailImg from "@/assets/dachrinnen-reinigung-detail.jpg";
import NotFound from "./NotFound";

const bullets = [
  "Gründliche Reinigung von Dachrinnen und Fallrohren",
  "Entfernung von Laub, Moos und Verschmutzungen",
  "Sichtprüfung auf Schäden und Undichtigkeiten",
  "Kleine Reparaturen auf Wunsch",
  "Fachgerechte Entsorgung des Reinigungsguts",
];

const steps = [
  "Kontakt aufnehmen – anrufen oder Formular ausfüllen",
  "Kostenlosen Vor-Ort-Termin vereinbaren",
  "Unverbindliches Angebot erhalten",
  "Reinigungstermin abstimmen",
  "Freie Dachrinne – zuverlässig und ohne Verstopfungsrisiko",
];

export default function DachrinnenreinigungOrt() {
  const { ort: slug } = useParams<{ ort: string }>();
  const ort = slug ? getOrt(slug) : undefined;
  const { ref, isVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal();

  if (!ort) return <NotFound />;

  const path = `/dachrinnenreinigung/${ort.slug}`;
  const title = `Dachrinnenreinigung ${ort.name} | Lehmann Dächer & Bauklempnerei`;
  const description = `Professionelle Dachrinnenreinigung in ${ort.name}: Reinigung von Dachrinnen und Fallrohren, Entfernung von Laub und Moos, Sichtprüfung und kleine Reparaturen vom Meisterbetrieb.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Lehmann Dächer & Bauklempnerei GmbH – Dachrinnenreinigung ${ort.name}`,
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
    "areaServed": {
      "@type": "City",
      "name": ort.name,
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Dachrinnenreinigung",
        "areaServed": { "@type": "City", "name": ort.name },
      },
    },
    "priceRange": "$$",
  };

  const otherOrte = orte.filter((o) => o.slug !== ort.slug);

  return (
    <Layout>
      <SEOHead title={title} description={description} path={path} schema={schema} />
      <PageHero
        title={`Dachrinnenreinigung ${ort.name}`}
        subtitle={ort.hero}
        breadcrumb={`Leistungen / Dachrinnenreinigung / ${ort.name}`}
        image={dachrinnenImg}
      />

      <section ref={ref} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                Ihr Meisterbetrieb für {ort.name}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 leading-tight">
                Dachrinnenreinigung {ort.name} – zuverlässig vom Fachbetrieb
              </h2>
              {ort.intro.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {ort.localContext && (
                <p className="text-sm text-muted-foreground italic mb-6">{ort.localContext}</p>
              )}
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
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
                Mehr Informationen zur Leistung finden Sie auf unserer{" "}
                <Link to="/dachrinnenreinigung" className="text-accent font-medium underline underline-offset-2">
                  Übersichtsseite zur Dachrinnenreinigung
                </Link>
                .
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={dachrinnenImg}
                alt={`Dachrinnenreinigung in ${ort.name}`}
                width={800}
                height={600}
                loading="lazy"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
              <img
                src={dachrinnenDetailImg}
                alt={`Dachrinnenreinigung ${ort.name} – Laub und Schmutz entfernen`}
                width={1024}
                height={768}
                loading="lazy"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={stepsRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`${stepsVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Ablauf</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              So einfach geht's in {ort.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              In fünf Schritten zu einer freien Dachrinne – transparent, unverbindlich und auf Ihre Terminwünsche abgestimmt.
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

      <section ref={linksRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`${linksVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Weitere Orte</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Dachrinnenreinigung in Ihrer Region
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Wir sind im gesamten Großraum Hamburg und im nördlichen Niedersachsen für Sie unterwegs. Ihr Ort ist nicht dabei? Rufen Sie uns einfach an.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {otherOrte.map((o) => (
                <Link
                  key={o.slug}
                  to={`/dachrinnenreinigung/${o.slug}`}
                  className="flex items-center justify-between gap-2 bg-background rounded-lg px-4 py-3 shadow-sm border border-border hover:border-accent hover:shadow-md transition-all duration-150"
                >
                  <span className="text-sm font-medium">Dachrinnenreinigung {o.name}</span>
                  <span aria-hidden className="text-accent">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/dachrinnenreinigung"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Übersicht Dachrinnenreinigung
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
