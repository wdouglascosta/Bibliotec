BalconistaService.$inject = ['GumgaRest'];

function BalconistaService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/balconista');

	return Service;
}

module.exports = BalconistaService;
