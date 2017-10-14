require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.usuario', [
    'app.usuario.controllers',
    'app.usuario.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('usuario.list', {
        url: '/list',
        templateUrl: 'app/modules/usuario/views/list.html',
        controller: 'UsuarioListController'
      })
      .state('usuario.insert', {
        url: '/insert',
        templateUrl: 'app/modules/usuario/views/form.html',
        controller: 'UsuarioFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/usuario/new');
          }]
        }
      })
      .state('usuario.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/usuario/views/form.html',
        controller: 'UsuarioFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/usuario/' + $stateParams.id);
          }]
        }
      });
})