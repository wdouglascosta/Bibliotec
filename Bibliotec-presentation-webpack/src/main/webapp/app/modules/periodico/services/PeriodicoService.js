PeriodicoService.$inject = ['GumgaRest'];

function PeriodicoService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/periodico');

	return Service;
}

module.exports = PeriodicoService;
