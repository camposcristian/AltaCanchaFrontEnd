angular.module('userModule', [
    'userService'
]);

angular.module('userModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('user', {
        abstract: true,
        url: '/user',

        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    });
}]);