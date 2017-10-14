BibliotecarioFormController.$inject = ['BibliotecarioService', '$state', 'entity', '$scope', 'gumgaController'];

function BibliotecarioFormController(BibliotecarioService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, BibliotecarioService, 'bibliotecario');




	$scope.bibliotecario.data = entity.data || {};
	$scope.continue = {};

	$scope.bibliotecario.on('putSuccess',function(data){
		$state.go('bibliotecario.list');
	});
}

module.exports = BibliotecarioFormController;
