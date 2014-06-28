angular.module('alta-cancha-app', [
        'ionic',
        'ngCordova',

        'ngStorage',
        'ezfb',

        'templates-app',
        'templates-common',

        'sidebarModule',
        'clubsModule',
        'userModule'
    ])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
        $ionicPlatform.ready(function () {
            $cordovaSplashscreen.hide();
        });
    })

    .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/user/login");
    }])

    .controller('AppController', function ($scope, $ionicSideMenuDelegate) {
        $scope.toggleSideBar = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });


