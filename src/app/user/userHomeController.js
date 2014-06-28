angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.home', {
        url: '/home',
        templateUrl: 'user/userHome.tpl.html',
        controller: 'userHomeController'
    });
}]);

angular.module('userModule').controller('userHomeController', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleSideBar = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

});

