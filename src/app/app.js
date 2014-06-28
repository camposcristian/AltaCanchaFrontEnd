angular.module('alta-cancha-app', [
        'ionic',
        'ngCordova',

        'templates-app',
        'templates-common',

        'sidebarModule',
        'clubsModule'
    ])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
        $ionicPlatform.ready(function () {
            $cordovaSplashscreen.hide();
        });
    })

    .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/clubs/home");
    }])

    .controller('AppController', function ($scope) {

    });


