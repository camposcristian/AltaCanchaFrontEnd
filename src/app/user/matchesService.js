angular.module('matchesService', ['ngResource']);

angular.module('matchesService').factory('Matches', ['$resource', 'ESCAPED_SERVER_URL' , function ($resource, ESCAPED_SERVER_URL ) {
    var resource = $resource(ESCAPED_SERVER_URL + '/Match/:id/', {
        id: '@id'
    }, {
    });

    return resource;
}]);