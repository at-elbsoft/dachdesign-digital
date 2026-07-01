import { Phone, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-primary text-primary-foreground section-padding">
      <div className={`container-wide text-center max-w-3xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          Lassen Sie uns über Ihr Projekt sprechen
        </h2>
        <p className="opacity-80 mb-8 text-base md:text-lg">
          Kontaktieren Sie uns für eine unverbindliche Beratung. Wir sind Mo–Fr von 06:00–18:00 Uhr erreichbar und bieten einen 24h Notdienst.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+4917613514385"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
          >
            <Phone className="w-4 h-4" />
            0176 1351 4385
          </a>
          <a
            href="mailto:kontakt@ldbauklempnerei.de"
            className="flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-all duration-150 active:scale-[0.97]"
          >
            <Mail className="w-4 h-4" />
            E-Mail schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
