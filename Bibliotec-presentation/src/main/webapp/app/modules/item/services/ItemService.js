define(['app/apiLocations'], function(APILocation) {

	ItemService.$inject = ['GumgaRest'];

	function ItemService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/item');

    	return Service;
    }

  	return ItemService;
});