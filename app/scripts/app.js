'use strict';

/**
 * @ngdoc overview
 * @name skolkaApp
 * @description
 * # skolkaApp
 *
 * Main module of the application.
 */
angular
    .module('skolkaApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'pascalprecht.translate',
        'ngFader',
        'unhideWhen',
        'getMaxChildHeight',
        'jkuri.gallery',
        'ui.select',
        'ui.bootstrap',
        'uiGmapgoogle-maps'
    ])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/ruzinov', {
                templateUrl: 'views/ruzinov/ruzinov.html',
                controller: 'RuzinovCtrl'
            })
            .when('/ruzinov/spaces', {
                templateUrl: 'views/ruzinov/spaces.html',
                controller: 'RuzinovspacesCtrl'
            })
            .when('/ruzinov/information', {
                templateUrl: 'views/ruzinov/information.html',
                controller: 'RuzinovinformationCtrl'
            })
            .when('/ruzinov/daily-schedule', {
                templateUrl: 'views/ruzinov/daily-schedule.html',
                controller: 'RuzinovdailyscheduleCtrl'
            })
            .when('/ruzinov/activities', {
                templateUrl: 'views/ruzinov/activities.html',
                controller: 'RuzinovactivitiesCtrl'
            })
            .when('/ruzinov/registration', {
                templateUrl: 'views/ruzinov/registration.html',
                controller: 'RuzinovregistrationCtrl'
            })
            .when('/ruzinov/pricelist', {
                templateUrl: 'views/ruzinov/pricelist.html',
                controller: 'RuzinovpricelistCtrl'
            })
            .when('/ruzinov/gallery', {
                templateUrl: 'views/ruzinov/gallery.html',
                controller: 'RuzinovgalleryCtrl'
            })
            .when('/dunajskaluzna', {
                templateUrl: 'views/dunajskaluzna.html',
                controller: 'DunajskaluznaCtrl'
            })
            .when('/oz', {
                templateUrl: 'views/oz.html',
                controller: 'OzCtrl'
            })
            .when('/hotel', {
                templateUrl: 'views/hotel.html',
                controller: 'HotelCtrl'
            })
            .when('/party', {
                templateUrl: 'views/party.html',
                controller: 'PartyCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/montessori', {
                templateUrl: 'views/montessori.html',
                controller: 'MontessoriCtrl'
            })
            .when('/state-bonus', {
                templateUrl: 'views/state-bonus.html',
                controller: 'StatebonusCtrl'
            })
            .when('/healthy-kindergarten', {
                templateUrl: 'views/healthy-kindergarten.html',
                controller: 'HealthyKindergartenCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        // add translation table
        $translateProvider
            .useSanitizeValueStrategy('sanitize')
            .translations('gb', translationsEn)
            .translations('sk', translationsSk)
            .preferredLanguage('sk');

    });


var translationsSk = {
    HEADER: 'Štvorlístok',
    SUB_HEADER: 'Materská škôlka a jasle',
    NAV_HEADER: 'Skryť navigáciu',
    MOTTO: '"DIEŤA JE ZVIDITEĽNENÁ LÁSKA", Novalis',
    HOME: 'Domov',
    ABOUT_US: 'O nás',
    WHO_WE_ARE: 'Kto sme',
    HEALTHY_KINDERGARTEN_TOOLTIP: 'Základom zdravého vývoja dieťaťa je vyvážená kombinácia zdravej stravy a pohybu.',
    DUNAJSKALUZNA: 'Dunajská Lužná',
    OZ: 'OZ štvorlístkovo',
    HOTEL_TOOLTIP: 'Doprajte vašim deťom výnimočnú starostlivosť aj cez víkendy',
    MONTESSORI_LINK: 'Maria Montessori',
    MONTESSORI_TOOLTIP: 'Spoznajte výnimočnú Mariu Montessori',
    PARTY: 'Detská oslava',
    CONTACT: 'Kontakt',
    I_WANT_TO_APPLY_MY_CHILD: 'Chcem prihlásiť svoje dieťa',
    FOOTER: '&copy; Štvorlístok',
    HIGHLIGHTS: {
        HEALTHY_KINDERGARTEN_HEADER: 'Zdravá škôlka',
        HEALTHY_KINDERGARTEN_TEXT: 'Základom zdravého vývoja dieťaťa je vyvážená kombinácia zdravej stravy a pohybu',
        STATE_BONUS_HEADER: 'Štátny príspevok',
        STATE_BONUS_TEXT: 'Štát poskytuje príspevok rodičom alebo zákonnému zástupcovi dieťaťa na úhradu za starostlivosť o dieťa',
        HOTEL_HEADER: 'Zábavný detský hotel Štvorlístok',
        HOTEL_TEXT: 'Zábavný detský hotel Štvorlístok sa teší na detičky počas víkendových dní a nocí'
    },
    HOMEPAGE: {
        HEADER: 'Vitajte',
        WELCOME: 'Srdečne Vás vítame na stránke súkromnej materskej škôlky a jasličiek štvorlístok',
        MOTTO_HEADER: 'Otvárame deťom svet poznania',
        P1: 'Ranné detstvo považujeme za rozhodujúce obdobie pre ďalší vývin a formovanie osobnosti dieťaťa, a práve preto sme sa rozhodli vytvoriť Vaším deťom podnetné a láskavé prostredie rodinného charakteru.',
        P2: 'Súkromná materská škôlka a detské jasle štvorlístok sú zariadením, ktoré ponúkajú vzdelávanie a výchovu podľa princípov pedagogiky Márie Montessori v súkromí rodinného domu s vlastnou priestrannou záhradou.',
        P3: 'Naším cieľom je rozvíjať celú osobnosť dieťaťa, a práve preto sme sa rozhodli intenzívnejšie venovať celospoločenskému problému súčasnosti, ktorým je ekológia životného prostredia. V našich zariadeniach štvorlístok sa aktívne podieľame na environmentálnych aktivitách a zapájame sa do projektu EKOLOGICKÁ STOPA, čím budujeme u detí pozitívny vzťah k životnému prostrediu a prírode.',
        P4: 'Našim detičkám je k dispozícií dvojjazyčné slovensko-anglické prostredie v ktorom sa učia anglický jazyk prirodzeným spôsobom, a osvojujú si ho ako druhý jazyk, a nie ako cudzí jazyk. Komunikácia vo viacerých jazykoch je pre deti v rannom veku jednoduchá a prirodzená, čoho názorným príkladom sú deti vyrastajúce v prostredí, v ktorom obaja rodičia rozprávajú iným jazykom.',
        P5: 'V našich zariadeniach štvorlístok si uplatňujeme zásady správneho životného štýlu, ktoré vkladáme do pozornosti deťom formou každodenného pohybu, každodenného cvičenia, športových krúžkov a prechádzok. Pohyb je pre deti samozrejmosťou a mal by ňou zostať aj v dospelosti. „Cvičenie im vo svojej podstate dáva možnosť objavovať niečo nové.”',
        P6: ''
    },
    ABOUT: {
        HEADER: 'Dovoľte nám, aby sme sa Vám predstavili...',
        P1: 'Dovoľte nám, aby sme sa Vám predstavili...',
        P2: 'Škôlka a jasle Štvorlístok plné detí sú miestom, ktoré nás robí naozaj šťastnými a naplnenými. Našou prácou sa snažíme deťom odovzdať praktické skúsenosti a poznania na ktorých môžu v budúcnosti stavať. Sme tím mladých ľudí, ktorí usmerňujú Vaše detí, a vedú ich k správnym postojom do života. Máme deti, milujeme ich, chceme im dať to najlepšie, a to znamená okrem iného aj maximálnu starostlivosť, rozumné postoje a dobré vzdelanie. ',
        P3: 'Naša materská škôlka a jasličky štvorlístok vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov. Ranné detstvo považujeme za kľúčové a centrálne obdobie pre ich životnú cestu a formovanie osobnosti, a práve preto si myslíme, že je veľmi dôležité aby toto obdobie dieťa prežilo v podnetnom a láskavom prostredí. V spolupráci s rodičmi napomáhame deťom formovať si zdravé korene, ktoré z deti vytvoria fyzicky, emocionálne, mentálne, citovo rozvinuté a charakterové osobnosti. ',
        P4: 'Filozofia, ktorou sa riadime je pomôcť rodine vychovávať a rozvíjať samostatné, tvoriace a zdravo sebavedomé deti. Charakterizuje nás rodinná atmosféra v rodinnom prostredí (deti sa u nás cítia ako doma) kde je pre dieťa radosť byť. Naším cieľom je vytvárať inšpiratívne a láskyplné prostredie pre prirodzený a radostný rozvoj detskej osobnosti, podporovať ich prirodzený vývoj opierajúci sa o vlastnú skúsenosť, sebestačnosť, sebadôveru, vzájomný rešpekt a lásku. Zároveň však vedieme deti k samostatnosti a zodpovednosti. Pripravujeme ich na dôležité životné chvíle (napr. vstup do materskej škôlky, vstup do základnej školy) a nenásilnou formou sa učia nadväzovať sociálne vzťahy, spoznávať okolitý svet a učia sa rešpektovať seba samých ako aj druhých. Rešpektujeme senzitívne obdobia a potreby detí, poskytujeme im individuálny prístup a napomáhame im k spoznaniu pozitívnej formy vlastného sebavyjadrenia. ',
        MOTTO_HEADER: 'OTVÁRAME DEŤOM SVET POZNÁVANIA A ŠÍRIME LÁSKU'
    },
    MONTESSORI: {
        LINK1: 'spoznajte výnimočnú',
        LINK2: 'Mariu Montessori',
        HEADER: 'Zariadenie inšpirované výnimočným alternatívnym prístupom Márie Montessori',
        CV: {
            CV: 'Životopis Márie Montessori',
            P1: 'Maria Montessori žila v rokoch 1870 – 1952. V roku 1896 sa bola ako prvá žena v Taliansku promovaná na doktorku medicíny. Pracovala ako asistentka na Univerzitnej psychiatrickej klinike v Ríme, kde sa začala venovať práci so slabomyseľnými deťmi. V rokoch 1898 - 1900 bola vedúcou školy pre vzdelávanie liečebných pedagógov a zároveň prevádzala prax detskej lekárky. Neskôr študovala psychológiu a filológiu. V rokoch 1904 - 1908 viedla katedru antropológie na Univerzite v Ríme. 6.januára 1906 otvorila Dom detí - prvé predškolské zariadenie. Od tej doby sa plne venovala pedagogickej, spisovateľskej a prednáškovej činnosti. Založila prvú asociáciu pre šírenie svojich metód Opera Montessori. V období fašizmu zatvorili jej školy v Taliansku a Nemecku, v Rakúsku pálili jej knihy. Po roku 1939 žila v Indii, kde podnietila zakladanie Montessori škôl. V roku 1949 sa vrátila do Európy a až do svojej smrti žila v Holandsku. Svoje poznatky z výskumu v pedagogickej oblasti zhrnula v knihách:',
            BOOK1: 'The Montessor method',
            BOOK2: 'Pedagogical anthropology',
            BOOK3: 'Advanced Montessori method',
            BOOK4: 'Spontaneous activity in education',
            BOOK5: 'Dr. Montessori´s own handbook',
            BOOK6: 'The absorbnet mind',
            BOOK7: 'The discovery of the child',
            BOOK8: 'The secret of the childhood'
        },
        WHAT_IS: {
            WHAT_IS: 'Čo je Montessori pedagogika?',
            P1: '„Počujem a zabudnem.',
            P2: 'Uvidím a zapamätám si.',
            P3: 'Uchopím a pochopím.“',
            P4: 'Montessori pedagogika je rozsiahla a svetovo uznávaná metodická sústava. Zahŕňa v sebe nielen filozofiu rozvoja dieťaťa, ale hlavne konkrétne praktické postupy s množstvom pomôcok. Metóda Montessori vznikla na základe pozorovania fyziologického vývoja ľudského mozgu v rannom veku. Východiskom je ponúknuť deťom intelektuálne podnety v správnom čase (v konkrétnej senzitívnej fáze vývoja) a správnou formou. Montessori pedagogiku je vhodné používať už v najútlejšom veku (12 mesiacov) kedy nastáva optimálne obdobie na rozvoj elementárneho tvorivého a intelektového potenciálu dieťaťa. Deti vedené metodikou Montessori začínajú spontánne písať, čítať a počítať už v predškolskom veku. Cieľom pedagogiky je podporovať u dieťaťa prirodzenú túžbu učiť sa, formou vlastných pokusov a omylov spoznávať svet okolo seba a tým budovať sebadôveru a pevnú osobnosť dieťaťa. ',
            SUBHEADER: 'Hlavnou myšlienkou programu je:',
            LI1: 'podporovať celostný osobnostný rozvoj dieťaťa',
            LI2: 'aktivizovať a motivovať rozvoj psychomotoriky, poznania',
            LI3: 'emocionality a sociability',
            LI4: 'rozvíjať tvorivosť a predstavy v každodenných aktivitách, pomôcť dieťaťu formovať vlastnú jedinečnosť a životné kompetencie (spôsobilosti)',
            P5: 'Prostredníctvom programu sa realizuje rozvoj osobnostných kvalít dieťaťa v poznaní: samého seba, sveta ľudí, prírody, kultúry. Program je integrovaný do štyroch tematických okruhov Ja som, Ľudia, Príroda, Kultúra'
        },
        PRINCIPLES: {
            PRINCIPLES: 'Základny Montessori pedagogiky',
            SUBHEADER1: 'Pomôž mi, aby som to dokázal sám',
            P1: 'Úlohou dospelých je to, aby dieťa vlastnými silami a svojim tempom získalo nové vedomosti a schopnosti, pričom sa mu vytvoria tie najlepšie podmienky.',
            SUBHEADER2: 'Ruka je nástrojom ducha',
            P2: 'Práca rúk je základom pre pochopenie predmetov a javov, základom pre rozvoj myslenia a reči. Metodika kladie veľký dôraz na spojenie duševnej aktivity a tvorivej telesnej aktivity. Vychádza sa z konkrétneho poznania pri manipulácii s vecami',
            SUBHEADER3: 'Rešpektovanie senzitívnych období',
            P3: 'Senzitívne obdobie je doba, kedy je dieťa obzvlášť citlivé na určité intelektuálne podnety. V tomto období je dieťa schopné vstrebávať nové poznatky a nadobúdať schopnosti prirodzene- tzv. nevedomé učenie.',
            SUBHEADER4: 'Polarizácia pozornosti',
            P4: 'Dieťa je schopné sústrediť sa intenzívne a dlhodobo iba na prácu, ktorá ho zaujme',
            SUBHEADER5: 'Trojstupňová výučba',
            P5: 'Táto metóda je určená predovšetkým deťom v predškolskom veku. Poznávanie sa skladá z troch krokov:',
            LI1: 'Pomenovanie učiteľom',
            LI2: 'Znovupoznanie',
            LI3: 'Aktívne ovládanie',
            SUBHEADER6: 'Práca s chybou',
            P6: 'Dieťa nie je za chyby trestané ani záporne hodnotené. Chyba má byť ukazovateľom toho, čo je ešte potrebné precvičiť a je chápaná ako bežný a prirodzený prejav v procese učenia. Učiteľ by nemal používať negatívne hodnotenie, ale ponúknuť dieťaťu inú formu kontroly. Pomôcky sú pripravené tak, aby dieťa bolo schopné samo skontrolovať správnosť riešenia.',
            SUBHEADER7: 'Práca s pochvalou',
            P7: 'Každé dieťa potrebuje pocit istoty, bezpečia a úspechu, no neustále kladné či záporné hodnotenie zo strany dospelých ho obmedzuje. S pochvalou sa v Montessori pedagogike zachádza primerane tak, aby sa dieťa nestalo na pochvale závislé'
        },
        PRACTICE_LIFE: {
            PRACTICE_LIFE: 'Praktický život',
            P1: 'Od malička sa deti pozerajú na činnosti dospelých a snažia sa opakovať všetko to, čo vidia. Cvičenia praktického života sú veľmi dôležitým základom pre ďalší rozvoj dieťaťa. Do tých cvičení patrí všetko to, čo robia dospelý niekoľkokrát denne, napríklad: upratovanie, obliekanie. Deti milujú skutočné veci, preto ich baví presýpať, prelievať, nalievať, zametať, utierať prach, čistiť obuv, stolovať, skladať prádlo, zapínať gombíky, zips a zaväzovať šnúrky. Dieťa sa učí starať o vlastnú osobu, o svoje vlastné telo, ale i o okolie a spoločnosť. Pomocou cvičení praktického života sa rozvíja jemná motorika, hrubá motorika a koordinácia ruka-oko.',
            P2: 'Existujú štyri oblasti aktivít praktického života:',
            LI1: 'starostlivosť sám o seba - obliekanie sa, vyzliekanie sa, umývanie, česanie',
            LI2: 'starostlivosť o okolie - upratovanie, utieranie, leštenie, starostlivosť o rastliny, starostlivosť o zvieratá',
            LI3: 'kontrola pohybu - prelievanie, presýpanie, pohybové aktivity (vonku), umelecké aktivity',
            LI4: 'spoločenský život (správanie) - pozdravenie, ospravedlnenie, prijatie ospravedlnenia, poďakovanie, poprosenie...',
            P3: 'Je dôležité mať na pamäti, že aktivity praktického života majú pomôcť deťom pri ich orientácií vo svete, v každodenných činnostiach.',
        },
        SENSE_EDUCATION: {
            SENSE_EDUCATION: 'Zmyslová výchova',
            P1: 'Cieľom zmyslovej výchovy je poskytnúť deťom možnosť získať vedomé informácie z prostredia pomocou zmyslov. Mária Montessori verila, že dieťa vníma všetkými svojimi zmyslami hneď od narodenia. Pomocou zmyslov sa dieťa zoznamuje so svojím okolitým svetom a študuje ho. Zmyslový materiál, ktorý Mária Montessori vyvinula rozvíja intelekt dieťaťa (zapája všetky jeho zmysly - hmat, čuch, sluch, zrak a chuť). Prostredníctvom zmyslov sa rozvíja mozog a vytvárajú sa nové nervové prepojenia. Pomocou tohto zmyslového materiálu sa dieťa učí pomenovávať, rozlišovať, porovnávať a triediť. Zmyslový materiál rozdeľujeme na materiál na:',
            LI1: 'rozlišovanie rozmerov',
            LI2: 'rozlišovanie farieb',
            LI3: 'rozlišovanie tvarov',
            LI4: 'rozlišovanie povrchov',
            LI5: 'rozlišovanie štruktúr',
            LI6: 'rozlišovanie váhy',
            LI7: 'rozlišovanie zvukov',
            LI8: 'rozlišovanie tónov',
            LI9: 'rozlišovanie chutí',
            LI10: 'rozlišovanie teplôt a schopnosti viesť teplo'
        },
        LANGUAGE_EDUCATION: {
            LANGUAGE_EDUCATION: 'Jazyková výchova',
            P1: 'Jazyková výchova je oblasť, v ktorej si dieťa rozvíja reč. Využívajú sa materiály, ktoré zároveň slúžia k výučbe písania a čítania. S písaním a čítaním začína dieťa vo veku okolo 4 - 6 rokov. Je však veľmi dôležité vystihnúť senzitívne obdobie, kedy dieťa chce samo písať alebo čítať. Čítanie prebieha genetickou metódou čítania, t. j. čítaním po písmenkách a nie po slabikách. Podľa Márie Montessori používame na písanie písané písmo a na čítanie zasa tlačené písmo.'
        },
        MATHEMATICS: {
            MATHEMATICS: 'Matematika',
            P1: 'Matematický rozvoj začína od narodenia. Podľa Márie Montessori je ľudský duch duchom matematickým. Má schopnosť abstrahovať, niečo si predstaviť a argumentovať. Matematický materiál učí rozlišovať seba od ostatného, vnímať dĺžku, šírku a výšku, vnímať dimenzie, porovnávať veľkosti a formy a experimentovať.'
        }
    },
    HOTEL: {
        HOTEL: 'Zábavný detský hotel Štvorlístok',
        P1: 'Zábavný detský hotel Štvorlístok sa teší na detičky počas víkendových dní a nocí. Činnosťou Štvorlístku je zabezpečovať:',
        LI1: 'babysitting v našich zariadeniach (Bratislava - Prievoz, Dunajská Lužná) počas školských prázdnin',
        LI2: 'babysitting v domácnostiach',
        LI3: 'babysitting počas víkendových dní',
        LI4: 'babysitting počas víkendových nocí',
        LI5: 'organizovanie tematických víkendov',
        P2: 'Babysitting počas školských prázdnin v zariadeniach štvorlístka (Bratislava - Prievoz, Dunajská Lužná)',
        TH1: 'Týždenná starostlivosť	 (pondelok - piatok)',
        TD1: 'deti vo veku od 1 do 3 rokov:',
        TD2: '130,- Eur/1 týždeň',
        TD3: 'deti vo veku od 3 do 7 rokov:',
        TD4: '120,- Eur/1 týždeň',
        TD5: 'uvedené sumy nezahŕňajú stravnú jednotku:',
        TD6: '3,- Eur/deň',
        P3: 'Babysitting v domácnostiach v rámci Bratislavského kraja a blízkeho okolia (v rozsahu 8 hodín denne)',
        TH2: 'Týždenná starostlivosť	 (pondelok - piatok)',
        TD7: 'deti vo veku od 1 do 3 rokov:',
        TD8: '220,- Eur/1 týždeň',
        TD9: 'deti vo veku od 3 do 7 rokov:',
        TD10: '200,- Eur/1 týždeň',
        P4: 'Babysitting počas víkendových dní a nocí v zariadeniach štvorlístka (Bratislava - Prievoz, Dunajská Lužná)',
        TD11: 'každá začatá hodina do 17:00',
        TD12: '6,- Eur/hodina',
        TD13: 'každá začatá hodina po 17:00',
        TD14: '7,- Eur/hodina',
        TD15: 'nočný babysitting od 18:00 do 08:00',
        TD16: '50,- Eur',
        TD17: 'min. 4 hodiny',
        TD18: 'počas víkendového a nočného babysittingu stravu pre dieťa zabezpečuje rodič (resp. na základe vzájomnej dohody je možné stravu zabezpečiť)',
        TD19: 'nočný babysitting pre deti navštevujúce jasle, alebo škôlku štvorlístok je v sume 30,-/noc (od 18:00 do 08:00)',
    },
    HEALTHY_KINDERGARTEN: {
        HEALTHY_KINDERGARTEN: 'Zdravá škôlka',
        P1: 'Základom zdravého vývoja dieťaťa je vyvážená kombinácia zdravej stravy a pohybu.',
        H1: 'Strava',
        LI1: 'strava, ktorú poskytujeme spĺňa predpísané normy v predškolských zariadeniach',
        LI2: 'je pripravovaná každodenne z čerstvých surovín',
        LI3: 'je pestrá a podľa zásad zdravej výživy',
        LI4: 'je bohatá na ovocie a zeleninu (v letných mesiacoch je obohatená o produkty z vlastnej záhradky detí)',
        LI5: 'pitný režim, ktorý sa dodržuje starostlivo a priebežne počas celého dňa pozostáva z čerstvých vôd, čajov, smoothie a čerstvých ovocných štiav odšťavených priamo v zariadení',
        LI6: 'v našich zariadeniach sa nachádza pekárnička chleba, v ktorej si počas týždňa pripravujeme vlastný chlebík',
        P2: 'Strava, ktorú detičkám v našej škôlke a jasličkách poskytujeme pozostáva z desiaty, obedu a olovrantu, vrátane každodenného prísunu ovocia a zeleniny. Pitný režim je dodržiavaný počas celého dňa.',
        P3: 'Obedy zabezpečuje firma zameriavajúca sa na dovoz stravy pre predškolské zariadenia a spĺňa všetky predpísané normy.',
        H2: 'Pohyb',
        P4: 'V našich jasliach a súkromnej škôlky je deťom poskytnutý dostatočný pohyb prostredníctvom každodenných pohybových aktivít a prácou v záhrade detí.',
        H3: 'Pohybové aktivity:',
        LI7: 'ranná rozcvička',
        LI8: 'detská joga',
        LI9: 'zumba',
        LI10: 'prechádzky na čerstvom vzduchu',
        LI11: 'každodenný pobyt vonku na vlastnom dvore',
        LI12: 'pobyty v prírode (napr. ZOO, múzeu včelárstva, Bio farma)',
        H4: 'Krúžky',
        LI13: 'minifit',
        LI14: 'minigym',
        LI15: 'tanec',
        LI16: 'muzikoterapia',
        LI17: 'plavecký výcvik',
        LI18: 'korčuľovanie',
        PANEL_FOOTER1: 'Krúžky nám zabezpečuje OZ krúžkovo:',
        H5: 'Záhradka detí',
        LI19: 'v našich zariadeniach máme ovocnú, zeleninovú a bylinkovú záhradku, ktorej plody sú výsledkom práce detí',
        LI20: 'deti sa učia ako si z malinkého semienka dokážeme vypestovať zeleninu a rôzne bylinky',
        LI21: 'deti sa učia starať o záhradku, čo vzbudzuje u nich záujem o vytvorenie si dobrého vzťahu s prírodu'
    },
    STATE_BONUS: {
        STATE_BONUS: 'Štátny príspevok',
        P1: 'Dňom 01.01.2011 nadobudol účinnosť zákon č. 513/2010 Z .z., ktorým sa mení a dopĺňa zákon č. 571/2009 Z .z o rodičovskom príspevku a zákon č. 561/2008 Z .z o príspevku na starostlivosť o dieťa. Rodič alebo zákonný zástupca dieťaťa (je osoba, ktorej je dieťa zverené do náhradnej starostlivosti na základe právoplatného rozhodnutia príslušného orgánu ďalej len zákonný zástupca) si môže uplatniť nárok na poberanie príspevku na starostlivosť o dieťa do 3 rokov dieťaťa.',
        H1: 'Od 01. 01. 2016 sa tento príspevok zvýšil na',
        NUM: '280,- EUR/mesiac',
        P2: 'Štát poskytuje príspevok rodičom alebo zákonnému zástupcovi dieťaťa na úhradu za starostlivosť o dieťa. Nárok si môže uplatniť rodič alebo zákonný zástupca dieťaťa, ktorý má trvalý pobyt na území SR, vykonáva zárobkovú činnosť, alebo študuje a zabezpečuje starostlivosť o dieťa do veku 3 rokov pomocou poskytovateľa (fyzickej alebo právnickej osoby na túto činnosť určenej) na území SR.',
        LI1: 'Príspevok poskytuje Úrad práce, sociálnych vecí a rodiny SR',
        LI2: 'Rodič alebo zákonný zástupca podá žiadosť o príspevok na starostlivosť o dieťa v mieste trvalého bydliska',
        LI3: 'Rodič na úrad dokladá občiansky preukaz a rodný list dieťaťa',
        LI4: 'Zmluvu o poskytovaní starostlivosti o dieťa uzatvorenú s poskytovateľom starostlivosti'
    },
    RUZINOV: {
        TABLE_OF_CONTENTS: 'Kam ďalej?',
        RUZINOV: 'Ružinov',
        SPACES: {
            SPACES: 'Priestory',
            P1 : 'Súkromná materská škôlka a jasle štvorlístok sa nachádzajú v rodinnom dome. Jeho súčasťou je krásna, dostatočne veľká a priestranná záhrada, ktorá umožňuje deťom každý deň tráviť čas vonku, na vzduchu (ideme von aj keď trošku mrholí). Dobrovoľnou činnosťou detí je starostlivosť o záhradu ako aj o kvetinovú, ovocnú, zeleninovú a bylinkovú záhradku. Deti si tak majú možnosť budovať vzťahy k prírode a k starostlivosti o niečo, čo im je zverené. V škôlke sa nachádzajú tri herničky, miestnosť na cvičenie a čitáreň (čitáreň dáva deťom priestor, v ktorom môžu prostredníctvom kníh objavovať a spoznávať to, čo je pre nich ešte záhadou). Vybavenie ako aj pozemok okolo škôlky štvorlístok sú špeciálne prispôsobené potrebám detí. Štvorlístok funguje na základe povolenia Regionálneho úradu verejného zdravotníctva a ďalších dôležitých inštitúcií, čo znamená, že Vášmu dieťaťu je zabezpečené vzdelávanie a poznávanie v príjemnom, priateľskom, rodinnom a zároveň aj bezpečnom prostredí.'
        },
        INFORMATION: {
            INFORMATION: 'Informácie',
            P1: 'V našom štvorlístku máme tri skupinky, ktoré nazývame:',
            LI1: 'mravčeky (najmladšia skupinka)',
            LI2: 'slniečka (stredná skupinka)',
            LI3: 'žabky (najstaršia skupinka)',
            P2: 'Ranné preberanie detí zabezpečuje učiteľka za prítomnosti rodiča, alebo zákonného zástupcu, ktorý dieťa do zariadenia priviedol. Prijíma len deti, u ktorých po vykonaní ranného filtra nezistila známky akútneho ochorenia. V prípade, že sa zistia náznaky ochorenia dieťa môže byť prijaté len na základe odporúčania od ošetrujúceho lekára. V prípade, že sa u dieťaťa v priebehu dňa prejavia známky ochorenia, rodič je telefonicky kontaktovaný. Dieťa je dočasu kým prídu rodičia izolované od ostatných detí.',
            P3: 'Priestory štvorlístka sú každý deň čistené a dezinfikované germicidným UVC žiaričom, čo prispieva k znižovaniu chorobnosti detí. Okrem iného naša čistička vzduchu, pohlcovač prachu a zvlhčovač vzduchu dodáva hlavne v zimných obdobiach deťom čistý vzduch.',
            P4: 'V našom štvorlístku sú vítané deti vo veku od 1r. do 6r. (v prípade odloženej školskej dochádzky do 7r). Po individuálnom dohovore prijímame aj detičky mladšie ako jeden rok, nie však mladšie ako 10 mesiacov.',
            P5: 'Naši malý, veľký štvorlístkáči majú možnosť tráviť spolu čas každý deň od pondelka do piatka, v čase od 07:00 do 17:00 a je už len na nich, ako to využijú. O 08:15 hod začíname rozcvičkou, alebo anglickým kútikom. Neskoršie ranné príchody sú po dohode možné, ale neodporúčajú sa kvôli narušeniu programu. Všetky obmedzenia, ktoré môžete z našej strany pociťovať, sú len a len v prospech Vašich detí.',
            P6: 'Naše dvere sú otvorené denné od pondelka do piatka (okrem víkendov, štátnych sviatkov a dní pracovného pokoja). Sme otvorení aj počas všetkých školských prázdnin, a v mesiaci júl a august fungujeme ako letná školička.',
            H1: 'Organizačné podmienky:',
            LI4: 'Platba sa uskutočňuje vždy do 25. dňa v kalendárnom mesiaci na základe faktúry na mesiac vopred bankovým prevodom alebo v hotovosti.',
            LI5: 'Otváracia doba štvorlístka je od 07:00 do 17:00 pre bežný poriadok, a je stanovený úmerne veku dieťaťa.',
            LI6: 'Príchod dieťaťa do štvorlístka je do 08:15 hod., neskorší príchod treba oznámiť prostredníctvom sms správy (návšteva lekára, prípadne iný problém).',
            LI7: 'Pri chorobe dieťaťa sa za neprítomnosť dieťaťa odrátava stravná jednotka odhlásená včas, ktorá bude odpočítaná po ukončení daného mesiaca v mesiaci nasledujúcom vo faktúre zaslanej rodičovi.',
            LI8: 'Stravnú jednotku je možné odhlásiť prostredníctvom sms najneskôr do 07:00 v daný deň.',
            LI9: 'Rodičia sú povinný pri odovzdávaní dieťaťa do štvorlístka oboznámiť pedagogický dozor o jeho zdravotnom stave a informovať nás, či dieťa užíva lieky (v prípade ak ich užíva - ide o zdravie a bezpečnosť detí).',
            LI10: 'Rodičia sú povinný oboznámiť pedagogický dozor o alergiách dieťaťa, rovnako ako aj o podozreniach na alergiu.',
            LI11: 'Dieťa je vydané len rodičom, alebo osobám nimi určenými.',
            LI12: 'Ak dieťa v zariadení chýbalo dlhšie ako 5 dní (zo zdravotných dôvodov), musí rodič, alebo zákonný zástupca predložiť písomné prehlásenie nie staršie ako 1 deň o tom, že dieťa nemá prenosné ochorenie a nebolo mu nariadené prenosné ochorenie, ktoré sa dokladá lekárskym potvrdením o zdravotnej spôsobilosti.'
        },
        DAILY_SCHEDULE: {
            DAILY_SCHEDULE:'Denný režim',
            H1 : 'Usporiadanie denného režimu',
            H2 : 'Mravčeky a slniečka',
            P1 : 'Počas pobytu v jasliach a materskej škôlke majú deti príležitosť na sebazdokonaľovanie sa v rôznych oblastiach. Usilujeme sa usporiadať denné činnosti tak, aby bol život detí v štvorlístku radostný a zaujímavý. V edukačnom procese sa ako hlavný prostriedok rozvoja osobnosti dieťaťa uplatňuje HRA pričom je deťom zabezpečený dostatočný priestor na realizáciu svojich prianí a predstáv. Deti majú dostatok možnosti na individuálne, skupinové a kolektívne hry, ktoré sa organizujú v rôznych formách. Striedajú sa pohybové, intelektové, pracovné a estetické činnosti. Učia sa zachovávať pravidlá skupinového spolužitia.',
            H3 : 'Mravčeky',
            P2 : 'Jasličkové deti sa dôkladným spôsobom učia starať o seba samé, nadväzovať vzťahy so svojimi rovesníkmi ako aj s dospelými a okolitým svetom. Učia sa zvládať činnosti každodenného života, ako je obliekanie, jedenie, používanie toalety a nosenie predmetov.',
            H4 : 'Slniečka',
            P3 : 'Slniečka pracujú predovšetkým na rozvoji jemnej motoriky (správny uchop rukou), rozvoji zmyslových skúsenosti (zrakový, hmatový, sluchový, čuchový a chuťový zmysel) a rozvoji hrubej motoriky (správna koordinácia pohybu).',
            H5 : 'Žabky',
            P4 : 'Počas pobytu v materskej škôlke majú deti príležitosť na sebazdokonaľovanie sa v rôznych oblastiach. Usilujeme sa usporiadať denné činnosti tak, aby bol život detí v detskom centre radostný a zaujímavý. V edukačnom procese sa ako hlavný prostriedok rozvoja osobnosti dieťaťa uplatňuje HRA pričom je deťom zabezpečený dostatočný priestor na realizáciu svojich prianí a predstáv. Deti majú dostatok možnosti na individuálne, skupinové a kolektívne hry, ktoré sa organizujú v rôznych formách. Striedajú sa pohybové, intelektové, pracovné a estetické činnosti. Učia sa zachovávať pravidlá skupinového spolužitia.',
            SUNS : {
                TH1 : '07:00 - 08:00',
                TD1_1 : 'ranná družina',
                TD1_2 : 'schádzanie detí',
                TD1_3 : 'príprava prostredia/starostlivosť o triedy',
                TD1_4 : 'príprava pitného režimu a desiaty',
                TD1_5 : 'hry a hrové činnosti (podľa voľby činnosti)',
                TD1_6 : 'didaktické aktivity',
                TD1_7 : 'delenie detí do skupiniek',
                TH2 : '08:00 - 08:20',
                TD2_1 : 'pohybové a relaxačné cvičenia (môže sa variabilne posúvať, podľa potreby), osobná hygiena',
                TD2_2 : 'anglický kútik',
                TD2_3 : 'ranný kruh',
                TH3 : '08:20 - 09:05',
                TD3_1: 'hlavná pracovná perióda',
                TD3_2: 'skupinová práca',
                TD3_3: 'učenie sa básní a piesní',
                TD3_4: 'ranná elipsa/lekcia dňa',
                TD3_5: 'edukačné aktivity: výtvarné, hudobné, hudobno-pohybové, grafomotorické, dramatické, atď., aktivity realizované formou hry',
                TD3_6: 'vzdelávacia činnosť, didaktický výučba',
                TH4 : '09:05 - 09:35',
                TD4_1: 'starostlivosť o jedáleň, príprava na desiatu (vykonáva dieťa)',
                TD4_2: 'osobná hygiena',
                TD4_3: 'desiata',
                TH5: '09:35 - 11:15',
                TD5_1: 'príprava na pobyt vonku, pobyt vonku, prechádzka',
                TH6 : '11:15 - 12:00',
                TD6_1: 'starostlivosť o jedáleň, príprava na obed',
                TD6_2: 'osobná hygiena, obed',
                TH7 : '12:00 - 14:40',
                TD7_1: 'príprava na odpočinok, odpočinok, kľudový režim',
                TH8: '14:40 - 15:00',
                TD8_1: 'zobúdzanie sa, prezliekanie sa',
                TH9: '15:00 - 15:30',
                TD9_1: 'olovrant',
                TH10 : '15:30 - 17:00',
                TD10_1: 'pobyt vonku (v záhrade)',
                TD10_2: 'skupinové hry a hrové činnosti (podľa priania a predstáv detí) do postupného odchodu domov',
                TD10_3: 'odchod detí domov'
            },
            FROGS: {
                TH1 : '07:00 - 08:00',
                TD1_1 : 'ranná družina',
                TD1_2 : 'schádzanie detí',
                TD1_3 : 'príprava prostredia/starostlivosť o triedy',
                TD1_4 : 'príprava pitného režimu a desiaty',
                TD1_5 : 'hry a hrové činnosti (podľa voľby činnosti)',
                TD1_6 : 'didaktické aktivity',
                TD1_7 : 'delenie detí do skupiniek',
                TH2 : '08:00 - 08:20',
                TD2_1 : 'pohybové a relaxačné cvičenia (môže sa variabilne posúvať, podľa potreby), osobná hygiena',
                TD2_2 : 'anglický kútik',
                TD2_3 : 'ranný kruh',
                TH3 : '08:20 - 10:00',
                TD3_1: 'hlavná pracovná perióda',
                TD3_2: 'skupinová práca',
                TD3_3: 'učenie sa básní a piesní',
                TD3_4: 'ranná elipsa/lekcia dňa',
                TD3_5: 'edukačné aktivity: výtvarné, hudobné, hudobno-pohybové, grafomotorické, dramatické, atď., aktivity realizované formou hry',
                TD3_6: 'vzdelávacia činnosť, didaktický výučba',
                TH4 : '10:00 - 10:30',
                TD4_1: 'osobná hygiena',
                TD4_2: 'desiata',
                TH5: '10:30 - 12:00',
                TD5_1: 'príprava na pobyt vonku, pobyt vonku, prechádzka',
                TH6 : '12:00 - 12:40',
                TD6_1: 'osobná hygiena, obed',
                TH7 : '12:40 - 14:40',
                TD7_1: 'príprava na odpočinok, odpočinok, kľudový režim',
                TH8: '14:40 - 15:00',
                TD8_1: 'zobúdzanie sa, prezliekanie sa',
                TH9: '15:00 - 15:30',
                TD9_1: 'olovrant',
                TH10 : '15:30 - 17:00',
                TD10_1: 'pobyt vonku (v záhrade)',
                TD10_2: 'skupinové hry a hrové činnosti (podľa priania a predstáv detí) do postupného odchodu domov',
                TD10_3: 'odchod detí domov'
            },
            P_LAST: 'Súčasťou ponúkaného programu je výučba v anglickom jazyku, environmentálna výchova, hudobno-pohybová výchova, detská joga, minifit, fitgym, tanec, muzikoterapia, drumben bubnovačka, výtvarné aktivity, tvorivé dielne, pečenie, výlety a oslavy narodenín.'
        },
        ACTIVITIES: {
            ACTIVITIES:'Krúžky',
            P1: 'Štvorlístkáči sa v rámci denného režimu zúčastňujú rôznych krúžkov, ktoré sú pravidelne zaradené do denného režimu.',
            H1: 'Mravčekovia, slniečka a žabky',
            LI1: 'Anglický jazyk - denná komunikácia',
            LI2: 'Hudobno-pohybová výchova + rozcvička - každý deň',
            LI3: 'Detská joga - 2x týždenne',
            H2 : 'Slniečka a žabky',
            LI4: 'Tvorivé dielne - 2x mesačne',
            LI5: 'Minifit, fitgym, tanec, drumben bubnovačka s prvkami muzikoterapie - 1x týždenne (od septembra do júna v pravidelnom striedaní)',
            H3: 'Tieto krúžky sú zahrnuté v cene školného',
            LI6: 'Korčuľovanie - týždenný intenzívny kurz v trvaní 5 dní - 1x do roka',
            LI7: 'Plávanie - týždenný intenzívny kurz v trvaní 5 dní - 1x do roka',
            P2 : 'Tieto krúžky nie sú zahrnuté v cene školného (dobrovoľné). V prípade záujmu rodičov je možné zorganizovať krúžky aj častejšie.'
        },
        REGISTRATION: 'Zápis',
        PRICELIST: 'Cenník',
        GALLERY: 'Fotogaléria'
    }

};

var translationsEn = {
    header: 'Child centre 4 leaf'
};
