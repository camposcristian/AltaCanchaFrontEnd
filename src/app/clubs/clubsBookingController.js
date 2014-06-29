angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.booking', {
        url: '/booking',
        templateUrl: 'clubs/clubsBooking.tpl.html',
        controller: 'clubsBookingController'
    });
}]);

angular.module('clubsModule').controller('clubsBookingController', function ($scope, Booking, Pay, $state) {

    $scope.showSearchBox = false;
    $scope.court = $scope.$storage.court;

    $scope.bookCourt = function () {
        var booking = new Booking();
        booking.Payment = 0;
        booking.CourtId = $scope.court.Id;
        booking.DateTimeIn = new Date("06-29-2014 8:30 PM");
        booking.DateTimeOut = new Date("06-29-2014 9:30 PM");
        booking.Players = [];
        booking.$save().then(function (response) {
                $scope.$storage.booking = response;
                $state.go("clubs.confirmation");
            }
        );
    };

    $scope.payCourt = function () {
        var booking = new Booking();
        booking.Payment = 0;
        booking.CourtId = $scope.court.Id;
        booking.DateTimeIn = new Date("06-29-2014 8:30 PM");
        booking.DateTimeOut = new Date("06-29-2014 9:30 PM");
        booking.Players = [];
        booking.$save().then(function (response) {
                $scope.$storage.booking = response;
                var pay = new Pay();
                pay.BookId= $scope.$storage.booking.Id;
                pay.$save().then(function (response) {
                   //pay callback
                    $scope.$storage.pay = response;
                    $scope.$storage.pay.url += "&view=iframe";
                    $state.go("clubs.confirmation");
                });

            }
        );
    };


})
;