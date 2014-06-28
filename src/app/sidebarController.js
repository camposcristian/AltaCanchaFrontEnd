angular.module('sidebarModule', []);

/*angular.module('sidebarModule').config(['$stateProvider', function ($stateProvider) {
 $stateProvider.state('sidebarHome', {
 url: '/sidebar',
 templateUrl: 'sidebar/sidebarHome.tpl.html',
 controller: 'sidebarHomeController'
 });
 }]);*/

angular.module('sidebarModule').controller('sidebarController', function ($scope, $ionicSideMenuDelegate) {

    $scope.items = [
        {name: "Buscar Canchas", state: "clubsHome"},
        {name: "Perfil", state: "userHome"},
        {name: "Tus Partidos", state: "user.games"},
        {name: "Historial", state: "user.history"}
    ]

});

