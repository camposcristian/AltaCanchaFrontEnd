angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.detail', {
        url: '/detail',
        templateUrl: 'clubs/clubsDetail.tpl.html',
        controller: 'clubsDetailController'
    });
}]);

angular.module('clubsModule').controller('clubsDetailController', function ($scope) {

    $scope.showSearchBox = false;

});

