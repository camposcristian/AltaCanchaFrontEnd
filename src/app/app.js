angular.module('alta-cancha-app', [
        'ionic',
        'ngCordova',
        'ngResource',

        'ngStorage',
        //'ezfb',
        'openfb',

        'templates-app',
        'templates-common',
        'services.httpRequestTracker',

        'sidebarModule',
        'clubsModule',
        'userModule'
    ])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
        $ionicPlatform.ready(function () {
            $cordovaSplashscreen.hide();
        });
    })

    .run(["OpenFB", "FB_APP_ID", "$rootScope", "$window" ,function (OpenFB, FB_APP_ID, $rootScope, $window) {
        /*ezfbProvider.setInitParams({
            appId: FB_APP_ID
        });*/

        //Para el Browser
        //OpenFB.init(FB_APP_ID, false, "http://localhost/alta-cancha-hack/build/oauthcallback.html", window.localStorage);

        //Para El celu
        OpenFB.init(FB_APP_ID, true);

        /*$rootScope.$on('$stateChangeStart', function(event, toState) {
            if (toState.name !== "user.login" && !$window.sessionStorage['fbtoken']) {
                $state.go('user.login');
                event.preventDefault();
            }
        });

        $rootScope.$on('OAuthException', function() {
            $state.go('user.login');
        });*/
    }])

    .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/user/login");
    }])

    .controller('AppController', ["$scope", "$ionicSideMenuDelegate", "$localStorage", "httpRequestTracker", function ($scope, $ionicSideMenuDelegate, $localStorage, httpRequestTracker) {
        $scope.toggleSideBar = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.$storage = $localStorage;

        $scope.hasPendingRequests = function () {
            return httpRequestTracker.hasPendingRequests();
        };

    }]);


