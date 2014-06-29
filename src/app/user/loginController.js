angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);

angular.module('userModule').controller('LoginController',["$scope", "OpenFB", "Users", "$location", function ($scope, OpenFB, Users, $location) {

    /*$scope.fbLogin = function () {
        alert("asd");
        ezfb.login(null, {scope: 'email,user_likes'}).then(function (response) {
            console.log(response);
            var user = new Users();
            console.log(user);
            user.fbId = response.authResponse.userID;
            user.fbToken = response.authResponse.accessToken;

            //deferred = $q.defer();
            alert("FB ID: " + user.fbId);
            *//*user.$fbLogin().then(
                alert("true"),
                alert("false")
            );*//*
        });
    };*/

    $scope.fbLogin = function () {
        OpenFB.login('email,user_friends').then(
            function () {
                //alert("entro");
                $location.path('/clubs/home');
            },
            function () {
                alert('OpenFB login failed');
            });
    };

}]);

