EmprestimoFormController.$inject = ['EmprestimoService', '$state', 'entity', '$scope', 'gumgaController', 'UsuarioService', 'ItemService'];

function EmprestimoFormController(EmprestimoService, $state, entity, $scope, gumgaController, UsuarioService, ItemService) {

	gumgaController.createRestMethods($scope, EmprestimoService, 'emprestimo');


	gumgaController.createRestMethods($scope, UsuarioService, 'usuario');
	gumgaController.createRestMethods($scope, ItemService, 'item');
    $scope.item.execute('get')
	console.log($scope.item)
	$scope.itemSelecionado = null;
	$scope.usuario.methods.search('nome','');

	$scope.usuarioConfig = {};


	$scope.emprestimo.data = entity.data || {};
	$scope.emprestimo.data.listalivros = $scope.emprestimo.data.listalivros || [];

	$scope.listalivrosConfig = {
		ngModel: 'emprestimo.data.listalivros',
		options: {
			type: 'array',
			message: 'Its not array',
			empty: {
				value: false,
				message: 'Is Empty'
			}
		}
	};


	$scope.continue = {};

	$scope.emprestimo.on('putSuccess',function(data){
		$state.go('emprestimo.list');
	});

	//-----------------------------------------------------------------------------

            $scope.produtos = [
                { nome: 'Notebook Acer Aspire', id: 1 },
                { nome: 'Motorola Moto X (2a Geração) 32GB', id: 2 },
                { nome: 'Smart TV LED 43" Samsung', id: 3 },
                { nome: 'Ar Condicionado Split 7000 BTU/s', id: 4 }
            ];

            $scope.produto = $scope.produtos[1];

            $scope.deselectCallback = function(value){
                console.log(value);
            }

            // Este método precisa ser assíncrono
            $scope.getSearch = function(param){
                return $q(function(resolve){
                    var arr = $scope.produtos.filter(function(produto){
                        return produto.nome.indexOf(param) != -1;
                    })
                    resolve(arr);
                })
            };
	//-----------------------------------------------------------------------------

}

module.exports = EmprestimoFormController;
