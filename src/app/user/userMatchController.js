angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.match', {
        url: '/match',
        templateUrl: 'user/userMatch.tpl.html',
        controller: 'userMatchController'
    });
}]);

angular.module('userModule').controller('userMatchController', function ($scope) {

});