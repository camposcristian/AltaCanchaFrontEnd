angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);

angular.module('userModule').controller('LoginController',["$scope", "ezfb", "Users", "$q", function ($scope, ezfb, Users, $q) {

    $scope.fbLogin = function () {
        ezfb.login(null, {scope: 'email,user_likes'}).then(function (response) {
            console.log(response);
            var user = new Users();
            console.log(user);
            user.fbId = response.authResponse.userID;
            user.fbToken = response.authResponse.accessToken;

            deferred = $q.defer();
            user.$fbLogin().then(
                alert("true"),
                alert("false")
            );
        });
    };

}]);

