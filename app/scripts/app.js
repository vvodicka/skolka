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
        'ngFlag'
    ])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/healthy-kindergarten', {
                templateUrl: 'views/healthy-kindergarten.html',
                controller: 'HealthyKindergartenCtrl'
            })
            .when('/daily-schedule', {
                templateUrl: 'views/daily-schedule.html',
                controller: 'DailyScheduleCtrl'
            })
            .when('/gallery', {
                templateUrl: 'views/gallery.html',
                controller: 'GalleryCtrl'
            })
            .when('/pricelist', {
                templateUrl: 'views/pricelist.html',
                controller: 'PricelistCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        // add translation table
        $translateProvider
            .useSanitizeValueStrategy('sanitize')
            .translations('en', translationsEn)
            .translations('sk', translationsSk)
            .preferredLanguage('sk');
    });

var translationsSk = {
    HEADER: 'Štvorlístok',
    SUB_HEADER: 'Detské centrum',
    NAV_HEADER: 'Skryť navigáciu',
    MOTTO: '"Keď sú šťastné deti, sú spokojní aj rodičia."',
    ABOUT_US: 'O nás',
    HEALTHY_KINDEGARTEN: 'Zdravá škôlka',
    DAILY_SCHEDULE: 'Denný program',
    GALLERY: 'Fotogaléria',
    PRICELIST: 'Cenník',
    CONTACT: 'Kontakt',
    I_WANT_TO_APPLY_MY_CHILD: 'Chcem prihlásiť svoje dieťa',
    WHY_CHOOSE_FOURLEAF_HEADER: 'Prečo si vybrať štvorlístok',
    WHY_CHOOSE_FOURLEAF_TEXT: 'Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    OUR_GOALS : 'Naše ciele',
    OUR_GOALS_TEXT: 'Ciele Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    BENEFITS : 'Špeciálne benefity',
    BENEFITS_TEXT: 'Benefity Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    FOOTER: '&copy; Detské centrum štvorlístok'

};

var translationsEn = {
    header: 'Child centre 4 leaf'
};
