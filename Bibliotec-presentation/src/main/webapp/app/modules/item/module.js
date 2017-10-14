define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/item/services/module');
  require('app/modules/item/controllers/module');

  return require('angular')
    .module('app.item', [
      'ui.router',
      'app.item.controllers',
      'app.item.services',
      'gumga.core'
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
});