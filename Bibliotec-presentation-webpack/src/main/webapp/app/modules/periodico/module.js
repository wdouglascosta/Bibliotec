require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.periodico', [
    'app.periodico.controllers',
    'app.periodico.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('periodico.list', {
        url: '/list',
        templateUrl: 'app/modules/periodico/views/list.html',
        controller: 'PeriodicoListController'
      })
      .state('periodico.insert', {
        url: '/insert',
        templateUrl: 'app/modules/periodico/views/form.html',
        controller: 'PeriodicoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/periodico/new');
          }]
        }
      })
      .state('periodico.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/periodico/views/form.html',
        controller: 'PeriodicoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/periodico/' + $stateParams.id);
          }]
        }
      });
})