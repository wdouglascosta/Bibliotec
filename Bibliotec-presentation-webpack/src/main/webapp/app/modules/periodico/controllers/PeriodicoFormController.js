PeriodicoFormController.$inject = ['PeriodicoService', '$state', 'entity', '$scope', 'gumgaController'];

function PeriodicoFormController(PeriodicoService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, PeriodicoService, 'periodico');




	$scope.periodico.data = entity.data || {};
	$scope.continue = {};

	$scope.periodico.on('putSuccess',function(data){
		$state.go('periodico.list');
	});
}

module.exports = PeriodicoFormController;
