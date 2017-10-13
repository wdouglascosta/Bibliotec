angular.module('app', ['ui.bootstrap', 'gumga.queryaction', 'gumga.rest', 'gumga.controller'])
  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.common['gumgaToken'] = 'eterno'
  })
  .controller('Ctrl', function($scope, GumgaRest, gumgaController){

    var DestinosService = new GumgaRest('https://gumga.io/viagem-api/api/destino');
    gumgaController.createRestMethods($scope, DestinosService, 'destinos');
    $scope.destinos.methods.get()

    $scope.selectedValues = [{}]

    $scope.actions = [
      { key: 'maskAsRead', label: 'Marcar como lido' },
      { key: 'maskAsUnread', label: 'Marcar como não lido' },
      { key: 'total', label: 'Total' },
      { key: 'delete', label: 'Apagar' }
    ]
  })
