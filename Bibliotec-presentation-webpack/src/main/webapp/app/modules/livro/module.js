require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.livro', [
    'app.livro.controllers',
    'app.livro.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('livro.list', {
        url: '/list',
        templateUrl: 'app/modules/livro/views/list.html',
        controller: 'LivroListController'
      })
      .state('livro.insert', {
        url: '/insert',
        templateUrl: 'app/modules/livro/views/form.html',
        controller: 'LivroFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/livro/new');
          }]
        }
      })
      .state('livro.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/livro/views/form.html',
        controller: 'LivroFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/livro/' + $stateParams.id);
          }]
        }
      });
})