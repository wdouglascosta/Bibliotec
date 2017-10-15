require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.reserva', [
    'app.reserva.controllers',
    'app.reserva.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('reserva.list', {
        url: '/list',
        templateUrl: 'app/modules/reserva/views/list.html',
        controller: 'ReservaListController'
      })
      .state('reserva.insert', {
        url: '/insert',
        templateUrl: 'app/modules/reserva/views/form.html',
        controller: 'ReservaFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/reserva/new');
          }]
        }
      })
      .state('reserva.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/reserva/views/form.html',
        controller: 'ReservaFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/reserva/' + $stateParams.id);
          }]
        }
      });
})