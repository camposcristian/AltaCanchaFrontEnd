angular.module('bookingService', ['ngResource']);

angular.module('bookingService').factory('Booking', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Booking/:id/', {
        id: '@id'
    }, {
        'query':  {method:'GET', isArray:true, cache: true},
        'get':    {method:'GET', cache: true}
    });

    return resource;
}]);
