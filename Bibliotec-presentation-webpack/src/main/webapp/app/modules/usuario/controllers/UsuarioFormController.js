UsuarioFormController.$inject = ['UsuarioService', '$state', 'entity', '$scope', 'gumgaController'];

function UsuarioFormController(UsuarioService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, UsuarioService, 'usuario');




	$scope.usuario.data = entity.data || {};
	$scope.continue = {};

	$scope.usuario.on('putSuccess',function(data){
		$state.go('usuario.list');
	});
}

module.exports = UsuarioFormController;
