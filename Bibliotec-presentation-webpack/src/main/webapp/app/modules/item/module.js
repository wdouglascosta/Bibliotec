require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.item', [
    'app.item.controllers',
    'app.item.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('item.list', {
        url: '/list',
        templateUrl: 'app/modules/item/views/list.html',
        controller: 'ItemListController'
      })
      .state('item.insert', {
        url: '/insert',
        templateUrl: 'app/modules/item/views/form.html',
        controller: 'ItemFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/item/new');
          }]
        }
      })
      .state('item.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/item/views/form.html',
        controller: 'ItemFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/item/' + $stateParams.id);
          }]
        }
      });
})