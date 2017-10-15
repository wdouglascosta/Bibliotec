ReservaService.$inject = ['GumgaRest'];

function ReservaService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/reserva');

	return Service;
}

module.exports = ReservaService;
