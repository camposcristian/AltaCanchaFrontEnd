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
    });/*.
        state('clubs.detail.court', {
            url: '/:id',
            templateUrl: 'clubs/courtDetail.tpl.html',
            controller: 'courtDetailController'
        });*/
}]);

angular.module('clubsModule').controller('clubsDetailController', function ($scope, club) {

    $scope.showSearchBox = false;
    $scope.club = club;
    $scope.court = club.Courts[0];

    $scope.selectCourt = function (court) {
        $scope.court = court;
    };


});

angular.module('clubsModule').controller('courtDetailController', function ($scope{

    $scope.showSearchBox = false;

});

