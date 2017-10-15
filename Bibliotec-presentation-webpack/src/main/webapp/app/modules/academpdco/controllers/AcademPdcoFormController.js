AcademPdcoFormController.$inject = ['AcademPdcoService', '$state', 'entity', '$scope', 'gumgaController'];

function AcademPdcoFormController(AcademPdcoService, $state, entity, $scope, gumgaController) {

	gumgaController.createRestMethods($scope, AcademPdcoService, 'academpdco');




	$scope.academpdco.data = entity.data || {};
	$scope.continue = {};

	$scope.academpdco.on('putSuccess',function(data){
		$state.go('academpdco.list');
	});
}

module.exports = AcademPdcoFormController;
