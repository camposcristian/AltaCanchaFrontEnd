angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.home', {
        url: '/home',
        templateUrl: 'clubs/clubsHome.tpl.html',
        controller: 'clubsHomeController'
    });
}]);

angular.module('clubsModule').controller('clubsHomeController', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleSideBar = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

});

