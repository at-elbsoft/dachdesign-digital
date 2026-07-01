import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

export default function Datenschutz() {
  return (
    <Layout>
      <SEOHead title="Datenschutzerklärung | Lehmann Dächer & Bauklempnerei GmbH" description="Datenschutzerklärung der Lehmann Dächer & Bauklempnerei GmbH. Informationen zum Umgang mit Ihren personenbezogenen Daten." path="/datenschutz" />
      <PageHero title="Datenschutzerklärung" breadcrumb="Datenschutz" />
      <section className="section-padding">
        <div className="container-tight prose prose-sm max-w-3xl">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

          <h3>Datenerfassung auf unserer Website</h3>
          <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

          <h4>Wie erfassen wir Ihre Daten?</h4>
          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>

          <h4>Wofür nutzen wir Ihre Daten?</h4>
          <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

          <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>

          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            Lehmann Dächer & Bauklempnerei GmbH<br />
            Ballal Ghafari<br />
            Graubergen 19<br />
            21218 Seevetal<br />
            Telefon: 0176 1351 4385<br />
            E-Mail: kontakt@ldbauklempnerei.de
          </p>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        </div>
      </section>
    </Layout>
  );
}
