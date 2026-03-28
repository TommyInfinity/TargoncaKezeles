import { Module } from './types';

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Targoncák és Szerkezet',
    description: 'Típusok, meghajtás, egységrakomány és karbantartási alapok.',
    summary: [
      'A targonca szakaszos működésű anyagmozgató gép.',
      'Csoportosítás: Kezelő pozíciója (üléses, állásos, gyalogkíséretű), Meghajtás (Elektromos, Belsőégésű), Művelet (Szállító, Vontató, Emelő).',
      'Elektromos: csendes, tiszta, de hosszú töltés. Belsőégésű: gyors pótlás, de zajos és szennyez.',
      'Egységrakomány: több áru összefogása szabványos méretben (Homogén: azonos, Inhomogén: kevert).',
      'Gépkönyv: a gép biztonságos kezelésének leírása. Gépnapló: a műszakos vizsgálatok és hibák rögzítése.',
      'Karbantartás: Tisztítás, Kenés, Ellenőrzés, Beállítás, Hibaelhárítás.'
    ],
    questions: [
      {
        id: 'q1_1',
        title: 'Melyik NEM tartozik a targonca kezelő pozíciója szerinti csoportosításba?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Vezetőüléses targonca', isCorrect: false },
          { id: 'b', text: 'Távirányítású targonca', isCorrect: true },
          { id: 'c', text: 'Gyalogkíséretű targonca', isCorrect: false }
        ]
      },
      {
        id: 'q1_2',
        title: 'Mi jellemző a belsőégésű motoros targoncákra?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Csendes üzeműek és nem szennyezik a levegőt.', isCorrect: false },
          { id: 'b', text: 'Üzemanyaguk gyorsan pótolható, de üzemük zajos.', isCorrect: true },
          { id: 'c', text: 'Sebességük függ az akkumulátor töltöttségétől.', isCorrect: false }
        ]
      },
      {
        id: 'q1_3',
        title: 'Mikor nevezünk egy egységrakományt homogénnek?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Ha kevert árukból állítják össze.', isCorrect: false },
          { id: 'b', text: 'Ha azonos árukból áll.', isCorrect: true },
          { id: 'c', text: 'Ha csak folyékony anyagot tartalmaz.', isCorrect: false }
        ]
      },
      {
        id: 'q1_4',
        title: 'Ki jogosult bejegyzést tenni az emelőgépnaplóba?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Csak a hatósági ellenőr.', isCorrect: false },
          { id: 'b', text: 'A gépkezelő, a javító és a szakértő is.', isCorrect: true },
          { id: 'c', text: 'Bárki, aki a gép közelében dolgozik.', isCorrect: false }
        ]
      },
      {
        id: 'q1_5',
        title: 'Párosítsd a karbantartási műveleteket a leírásukkal!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Tisztítás', right: 'Mosás' },
          { id: 'p2', left: 'Kenés', right: 'Zsírzás, olajszintek ellenőrzése' },
          { id: 'p3', left: 'Ellenőrzés', right: 'Szemrevételezés, mérőműszer' },
          { id: 'p4', left: 'Beállítás', right: 'Kopásból eredő korrekciók' }
        ]
      },
      {
        id: 'q1_6',
        title: 'Mekkora a nagy emelésű targonca jellemző emelési magassága?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: '150 - 200 mm', isCorrect: false },
          { id: 'b', text: '1,5 - 6,0 m', isCorrect: true },
          { id: 'c', text: 'Minimum 10 méter', isCorrect: false }
        ]
      },
      {
        id: 'q1_7',
        title: 'Párosítsd a raklapokat a méreteikkel!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'EUR-1', right: '800 x 1200 mm' },
          { id: 'p2', left: 'EUR-2', right: '1200 x 1000 mm' },
          { id: 'p3', left: 'EUR-3', right: '1000 x 1200 mm' },
          { id: 'p4', left: 'EUR-6', right: '800 x 600 mm' }
        ]
      },
      {
        id: 'q1_8',
        title: 'Melyik művelet végezhető el egy vontató targoncával?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Rakományok magasba emelése.', isCorrect: false },
          { id: 'b', text: 'Pótkocsik vagy görgős állványok vontatása.', isCorrect: true },
          { id: 'c', text: 'Csak gyalogos kísérettel való árumozgatás.', isCorrect: false }
        ]
      },
      {
        id: 'q1_9',
        title: 'Mi a gépkönyv elsődleges funkciója?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'A napi üzemanyag-fogyasztás vezetése.', isCorrect: false },
          { id: 'b', text: 'A gép biztonságos üzemeltetésének és karbantartásának leírása.', isCorrect: true },
          { id: 'c', text: 'A gépkezelő jogosítványának tárolása.', isCorrect: false }
        ]
      },
      {
        id: 'q1_10',
        title: 'Párosítsd a szerkezeti elemeket a funkciójukkal!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Kormánykerék', right: 'Irányváltoztatás' },
          { id: 'p2', left: 'Gázpedál', right: 'Gyorsítás' },
          { id: 'p3', left: 'Fékpedál', right: 'Lassítás, megállítás' },
          { id: 'p4', left: 'Vészleállító', right: 'Azonnali áramtalanítás' }
        ]
      },
      {
        id: 'q1_11',
        title: 'Milyen gyakran köteles a munkáltató kockázatértékelést végezni?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Évente egyszer.', isCorrect: false },
          { id: 'b', text: 'Legalább 3 évente.', isCorrect: true },
          { id: 'c', text: 'Csak ha új gépet vesznek.', isCorrect: false }
        ]
      },
      {
        id: 'q1_12',
        title: 'Mi a teendő, ha a gépkezelő nem rendelkezik a szükséges védőeszközzel?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Folytathatja a munkát óvatosan.', isCorrect: false },
          { id: 'b', text: 'Köteles megtagadni a munkavégzést.', isCorrect: true },
          { id: 'c', text: 'Saját felelősségére dolgozhat.', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'm2',
    title: 'Munkavédelem és Elsősegély',
    description: 'Biztonsági szabályok, balesetvédelem, tűzvédelem és életmentés.',
    summary: [
      'Munkavédelem: testi épség és egészség megóvása.',
      'A munkavállaló jogosult megtagadni a munkát, ha az életét közvetlenül veszélyeztetné.',
      'Baleset: egyszeri, külső hatás, ami sérülést vagy halált okoz.',
      'Munkabaleset: munkavégzés során vagy azzal összefüggésben éri a dolgozót.',
      'Elsősegély: 3-as érzékelés (nézni-hallgatni-érezni). Újraélesztés: 30 nyomás, 2 befújás.',
      'Tűzosztályok: A (szilárd), B (folyékony), C (gáz), D (fém).',
      'Veszélyes anyagok: tárolás fajtánként elkülönítve, biztonsági adatlappal.'
    ],
    questions: [
      {
        id: 'q2_1',
        title: 'Mi a munkavállaló kötelessége a védőeszközökkel kapcsolatban?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Csak akkor kell hordania, ha ellenőrzés van.', isCorrect: false },
          { id: 'b', text: 'Rendeltetésszerűen használni és tisztán tartani.', isCorrect: true },
          { id: 'c', text: 'Saját magának kell megvásárolnia őket.', isCorrect: false }
        ]
      },
      {
        id: 'q2_2',
        title: 'Mikor NEM minősül valami munkabalesetnek?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Ha a dolgozót a lakásáról a munkahelyére menet éri (saját autóval).', isCorrect: true },
          { id: 'b', text: 'Ha üzemi étkeztetés során történik.', isCorrect: false },
          { id: 'c', text: 'Ha a munkáltató saját járművével történik a munkába menet.', isCorrect: false }
        ]
      },
      {
        id: 'q2_3',
        title: 'Mi az újraélesztés (CPR) helyes aránya?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: '15 kompresszió, 5 befújás', isCorrect: false },
          { id: 'b', text: '30 kompresszió, 2 befújás', isCorrect: true },
          { id: 'c', text: 'Csak kompresszió, befújás nélkül', isCorrect: false }
        ]
      },
      {
        id: 'q2_4',
        title: 'Párosítsd a tűzosztályokat az égő anyagokkal!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'A osztály', right: 'Szilárd anyagok (fa, papír)' },
          { id: 'p2', left: 'B osztály', right: 'Folyékony anyagok (olaj, benzin)' },
          { id: 'p3', left: 'C osztály', right: 'Éghető gázok' },
          { id: 'p4', left: 'D osztály', right: 'Fémek' }
        ]
      },
      {
        id: 'q2_5',
        title: 'Melyik állítás igaz a veszélyes anyagok tárolására?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Bármilyen edényben tárolhatók, ha ráírjuk a nevét.', isCorrect: false },
          { id: 'b', text: 'Fajtánként elkülönítve, átlátható módon kell tárolni.', isCorrect: true },
          { id: 'c', text: 'Csak a méregraktárban szabad tárolni minden anyagot.', isCorrect: false }
        ]
      },
      {
        id: 'q2_6',
        title: 'Mennyi ideig kell figyelni a légzést az életjelek vizsgálatakor?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: '5 másodpercig', isCorrect: false },
          { id: 'b', text: '10 másodpercig', isCorrect: true },
          { id: 'c', text: '1 percig', isCorrect: false }
        ]
      },
      {
        id: 'q2_7',
        title: 'Párosítsd a biztonsági színeket a jelentésükkel!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Vörös', right: 'Tiltás / Tűzvédelem' },
          { id: 'p2', left: 'Sárga', right: 'Figyelmeztetés / Veszély' },
          { id: 'p3', left: 'Kék', right: 'Rendelkezés (kötelező előírás)' },
          { id: 'p4', left: 'Zöld', right: 'Menekülés / Elsősegély' }
        ]
      },
      {
        id: 'q2_8',
        title: 'Mi a teendő, ha a gépkezelő üzemzavart észlel?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Próbálja meg saját maga megjavítani.', isCorrect: false },
          { id: 'b', text: 'Azonnal állítsa le a gépet és értesítse a vezetőt.', isCorrect: true },
          { id: 'c', text: 'Folytassa a munkát óvatosan a műszak végéig.', isCorrect: false }
        ]
      },
      {
        id: 'q2_9',
        title: 'Melyik egyéni védőeszköz kötelező, ha leeső tárgyak veszélye áll fenn?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Védőszemüveg', isCorrect: false },
          { id: 'b', text: 'Védősisak', isCorrect: true },
          { id: 'c', text: 'Hallásvédő', isCorrect: false }
        ]
      },
      {
        id: 'q2_10',
        title: 'Párosítsd az elsősegélynyújtás lépéseit a tartalmukkal!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Felismerés', right: 'Veszélyhelyzet felmérése' },
          { id: 'p2', left: 'Segélyhívás', right: '104 vagy 112 tárcsázása' },
          { id: 'p3', left: 'Légút biztosítás', right: 'Fej hátrahajtása' },
          { id: 'p4', left: 'Sebellátás', right: 'Tisztítás és steril fedés' }
        ]
      },
      {
        id: 'q2_11',
        title: 'Melyik gáz veszélyes zárt térben a belsőégésű motoroknál?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Oxigén', isCorrect: false },
          { id: 'b', text: 'Szén-monoxid', isCorrect: true },
          { id: 'c', text: 'Nitrogén', isCorrect: false }
        ]
      },
      {
        id: 'q2_12',
        title: 'Milyen feszültség felett kell feszültségmentesíteni a szabadvezetéket?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Csak 1000V felett.', isCorrect: false },
          { id: 'b', text: 'Minden esetben, ha a biztonsági távolság nem tartható.', isCorrect: true },
          { id: 'c', text: 'Csak esős időben.', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'm3',
    title: 'Üzemeltetés és Technológia',
    description: 'Fékek, kormányzás, hidraulika, akkumulátorok és motorok.',
    summary: [
      'Fékberendezés: üzemi (láb) és rögzítő (kézi). Típusok: dob, tárcsa, szalag.',
      'Hajtáslánc: Mechanikus (közvetlen), Hidrodinamikus (gázpedállal), Hidrosztatikus (hidromotorral).',
      'Kormányzás: mechanikus, szervo vagy hidraulikus. Holtjáték max. 20 fok.',
      'Akkumulátor: villamos energiát vegyi energiává alakít. Töltéskor dugókat ki kell venni!',
      'Hidraulika: energiaátvitel folyadékkal. Részei: szivattyú, tartály, szelepek, munkahenger.',
      'Irányító személy: karjelzésekkel vagy rádióval segíti a kezelőt, ha nem látja a terhet.'
    ],
    questions: [
      {
        id: 'q3_1',
        title: 'Mekkora a kormánykerék megengedett maximális holtjátéka?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: '10 fok', isCorrect: false },
          { id: 'b', text: '20 fok', isCorrect: true },
          { id: 'c', text: '30 fok', isCorrect: false }
        ]
      },
      {
        id: 'q3_2',
        title: 'Mi a hidraulika olaj feladata?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Csak a kenés.', isCorrect: false },
          { id: 'b', text: 'Energiaátvitel, kenés, hűtés és csillapítás.', isCorrect: true },
          { id: 'c', text: 'A motor hajtóanyaga.', isCorrect: false }
        ]
      },
      {
        id: 'q3_3',
        title: 'Melyik fékrendszer szolgál a gép álló helyzetben való rögzítésére?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Üzemi fék', isCorrect: false },
          { id: 'b', text: 'Rögzítőfék', isCorrect: true },
          { id: 'c', text: 'Lassító fék', isCorrect: false }
        ]
      },
      {
        id: 'q3_4',
        title: 'Párosítsd a hidraulikus szelepeket a feladatukkal!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Fojtó szelep', right: 'Mennyiség (sebesség) szabályozás' },
          { id: 'p2', left: 'Útváltó szelep', right: 'Áramlási irány meghatározása' },
          { id: 'p3', left: 'Visszacsapó szelep', right: 'Csak egy irányba engedi az olajat' },
          { id: 'p4', left: 'Nyomáshatároló', right: 'Túlterhelés elleni védelem' }
        ]
      },
      {
        id: 'q3_5',
        title: 'Mit kell tenni az akkumulátor cellák dugóival töltéskor?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Szorosan le kell zárni őket.', isCorrect: false },
          { id: 'b', text: 'El kell távolítani őket a gázfejlődés miatt.', isCorrect: true },
          { id: 'c', text: 'Nem számít, hogy rajtuk vannak-e.', isCorrect: false }
        ]
      },
      {
        id: 'q3_6',
        title: 'Párosítsd az irányító személy karjelzéseit a jelentésükkel!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Két kar vízszintesen', right: 'Figyelem / Utasítás kezdete' },
          { id: 'p2', left: 'Jobb kar felfelé mutat', right: 'Fel (emelés)' },
          { id: 'p3', left: 'Jobb kar lefelé mutat', right: 'Le (süllyesztés)' },
          { id: 'p4', left: 'Két kéz mellmagasságban összefogva', right: 'Vége a munkafolyamatnak' }
        ]
      },
      {
        id: 'q3_7',
        title: 'Melyik hajtáslánc típusnál változtatható a sebesség fokozatmentesen a gázpedállal?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Mechanikus hajtáslánc', isCorrect: false },
          { id: 'b', text: 'Hidrodinamikus hajtáslánc', isCorrect: true },
          { id: 'c', text: 'Lánchajtás', isCorrect: false }
        ]
      },
      {
        id: 'q3_8',
        title: 'Melyik akkumulátor típus a leggyakoribb a targoncáknál?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Savas ólomakkumulátor', isCorrect: true },
          { id: 'b', text: 'Lúgos akkumulátor', isCorrect: false },
          { id: 'c', text: 'Nikkel-kadmium akkumulátor', isCorrect: false }
        ]
      },
      {
        id: 'q3_9',
        title: 'Mi a teendő, ha a hidraulika tömlő megsérül?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Tekerjük körbe szigetelőszalaggal.', isCorrect: false },
          { id: 'b', text: 'Azonnal állítsuk le a rendszert és cseréltessük ki.', isCorrect: true },
          { id: 'c', text: 'Csak akkor cseréljük, ha már nem mozog a gép.', isCorrect: false }
        ]
      },
      {
        id: 'q3_10',
        title: 'Párosítsd a hajtásokat a típusukkal!',
        type: 'matching',
        pairs: [
          { id: 'p1', left: 'Dörzshajtás', right: 'Erőzáró hajtás' },
          { id: 'p2', left: 'Lánchajtás', right: 'Alakzáró hajtás' },
          { id: 'p3', left: 'Fogaskerékhajtás', right: 'Közvetlen alakzáró kapcsolat' },
          { id: 'p4', left: 'Szíjhajtás', right: 'Súrlódással vagy alakkal (bordás)' }
        ]
      },
      {
        id: 'q3_11',
        title: 'Mi a teendő, ha a fékfolyadék szintje csökken?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Csak töltsük utána.', isCorrect: false },
          { id: 'b', text: 'Azonnal meg kell keresni a szivárgás okát.', isCorrect: true },
          { id: 'c', text: 'Nem baj, ha fog a fék.', isCorrect: false }
        ]
      },
      {
        id: 'q3_12',
        title: 'Milyen gyakran kell ellenőrizni a fékpedál holtjátékát?',
        type: 'multiple-choice',
        choices: [
          { id: 'a', text: 'Hetente egyszer.', isCorrect: false },
          { id: 'b', text: 'Minden munkakezdéskor.', isCorrect: true },
          { id: 'c', text: 'Csak szervizeléskor.', isCorrect: false }
        ]
      }
    ]
  }
];
