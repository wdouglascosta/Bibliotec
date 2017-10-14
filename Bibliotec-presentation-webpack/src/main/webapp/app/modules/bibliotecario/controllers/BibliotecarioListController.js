BibliotecarioListController.$inject = ['$scope', 'BibliotecarioService', 'gumgaController'];

function BibliotecarioListController($scope, BibliotecarioService, gumgaController) {

  gumgaController.createRestMethods($scope, BibliotecarioService, 'bibliotecario');

  BibliotecarioService.resetDefaultState();
  $scope.bibliotecario.execute('get');

  $scope.bibliotecario.on('deleteSuccess', function() {
    $scope.bibliotecario.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.bibliotecario.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.bibliotecario.methods.advancedSearch(param)
  }

  $scope.action = function(queryaction) {
    console.log(queryaction);
  }

  $scope.tableConfig = {
    columns: 'nome ,button',
    checkbox: true,
    selection: 'multi',
    materialTheme: true,
    itemsPerPage: [5, 10, 15, 30],
    columnsConfig: [{
      name: 'nome',
      title: '<span gumga-translate-tag="bibliotecario.nome"> nome </span>',
      content: '{{$value.nome }}',
      sortField: 'nome'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="bibliotecario.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = BibliotecarioListController;
