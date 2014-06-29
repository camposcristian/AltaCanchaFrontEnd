angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);


angular.module('userModule').controller('LoginController', ["$scope", "OpenFB", "Users", "$window", "$state", "$http", function ($scope, OpenFB, Users, $window, $state, $http) {



    //Redirect if logged in
    if ($window.localStorage['fbtoken']) {
        $http.defaults.headers.common =
        {
            "Authorization": "Bearer " + $scope.$storage.token
        };
        $state.go('clubs.home');
    }

    $scope.fbLogin = function () {
        OpenFB.login('email,user_friends,user_about_me').then(
            function () {
                OpenFB.get('/me')
                    .success(function (result) {
                        $scope.$storage.fbUser = result;
                        var user = new Users();
                        user.FbId = result.id;
                        user.FbToken = window.localStorage.fbtoken;
                        user.Email = result.email;
                        user.Password = "cancha";
                        user.$fbLogin().then(
                            function () {
                                //alert("Registrado!");
                                getToken(user);
                            },
                            function (response) {
                                //alert(response.data.Message);
                                //alert("Fallo registro");
                                getToken(user);
                            }
                        );

                    })
                    .error(function (data) {
                        $scope.hide();
                        alert(data.error.message);
                    });
            },
            function () {

                alert('OpenFB login failed');
            });
    };
    var getToken = function (user) {
        var headers = {"Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'};
        var usert = {};
        usert.email = user.Email;
        usert.grant_type = "password";
        usert.password = user.Password;

        $http.post('http://altacancha.azurewebsites.net/Token', "username="+user.Email+"&password="+user.Password+"&grant_type=password", {headers: headers}).success(function (response) {
            $scope.$storage.token = response.access_token;
            $http.defaults.headers.common =
            {
                "Authorization": "Bearer " + response.access_token
            };
            $state.go("clubs.home");

        });
    };

}]);

