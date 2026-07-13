import { Zap, CalendarClock, Siren, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Dachrinnenreinigung";

export default function TrustBar() {
  return (
    <div
      className="bg-primary text-primary-foreground border-b border-primary/20"
      role="complementary"
      aria-label="Serviceversprechen und Kontakt"
    >
      <div className="container-wide py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 text-xs md:text-sm">
        <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 md:gap-x-6">
          <li className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Schnell vor Ort</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CalendarClock className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Kurzfristige Termine</span>
          </li>
          <li className="flex items-center gap-1.5 font-medium">
            <Siren className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" aria-hidden="true" />
            <span>24h-Notdienst</span>
          </li>
        </ul>
        <div className="flex items-center justify-center md:justify-end gap-2">
          <a
            href="tel:+4917613514385"
            aria-label="Jetzt anrufen unter 0176 1351 4385"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-3 py-1.5 rounded-md font-semibold hover:shadow-md hover:shadow-accent/20 active:scale-[0.97] transition-all duration-150 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            <span className="hidden xs:inline sm:inline">Jetzt anrufen: </span>
            <span>0176 1351 4385</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat öffnen"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-1.5 rounded-md font-semibold hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-150 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
