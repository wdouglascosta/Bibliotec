define([], function() {


 	ItemFormController.$inject = ['ItemService', '$state', 'entity', '$scope', 'gumgaController'];

 	function ItemFormController(ItemService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, ItemService, 'item');



    
    	$scope.item.data = entity.data || {};
		$scope.continue = {};
	
		$scope.item.on('putSuccess',function(data){
			$state.go('item.list');
		});
 	}
	
	return ItemFormController;   
});