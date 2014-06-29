angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.confirmation', {
        url: '/confirmation',
        templateUrl: 'clubs/clubsConfirmation.tpl.html',
        controller: 'clubsConfirmationController'
    });
}]);

angular.module('clubsModule').controller('clubsConfirmationController', function ($scope, $state, $sce) {

    $scope.showSearchBox = false;

    $scope.src = $sce.trustAsResourceUrl($scope.$storage.pay.url);

    $scope.avisar = function () {
        $state.go("user.match", {id: $scope.$storage.booking.Match.Id});
    };

});