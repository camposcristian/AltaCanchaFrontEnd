angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);

angular.module('userModule').controller('LoginController',["$scope", "OpenFB", "Users", "$location", "$window", "$state", function ($scope, OpenFB, Users, $location, $window, $state) {


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

    //Redirect if logged in
    /*if($window.localStorage['fbtoken']){
        $state.go('clubs.home');
    }*/

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
                        user.Password = "canch";
                        user.$fbLogin().then(
                            function(){
                                alert("Registrado!");
                            },
                            function(response){
                                alert(response.data.Message);
                                //alert("Fallo registro");
                            }

                        );
                        $location.path('/clubs/home');
                    })
                    .error(function(data) {
                        $scope.hide();
                        alert(data.error.message);
                    });

            },
            function () {
                alert('OpenFB login failed');
            });
    };

}]);

