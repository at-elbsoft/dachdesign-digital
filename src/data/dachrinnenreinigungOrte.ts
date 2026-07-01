export interface OrtData {
  /** URL slug */
  slug: string;
  /** Anzeigename */
  name: string;
  /** Kurzbeschreibung im Hero (1 Satz) */
  hero: string;
  /** Redaktioneller Einleitungstext mit lokalem Bezug (2–3 Absätze) */
  intro: string[];
  /** Optional: kurzer lokaler Kontext (Stadtteile, Landschaft, typische Bausubstanz) */
  localContext?: string;
}

/**
 * Redaktionelle Platzhaltertexte – individuell pro Ort formuliert.
 * Bitte bei Bedarf durch echte, ortsspezifische Inhalte ergänzen.
 */
export const orte: OrtData[] = [
  {
    slug: "seevetal",
    name: "Seevetal",
    hero: "Zuverlässige Dachrinnenreinigung in Seevetal – Ihr Meisterbetrieb direkt aus der Region.",
    intro: [
      "Als Meisterbetrieb aus Graubergen sind wir für Kundinnen und Kunden in Seevetal buchstäblich um die Ecke. Ob in Meckelfeld, Hittfeld, Maschen oder Fleestedt – wir kennen die typische Bebauung in unserer Heimatgemeinde und wissen, welche Anforderungen an Dachrinnen und Fallrohre hier gestellt werden.",
      "Die vielen alten Baumbestände in Seevetal bringen im Herbst reichlich Laub, das Dachrinnen schnell verstopft. Wir reinigen zuverlässig, entfernen Moos und Ablagerungen und prüfen im gleichen Zug, ob Rinnen und Fallrohre dicht sind.",
      "Kurze Wege bedeuten kurzfristige Termine: In Seevetal sind wir in der Regel besonders schnell vor Ort und kombinieren Reinigung, Sichtprüfung und kleine Reparaturen bei Bedarf in einem einzigen Einsatz.",
    ],
    localContext:
      "Servicegebiet: alle Ortsteile Seevetals inkl. Meckelfeld, Hittfeld, Maschen, Fleestedt, Ramelsloh und Bullenhausen.",
  },
  {
    slug: "hamburg-harburg",
    name: "Hamburg-Harburg",
    hero: "Dachrinnenreinigung in Hamburg-Harburg – professionell, sicher und termintreu.",
    intro: [
      "Hamburg-Harburg mit seinen dicht bebauten Wohnvierteln, Altbauten und Gewerbeflächen stellt besondere Anforderungen an die Wartung von Dachentwässerungen. Wir betreuen hier sowohl Einfamilienhäuser als auch Mehrfamilienhäuser und Gewerbeobjekte zuverlässig.",
      "Von Heimfeld über Wilstorf und Eißendorf bis Marmstorf und Neugraben-Fischbek: In vielen Straßenzügen prägen alte Bäume das Bild – und sorgen im Herbst für regelmäßig verstopfte Dachrinnen. Wir sind aus Seevetal in kürzester Zeit im Harburger Raum vor Ort.",
      "Für Hausverwaltungen und Eigentümergemeinschaften bieten wir turnusmäßige Reinigungen mit fester Terminplanung – dokumentiert und transparent abgerechnet.",
    ],
    localContext:
      "Servicegebiet: gesamter Bezirk Harburg inkl. Heimfeld, Wilstorf, Eißendorf, Marmstorf, Neugraben-Fischbek und Süderelbe.",
  },
  {
    slug: "buchholz-in-der-nordheide",
    name: "Buchholz in der Nordheide",
    hero: "Dachrinnenreinigung in Buchholz in der Nordheide – vom Meisterbetrieb aus der Region.",
    intro: [
      "In Buchholz in der Nordheide dominieren viele Ein- und Zweifamilienhäuser mit umliegenden Bäumen. Genau hier zeigt sich, wie wichtig eine regelmäßige Dachrinnenreinigung ist: Laub, Nadeln und Blüten setzen sich schnell fest und beeinträchtigen den Wasserabfluss.",
      "Wir reinigen Dachrinnen und Fallrohre gründlich, prüfen den Zustand der Rinnen und beheben kleinere Undichtigkeiten direkt vor Ort – ganz gleich, ob in Sprötze, Steinbeck, Trelde oder in der Innenstadt.",
      "Termine sind in Buchholz meist kurzfristig möglich, da wir von Seevetal aus in wenigen Minuten in der Nordheide sind.",
    ],
  },
  {
    slug: "buxtehude",
    name: "Buxtehude",
    hero: "Dachrinnenreinigung in Buxtehude – gründlich, sicher und mit persönlicher Beratung.",
    intro: [
      "In der Hansestadt Buxtehude reicht die Bausubstanz vom historischen Altstadthaus bis zum modernen Neubau in Ovelgönne oder Altkloster. Jedes Objekt hat eigene Anforderungen an die Dachentwässerung – wir stellen uns darauf ein.",
      "Vor allem in Straßenzügen mit altem Baumbestand rund um die Este sammeln sich Laub und Moos schnell in den Rinnen. Wir reinigen zuverlässig, spülen Fallrohre frei und prüfen auf Schäden.",
      "Für private Eigentümer, Hausverwaltungen und Gewerbekunden in Buxtehude bieten wir feste Wartungsintervalle mit fair kalkulierten Pauschalen.",
    ],
  },
  {
    slug: "winsen-luhe",
    name: "Winsen (Luhe)",
    hero: "Dachrinnenreinigung in Winsen an der Luhe – kompetent und termintreu.",
    intro: [
      "Winsen an der Luhe liegt landschaftlich reizvoll zwischen Elbmarsch und Geestlandschaft – und genau diese Lage sorgt für vergleichsweise viel Laub- und Windeintrag in Dachrinnen. Eine regelmäßige Reinigung ist hier besonders wichtig.",
      "Wir sind in Winsen und den umliegenden Ortsteilen wie Borstel, Pattensen, Roydorf oder Scharmbeck zuverlässig im Einsatz – für private Häuser genauso wie für Mehrfamilienhäuser und Gewerbeimmobilien.",
      "Neben der reinen Reinigung prüfen wir Fallrohre, Rinneneinhänge und Anschlüsse – bei Bedarf reparieren wir kleinere Schäden gleich mit.",
    ],
  },
  {
    slug: "neu-wulmstorf",
    name: "Neu Wulmstorf",
    hero: "Dachrinnenreinigung in Neu Wulmstorf – zuverlässiger Service aus dem Nachbarort.",
    intro: [
      "Neu Wulmstorf mit seinen Wohngebieten in Elstorf, Rübke, Ardestorf und der Kernortschaft ist von vielen Ein- und Zweifamilienhäusern geprägt. Der überwiegend grüne Charakter der Gemeinde bedeutet aber auch: viel Laub in den Rinnen.",
      "Wir übernehmen die Dachrinnenreinigung fachgerecht mit passender Sicherheitsausrüstung – auch an höheren Gebäuden. Fallrohre werden mitgeprüft und bei Bedarf freigespült.",
      "Weil wir aus Seevetal anrücken, sind Termine in Neu Wulmstorf in der Regel sehr kurzfristig möglich – ideal, wenn eine Rinne akut überläuft.",
    ],
  },
  {
    slug: "tostedt",
    name: "Tostedt",
    hero: "Dachrinnenreinigung in Tostedt – für Ein- und Mehrfamilienhäuser sowie Gewerbeobjekte.",
    intro: [
      "Tostedt liegt inmitten waldreicher Landschaft – ein deutliches Plus für die Lebensqualität, aber eine Herausforderung für jede Dachrinne. Nadeln, Zapfen und Laub setzen sich schnell fest und stören den Wasserablauf.",
      "Wir reinigen Dachrinnen und Fallrohre in Tostedt und den umliegenden Samtgemeinden gründlich und dokumentieren dabei den Zustand Ihrer Dachentwässerung.",
      "Auf Wunsch übernehmen wir feste Wartungsintervalle – so denken Sie nie mehr an die Rinne, und wir kümmern uns turnusmäßig darum.",
    ],
  },
  {
    slug: "lueneburg",
    name: "Lüneburg",
    hero: "Dachrinnenreinigung in Lüneburg – vom erfahrenen Meisterbetrieb im norddeutschen Raum.",
    intro: [
      "Die Hansestadt Lüneburg vereint historische Bausubstanz in der Altstadt mit modernen Wohnquartieren am Stadtrand. Beide Bauarten profitieren von einer regelmäßigen, fachgerechten Dachrinnenreinigung.",
      "Wir arbeiten in Lüneburg auch an anspruchsvoller Bausubstanz mit hohen Trauflagen oder verwinkelten Dachlandschaften – immer mit passender Sicherheitsausrüstung und Hebetechnik, wo es nötig ist.",
      "Für Hausverwaltungen, Wohnungsbaugesellschaften und Gewerbekunden bieten wir turnusmäßige Wartungen mit sauberer Dokumentation und transparenten Preisen.",
    ],
  },
  {
    slug: "jork",
    name: "Jork",
    hero: "Dachrinnenreinigung in Jork – im Alten Land zuverlässig für Sie im Einsatz.",
    intro: [
      "Jork liegt im Alten Land – einer Region mit vielen älteren Höfen, Fachwerkgebäuden und viel umgebendem Grün. Gerade hier ist eine gepflegte Dachentwässerung entscheidend, um die historische Bausubstanz vor Feuchtigkeitsschäden zu schützen.",
      "Wir reinigen Dachrinnen und Fallrohre in Jork und den umliegenden Altländer Gemeinden fachgerecht und mit der nötigen Sorgfalt für ältere Substanz.",
      "Auf Wunsch beraten wir zusätzlich zu Sanierung, Erneuerung oder Anpassung von Rinnen und Fallrohren – als Meisterbetrieb decken wir die komplette Bauklempnerei ab.",
    ],
  },
];

export function getOrt(slug: string): OrtData | undefined {
  return orte.find((o) => o.slug === slug);
}
