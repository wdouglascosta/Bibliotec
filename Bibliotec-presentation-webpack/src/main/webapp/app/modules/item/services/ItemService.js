ItemService.$inject = ['GumgaRest'];

function ItemService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/item');

	return Service;
}

module.exports = ItemService;
