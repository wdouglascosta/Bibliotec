EmprestimoService.$inject = ['GumgaRest'];

function EmprestimoService(GumgaRest) {
	var Service = new GumgaRest(APILocation.apiLocation + '/api/emprestimo');

	return Service;
}

module.exports = EmprestimoService;
