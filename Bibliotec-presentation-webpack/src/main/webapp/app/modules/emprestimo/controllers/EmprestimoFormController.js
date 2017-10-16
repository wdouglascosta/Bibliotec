EmprestimoFormController.$inject = ['EmprestimoService', '$state', 'entity', '$scope', 'gumgaController', 'UsuarioService'];

function EmprestimoFormController(EmprestimoService, $state, entity, $scope, gumgaController, UsuarioService) {

	gumgaController.createRestMethods($scope, EmprestimoService, 'emprestimo');


	gumgaController.createRestMethods($scope, UsuarioService, 'usuario');
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
}

module.exports = EmprestimoFormController;
