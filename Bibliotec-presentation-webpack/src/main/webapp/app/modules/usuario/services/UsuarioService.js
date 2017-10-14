UsuarioService.$inject = ['GumgaRest'];

function UsuarioService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/usuario');

	return Service;
}

module.exports = UsuarioService;
