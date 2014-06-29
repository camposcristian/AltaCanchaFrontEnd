angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.home', {
        url: '/clubs',
        templateUrl: 'clubs/clubsHome.tpl.html',
        controller: 'clubsHomeController',
        resolve: {
            matches: ['Matches', function (Matches) {
                return Matches.query().$promise;
            }]
        }
    });
}]);

angular.module('clubsModule').controller('clubsHomeController', function ($scope, matches) {

    $scope.showSearchBox = false;
    $scope.matches = matches;



});

