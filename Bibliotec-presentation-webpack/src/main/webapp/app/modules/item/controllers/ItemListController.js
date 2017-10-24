ItemListController.$inject = ['$scope', 'ItemService', 'gumgaController'];

function ItemListController($scope, ItemService, gumgaController) {

    gumgaController.createRestMethods($scope, ItemService, 'item');

    ItemService.resetDefaultState();
    $scope.item.execute('get');

    $scope.item.on('deleteSuccess', function () {
        $scope.item.execute('get');
    });

    $scope.actions = [
        {key: 'option1', label: 'option1'},
        {key: 'option2', label: 'option2'}
    ];

    $scope.search = function (field, param) {
        $scope.query = {searchFields: [field], q: param}
        $scope.item.methods.search(field, param)
    }

    $scope.advancedSearch = function (param) {
        $scope.item.methods.advancedSearch(param)
    }

    $scope.action = function (queryaction) {
        console.log(queryaction);
    }

    $scope.tableConfig = {
        columns: 'nome, autor, editora, volume, tipoItem, status, button',
        checkbox: true,
        selection: 'multi',
        materialTheme: true,
        itemsPerPage: [5, 10, 15, 30],
        columnsConfig: [{
            name: 'status',
            title: '<span gumga-translate-tag="Status"> status </span>',
            content: '{{$value.status }}',
            sortField: 'status'
        }, {
            name: 'nome',
            title: '<span gumga-translate-tag="Nome"> Nome </span>',
            content: '{{$value.nome }}',
            sortField: 'nome',
            alignColumn: 'left',
            alignRows: 'left'
        },
            {
                name: 'autor',
                title: '<span gumga-translate-tag="Autor"> Autor </span>',
                content: '{{$value.autor }}',
                sortField: 'autor',
                alignColumn: 'left',
                alignRows: 'left'
            }, {
                name: 'editora',
                title: '<span gumga-translate-tag="Editora"> Editora </span>',
                content: '{{$value.editora }}',
                sortField: 'editora',
                alignColumn: 'left',
                alignRows: 'left'
            }, {
                name: 'volume',
                title: '<span gumga-translate-tag="Volume"> Volume </span>',
                content: '{{$value.volume }}',
                sortField: 'volume',
                alignColumn: 'center',
                alignRows: 'center'
            }, {
                name: 'tipoItem',
                title: '<span gumga-translate-tag="Tipo Ítem"> Tipo do Item </span>',
                content: '{{$value.tipoItem }}',
                sortField: 'tipoItem',
                alignColumn: 'center',
                alignRows: 'center'
            },

            {
                name: 'button',
                title: ' ',
                content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="item.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
            }]
    };

};

module.exports = ItemListController;
