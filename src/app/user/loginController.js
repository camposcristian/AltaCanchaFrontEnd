angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user.login', {
        url: '/login',
        templateUrl: 'user/login.tpl.html',
        controller: 'LoginController'
    });
}]);

angular.module('userModule').controller('LoginController',["$scope", "OpenFB", "Users", "$window", "$state", function ($scope, OpenFB, Users, $window, $state) {



    //Redirect if logged in
    if($window.localStorage['fbtoken']){
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
                            function(){
                                //alert("Registrado!");
                                //getToken();
                            },
                            function(response){
                                //alert(response.data.Message);
                                //alert("Fallo registro");
                            }
                        );
                        $state.go("clubs.home");
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

    var getToken = function () {
        var user = new Users();
        user.$token().then(
            function(response){
                //alert("Registrado!");
                $scope.$storage.token = response;
                //TODO: Registrar interceptor
            },
            function(response){
                //alert(response.data.Message);
                //alert("Fallo registro");
            }
        )
    };

}]);

