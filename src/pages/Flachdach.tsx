import { AlertTriangle, Award, BadgeEuro, CheckCircle2, Clock, Droplets, Layers, MapPin, PackageCheck, Phone, Search, Shield, ShieldAlert, Sparkles, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import QuickLeadForm from "@/components/QuickLeadForm";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import flatRoofImg from "@/assets/worker-flat-roof.png";

interface ServiceDetailProps {
  title: string;
  text: string;
  benefits: string[];
}

function ServiceDetail({ title, text, benefits }: ServiceDetailProps) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{text}</p>
      <ul className="space-y-2">
        {benefits.map((b) => (
          <li key={b} className="flex gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const sanierungLeistungen = [
  { icon: Wrench, title: "Flachdachsanierung", text: "Grundlegende Erneuerung Ihres Flachdachs – wirtschaftlich statt kompletter Neuaufbau." },
  { icon: Shield, title: "Flachdachabdichtung", text: "Dauerhaft dichte Systeme nach Fachregel – Bitumen, EPDM, FPO/PVC." },
  { icon: Layers, title: "Flachdachreparaturen", text: "Gezielte Reparatur einzelner Schadstellen ohne unnötigen Materialtausch." },
  { icon: Search, title: "Leckageortung", text: "Präzise Ortung von Undichtigkeiten – Leckortung und Abdichtung aus einer Hand." },
  { icon: Droplets, title: "Bitumenabdichtungen", text: "Bewährte Schweißbahnen für langlebige, robuste Flachdächer." },
  { icon: Sparkles, title: "Kunststoffabdichtungen", text: "Moderne FPO-/PVC-Bahnen – schlank, wurzelfest und wirtschaftlich." },
  { icon: Clock, title: "Dachwartung", text: "Regelmäßige Kontrolle verlängert die Lebensdauer und beugt Schäden vor." },
  { icon: AlertTriangle, title: "Notabdichtungen", text: "Sofortmaßnahmen bei Wassereintritt – rund um die Uhr über den 24h-Notdienst." },
];

const sanierungVorteile = [
  "Über 20 Jahre Erfahrung",
  "Schnelle Terminvergabe",
  "Meisterbetrieb aus Seevetal bei Hamburg",
  "Hochwertige Materialien namhafter Hersteller",
  "Faire und transparente Angebote",
  "24-Stunden-Notdienst bei akuten Schäden",
];

function FlachdachsanierungSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="sanierung" ref={ref} className="section-padding-lg scroll-mt-24">
      <div className="container-wide">
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Sanierung & Abdichtung</p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold leading-tight mb-4">
            Flachdachsanierung & Flachdachabdichtung in Hamburg
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Ein undichtes oder in die Jahre gekommenes Flachdach führt schnell zu Feuchtigkeitsschäden und hohen Folgekosten. Mit professioneller Flachdachsanierung wird Ihr Dach wieder dauerhaft dicht, sicher und langlebig.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ob kleine Undichtigkeit, beschädigte Abdichtung oder komplette Erneuerung – wir analysieren den Zustand Ihres Flachdachs und empfehlen die wirtschaftlich sinnvollste Lösung. Hochwertige Materialien, fachgerechte Ausführung nach aktuellem Stand der Technik.
          </p>
        </div>

        <h3 className="font-heading font-semibold text-xl md:text-2xl text-center mb-8">Unsere Leistungen</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {sanierungLeistungen.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-150">
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-base mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-muted/40 rounded-2xl p-8 md:p-12 border border-border">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              Warum Lehmann Dächer?
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-6">
              Ihr Meisterbetrieb für die Flachdachsanierung in Hamburg
            </h3>
            <ul className="space-y-3">
              {sanierungVorteile.map((v) => (
                <li key={v} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              Lassen Sie Ihr Flachdach frühzeitig prüfen und vermeiden Sie teure Folgeschäden. Wir beraten Sie kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#kurzformular"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-accent/25 transition-all duration-150 active:scale-[0.97]"
              >
                Kostenloses Angebot anfordern
              </a>
              <a
                href="tel:+4917613514385"
                className="inline-flex items-center justify-center gap-2 bg-background border-2 border-accent text-accent px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-accent/10 transition-all duration-150 active:scale-[0.97]"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen: 0176 1351 4385
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



const targetGroups = [
  "Gewerbe-, Industrie- und Logistikhallen",
  "Bürogebäude und Verwaltungsbauten",
  "Mehrfamilienhäuser und Wohnanlagen",
  "Anbauten, Garagen und Carports",
  "Bauherren mit Wunsch nach Dachterrasse oder Gründach",
];

const steps = [
  "Objektbesichtigung und Bestandsaufnahme",
  "Konzeption: Abdichtungssystem, Dämmung, Entwässerung",
  "Transparentes Festpreis-Angebot",
  "Fachgerechte Ausführung mit geprüften Materialien",
  "Dokumentation, Fotodokumentation und Gewährleistung",
];

const speedReasons = [
  {
    icon: Zap,
    title: "Schnelle Rückmeldung",
    text: "Anfragen beantworten wir in der Regel noch am selben Werktag.",
  },
  {
    icon: MapPin,
    title: "Kurzfristige Termine",
    text: "Freie Kapazitäten im Großraum Hamburg / Seevetal – auch bei akuten Schäden.",
  },
  {
    icon: ShieldAlert,
    title: "24h-Notdienst",
    text: "Bei akutem Wassereintritt sind wir rund um die Uhr erreichbar.",
  },
  {
    icon: Wrench,
    title: "Regionaler Meisterbetrieb",
    text: "Kurze Wege aus Seevetal – wir sind schnell vor Ort statt tagelang unterwegs.",
  },
];

const faqs = [
  {
    question: "Wie schnell können Sie bei einem undichten Flachdach kommen?",
    answer: "Bei akutem Wassereintritt sind wir über unseren 24h-Notdienst rund um die Uhr erreichbar und sichern den Schaden schnellstmöglich ab. Auch für nicht akute Anfragen im Großraum Hamburg und Seevetal vergeben wir kurzfristige Termine – in der Regel deutlich schneller als der Marktdurchschnitt.",
  },
  {
    question: "Können Sie mein Flachdach abdichten, ohne es komplett abzureißen?",
    answer: "In den meisten Fällen ja. Wir prüfen die Restsubstanz mit einer Feuchtemessung und einer Bestandsaufnahme und dichten anschließend gezielt ab – oft reicht eine Sanierung im Bestand statt eines teuren Komplettabrisses. Das spart Zeit, Geld und Material.",
  },
  {
    question: "Welche Abdichtung ist für mein Flachdach die richtige?",
    answer: "Wir arbeiten je nach Anforderung mit Bitumen-Schweißbahnen, EPDM-Folie oder Kunststoff-Dachbahnen (FPO/PVC). Die Wahl richtet sich nach Untergrund, Nutzung (begehbar, begrünt) und Budget – wir beraten Sie herstellerunabhängig.",
  },
  {
    question: "Wie lange hält ein modernes Flachdach?",
    answer: "Bei fachgerechter Ausführung und regelmäßiger Wartung erreichen moderne Abdichtungssysteme 25 bis 40 Jahre. Ein jährlicher Dach-Check verlängert die Lebensdauer deutlich.",
  },
  {
    question: "Ist eine Dachbegrünung auf jedem Flachdach möglich?",
    answer: "Statik und Abdichtung müssen dafür ausgelegt sein. Wir prüfen die Tragfähigkeit und ergänzen bei Bedarf Wurzelschutzbahn und Drainschicht. Extensivbegrünung ist meist auch nachträglich möglich.",
  },
  {
    question: "Übernehmen Sie auch die Blitzschutz- und Absturzsicherung?",
    answer: "Ja. Wir installieren geprüfte Blitzschutzsysteme, Anschlagpunkte nach DIN EN 795 und Sekuranten für Wartungsarbeiten – alles aus einer Hand.",
  },
  {
    question: "Ist ein Flachdach für Photovoltaik geeignet?",
    answer: "Sehr gut sogar. Wir bereiten das Dach fachgerecht vor, planen die Aufständerung und arbeiten mit qualifizierten PV-Partnern zusammen, ohne die Dichtigkeit zu gefährden.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Flachdach",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Lehmann Dächer & Bauklempnerei GmbH",
    "telephone": "+4917613514385",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Graubergen 19",
      "postalCode": "21218",
      "addressLocality": "Seevetal",
      "addressCountry": "DE",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "description": "24h-Notdienst bei Wassereintritt und akuten Dachschäden",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
  },
  "areaServed": [
    { "@type": "City", "name": "Hamburg" },
    { "@type": "City", "name": "Seevetal" },
    { "@type": "City", "name": "Buchholz in der Nordheide" },
    { "@type": "City", "name": "Buxtehude" },
    { "@type": "City", "name": "Winsen (Luhe)" },
    { "@type": "City", "name": "Neu Wulmstorf" },
    { "@type": "City", "name": "Tostedt" },
  ],
  "description": "Flachdach-Experten in Hamburg: Abdichtung, Reparatur, Sanierung und 24h-Notdienst bei Wassereintritt.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
};

export default function Flachdach() {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: targetRef, isVisible: targetVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();
  const { ref: emergencyRef, isVisible: emergencyVisible } = useScrollReveal();
  const { ref: speedRef, isVisible: speedVisible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="Flachdachsanierung Hamburg – Abdichtung, Reparatur & 24h-Notdienst | Lehmann Dächer"
        description="Flachdachsanierung & Flachdachabdichtung im Großraum Hamburg: Reparatur, Leckortung, Bitumen- & Kunststoffabdichtungen, 24h-Notdienst. Meisterbetrieb aus Seevetal – jetzt kostenlos beraten lassen!"
        path="/flachdach"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] }}
      />
      <PageHero
        title="Flachdach"
        subtitle="Schnelle Flachdachabdichtung & -reparatur im Großraum Hamburg. 24h-Notdienst bei Wassereintritt."
        breadcrumb="Leistungen / Flachdach"
        image={flatRoofImg}
      />

      {/* 1. Speed-/Notdienst-Hero */}
      <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-accent/5 border-b border-accent/20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <AlertTriangle className="w-4 h-4" />
              24h-Notdienst · Kurzfristige Termine
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-4">
              Flachdach undicht? Wir kommen kurzfristig – auch wenn andere ausgebucht sind.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Schnelle Flachdachabdichtung & -reparatur im Großraum Hamburg. 24h-Notdienst bei Wassereintritt. Fachbetrieb aus Seevetal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-6">
              <a
                href="tel:+4917613514385"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-4 rounded-lg font-bold text-base hover:shadow-xl hover:shadow-accent/30 transition-all duration-150 active:scale-[0.97]"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen: 0176 1351 4385
              </a>
              <a
                href="#kurzformular"
                className="inline-flex items-center justify-center gap-2 bg-background border-2 border-accent text-accent px-7 py-4 rounded-lg font-semibold text-base hover:bg-accent/10 transition-all duration-150 active:scale-[0.97]"
              >
                Kostenloses Angebot
              </a>
            </div>

            {/* Trust-Leiste */}
            <ul className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm mb-4">
              {[
                { icon: Award, label: "Meisterbetrieb aus Seevetal – über 25 Jahre Erfahrung" },
                { icon: BadgeEuro, label: "Faire Festpreise – keine versteckten Kosten" },
                { icon: PackageCheck, label: "Leckortung + Abdichtung aus einer Hand" },
                { icon: ShieldAlert, label: "24h-Notdienst bei Wassereintritt" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1.5 font-medium shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            {/* Preis-Anker */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/30 rounded-full px-4 py-2 text-xs md:text-sm font-semibold">
                <BadgeEuro className="w-4 h-4" aria-hidden="true" />
                Festpreis nach kurzer Einschätzung – kostenlos & unverbindlich
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Kurzformular direkt oben */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <QuickLeadForm
              id="kurzformular"
              formName="kurzformular_flachdach"
              defaultSubject="Flachdach – Angebotsanfrage"
            />
          </div>
        </div>
      </section>

      {/* 2. Undicht / Reparatur */}
      <section ref={emergencyRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${emergencyVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Notfall & Reparatur</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Flachdach undicht oder Wasserschaden? Schnelle Hilfe aus einer Hand
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                <p>
                  Bei Undichtigkeiten zählt jede Stunde. Wir kommen kurzfristig, sichern den Schaden sofort ab und verhindern Folgeschäden an Dämmung, Decke und Innenausbau.
                </p>
                <p>
                  <strong className="text-foreground">Leckortung UND fachgerechte Abdichtung aus einer Hand</strong> – Sie müssen nicht erst einen Leckorter suchen und dann einen Handwerker, der ohnehin ausgebucht ist. Wir übernehmen beides im selben Zug.
                </p>
                <p>
                  Häufig ist eine gezielte Sanierung möglich – ohne teuren Komplettabriss. Vom Garagendach bis zur Gewerbehalle.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  { icon: Droplets, text: "Sofortige Schadensbegrenzung bei Wassereintritt" },
                  { icon: Wrench, text: "Leckortung + dauerhafte Abdichtung im selben Zug" },
                  { icon: Clock, text: "Kurzfristige Termine, auch bei hoher Auslastung" },
                  { icon: ShieldAlert, text: "24h-Notdienst bei akutem Wasserschaden" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+4917613514385"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
              >
                <Phone className="w-4 h-4" />
                Jetzt Notfall melden
              </a>
            </div>
            <div className="relative">
              <img
                src={flatRoofImg}
                alt="Notfall-Reparatur eines undichten Flachdachs in Hamburg"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl px-5 py-3 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Notdienst</p>
                <p className="font-heading font-bold text-lg">24 / 7 erreichbar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Warum wir schnell sind */}
      <section ref={speedRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`${speedVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Warum wir schnell sind</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-3">
                Regional, erreichbar, verfügbar
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Meisterbetrieb aus Seevetal sind wir in Hamburg und Umgebung schnell vor Ort. Mo–Fr 06:00–18:00 Uhr regulär – und bei akutem Wasserschaden über unseren 24h-Notdienst rund um die Uhr.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {speedReasons.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Flachdachsanierung & -abdichtung (Ads Message-Match: Sanierung) */}
      <FlachdachsanierungSection />

      <section ref={introRef} className="section-padding-lg">

        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 ${introVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Ihr Partner für Flachdächer</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                Langlebig und kosteneffizient
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein professionell ausgeführtes Flachdach ist heute weit mehr als eine funktionale Abdeckung. Es ist Wärmeschutz, Nutzfläche und Gestaltungselement zugleich – ob als klassisches Warmdach mit Bitumen-Schweißbahn, als Umkehrdach mit Kiesauflast oder als begrüntes Gründach mit Schallschutz und ökologischem Mehrwert.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir planen und realisieren Flachdächer für Gewerbebauten, Bürogebäude, Wohnhäuser, Anbauten und Garagen. Dabei setzen wir konsequent auf geprüfte Systeme namhafter Hersteller, saubere Anschlussdetails und die Fachregeln des Deutschen Dachdeckerhandwerks – für maximale Dichtheit und Langlebigkeit.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Langlebig", "Pflegeleicht", "Sicher", "Energieeffizient", "Umweltfreundlich", "Vielseitig"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <img src={flatRoofImg} alt="Fachgerechte Flachdacharbeiten in Hamburg" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceDetail
              title="Flachdach-Dämmung"
              text="Fast 2/3 der Wärmeverluste entstehen über das Dach. Mit professioneller Dämmung reduzieren Sie Heizkosten und erhalten den Wert Ihrer Immobilie."
              benefits={["Fachgerechte Dämmung für Gauben, Kamine und Dachterrassen", "Planung und Ausführung aus einer Hand", "Verbessertes Raumklima und Wohnkomfort"]}
            />
            <ServiceDetail
              title="Flachdachbegrünung"
              text="Ein begrüntes Flachdach bietet Schallschutz, längere Lebensdauer und ein ökologisches Kleinklima."
              benefits={["Individuelle Begrünungskonzepte", "Optimale Klimaregulierung", "Schaffung eines ökologischen Kleinklimas"]}
            />
            <ServiceDetail
              title="Dachsanierung"
              text="Komplette Planung und Durchführung Ihrer Flachdachsanierung – von der Erneuerung bis zum Blitzschutz."
              benefits={["Qualifizierte Mitarbeiter und hochwertige Materialien", "Einhaltung aller Vorschriften und DIN-Normen", "Optionale Nachrüstungen wie Solaranlagen"]}
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+4917613514385"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              Jetzt beraten lassen
            </a>
          </div>
        </div>
      </section>

      <section ref={targetRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto ${targetVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Zielgruppen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              Für wen ist unser Flachdach-Service ideal?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Vom kleinen Garagenanbau bis zur mehreren Tausend Quadratmeter großen Gewerbehalle – wir passen Aufbau, Material und Bauablauf an Ihr Objekt an.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {targetGroups.map((group) => (
                <li key={group} className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 shadow-sm border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm">{group}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={stepsRef} className="section-padding-lg">
        <div className="container-wide">
          <div className={`${stepsVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">Ablauf</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center leading-tight">
              So einfach geht's
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Strukturiertes Vorgehen, klare Kommunikation und geprüfte Systeme – so realisieren wir Ihr Flachdach.
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

      <section ref={faqRef} className="section-padding-lg bg-muted/30">
        <div className="container-wide max-w-3xl">
          <div className={`${faqVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 text-center">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center leading-tight">
              Häufige Fragen zum Flachdach
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <CTASection />
      <MobileStickyCTA whatsappUrl="https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Flachdach-Anfrage" />
    </Layout>
  );
}
