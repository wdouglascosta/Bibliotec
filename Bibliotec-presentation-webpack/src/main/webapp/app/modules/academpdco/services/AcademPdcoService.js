AcademPdcoService.$inject = ['GumgaRest'];

function AcademPdcoService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/academpdco');

	return Service;
}

module.exports = AcademPdcoService;
