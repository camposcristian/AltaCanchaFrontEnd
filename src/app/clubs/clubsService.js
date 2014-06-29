angular.module('clubsService', ['ngResource']);

angular.module('clubsService').factory('Clubs', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Club/:id/', {
        id: '@id'
    }, {
        'query':  {method:'GET', isArray:true, cache: true},
        'get':    {method:'GET', cache: true}
    });

    return resource;
}]);
