BalconistaFormController.$inject = ['BalconistaService', '$state', 'entity', '$scope', 'gumgaController'];

function BalconistaFormController(BalconistaService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, BalconistaService, 'balconista');




	$scope.balconista.data = entity.data || {};
	$scope.continue = {};

	$scope.balconista.on('putSuccess',function(data){
		$state.go('balconista.list');
	});
}

module.exports = BalconistaFormController;
