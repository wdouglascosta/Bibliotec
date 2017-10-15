AcademPdcoListController.$inject = ['$scope', 'AcademPdcoService', 'gumgaController'];

function AcademPdcoListController($scope, AcademPdcoService, gumgaController) {

  gumgaController.createRestMethods($scope, AcademPdcoService, 'academpdco');

  AcademPdcoService.resetDefaultState();
  $scope.academpdco.execute('get');

  $scope.academpdco.on('deleteSuccess', function() {
    $scope.academpdco.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.academpdco.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.academpdco.methods.advancedSearch(param)
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
      title: '<span gumga-translate-tag="academpdco.status"> status </span>',
      content: '{{$value.status }}',
      sortField: 'status'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="academpdco.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = AcademPdcoListController;
