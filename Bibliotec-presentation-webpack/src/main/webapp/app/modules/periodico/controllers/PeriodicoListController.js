PeriodicoListController.$inject = ['$scope', 'PeriodicoService', 'gumgaController'];

function PeriodicoListController($scope, PeriodicoService, gumgaController) {

  gumgaController.createRestMethods($scope, PeriodicoService, 'periodico');

  PeriodicoService.resetDefaultState();
  $scope.periodico.execute('get');

  $scope.periodico.on('deleteSuccess', function() {
    $scope.periodico.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.periodico.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.periodico.methods.advancedSearch(param)
  }

  $scope.action = function(queryaction) {
    console.log(queryaction);
  }

  $scope.tableConfig = {
    columns: 'status ,button',
    checkbox: true,
    selection: 'multi',
    materialTheme: true,
    itemsPerPage: [5, 10, 15, 30],
    columnsConfig: [{
      name: 'status',
      title: '<span gumga-translate-tag="periodico.status"> status </span>',
      content: '{{$value.status }}',
      sortField: 'status'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="periodico.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = PeriodicoListController;
