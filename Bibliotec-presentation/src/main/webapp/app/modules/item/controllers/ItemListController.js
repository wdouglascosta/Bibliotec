define([], function() {

  ItemListController.$inject = ['$scope', 'ItemService', 'gumgaController'];

  function ItemListController($scope, ItemService, gumgaController) {

    gumgaController.createRestMethods($scope, ItemService, 'item');

    ItemService.resetDefaultState();
    $scope.item.execute('get');

    $scope.item.on('deleteSuccess', function() {
      $scope.item.execute('get');
    });

    $scope.actions = [
      { key: 'option1', label: 'option1' },
      { key: 'option2', label: 'option2' }
    ];

    $scope.search = function(field, param) {
      $scope.query = { searchFields: [field], q: param }
      $scope.item.methods.search(field,param)
    }

    $scope.advancedSearch = function(param) {
      $scope.item.methods.advancedSearch(param)
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
        title: '<span gumga-translate-tag="item.status"> status </span>',
        content: '{{$value.status }}',
        sortField: 'status'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="item.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ItemListController;
});
