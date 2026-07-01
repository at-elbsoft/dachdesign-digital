// GA4 event tracking helpers (uses globally injected gtag.js from index.html)
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  try {
    window.gtag?.("event", name, params);
  } catch {
    // fail silently
  }
}

/**
 * Global click delegation for tel: and WhatsApp links.
 * Works with dynamically rendered React components since it listens on document.
 */
export function initGlobalClickTracking() {
  if (typeof document === "undefined") return;
  if ((window as unknown as { __ldTrackingInit?: boolean }).__ldTrackingInit) return;
  (window as unknown as { __ldTrackingInit?: boolean }).__ldTrackingInit = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackEvent("phone_call_click", { method: "phone" });
        return;
      }
      if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.startsWith("whatsapp:")
      ) {
        trackEvent("whatsapp_click", { method: "whatsapp" });
      }
    },
    { capture: true }
  );
}
