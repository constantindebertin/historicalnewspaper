"use client"
import React, { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NumberFlow from '@number-flow/react'
import AnimatedTextWord from "@/components/AnimatedTextWord";

function AnimatedArticle({ children }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`transition-all duration-1000 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
    }`}>{children}</div>
  );
}


const dataMap = new Map()

dataMap.set(1793, [
  {"title": "McCartney Mission im Gange", "img": "/articles/1793.png", "content": "Das britische Empire befindet sich an einem Scheideweg. Die chinesische Regierung hat den aktiven Handel und die profitable Ausübung der freien Marktwirtschaft eingeschränkt. Der Handel mit chinesischen und britischen Waren und den damit verbundenen Exporten und Importen wurden nun auf die chinesische Küstenprovinz Kanton eingegrenzt.  Die chinesische Einbildung gegenüber der britischen Autorität hatte das Parlament, wie auch die hohe Majestät unzufrieden gestimmt. Die Reaktion auf diese schädigende Haltung Chinas bleibt vorerst ohne militärische Intervention und Einsatz der überlegenen Flotte. Das Parlament stimmte für eine diplomatische Lösung und entsandte damit auch den britischen Diplomaten George McCartney. Die unzureichenden Handelsbedingungen sollten zur Krisenabwendung im britischen Empire über den diplomatischen Weg gelöst werden. Dabei sollten Präsente, die McCartney zur Expedition mitnahm, der Diplomatie nützen. Mit dieser Mission wird die Erwägung einer umständlichen Intervention voraussichtlich nichtig gemacht – spannende Zeiten für das britische Empire."},
  {
    "title": "Handelskammer warnt vor Engpässen beim Teeimport",
    "content": "Die East India Company berichtet von knapper werdenden Schwarztee-Vorräten in London, da Chinas Behörden die Ausfuhr immer strenger kontrollieren. Kaufleute befürchten dramatische Preissteigerungen im kommenden Winter."
  },
  {
    "title": "Seefahrer melden neue Karten vom Südchinesischen Meer",
    "content": "Britische Kapitäne haben erstmals präzise Seekarten der Gewässer südlich von Macclesfield Bank erstellt. Die verbesserten Routen sollen den Seeweg nach Kanton verkürzen und die Sicherheit unserer Frachter erhöhen."
  },
  {
    "title": "Silberversorgung für China nimmt dramatisch zu",
    "content": "Berichte aus Guangzhou belegen einen Rekordabfluss an Silber in Richtung China, um kaiserliche Zölle zu begleichen. Finanzminister in London prüfen nun Maßnahmen gegen die Abwanderung harter Währung."
  },
  {
    "title": "Jesuiten berichten von Fortschritten in Kanton",
    "content": "Kirchliche Missionare loben die öffentliche Vorlesung westlicher Wissenschaft in der Provinzhauptstadt. Obwohl kaiserliche Beamte skeptisch bleiben, wächst das Interesse an europäischen Kenntnissen."
  },
  {
    "title": "Smuggelware am Perlflussufer entdeckt",
    "content": "Chinesische Wachen haben eine große Ladung englischer Stoffe und Schnupftabak an Bord eines inoffiziellen Handelsschiffs sichergestellt. Die East India Company droht mit Vergeltungsmaßnahmen, sollten die Waren nicht freigegeben werden."
  },
  {
    "title": "Parlament debattiert Ostindien-Kompanie-Privilegien",
    "content": "In Westminster streiten Abgeordnete über die Verlängerung der Handelsmonopole der East India Company in China. Während einige den freien Handel fordern, warnen andere vor zu viel Konkurrenz für heimische Kaufleute."
  }
])

dataMap.set(1859, [
  {"title": "Neuverhandlungen mit China", "img": "/articles/1859.png", "content": "Nach einem Erneuten Sieg unserer Glorreichen Marineflotte und des Englischen Herres, über die chinesischen Aufständischen, die sich in Guangzhou erhoben hatten und ihre kriegstreiberisches Gedankengut schnell auf weitere Provinzen übertrugen, wurde durch unser ahabenes Parlament, mit dem chinesischen Kaiserreich neu verhandelt. Durch unsere Vorherigen Verträge mit Peking (Vertrag von Nanjing), wurde uns bereits der freie Handel über diverse Häfen mit allen Händlern Chinas gewährt, was jeden unserer Handelszweige erheblich erstarken ließ. Ebenfalls der fakt, dass China uns großzügig die Kontrolle in den Handelshäfen überließ, wirkte sich positiv auf unseren Globalisierten Handel aus und damit auch mit positiv für unsere chinesischen Handelspartner. Trotz das es bis auf die gerechtfertigte Reparationszahlung, die China uns schuldete, nichts in unserem Handel zu beklagen gäbe, erdreisteten sich die chinesische Bevölkerung diese Beziehung mit ihrem konfliktsüchtigen Verhalten zu bedrohen, so dass unser Parlament zurecht neue Leitregeln für einen gesunden Handel etablierte. Demnach vor ein paar Wochen ein neuer Vertrag, der dem Format eines Entwurfes des Jahres 1858 entstammt, mit China beschlossen, um großmütig die Streitigkeiten zu vergessen und den Handel wieder aufzunehmen. Im Interesse aller wurde der Handel ausgeweitet auf zehn weitere Häfen an Chinas Küsten. Weiter dürfen sich Händler und Geistliche nun in ganz China aufhalten und die Schätze der westlichen Welt, im Reich der Mitte etablieren. Hinzu kommt ein Status, der unseren Landsmännern gestattet wurde und eine Unantastbarkeit durch die chinesische, leider oft wahllose, Gerichtbarkeit gewährt, genannt: Extraterritorialität. Zusätzlich kommt als Kriegstribut eine neu verhandelte Reparationszahlung und die Stadt Hongkong in den Besitz von unserem geliebten Königreich. Heute ist ein Tag zu feiern, denn der Krieg ist vorbei: God safe the Queen."},
  {
    "title": "Erweiterung der Handelsrechte in Kanton gefordert",
    "content": "Nach den jüngsten Militäreinsätzen unserer Flotte verlangt London die Öffnung weiterer Häfen entlang der Küste Chinas. Parlamentarische Debatten betonen den wirtschaftlichen Nutzen freier Handelswege im Reich der Mitte."
  },
  {
    "title": "Tianjin-Vertrag sichert britische Interessen",
    "content": "Der jüngst ratifizierte Vertrag von Tientsin gewährt Großbritannien zusätzliche Konzessionen und rechtliche Extraterritorialität in mehreren Provinzen. Diplomaten loben die Stärkung unserer Position im fernöstlichen Markt."
  },
  {
    "title": "Royal Navy wirft Piraten im Perlflussdelta zurück",
    "content": "Eine englische Flottille hat zahlreiche Piratennester entlang des Perlflusses erfolgreich zerschlagen. Dies garantiert nun sichere Handelsrouten für unsere Handelsschiffe."
  },
  {
    "title": "Missionare eröffnen Schulen am Jangtse",
    "content": "Britische Geistliche haben mehrere Lehranstalten entlang des Jangtse eingerichtet, um westliche Bildung zu verbreiten. Die chinesischen Behörden zeigen sich zwar zurückhaltend, doch die ersten Schülerzahlen stimmen optimistisch."
  },
  {
    "title": "Shanghai empfängt erste britische Dampfschiffe",
    "content": "Moderne Dampfschiffe unserer Handelsgesellschaften sind erstmals bis Shanghai vorgedrungen. Der rasche Transport beschleunigt nun den Warenaustausch zwischen London und dem Osten."
  },
  {
    "title": "Hongkong floriert als imperiales Handelszentrum",
    "content": "Der Hafen von Hongkong verzeichnet Rekordumschläge und neue Lagerhäuser entstehen auf der Insel. Unternehmer berichten von steigenden Profiten dank günstiger Zollsätze und sicherer Verwaltung."
  },
  {
    "title": "Parlament debattiert Opiumzölle zur Stabilisierung des Handels",
    "content": "In Westminster laufen hitzige Gespräche über die Anpassung der Opiumzölle, um Einnahmen und politische Balance im Kaiserreich zu sichern. Handelskammern warnen jedoch vor möglichen chinesischen Gegenmaßnahmen."
  },
])

dataMap.set(1839, [
  {"title": "Britische Intervention in China", "img": "/articles/1839.png", "content": "Große Neuigkeiten im britischen Empire. Die provokative und feindliche Handlung Chinas gegenüber britischen Händlern gaben Anlass sofortig und unverzüglich eine kleine Flotte der britischen Seemacht nach Südostasien zu entsenden. Diese menschenfeindliche Behandlung gegenüber von britischen Staatangehörigen und wertvollen Waren lässt dem britischen Parlament und dem Königshaus keine Wahl als im Namen der Souveränität für Ordnung zu sorgen. Die Notwendigkeit einer Machtdemonstration an dem chinesischen Kaisertum ist durch die inakzeptablen Umstände geschuldet, die China zu verantworten hat. Jahrelange Beschränkungen für einen freien Handel und nun der direkte Angriff auf Großbritannien durch kaiserliche Beamte.  Die freie Marktwirtschaft muss verteidigt werden und China zurechtgewiesen werden. Eine absolute Entmachtung der chinesisch wirtschaftlichen Souveränität und Eigenständigkeit muss ihnen die Lage verdeutlichen und den Weg zum Frieden ebnen. Andernfalls würde das britische Empire Schwäche zeigen, die einmal mehr ausgenutzt werden würde. Der Keim einer wirtschaftlichen Krise und eines nationalen Präzedenzfalls muss erstickt werden. Für die Zukunft unserer glorreichen Kolonialmacht. "},
  {
    "title": "Beschlagnahmung chinesischer Opiumvorräte in Kanton",
    "content": "Chinesische Behörden haben britisches Opium konfisziert, was London als unrechtmäßigen Eingriff in den freien Handel verurteilt. Die Royal Navy blockiert daraufhin den Hafen von Kanton als Vergeltungsmaßnahme. Handelskammern warnen vor weiteren Eskalationen, sollten die Vorräte nicht umgehend freigegeben werden."
  },
  {
    "title": "Royal Navy blockiert Pearl River",
    "content": "Eine britische Flottille hat die Mündung des Perlflusses abgeriegelt, um den Opiumhandel zu schützen und Piraterie einzudämmen. Offiziere berichten von reibungslosen Operationen und minimalen Zwischenfällen. Diese Maßnahme soll chinesische Behörden zwingen, Verhandlungen aufzunehmen."
  },
  {
    "title": "Handelskammer drängt auf Öffnung neuer Häfen",
    "content": "In London fordern Kaufleute die Zulassung öffentlicher Handelsposten in Shanghai und Ningbo, um den wachsenden Tee- und Seidenhandel zu bedienen. Man argumentiert, nur so lasse sich eine profitable britische Präsenz in China sichern. Das Parlament zeigt sich bereit, Druck auf Peking auszuüben."
  },
  {
    "title": "Missionare stoßen in Kanton auf Widerstand",
    "content": "Britische Geistliche berichten von erheblichen Vorbehalten lokaler Beamter bei der Errichtung von Schulen. Dennoch konnten erste Unterrichtseinheiten für westliche Wissenschaft und Sprache beginnen. Missionare hoffen, dass Bildung langfristig Brücken zwischen den Kulturen baut."
  },
  {
    "title": "Parlament debattiert Opiumzölle",
    "content": "In Westminster entbrennen hitzige Diskussionen über die Festlegung der Opiumzölle, um Einnahmen zu steigern und moralische Bedenken zu berücksichtigen. Gegner warnen vor möglichen Gegenmaßnahmen Chinas, die den gesamten Handel gefährden könnten. Eine Entscheidung wird für die kommende Woche erwartet."
  },
  {
    "title": "Bericht aus Peking bleibt vage",
    "content": "Nachrichtenschnipsel deuten auf Widerstand des Qing-Hofs gegen britische Forderungen hin, doch offizielle Mitteilungen fehlen. Diplomaten rätseln über Pekinger Absichten und fürchten harte Verhandlungstaktiken. In London wächst die Sorge, dass eine weitere Eskalation unvermeidlich ist."
  }
])

dataMap.set(1860, [
  {"title": "Sieg über das chinesische Reich", "img": "/articles/1860.png", "content": "Infolge eines vierjährigen Kriegs geht nun das Britische Empire siegreich hervor. Die Freiheit und die Souveränität der freien Marktwirtschaft wurden durch die britische Übermacht gesi-chert. Die glorreiche Demonstration der britischen Stärke auf See und an Land brachte selbst den chinesischen Kaiser einen Schock. Durch die Entschlossenheit des britischen Parlaments und die Segnung durch die hohe Majestät war ein begünstigendes Ende unvermeidbar. \n" +
          "Chronik des Krieges\n" +
          "Der langwährende Krieg begann mit einer provokativen Haltung der chinesischen Widerständ-ler, deren Feigheit sie glauben ließ, dass die britische Absolution nicht wahrhaftig wäre. Die allgemeinwohlschadenden Handlungen der zivilen Bevölkerung im Namen ihres nun entmachte-ten Kaisers sollten nicht ohne Strafe davonkommen. Zur Erteilung einer symbolischen und kla-ren Lektion wurde eine Kriegsflotte inklusive mehreren dutzend Männern geschickt, um nun in Zusammenarbeit mit anderen westlichen Verbündeten die chinesische Haltung zu brechen und friedliche Umstände wiederherzustellen. Soldaten der hohen Majestät eroberten weitaus mehr als zum ersten Krieg. Das Land konnte weder auf See noch auf Land gehalten werden. Viele Küsten fielen und Städte wurden erobert. Der Fall der letzten Barrikade des feindlichen Wider-stands, dem Sommerpalast, wurde der Sieg über den chinesischen Schatten einer Hegemonie deklariert. Der Frieden soll dem Empire nützen. Daher wurden für sämtliche britische Staats-bürger der Zutritt in das gesamte China erlaubt und Hong Kong ist nun Bestandteil der briti-schen Krone. Einmal wieder hat die britische Überlegenheit gesiegt. \n" +
          "\n" +
          "Freier Handel in Hong Kong \n" +
          "Kriegsende und Hong Kong als Tribut. Das britische Empire triumphiert und ernennt Hong Kong als neuester Bestandteil der britischen Krone. Die nun geendeten Kämpfe und die Anne-xion Hong Kongs legt den Weg frei für die freie Marktwirtschaft. Händler und Experten benen-nen die Eingliederung Hong Kongs in den britischen Staat als wirtschaftlichen Profit. Jahrelan-ge Anlegeschwierigkeiten in China und nun durch eine eigene Provinz im ostasiatischen Raum gelöst. \n" +
          "Die vorausgesehene Entwicklung des Handels zwischen China und Großbritannien wird dadurch nur noch vorteilhafter. Exporte und Importe mithilfe von Hong Kong, der Ostindien-kompanie und der britischen Handelsschiffe sagen eine wachsende Wirtschaft für unser Land voraus. China kann sich glücklich schätzen Teil der britischen Geschichte zu sein. \n" +
          "Meldungen zur Folge wurde Hong Kong nach der Unterzeichnung des Friedensvertrags an das britische Empire überschrieben und britische Gesandte und Händler haben sich auf dem Weg zur annektierten Provinz Hong Kong gemacht, um die Wirtschaft anzukurbeln – glorreiche Zei-ten für das Empire.\n" +
          "\n" +
          "Die parlamentarische Reaktion\n" +
          "Die Nachrichten der Deklaration eines Sieges stimmte das Parlament zufrieden. Die vor vier Jahren beschlossene Intervention hatte nun ihre Wirkung gezeigt. Der unterzeichnete Frieden-vertrag bestimmte, wie vorgesehen, zahlreiche Zahlungen für den Krieg, vernichtete Waren und Entschädigung aufgrund von miserabler Behandlung von britischen Staatangehörigen. Die zu-dem beschlossene Anpassung der chinesischen Autorität könnte der Kaiser ebenso wenig ver-weigern. Im Namen des Parlaments und der hohen Majestät wurde der Zutritt in ganz China legitimiert, Hong Kong der britischen Krone untergeordnet und chinesische Handelshäfen gesi-chert. \n" +
          "Das Parlament erreichte somit eine fortbestehende Blütezeit des Empires durch eine legitimierte Ausübung der britischen Bestimmtheit im Kampf gegen das chinesische Reich. \n" +
          "Die parlamentarischen Vertreter stimmten den Bedingungen zu und akzeptierten zu diesen Be-dingungen den Kampf gegen die kaiserlichen Widerständler. Britische Gesandte wurden nach Hong Kong und die chinesischen Häfen gesandt zur Etablierung der britischen Autorität.\n" +
          "\n" +
          "\n"},
  {
    "title": "Sieg über das chinesische Reich",
    "content": "Nach vier Jahren militärischer Operationen endete der Zweite Opiumkrieg mit einem britischen Triumph, der uns umfangreiche Zugeständnisse sichert. Die Einnahme wichtiger Küstenstädte wie Canton stärkt unsere Handelsmacht im Fernen Osten. Das Empire demonstrierte damit erneut seine Überlegenheit auf See und zu Lande."
  },
  {
    "title": "Vertrag von Tientsin sichert freie Häfen",
    "content": "Der 1858 geschlossene Vertrag von Tientsin wurde kürzlich ratifiziert und öffnet britischen Händlern weitere Häfen in Tianjin, Shanghai und Ningbo. Extraterritoriale Rechte und reduzierte Zollsätze versprechen enorme wirtschaftliche Vorteile. Diplomaten feiern die Vereinbarung als Meilenstein für unsere Expansion."
  },
  {
    "title": "Royal Navy zerschlägt Piraten im Perlflussdelta",
    "content": "Eine britische Flottille hat zahlreiche Piratenstützpunkte im Perlflussdelta zerstört und die Handelswege gesichert. Kaufleute atmen auf, da Angriffe auf unsere Frachter spürbar abgenommen haben. Die Aktion unterstreicht die Entschlossenheit des Empire, Frieden und Sicherheit zu wahren."
  },
  {
    "title": "Missionare eröffnen Schulen in Kanton und Shanghai",
    "content": "Britische Geistliche haben in Kanton und Shanghai erste Lehranstalten gegründet, um westliche Wissenschaft und Sprache zu verbreiten. Die lokale Oberschicht zeigt überraschend großes Interesse an moderner Bildung. Experten sehen hierin den Beginn einer kulturellen Annäherung."
  },
  {
    "title": "Erste Dampfschiffe erreichen Shanghai",
    "content": "Moderne Dampfschiffe unserer Handelsgesellschaft pendeln nun regelmäßig zwischen Hongkong und Shanghai. Die schnellere Verbindung reduziert Reisezeiten erheblich und beschleunigt den Warenaustausch. Händler prognostizieren steigende Profite im Tee- und Seidenhandel."
  },
  {
    "title": "Hongkong floriert als Handelsposten",
    "content": "Seit der Annexion verzeichnet Hongkongs Hafen rekordverdächtige Umschlagszahlen, besonders im Teeexport. Neue Lagerhäuser und Kais entstehen in rascher Folge. Unternehmer loben die stabile Verwaltung und günstige Zollsätze."
  },
  {
    "title": "Parlament debattiert Opiumzölle gegenüber China",
    "content": "In Westminster ringen Abgeordnete über eine Anpassung der Opiumzölle, um Staatseinnahmen zu sichern und moralische Bedenken zu berücksichtigen. Handelskammern warnen vor möglichen Gegenmaßnahmen aus Peking. Die Entscheidung wird die künftige Handelspolitik im Reich der Mitte maßgeblich prägen."
  }
])

dataMap.set(1887, [
  {"title": "Verbunden in der Zivilisation", "img": "/articles/1887.png", "content": "Nicht nur unser Schönes England handelt mit China, es wäre vermessen zu denken das wir China alles bieten können, was es benötigt um Teil der Globalisierten Welt zu werden. Auch wir brauchen Verbündete für ein Zivilisieren der Östlichen Völker. Uns gleich, schlossen andere Zivilisierte Mächte, nämlich Frankreich, Russland, Deutschland, Japan, die Vereinigten Staaten von Amerika, so wie weitere Europäische Länder, Verträge mit dem Chinesischen Kaiserreich, ähnlich unseren Verträgen mit den Qing. Dadurch war ein Freihandel für uns alle, als Kollektiv der Zivilisierten Welt, in China gewährleistet. Weiterhin gab es auch für andere Länder unserer Hemisphäre, Hongkong ähnliche Angliederungen an ihre Staatsgebiete, wie zum Beispiel teile der nördlichen Mongolei, die an Russland übergingen. Insgesamt ist dadurch nur die verbundene, globalisierte Welt ersichtlich, die unsere Handelsparadigmen geprägt hat und die China nun wirksam ebenfalls in diese Integriert. Dadurch steigt der fortschritt und Wohlstand aller, eine positive Entwicklung für unser Königreich und die Welt, Möge unser Handel und das Englische Königshaus lange Leben."}
  ,{
    "title": "Parlament begrüßt Chinas Modernisierungsbestrebungen",
    "content": "In Westminster honoriert man die jüngsten Reformen des Qing-Reiches, insbesondere den Ausbau von Eisenbahnlinien und modernen Werften. Man erhofft sich dadurch einen sichereren und rascheren Warenaustausch mit dem Reich der Mitte."
  },
  {
    "title": "Erweiterung neuer Häfen entlang der Küste gefordert",
    "content": "Handelskammern drängen auf die Öffnung zusätzlicher Mündungen des Jangtse und des Gelben Meeres für britische Schiffe. Dies soll die Handelsrouten verkürzen und unsere Exporte nach Zentralchina kräftig ankurbeln."
  },
  {
    "title": "Missionare feiern Erfolg in Bildungsinitiativen",
    "content": "Britische Geistliche haben in Kanton und Shanghai mehrere Schulen gegründet, deren erste Absolventen bereits westliche Wissenschaften beherrschen. London sieht die Verbreitung unserer Lehrmethoden als Schlüssel zur langfristigen Stabilisierung Ostasiens."
  },
  {
    "title": "Opiumzölle sind Thema intensiver Debatten",
    "content": "In Westminster laufen hitzige Verhandlungen über neue Tarife für Opium, um Einnahmen und moralische Bedenken in Einklang zu bringen. Handelsvertreter warnen jedoch vor möglichen Gegenmaßnahmen aus Peking bei zu hohen Abgaben."
  },
  {
    "title": "Royal Navy verstärkt Präsenz im Perlflussdelta",
    "content": "Eine Flottille englischer Kriegsschiffe patrouilliert nun verstärkt zwischen Hongkong und Kanton, um Piraterie zu bekämpfen. Diese Maßnahmen gewährleisten sichere Passagen für unsere Handelsflotte."
  },
  {
    "title": "Britische Kreditlinie für chinesische Werften",
    "content": "London gewährt dem Qing-Hof einen zinsgünstigen Kredit zum Bau moderner Marinestützpunkte und Handelshäfen. Man hofft, dass China seine maritimen Handelswege künftig selbst schützt und stabilisiert."
  },
  {
    "title": "Teeexporte verzeichnen Rekordzuwächse",
    "content": "Dank nachlassender Transportkosten und reduzierter Zölle strömt chinesischer Tee in bislang ungekanntem Umfang nach Großbritannien. Händler prognostizieren einen Einnahmenanstieg um bis zu 30 % im kommenden Handelsjahr."
  }
])

// State for current year and its articles
const initialDate = new Date(1887, 0, 13);


// FlipDate mit ziffernweiser Roll-Animation
function FlipDate({ date, prevDate, onChangeYear, hasPrev, hasNext, onTogglePanel }) {
  return (
    <div className="flex flex-col items-center space-y-1 mt-2">
      <div onClick={onTogglePanel} className="flex items-center space-x-0 whitespace-nowrap cursor-pointer">
        <DigitRoll
          startYear={prevDate.getFullYear()}
          endYear={date.getFullYear()}
        />
      </div>
      <div className="mt-2">
        <button
          onClick={() => onChangeYear(-1)}
          disabled={!hasPrev}
          className={`text-xs uppercase mr-4 ${!hasPrev ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer underline'}`}
        >
          Prev
        </button>
        <button
          onClick={() => onChangeYear(1)}
          disabled={!hasNext}
          className={`text-xs uppercase ${!hasNext ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer underline'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function DigitRoll({ startYear, endYear }) {
  const [displayYear, setDisplayYear] = useState(startYear);

  useEffect(() => {
    if (startYear === endYear) {
      setDisplayYear(endYear);
      return;
    }
    const step = endYear > startYear ? 1 : -1;
    const years = [];
    let current = startYear;
    while (current !== endYear) {
      current += step;
      years.push(current);
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayYear(years[i]);
      i++;
      if (i >= years.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [startYear, endYear]);

  return (
    <div className="flex justify-center items-center mt-4">

      <div           className="text-4xl font-bold uppercase tracking-wide">
        <NumberFlow format={{ notation: "compact" }} value={displayYear}></NumberFlow>
      </div>
    </div>
  );
}

export default function Home() {
  const [showExtra, setShowExtra] = useState(false);
  // State for current year and its articles
  const [date, setDate] = useState(initialDate);
  const [prevDate, setPrevDate] = useState(initialDate);
  const [articles, setArticles] = useState(dataMap.get(initialDate.getFullYear()) || []);
  const [isYearPanelOpen, setIsYearPanelOpen] = useState(false);

  useEffect(() => {
    //const timer = setTimeout(() => setShowExtra(true), 5000); // zeigt Nachricht nach 5s
    //return () => clearTimeout(timer);
  }, []);

  const years = Array.from(dataMap.keys()).sort((a, b) => a - b);
  const currentYear = date.getFullYear();
  const currentIndex = years.indexOf(currentYear);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < years.length - 1;
  const minYear = years[0];
  const maxYear = years[years.length - 1];

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 mt-8 font-serif text-black leading-newspaper relative">
      {/* HEADER */}
      <header className="text-center mb-8">
        <p className="text-xs italic uppercase">All the News That Happened Before</p>
        <h1 className="text-6xl font-black uppercase tracking-wide">
          The Nines
        </h1>
        {/* Neuer FlipDate */}
        <FlipDate
            date={date}
            prevDate={prevDate}
            onChangeYear={(direction) => {
              setPrevDate(date);
              const years = Array.from(dataMap.keys()).sort((a, b) => a - b);
              const currentYear = date.getFullYear();
              const currentIndex = years.indexOf(currentYear);
              const newIndex = currentIndex + direction;
              if (newIndex >= 0 && newIndex < years.length) {
                const newYear = years[newIndex];
                const newDate = new Date(newYear, 0, 1);
                setDate(newDate);
                setArticles(dataMap.get(newYear) || []);
              }
            }}
            hasPrev={hasPrev}
            hasNext={hasNext}
            onTogglePanel={() => setIsYearPanelOpen(!isYearPanelOpen)}
        />
        <div className="text-xs mt-1 uppercase">Late Edition</div>
        {isYearPanelOpen && (
          <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">
            <h2 className="font-bold mb-2">Jahr auswählen</h2>
            <div className="overflow-x-auto mt-2">
              <div className="flex items-center w-full">
                {years.map((year, idx) => (
                  <Fragment key={year}>
                    {idx > 0 && (
                      <div
                        className="h-0.5 bg-gray-200 dark:bg-gray-700 flex-grow"
                        style={{ flexGrow: year - years[idx - 1] }}
                      />
                    )}
                    <div className="flex flex-col items-center mx-2">
                      <button
                        onClick={() => {
                          setPrevDate(date);
                          setDate(new Date(year, 0, 1));
                          setArticles(dataMap.get(year) || []);
                          setIsYearPanelOpen(false);
                        }}
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          year === date.getFullYear()
                            ? 'bg-black text-white'
                            : 'bg-gray-300 text-black'
                        }`}
                      >
                        <span className="text-xs">{year}</span>
                      </button>
                      <p className="mt-2 text-xs text-center w-24">
                        {dataMap.get(year)[0].title}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
        <hr className="border-t-2 border-black mt-4"/>
      </header>

      {/* BODY: 3-Spalten-Grid */}
      <main className="grid grid-cols-3 gap-6 text-sm">
        <section className="col-span-2 space-y-4">
          {articles.slice(0, 3).map((art, idx) => (
            <article key={idx} className="space-y-2">
              <AnimatedTextWord text={art.title} larger={(idx === 0)}></AnimatedTextWord>
              {art.img && (
                <figure>
                  <img src={art.img} alt={art.title} className="w-full h-auto grayscale border border-black" />
                  <figcaption className="text-xs italic mt-1">{art.title}</figcaption>
                </figure>
              )}
              <p>{art.content}</p>
            </article>
          ))}
        </section>
        <section className="col-span-1 space-y-8">
          {articles.slice(3).map((art, idx) => (
            <article key={idx} className="space-y-2">
              <div>
                {(() => {
                  const words = art.title.split(' ');
                  const chunks = [];
                  let current = '';
                  for (const word of words) {
                    const next = current ? `${current} ${word}` : word;
                    if (next.length <= 27) {
                      current = next;
                    } else {
                      chunks.push(current);
                      current = word;
                    }
                  }
                  if (current) {
                    chunks.push(current);
                  }
                  return chunks.map((chunk, idxChunk) => (
                    <AnimatedTextWord key={idxChunk} text={chunk}></AnimatedTextWord>
                  ));
                })()}
              </div>

              {art.img && (
                <figure>
                  <img src={art.img} alt={art.title} className="w-full h-auto grayscale border border-black" />
                  <figcaption className="text-xs italic mt-1">{art.title}</figcaption>
                </figure>
              )}
              <p>{art.content}</p>
            </article>
          ))}
          {showExtra && (
            <AnimatedArticle>
              <article className="space-y-2">
                <h2 className="font-bold uppercase text-lg">Zusätzliche Nachricht</h2>
                <p>Dies ist eine Nachricht, die nach 5 Sekunden mit einem alten Zeitungs-Fade-in-Effekt erscheint.</p>
              </article>
            </AnimatedArticle>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-black pt-4 text-xs text-center">
        Page 1
      </footer>
    </div>
  );
}
