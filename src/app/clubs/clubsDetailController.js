angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.detail', {
        url: '/clubs/:id',
        templateUrl: 'clubs/clubsDetail.tpl.html',
        controller: 'clubsDetailController',
        resolve: {
            club: ['Clubs', "$stateParams", function (Clubs, $stateParams) {
                return Clubs.get({id: $stateParams.id}).$promise;
            }]
        }
    });
}]);

angular.module('clubsModule').controller('clubsDetailController', function ($scope, club) {

    $scope.showSearchBox = false;
    $scope.club = club;
    $scope.$storage.club = $scope.club;

    $scope.court = club.Courts[0];
    $scope.$storage.court = $scope.court;

    $scope.selectCourt = function (court) {
        $scope.court = court;
        $scope.$storage.court = court;
    };


});


