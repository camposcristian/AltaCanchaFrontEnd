angular.module('clubsService', ['ngResource']);

angular.module('clubsService').factory('Clubs', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Club/:id/:action', {
        id: '@id'
    }, {

    });

    return resource;
}]);
