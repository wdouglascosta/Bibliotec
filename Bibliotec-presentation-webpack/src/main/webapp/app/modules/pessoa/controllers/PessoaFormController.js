PessoaFormController.$inject = ['PessoaService', '$state', 'entity', '$scope', 'gumgaController'];

function PessoaFormController(PessoaService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, PessoaService, 'pessoa');




	$scope.pessoa.data = entity.data || {};
	$scope.continue = {};

	$scope.pessoa.on('putSuccess',function(data){
		$state.go('pessoa.list');
	});
}

module.exports = PessoaFormController;
