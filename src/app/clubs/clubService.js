/*
angular.module('clubService', ['ngResource']);

angular.module('clubService').factory('Clubs', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Account/:id/:action', {
        id: '@id'
    }, {
        login: {method: 'POST', params: { action: 'login' }, isArray: false},
        fbLogin: {method: 'POST', params: { action: 'Register' }, isArray: false},
        search: {method: 'GET', params: { action: 'search' }, isArray: true},
        update: { method: 'PUT'}
    });

    return resource;
}]);*/
