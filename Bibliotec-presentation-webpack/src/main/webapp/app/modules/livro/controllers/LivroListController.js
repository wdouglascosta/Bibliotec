LivroListController.$inject = ['$scope', 'LivroService', 'gumgaController'];

function LivroListController($scope, LivroService, gumgaController) {

  gumgaController.createRestMethods($scope, LivroService, 'livro');

  LivroService.resetDefaultState();
  $scope.livro.execute('get');

  $scope.livro.on('deleteSuccess', function() {
    $scope.livro.execute('get');
  });

  $scope.actions = [
    { key: 'option1', label: 'option1' },
    { key: 'option2', label: 'option2' }
  ];

  $scope.search = function(field, param) {
    $scope.query = { searchFields: [field], q: param }
    $scope.livro.methods.search(field,param)
  }

  $scope.advancedSearch = function(param) {
    $scope.livro.methods.advancedSearch(param)
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
      title: '<span gumga-translate-tag="livro.status"> status </span>',
      content: '{{$value.status }}',
      sortField: 'status'
    }, {
      name: 'button',
      title: ' ',
      content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="livro.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
    }]
  };

};

module.exports = LivroListController;
