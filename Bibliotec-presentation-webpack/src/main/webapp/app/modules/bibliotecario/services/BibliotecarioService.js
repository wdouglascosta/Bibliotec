BibliotecarioService.$inject = ['GumgaRest'];

function BibliotecarioService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/bibliotecario');

	return Service;
}

module.exports = BibliotecarioService;
