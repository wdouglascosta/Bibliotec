EmprestimoListController.$inject = ['$scope', 'EmprestimoService', 'gumgaController'];

function EmprestimoListController($scope, EmprestimoService, gumgaController) {

  gumgaController.createRestMethods($scope, EmprestimoService, 'emprestimo');

  EmprestimoService.resetDefaultState();
  $scope.emprestimo.execute('get');

  $scope.emprestimo.on('deleteSuccess', function() {
    $scope.emprestimo.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.emprestimo.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.emprestimo.methods.advancedSearch(param)
  }

  $scope.action = function(queryaction) {
    console.log(queryaction);
  }

  $scope.tableConfig = {
    columns: 'listaLivros ,button',
    checkbox: true,
    selection: 'multi',
    materialTheme: true,
    itemsPerPage: [5, 10, 15, 30],
    columnsConfig: [{
      name: 'listaLivros',
      title: '<span gumga-translate-tag="emprestimo.listaLivros"> listaLivros </span>',
      content: '{{$value.listaLivros }}',
      sortField: 'listaLivros'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="emprestimo.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = EmprestimoListController;
