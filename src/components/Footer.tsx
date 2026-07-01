import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import logo from "@/assets/logo.webp";

const WHATSAPP_URL =
  "https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Dachrinnenreinigung";

const SERVICES = [
  { label: "Flachdach", href: "/flachdach" },
  { label: "Steildach", href: "/steildach" },
  { label: "Reparatur & Erhaltung", href: "/reparatur-und-erhaltung" },
  { label: "Dachrinnenreinigung", href: "/dachrinnenreinigung" },
  { label: "Metall- & Klempnerarbeiten", href: "/metall-und-klempnerarbeiten" },
];

const LINKS = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logo} alt="LD Bauklempnerei Logo" className="h-12 w-auto" />
              <div>
                <span className="font-heading font-bold text-sm block">Lehmann Dächer</span>
                <span className="text-xs opacity-70 block">& Bauklempnerei GmbH</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Ihr Meisterbetrieb für Dacharbeiten in Hamburg und Umgebung. Über 25 Jahre Erfahrung in Dachdeckerei und Bauklempnerei.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+4917613514385" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" /> 0176 1351 4385
              </a>
              <a href="mailto:kontakt@ldbauklempnerei.de" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 shrink-0" /> kontakt@ldbauklempnerei.de
              </a>
              <div className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Graubergen 19, 21218 Seevetal
              </div>
              <div className="flex items-start gap-2 opacity-80">
                <span className="w-4 h-4 shrink-0 text-center text-xs mt-0.5">🕒</span> Mo–Fr: 06:00 – 18:00 Uhr
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider opacity-60">Leistungen</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider opacity-60">Unternehmen</h3>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider opacity-60">Servicezeiten</h3>
            <div className="text-sm space-y-2 opacity-80">
              <p>Mo – Fr: 06:00 – 18:00 Uhr</p>
              <p className="font-semibold text-accent">24h Notdienst verfügbar</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="tel:+4917613514385"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md hover:shadow-accent/20 transition-all duration-150 active:scale-[0.97]"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat öffnen"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md hover:shadow-[#25D366]/20 transition-all duration-150 active:scale-[0.97]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Lehmann Dächer & Bauklempnerei GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
