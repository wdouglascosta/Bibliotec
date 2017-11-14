EmprestimoFormController.$inject = ['EmprestimoService', '$state', 'entity', '$scope', 'gumgaController', 'UsuarioService', 'ItemService'];

function EmprestimoFormController(EmprestimoService, $state, entity, $scope, gumgaController, UsuarioService, ItemService) {

	gumgaController.createRestMethods($scope, EmprestimoService, 'emprestimo');


	gumgaController.createRestMethods($scope, UsuarioService, 'usuario');
	gumgaController.createRestMethods($scope, ItemService, 'item');
    $scope.item.execute('get')
	$scope.itemSelecionado = null;
    $scope.usuarioSelecionado = null;
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
		console.log(emprestimo)
	});

	//-----------------------------------------------------------------------------


	//-----------------------------------------------------------------------------

	$scope.metodoTeste = function () {
		var coringa = ($scope.itemSelecionado || {})
		console.log(coringa);

    }
}

module.exports = EmprestimoFormController;
