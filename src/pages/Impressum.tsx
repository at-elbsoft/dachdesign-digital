import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum | Lehmann Dächer & Bauklempnerei GmbH";
  }, []);

  return (
    <Layout>
      <PageHero title="Impressum" breadcrumb="Impressum" />
      <section className="section-padding">
        <div className="container-tight prose prose-sm max-w-3xl">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Firma:</strong> Lehmann Dächer & Bauklempnerei GmbH<br />
            <strong>Vertretungsberechtigter Geschäftsführer:</strong> Ballal Ghafari<br />
            <strong>Adresse:</strong> Grützmühle 23, 21218 Seevetal<br />
            <strong>Telefon:</strong> <a href="tel:01761351438">0176 1351 4385</a><br />
            <strong>E-Mail:</strong> <a href="mailto:kontakt@ldbauklempnerei.de">kontakt@ldbauklempnerei.de</a><br />
            <strong>Webseite:</strong> www.ldbauklempnerei.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: folgt</p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            <strong>Berufsbezeichnung:</strong> Dachdecker<br />
            <strong>Zuständige Kammer:</strong> Handwerkskammer Hamburg<br />
            <strong>Verliehen in:</strong> Deutschland
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Ballal Ghafari, Grützmühle 23, 21218 Seevetal</p>

          <h2>Haftungsausschluss (Disclaimer)</h2>
          <h3>Haftung für Inhalte</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>

          <h3>Haftung für Links</h3>
          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

          <h3>Streitschlichtung</h3>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </div>
      </section>
    </Layout>
  );
}
