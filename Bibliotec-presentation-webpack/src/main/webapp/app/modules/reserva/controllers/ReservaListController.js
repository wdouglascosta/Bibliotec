ReservaListController.$inject = ['$scope', 'ReservaService', 'gumgaController'];

function ReservaListController($scope, ReservaService, gumgaController) {

  gumgaController.createRestMethods($scope, ReservaService, 'reserva');

  ReservaService.resetDefaultState();
  $scope.reserva.execute('get');

  $scope.reserva.on('deleteSuccess', function() {
    $scope.reserva.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.reserva.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.reserva.methods.advancedSearch(param)
  }

  $scope.action = function(queryaction) {
    console.log(queryaction);
  }

  $scope.tableConfig = {
    columns: 'dataReserva ,button',
    checkbox: true,
    selection: 'multi',
    materialTheme: true,
    itemsPerPage: [5, 10, 15, 30],
    columnsConfig: [{
      name: 'dataReserva',
      title: '<span gumga-translate-tag="reserva.dataReserva"> dataReserva </span>',
      content: '{{$value.dataReserva }}',
      sortField: 'dataReserva'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="reserva.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = ReservaListController;
