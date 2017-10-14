require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.balconista', [
    'app.balconista.controllers',
    'app.balconista.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('balconista.list', {
        url: '/list',
        templateUrl: 'app/modules/balconista/views/list.html',
        controller: 'BalconistaListController'
      })
      .state('balconista.insert', {
        url: '/insert',
        templateUrl: 'app/modules/balconista/views/form.html',
        controller: 'BalconistaFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/balconista/new');
          }]
        }
      })
      .state('balconista.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/balconista/views/form.html',
        controller: 'BalconistaFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/balconista/' + $stateParams.id);
          }]
        }
      });
})