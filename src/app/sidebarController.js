angular.module('sidebarModule', []);

angular.module('sidebarModule').controller('sidebarController', function ($scope, OpenFB, $window) {

    $scope.items = [
        {name: "Buscar", state: "clubs.home"},
        {name: "Perfil", state: "user.home"},
        {name: "Tus Partidos", state: "user.matches"},
        {name: "Historial", state: "user.history"}
    ];

    $scope.logout = function () {
        OpenFB.logout();
        delete window.localStorage['fbtoken'];
        $scope.toggleSideBar();
    };

});

