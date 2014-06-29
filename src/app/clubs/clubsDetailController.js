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

    $scope.selectedHours = $scope.$storage.selectedHours;

    $scope.selectCourt = function (court) {
        $scope.court = court;
        $scope.$storage.court = court;
    };

    $scope.h1 = "18:30";
    $scope.h2 = "19:00";
    $scope.h3 = "19:30";
    $scope.h4 = "20:00";
    $scope.h5 = "20:30";

    $scope.selectedHours = [];
    $scope.selectHour = function (hour) {
        if( $scope.selectedHours.indexOf(hour) == -1 ){
            $scope.selectedHours.push(hour);
        }else{
            $scope.selectedHours.splice($scope.selectedHours.indexOf(hour), 1);
        }
        $scope.$storage.selectedHours = $scope.selectedHours;
    };



});


