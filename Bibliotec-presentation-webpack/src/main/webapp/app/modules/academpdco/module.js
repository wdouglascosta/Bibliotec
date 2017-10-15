require('./services/module');
require('./controllers/module');

module.exports = angular.module('app.academpdco', [
    'app.academpdco.controllers',
    'app.academpdco.services'
  ])
  .config(function($stateProvider, $httpProvider) {
    $stateProvider
      .state('academpdco.list', {
        url: '/list',
        templateUrl: 'app/modules/academpdco/views/list.html',
        controller: 'AcademPdcoListController'
      })
      .state('academpdco.insert', {
        url: '/insert',
        templateUrl: 'app/modules/academpdco/views/form.html',
        controller: 'AcademPdcoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/academpdco/new');
          }]
        }
      })
      .state('academpdco.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/academpdco/views/form.html',
        controller: 'AcademPdcoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/academpdco/' + $stateParams.id);
          }]
        }
      });
})