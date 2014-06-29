angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.booking', {
        url: '/booking',
        templateUrl: 'clubs/clubsBooking.tpl.html',
        controller: 'clubsBookingController'
    });
}]);

angular.module('clubsModule').controller('clubsBookingController', function ($scope) {

    $scope.showSearchBox = false;


});