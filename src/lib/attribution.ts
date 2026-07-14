// Helpers for GA4 client_id + gclid capture (server-side conversion attribution)

const GA_MEASUREMENT_ID = "G-B8X4EW1599";
const GCLID_STORAGE_KEY = "ld_gclid";
const GCLID_MAX_AGE_DAYS = 90;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

/** Ermittelt die GA4 client_id. Bevorzugt via gtag('get', ...), Fallback aus `_ga`-Cookie. */
export function getGaClientId(timeoutMs = 400): Promise<string> {
  return new Promise((resolve) => {
    const fallback = () => {
      const ga = readCookie("_ga"); // Format: GA1.1.<a>.<b>
      if (ga) {
        const parts = ga.split(".");
        if (parts.length >= 4) {
          resolve(`${parts[2]}.${parts[3]}`);
          return;
        }
      }
      resolve("");
    };

    try {
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return fallback();

      let done = false;
      const timer = window.setTimeout(() => {
        if (done) return;
        done = true;
        fallback();
      }, timeoutMs);

      gtag("get", GA_MEASUREMENT_ID, "client_id", (id: string) => {
        if (done) return;
        done = true;
        window.clearTimeout(timer);
        if (id) resolve(String(id));
        else fallback();
      });
    } catch {
      fallback();
    }
  });
}

/** Liest gclid einmalig aus URL, persistiert 90 Tage, liefert gespeicherten Wert. */
export function getStoredGclid(): string {
  if (typeof window === "undefined") return "";
  try {
    const url = new URL(window.location.href);
    const fromUrl = url.searchParams.get("gclid");
    if (fromUrl) {
      writeCookie(GCLID_STORAGE_KEY, fromUrl, GCLID_MAX_AGE_DAYS);
      try {
        window.localStorage.setItem(GCLID_STORAGE_KEY, fromUrl);
      } catch {
        /* ignore */
      }
      return fromUrl;
    }
  } catch {
    /* ignore */
  }
  const cookie = readCookie(GCLID_STORAGE_KEY);
  if (cookie) return cookie;
  try {
    return window.localStorage.getItem(GCLID_STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

/** Bündel für den Formular-Payload. */
export async function getAttributionPayload() {
  const [ga_client_id, gclid] = [await getGaClientId(), getStoredGclid()];
  return {
    ga_client_id,
    gclid,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  };
}
