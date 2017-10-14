require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.bibliotecario', [
    'app.bibliotecario.controllers',
    'app.bibliotecario.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('bibliotecario.list', {
        url: '/list',
        templateUrl: 'app/modules/bibliotecario/views/list.html',
        controller: 'BibliotecarioListController'
      })
      .state('bibliotecario.insert', {
        url: '/insert',
        templateUrl: 'app/modules/bibliotecario/views/form.html',
        controller: 'BibliotecarioFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/bibliotecario/new');
          }]
        }
      })
      .state('bibliotecario.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/bibliotecario/views/form.html',
        controller: 'BibliotecarioFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/bibliotecario/' + $stateParams.id);
          }]
        }
      });
})