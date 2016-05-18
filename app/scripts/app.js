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
        'ui.bootstrap'
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
                templateUrl: 'views/ruzinov.html',
                controller: 'RuzinovCtrl'
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
                controller: 'StateBonusCtrl'
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
    //common
    HEADER: 'Štvorlístok',
    SUB_HEADER: 'Materská škôlka a jasle',
    NAV_HEADER: 'Skryť navigáciu',
    MOTTO: '"DIEŤA JE ZVIDITEĽNENÁ LÁSKA", Novalis',
    HOME: 'Domov',
    ABOUT_US: 'O nás',
    WHO_WE_ARE : 'Kto sme',
    RUZINOV: 'Ružinov',
    DUNAJSKALUZNA: 'Dunajská Lužná',
    OZ: 'OZ štvorlístkovo',
    HOTEL: 'Zábavný detský hotel Štvorlístok',
    HOTEL_TOOLTIP: 'Doprajte vašim deťom výnimočnú starostlivosť aj cez víkendy',
    MONTESSORI_LINK: 'Maria Montessori',
    MONTESSORI_TOOLTIP: 'Spoznajte výnimočnú Mariu Montessori',
    PARTY: 'Detská oslava',
    CONTACT: 'Kontakt',
    I_WANT_TO_APPLY_MY_CHILD: 'Chcem prihlásiť svoje dieťa',
    FOOTER: '&copy; Štvorlístok',
    //highlights
    HIGHLIGHTS : {
        HEALTHY_KINDERGARTEN_HEADER : 'Zdravá škôlka',
        STATE_BONUS_HEADER : 'Štátny príspevok',
        HOTEL_HEADER : 'Zábavný detský hotel Štvorlístok'
    },
    //homepage
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
    //o nas
    ABOUT: {
        HEADER: 'Dovoľte nám, aby sme sa Vám predstavili...',
        P1: 'Dovoľte nám, aby sme sa Vám predstavili...',
        P2: 'Škôlka a jasle štvorlístok plné deti sú miestom, ktoré nás robí naozaj šťastnými a naplnenými. Našou prácou sa snažíme deťom odovzdať praktické skúsenosti a poznania na ktorých môžu v budúcnosti stavať. Sme tím mladých ľudí, ktorí usmerňujú Vaše detí, a vedú ich k správnym postojom do života. Máme deti, milujeme ich, chceme im dať to najlepšie, a to znamená okrem iného aj maximálnu starostlivosť, rozumné postoje a dobré vzdelanie. ',
        P3: 'Naša materská škôlka a jasličky štvorlístok vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov. Ranné detstvo považujeme za kľúčové a centrálne obdobie pre ich životnú cestu a formovanie osobnosti, a práve preto si myslíme, že je veľmi dôležité aby toto obdobie dieťa prežilo v podnetnom a láskavom prostredí. V spolupráci s rodičmi napomáhame deťom formovať si zdravé korene, ktoré z deti vytvoria fyzicky, emocionálne, mentálne, citovo rozvinuté a charakterové osobnosti. ',
        P4: 'Filozofia, ktorou sa riadime je pomôcť rodine vychovávať a rozvíjať samostatné, tvoriace a zdravo sebavedomé deti. Charakterizuje nás rodinná atmosféra v rodinnom prostredí (deti sa u nás cítia ako doma) kde je pre dieťa radosť byť. Naším cieľom je vytvárať inšpiratívne a láskyplné prostredie pre prirodzený a radostný rozvoj detskej osobnosti, podporovať ich prirodzený vývoj opierajúci sa o vlastnú skúsenosť, sebestačnosť, sebadôveru, vzájomný rešpekt a lásku. Zároveň však vedieme deti k samostatnosti a zodpovednosti. Pripravujeme ich na dôležité životné chvíle (napr. vstup do materskej škôlky, vstup do základnej školy) a nenásilnou formou sa učia nadväzovať sociálne vzťahy, spoznávať okolitý svet a učia sa rešpektovať seba samých ako aj druhých. Rešpektujeme senzitívne obdobia a potreby detí, poskytujeme im individuálny prístup a napomáhame im k spoznaniu pozitívnej formy vlastného sebavyjadrenia. ',
        MOTTO_HEADER: 'OTVÁRAME DEŤOM SVET POZNÁVANIA A ŠÍRIME LÁSKU'
    },
    //montessori
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
            SUBHEADER : 'Hlavnou myšlienkou programu je:',
            LI1 : 'podporovať celostný osobnostný rozvoj dieťaťa',
            LI2 : 'aktivizovať a motivovať rozvoj psychomotoriky, poznania',
            LI3 : 'emocionality a sociability',
            LI4 : 'rozvíjať tvorivosť a predstavy v každodenných aktivitách, pomôcť dieťaťu formovať vlastnú jedinečnosť a životné kompetencie (spôsobilosti)',
            P5 : 'Prostredníctvom programu sa realizuje rozvoj osobnostných kvalít dieťaťa v poznaní: samého seba, sveta ľudí, prírody, kultúry. Program je integrovaný do štyroch tematických okruhov Ja som, Ľudia, Príroda, Kultúra'
        },
        PRINCIPLES: {
            PRINCIPLES :'Základny Montessori pedagogiky',
            SUBHEADER1 : 'Pomôž mi, aby som to dokázal sám',
            P1 : 'Úlohou dospelých je to, aby dieťa vlastnými silami a svojim tempom získalo nové vedomosti a schopnosti, pričom sa mu vytvoria tie najlepšie podmienky.',
            SUBHEADER2 : 'Ruka je nástrojom ducha',
            P2 : 'Práca rúk je základom pre pochopenie predmetov a javov, základom pre rozvoj myslenia a reči. Metodika kladie veľký dôraz na spojenie duševnej aktivity a tvorivej telesnej aktivity. Vychádza sa z konkrétneho poznania pri manipulácii s vecami',
            SUBHEADER3 : 'Rešpektovanie senzitívnych období',
            P3 : 'Senzitívne obdobie je doba, kedy je dieťa obzvlášť citlivé na určité intelektuálne podnety. V tomto období je dieťa schopné vstrebávať nové poznatky a nadobúdať schopnosti prirodzene- tzv. nevedomé učenie.',
            SUBHEADER4 : 'Polarizácia pozornosti',
            P4 : 'Dieťa je schopné sústrediť sa intenzívne a dlhodobo iba na prácu, ktorá ho zaujme',
            SUBHEADER5 : 'Trojstupňová výučba',
            P5 : 'Táto metóda je určená predovšetkým deťom v predškolskom veku. Poznávanie sa skladá z troch krokov:',
            LI1 : 'Pomenovanie učiteľom',
            LI2: 'Znovupoznanie',
            LI3: 'Aktívne ovládanie',
            SUBHEADER6 : 'Práca s chybou',
            P6 : 'Dieťa nie je za chyby trestané ani záporne hodnotené. Chyba má byť ukazovateľom toho, čo je ešte potrebné precvičiť a je chápaná ako bežný a prirodzený prejav v procese učenia. Učiteľ by nemal používať negatívne hodnotenie, ale ponúknuť dieťaťu inú formu kontroly. Pomôcky sú pripravené tak, aby dieťa bolo schopné samo skontrolovať správnosť riešenia.',
            SUBHEADER7 : 'Práca s pochvalou',
            P7 : 'Každé dieťa potrebuje pocit istoty, bezpečia a úspechu, no neustále kladné či záporné hodnotenie zo strany dospelých ho obmedzuje. S pochvalou sa v Montessori pedagogike zachádza primerane tak, aby sa dieťa nestalo na pochvale závislé'
        },
        PRACTICE_LIFE: {
            PRACTICE_LIFE : 'Praktický život',
            P1 : 'Od malička sa deti pozerajú na činnosti dospelých a snažia sa opakovať všetko to, čo vidia. Cvičenia praktického života sú veľmi dôležitým základom pre ďalší rozvoj dieťaťa. Do tých cvičení patrí všetko to, čo robia dospelý niekoľkokrát denne, napríklad: upratovanie, obliekanie. Deti milujú skutočné veci, preto ich baví presýpať, prelievať, nalievať, zametať, utierať prach, čistiť obuv, stolovať, skladať prádlo, zapínať gombíky, zips a zaväzovať šnúrky. Dieťa sa učí starať o vlastnú osobu, o svoje vlastné telo, ale i o okolie a spoločnosť. Pomocou cvičení praktického života sa rozvíja jemná motorika, hrubá motorika a koordinácia ruka-oko.',
            P2 : 'Existujú štyri oblasti aktivít praktického života:',
            LI1 : 'starostlivosť sám o seba - obliekanie sa, vyzliekanie sa, umývanie, česanie',
            LI2 : 'starostlivosť o okolie - upratovanie, utieranie, leštenie, starostlivosť o rastliny, starostlivosť o zvieratá',
            LI3 : 'kontrola pohybu - prelievanie, presýpanie, pohybové aktivity (vonku), umelecké aktivity',
            LI4 : 'spoločenský život (správanie) - pozdravenie, ospravedlnenie, prijatie ospravedlnenia, poďakovanie, poprosenie...',
            P3 : 'Je dôležité mať na pamäti, že aktivity praktického života majú pomôcť deťom pri ich orientácií vo svete, v každodenných činnostiach.',
        },
        SENSE_EDUCATION: {
            SENSE_EDUCATION: 'Zmyslová výchova',
            P1 : 'Cieľom zmyslovej výchovy je poskytnúť deťom možnosť získať vedomé informácie z prostredia pomocou zmyslov. Mária Montessori verila, že dieťa vníma všetkými svojimi zmyslami hneď od narodenia. Pomocou zmyslov sa dieťa zoznamuje so svojím okolitým svetom a študuje ho. Zmyslový materiál, ktorý Mária Montessori vyvinula rozvíja intelekt dieťaťa (zapája všetky jeho zmysly - hmat, čuch, sluch, zrak a chuť). Prostredníctvom zmyslov sa rozvíja mozog a vytvárajú sa nové nervové prepojenia. Pomocou tohto zmyslového materiálu sa dieťa učí pomenovávať, rozlišovať, porovnávať a triediť. Zmyslový materiál rozdeľujeme na materiál na:',
            LI1 : 'rozlišovanie rozmerov',
            LI2 : 'rozlišovanie farieb',
            LI3 : 'rozlišovanie tvarov',
            LI4 : 'rozlišovanie povrchov',
            LI5 : 'rozlišovanie štruktúr',
            LI6 : 'rozlišovanie váhy',
            LI7 : 'rozlišovanie zvukov',
            LI8 : 'rozlišovanie tónov',
            LI9 : 'rozlišovanie chutí',
            LI10 : 'rozlišovanie teplôt a schopnosti viesť teplo'
        },
        LANGUAGE_EDUCATION: {
            LANGUAGE_EDUCATION : 'Jazyková výchova',
            P1 : 'Jazyková výchova je oblasť, v ktorej si dieťa rozvíja reč. Využívajú sa materiály, ktoré zároveň slúžia k výučbe písania a čítania. S písaním a čítaním začína dieťa vo veku okolo 4 - 6 rokov. Je však veľmi dôležité vystihnúť senzitívne obdobie, kedy dieťa chce samo písať alebo čítať. Čítanie prebieha genetickou metódou čítania, t. j. čítaním po písmenkách a nie po slabikách. Podľa Márie Montessori používame na písanie písané písmo a na čítanie zasa tlačené písmo.'
        },
        MATHEMATICS: {
            MATHEMATICS : 'Matematika',
            P1 : 'Matematický rozvoj začína od narodenia. Podľa Márie Montessori je ľudský duch duchom matematickým. Má schopnosť abstrahovať, niečo si predstaviť a argumentovať. Matematický materiál učí rozlišovať seba od ostatného, vnímať dĺžku, šírku a výšku, vnímať dimenzie, porovnávať veľkosti a formy a experimentovať.'
        }
    }

};

var translationsEn = {
    header: 'Child centre 4 leaf'
};
