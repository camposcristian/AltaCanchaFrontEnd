angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);

angular.module('userModule').controller('LoginController', function ($scope) {


});

