angular.module('clubsModule', [
    //'clubsService'
]);

angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs', {
        abstract: true,
        url: '/clubs',

        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    });
}]);