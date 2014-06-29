angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.confirmation', {
        url: '/confirmation',
        templateUrl: 'clubs/clubsConfirmation.tpl.html',
        controller: 'clubsConfirmationController'
    });
}]);

angular.module('clubsModule').controller('clubsConfirmationController', function ($scope) {

    $scope.showSearchBox = false;
    $scope.court = $scope.$storage.court;


});