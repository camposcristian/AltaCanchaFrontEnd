angular.module('alta-cancha-app').constant('SERVER_URL', "http://altacancha.azurewebsites.net/api");
angular.module('alta-cancha-app').constant('ESCAPED_SERVER_URL', "http://altacancha.azurewebsites.net/api");
angular.module('alta-cancha-app').constant('STATIC_SERVER_URL', "http://altacancha.azurewebsites.net/api");
angular.module('alta-cancha-app').constant('FB_APP_ID', "1632413586984671");

// Global function called back by the OAuth login dialog
function oauthCallback(url) {
    var injector = angular.element(document.getElementById('main')).injector();
    injector.invoke(function (OpenFB) {
        OpenFB.oauthCallback(url);
    });
}
