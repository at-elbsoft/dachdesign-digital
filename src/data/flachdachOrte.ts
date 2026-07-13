export interface FlachdachOrtData {
  /** URL slug */
  slug: string;
  /** Anzeigename */
  name: string;
  /** Kurzbeschreibung im Hero (1 Satz) */
  hero: string;
  /** Redaktioneller Einleitungstext mit lokalem Bezug (2–3 Absätze) */
  intro: string[];
  /** Kurzer lokaler Kontext (Stadtteile, typische Bausubstanz, Ansprechpartner) */
  localContext?: string;
}

/**
 * Redaktionelle Platzhaltertexte – individuell pro Ort formuliert.
 * Bitte bei Bedarf durch echte, ortsspezifische Inhalte ergänzen.
 * KEIN kopierter Textblock zwischen den Orten (Thin/Duplicate Content vermeiden).
 */
export const flachdachOrte: FlachdachOrtData[] = [
  {
    slug: "hamburg-harburg",
    name: "Hamburg-Harburg",
    hero: "Flachdach abdichten & reparieren in Hamburg-Harburg – kurzfristige Termine, 24h-Notdienst.",
    intro: [
      "In Hamburg-Harburg finden wir Flachdächer in nahezu allen Ausprägungen: Gewerbehallen im Binnenhafen und im Industriegebiet Heimfeld, Bürogebäude rund um die Harburger Innenstadt, Mehrfamilienhäuser in Wilstorf und Eißendorf sowie Anbauten und Garagen in den Wohnvierteln von Marmstorf und Neugraben-Fischbek. Wir kennen die typischen Schwachstellen dieser Objekte und wissen, wo Wasser bevorzugt eintritt.",
      "Bei akuten Undichtigkeiten oder Wasserschäden sind wir aus Seevetal in kurzer Zeit im Harburger Raum vor Ort. Über unseren 24h-Notdienst sichern wir den Schaden sofort ab und übernehmen Leckortung und Abdichtung in einem Zug – Sie müssen nicht zwei Betriebe koordinieren.",
      "Für Hausverwaltungen und Gewerbekunden bieten wir zusätzlich turnusmäßige Dach-Checks, damit kleine Undichtigkeiten gar nicht erst zum großen Wasserschaden werden.",
    ],
    localContext:
      "Servicegebiet: gesamter Bezirk Harburg inkl. Heimfeld, Wilstorf, Eißendorf, Marmstorf, Neugraben-Fischbek und Süderelbe.",
  },
  {
    slug: "seevetal",
    name: "Seevetal",
    hero: "Flachdach abdichten & reparieren in Seevetal – Ihr Meisterbetrieb direkt aus der Gemeinde.",
    intro: [
      "Als Meisterbetrieb aus Graubergen sind wir in Seevetal buchstäblich um die Ecke. Ob in Meckelfeld, Hittfeld, Maschen, Fleestedt oder Ramelsloh – wir kennen die örtliche Bebauung mit ihren Bungalow-Anbauten, Garagenkomplexen und Gewerbeflächen entlang der A1 sehr genau.",
      "Bei einem undichten Flachdach zählt jede Stunde. Weil wir vor Ort ansässig sind, sind Termine in Seevetal besonders kurzfristig möglich – und im Notfall stehen wir über den 24h-Notdienst rund um die Uhr bereit. Leckortung und fachgerechte Abdichtung übernehmen wir aus einer Hand.",
      "Häufig lässt sich ein Seevetaler Flachdach sanieren, ohne dass ein Komplettabriss nötig wird. Wir prüfen die Restsubstanz vor Ort und schlagen die wirtschaftlichste Lösung vor – vom Garagendach bis zur Gewerbehalle.",
    ],
    localContext:
      "Servicegebiet: alle Ortsteile Seevetals inkl. Meckelfeld, Hittfeld, Maschen, Fleestedt, Ramelsloh und Bullenhausen.",
  },
  {
    slug: "buchholz-in-der-nordheide",
    name: "Buchholz in der Nordheide",
    hero: "Flachdach abdichten & reparieren in Buchholz in der Nordheide – schnell, sauber, aus der Region.",
    intro: [
      "In Buchholz in der Nordheide arbeiten wir häufig an Flachdächern von Wohnanbauten, Carports und Gewerbeobjekten entlang der Bremer Straße. Die vielen umliegenden Kiefern- und Laubbäume setzen Flachdächer besonders zu: Nadeln, Zapfen und Blätter halten Feuchtigkeit auf der Fläche und beschleunigen den Verschleiß der Abdichtung.",
      "Wir sind aus Seevetal in wenigen Minuten in Buchholz und den umliegenden Orten wie Sprötze, Steinbeck oder Trelde vor Ort. Bei akutem Wassereintritt sichern wir über den 24h-Notdienst sofort ab; für nicht-akute Anfragen vergeben wir zeitnah einen Ortstermin.",
      "Statt teurem Komplettabriss ist häufig eine gezielte Sanierung möglich – wir prüfen die Substanz und beraten offen, was sich lohnt.",
    ],
  },
  {
    slug: "buxtehude",
    name: "Buxtehude",
    hero: "Flachdach abdichten & reparieren in Buxtehude – vom Meisterbetrieb aus dem nördlichen Landkreis Harburg.",
    intro: [
      "In der Hansestadt Buxtehude reicht die Bebauung vom historischen Kernbestand rund um die Este bis zu modernen Neubauten in Ovelgönne und Altkloster. Flachdächer finden wir hier vor allem auf Anbauten, Reihenhausriegeln, Bürogebäuden und kleineren Gewerbeobjekten – jede mit eigenen Anforderungen an Abdichtung und Entwässerung.",
      "Wir kommen aus Seevetal auch nach Buxtehude kurzfristig – bei akutem Wassereintritt über den 24h-Notdienst. Unser Vorteil: Leckortung und Reparatur laufen im selben Einsatz, Sie sparen sich die Suche nach einem zweiten Handwerker.",
      "Ob es sich um eine akute Reparatur oder eine geplante Sanierung handelt: Wir prüfen, ob das bestehende Dach saniert werden kann, und legen ein transparentes Festpreis-Angebot vor.",
    ],
  },
  {
    slug: "winsen-luhe",
    name: "Winsen (Luhe)",
    hero: "Flachdach abdichten & reparieren in Winsen an der Luhe – kompetent, termintreu, mit 24h-Notdienst.",
    intro: [
      "Winsen an der Luhe liegt zwischen Elbmarsch und Geestlandschaft – Wind- und Wetterlagen setzen Flachdächern hier spürbar zu. Regelmäßige Kontrollen und rechtzeitige Reparaturen sind deshalb besonders wichtig, um Folgeschäden an Dämmung und Deckenkonstruktion zu vermeiden.",
      "Wir betreuen private Eigentümer, Hausverwaltungen und Gewerbekunden in Winsen und den umliegenden Ortschaften wie Borstel, Pattensen, Roydorf und Scharmbeck. Bei akutem Wasserschaden erreichen Sie uns über den 24h-Notdienst rund um die Uhr.",
      "Neben klassischer Abdichtung mit Bitumen-Schweißbahn oder Kunststoff-Dachbahn übernehmen wir auf Wunsch auch Sanierung im Bestand, Blitzschutz und Anschlagpunkte – alles aus einer Hand.",
    ],
  },
  {
    slug: "neu-wulmstorf",
    name: "Neu Wulmstorf",
    hero: "Flachdach abdichten & reparieren in Neu Wulmstorf – zuverlässiger Service aus dem Nachbarort.",
    intro: [
      "Neu Wulmstorf mit seinen Wohngebieten in Elstorf, Rübke, Ardestorf und der Kernortschaft ist stark von Ein- und Zweifamilienhäusern geprägt. Flachdächer sitzen hier oft auf Anbauten, Garagen, Carports und Gewerbeobjekten entlang der B73 – kompakte, aber oft empfindliche Flächen, die bei Vernachlässigung schnell undicht werden.",
      "Weil wir aus Seevetal anrücken, sind Termine in Neu Wulmstorf in der Regel sehr kurzfristig möglich – ideal, wenn ein Dach akut Wasser durchlässt oder eine Reparatur schnell abgeschlossen werden soll. Bei Notfällen erreichen Sie uns 24/7.",
      "Wir kombinieren Leckortung, Notabdichtung und dauerhafte Reparatur im selben Zug – keine wochenlange Wartezeit auf einen weiteren Handwerker.",
    ],
  },
  {
    slug: "tostedt",
    name: "Tostedt",
    hero: "Flachdach abdichten & reparieren in Tostedt – für Wohnbau, Gewerbe und landwirtschaftliche Objekte.",
    intro: [
      "Tostedt und die umliegende Samtgemeinde sind waldreich – ein Plus für die Lebensqualität, aber eine Herausforderung für jedes Flachdach. Herabfallende Äste, Nadeln und Laub belasten die Abdichtung dauerhaft und behindern die Entwässerung, wenn Rinnen und Gullys verstopfen.",
      "Wir betreuen in Tostedt Wohnhäuser mit Flachdachanbauten, Gewerbeobjekte in den umliegenden Gewerbegebieten und auch landwirtschaftliche Gebäude mit größeren Flachdachflächen. Bei akutem Wassereintritt sichern wir über den 24h-Notdienst schnell ab.",
      "Auf Wunsch übernehmen wir feste Wartungsintervalle – so bleibt Ihr Flachdach dicht, und teure Folgeschäden werden von vornherein vermieden.",
    ],
  },
];

export function getFlachdachOrt(slug: string): FlachdachOrtData | undefined {
  return flachdachOrte.find((o) => o.slug === slug);
}
