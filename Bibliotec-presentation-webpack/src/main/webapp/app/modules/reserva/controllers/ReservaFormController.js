ReservaFormController.$inject = ['ReservaService', '$state', 'entity', '$scope', 'gumgaController', 'UsuarioService', 'ItemService'];

function ReservaFormController(ReservaService, $state, entity, $scope, gumgaController, UsuarioService, ItemService) {

	gumgaController.createRestMethods($scope, ReservaService, 'reserva');


	gumgaController.createRestMethods($scope, UsuarioService, 'usuario');
	$scope.usuario.methods.search('nome','');

	$scope.usuarioConfig = {};
	gumgaController.createRestMethods($scope, ItemService, 'item');
	$scope.item.methods.search('status','');

	$scope.itemConfig = {};


	$scope.reserva.data = entity.data || {};
	$scope.continue = {};

	$scope.reserva.on('putSuccess',function(data){
		$state.go('reserva.list');
	});
}

module.exports = ReservaFormController;
