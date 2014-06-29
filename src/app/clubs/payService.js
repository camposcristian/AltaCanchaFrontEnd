angular.module('payService', ['ngResource']);

angular.module('payService').factory('Pay', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Pay/:id/', {
        id: '@id'
    }, {
        'query':  {method:'GET', isArray:true, cache: true},
        'get':    {method:'GET', cache: true}
    });

    return resource;
}]);
