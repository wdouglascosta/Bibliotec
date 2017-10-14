LivroFormController.$inject = ['LivroService', '$state', 'entity', '$scope', 'gumgaController'];

function LivroFormController(LivroService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, LivroService, 'livro');




	$scope.livro.data = entity.data || {};
	$scope.continue = {};

	$scope.livro.on('putSuccess',function(data){
		$state.go('livro.list');
	});
}

module.exports = LivroFormController;
