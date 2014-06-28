angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);

angular.module('userModule').controller('LoginController', function ($scope) {

    $scope.fbLogin = function () {
        return ezfb.login(null, {scope: 'email,user_likes'}).then(function (response) {
            //console.log(response);
            var user = new Users();
            //console.log(user);
            user.fbId = response.authResponse.userID;
            user.fbToken = response.authResponse.accessToken;

            deferred = $q.defer();
            user.$fbLogin().then(
                handleSuccessLogin,
                handleErrorLogin
            );
            return deferred.promise;
        });
    };

});

