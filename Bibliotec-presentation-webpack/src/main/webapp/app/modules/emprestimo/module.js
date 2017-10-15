require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.emprestimo', [
    'app.emprestimo.controllers',
    'app.emprestimo.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('emprestimo.list', {
        url: '/list',
        templateUrl: 'app/modules/emprestimo/views/list.html',
        controller: 'EmprestimoListController'
      })
      .state('emprestimo.insert', {
        url: '/insert',
        templateUrl: 'app/modules/emprestimo/views/form.html',
        controller: 'EmprestimoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/emprestimo/new');
          }]
        }
      })
      .state('emprestimo.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/emprestimo/views/form.html',
        controller: 'EmprestimoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/emprestimo/' + $stateParams.id);
          }]
        }
      });
})