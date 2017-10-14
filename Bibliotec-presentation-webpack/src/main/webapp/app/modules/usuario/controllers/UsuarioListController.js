UsuarioListController.$inject = ['$scope', 'UsuarioService', 'gumgaController'];

function UsuarioListController($scope, UsuarioService, gumgaController) {

  gumgaController.createRestMethods($scope, UsuarioService, 'usuario');

  UsuarioService.resetDefaultState();
  $scope.usuario.execute('get');

  $scope.usuario.on('deleteSuccess', function() {
    $scope.usuario.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.usuario.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.usuario.methods.advancedSearch(param)
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
      title: '<span gumga-translate-tag="usuario.nome"> nome </span>',
      content: '{{$value.nome }}',
      sortField: 'nome'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="usuario.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = UsuarioListController;