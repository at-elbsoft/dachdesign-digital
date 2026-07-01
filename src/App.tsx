import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import Leistungen from "./pages/Leistungen";
import Flachdach from "./pages/Flachdach";
import Steildach from "./pages/Steildach";

import ReparaturUndErhaltung from "./pages/ReparaturUndErhaltung";
import Dachrinnenreinigung from "./pages/Dachrinnenreinigung";
import DachrinnenreinigungOrt from "./pages/DachrinnenreinigungOrt";
import MetallUndKlempnerarbeiten from "./pages/MetallUndKlempnerarbeiten";
import Kontakt from "./pages/Kontakt";
import Jobs from "./pages/Jobs";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function AppProviders({
  helmetContext,
  children,
}: {
  helmetContext?: object;
  children: ReactNode;
}) {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/flachdach" element={<Flachdach />} />
        <Route path="/steildach" element={<Steildach />} />
        <Route path="/reparatur-und-erhaltung" element={<ReparaturUndErhaltung />} />
        <Route path="/dachrinnenreinigung" element={<Dachrinnenreinigung />} />
        <Route path="/dachrinnenreinigung/:ort" element={<DachrinnenreinigungOrt />} />
        <Route path="/metall-und-klempnerarbeiten" element={<MetallUndKlempnerarbeiten />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
