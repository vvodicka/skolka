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
    WHY_CHOOSE_FOURLEAF_HEADER: 'Prečo si vybrať štvorlístok',
    WHY_CHOOSE_FOURLEAF_TEXT: 'Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    OUR_GOALS: 'Naše ciele',
    OUR_GOALS_TEXT: 'Ciele Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    BENEFITS: 'Špeciálne benefity',
    BENEFITS_TEXT: 'Benefity Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    FOOTER: '&copy; Štvorlístok',
    //homepage
    HOMEPAGE: {
        HEADER: 'Úvod',
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
        WHAT_IS: 'Čo je Montessori pedagogika?',
        PRINCIPLES: 'Základny Montessori pedagogiky',
        PRACTICE_LIFE: 'Praktický život',
        SENSE_EDUCATION: 'Zmyslová výchova',
        LANGUAGE_EDUCATION: 'Jazyková výchova',
        MATHEMATICS: 'Matematika'
    }

};

var translationsEn = {
    header: 'Child centre 4 leaf'
};
