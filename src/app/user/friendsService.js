angular.module('friendsService', ['ngResource']);

angular.module('friendsService').factory('Friends', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Friend/:id/', {
        id: '@id'
    }, {
        'query':  {method:'GET', isArray:true, cache: true},
        'get':    {method:'GET', cache: true}
    });

    return resource;
}]);