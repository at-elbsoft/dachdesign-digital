import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import logo from "@/assets/logo.webp";

const WHATSAPP_BASE = "https://wa.me/4917613514385";
const WHATSAPP_TEXT_DEFAULT =
  "Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Dachrinnenreinigung";
const WHATSAPP_TEXT_FLACHDACH =
  "Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Flachdach-Anfrage";

const NAV_ITEMS = [
  { label: "Willkommen", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Flachdach", href: "/flachdach" },
      { label: "Steildach", href: "/steildach" },
      { label: "Reparatur & Erhaltung", href: "/reparatur-und-erhaltung" },
      { label: "Dachrinnenreinigung", href: "/dachrinnenreinigung" },
      { label: "Metall- & Klempnerarbeiten", href: "/metall-und-klempnerarbeiten" },
    ],
  },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const whatsappUrl = `${WHATSAPP_BASE}?text=${location.pathname === "/flachdach" ? WHATSAPP_TEXT_FLACHDACH : WHATSAPP_TEXT_DEFAULT}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Lehmann Dächer & Bauklempnerei GmbH Logo" className="h-12 md:h-14 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-sm md:text-base text-foreground leading-tight block">
              Lehmann Dächer
            </span>
            <span className="text-xs text-muted-foreground leading-tight block">
              & Bauklempnerei GmbH
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive(item.href) || item.children.some((c) => isActive(c.href))
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-card rounded-lg shadow-lg border border-border py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive(child.href)
                              ? "text-accent bg-accent/5"
                              : "text-foreground hover:text-accent hover:bg-accent/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isActive(item.href) ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted active:scale-95 transition-all duration-150"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container-wide py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-accent bg-accent/5" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block pl-8 pr-4 py-2.5 text-sm transition-colors ${
                      isActive(child.href) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="tel:+4917613514385"
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold active:scale-[0.97] transition-transform"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat öffnen"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg text-sm font-semibold active:scale-[0.97] transition-transform"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
