angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.results', {
        url: '/results',
        templateUrl: 'clubs/clubsResults.tpl.html',
        controller: 'clubsResultsController',
        resolve: {
            clubs: ['Clubs', function (Clubs) {
                return Clubs.query().$promise;
            }]
        }
    });
}]);

angular.module('clubsModule').controller('clubsResultsController', function ($scope, clubs) {

    $scope.showSearchBox = false;
    $scope.clubs = clubs;


});