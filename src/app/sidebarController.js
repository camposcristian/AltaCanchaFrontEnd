angular.module('sidebarModule', []);

angular.module('sidebarModule').controller('sidebarController', function ($scope, OpenFB) {

    $scope.items = [
        {name: "Tus partidos", state: "clubs.home"},
        {name: "Perfil", state: "user.home"},
        {name: "Tus Partidos", state: "user.matches"},
        {name: "Historial", state: "user.history"},
        {name: "Logout", state: "user.login"}
    ];

    $scope.logout = function () {
        OpenFB.logout();
    };

});

