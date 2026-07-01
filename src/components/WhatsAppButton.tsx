import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/4917613514385?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Dachrinnenreinigung";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat öffnen"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
