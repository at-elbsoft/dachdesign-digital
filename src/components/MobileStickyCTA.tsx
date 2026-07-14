import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface Props {
  whatsappUrl?: string;
  telHref?: string;
  telLabel?: string;
}

export default function MobileStickyCTA({
  whatsappUrl = "https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Dachrinnenreinigung",
  telHref = "tel:+4917613514385",
  telLabel = "0176 1351 4385",
}: Props) {
  return (
    <>
      {/* Spacer so page content is not hidden behind the fixed bar */}
      <div aria-hidden="true" className="md:hidden h-16" />
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        role="region"
        aria-label="Schnellkontakt"
      >
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={telHref}
            aria-label={`Jetzt anrufen unter ${telLabel}`}
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-3 py-3 rounded-lg font-semibold text-sm active:scale-[0.97] transition-transform"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Anrufen</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat öffnen"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-3 rounded-lg font-semibold text-sm active:scale-[0.97] transition-transform"
          >
            <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
