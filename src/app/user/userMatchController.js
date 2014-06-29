angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.match', {
        url: '/match/:id',
        templateUrl: 'user/userMatch.tpl.html',
        controller: 'userMatchController',
        resolve: {
            club: ['Clubs', "$stateParams", function (Clubs, $stateParams) {
                return Clubs.get({id: $stateParams.id}).$promise;
            }]
        }
    });
}]);

angular.module('userModule').controller('userMatchController', function ($scope, club) {
    $scope.showSearchBox = false;
    $scope.club = club;
    $scope.$storage.club = $scope.club;
});