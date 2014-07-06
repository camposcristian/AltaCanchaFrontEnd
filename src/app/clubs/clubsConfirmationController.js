angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.confirmation', {
        url: '/confirmation',
        templateUrl: 'clubs/clubsConfirmation.tpl.html',
        controller: 'clubsConfirmationController'
    });
}]);

angular.module('clubsModule').controller('clubsConfirmationController', function ($scope, $state, $sce, $ionicModal, Friends) {

    $scope.showSearchBox = false;

    $scope.src = $sce.trustAsResourceUrl($scope.$storage.pay.url);

    $ionicModal.fromTemplateUrl('clubs/friendsPicker.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
            $scope.modal = modal;
        });

    $scope.avisar = function () {
        //$state.go("user.match", {id: $scope.$storage.booking.Match.Id});
        $scope.friends = Friends.query();

        $scope.modal.show();
    };

    $scope.saveFriends = function () {
        //$state.go("user.match", {id: $scope.$storage.booking.Match.Id});
        $scope.modal.hide();
    };

});