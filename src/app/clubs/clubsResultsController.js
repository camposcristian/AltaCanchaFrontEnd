angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.results', {
        url: '/results',
        templateUrl: 'clubs/clubsResults.tpl.html',
        controller: 'clubsResultsController'
    });
}]);

angular.module('clubsModule').controller('clubsResultsController', function ($scope) {

    $scope.showSearchBox = false;

    $scope.clubs = $scope.$storage.results;




});