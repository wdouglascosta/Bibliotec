EmprestimoFormController.$inject = ['EmprestimoService', '$state', 'entity', '$scope', 'gumgaController', 'UsuarioService', 'LivroService'];

function EmprestimoFormController(EmprestimoService, $state, entity, $scope, gumgaController, UsuarioService, LivroService) {


	gumgaController.createRestMethods($scope, EmprestimoService, 'emprestimo');
	gumgaController.createRestMethods($scope, UsuarioService, 'usuario');
	gumgaController.createRestMethods($scope, LivroService, 'item');
    $scope.item.execute('get')
	console.log($scope.item)
	$scope.itemSelecionado = null;
    $scope.usuarioSelecionado = null;
	$scope.usuario.methods.search('nome','');

	$scope.usuarioConfig = {};


	$scope.emprestimo.data = entity.data || {};
	$scope.emprestimo.data.listalivros = $scope.emprestimo.data.listalivros || [];

	$scope.listalivrosConfig = {
		ngModel: 'emprestimo.data.listalivros',
		options: {
			type: 'array',
			message: 'Its not array',
			empty: {
				value: false,
				message: 'Is Empty'
			}
		}
	};

    $scope.getOptions = function(viewValue){
		return LivroService.getAdvancedSearch("obj.nome like '%" + viewValue + "%'")
			.then(resp => {
				console.log(resp)
				$scope.items = resp.data.values
            })
        // return LivroService.(new GQuery('nome', Comparison))
        //     .then(function(resp){
        //         $scope.items = resp.data;
        //     })
    }


	$scope.continue = {};

	$scope.emprestimo.on('putSuccess',function(data){
		$state.go('emprestimo.list');
	});

	$scope.dataEmp = new Date();
	$scope.dataDev = new Date();
	$scope.emprestimo.data.dataEmprestimo = $scope.dataEmp;
    $scope.emprestimo.data.dataDevolucao = $scope.dataDev;
    $scope.emprestimo.data.dataDevolucao.setDate($scope.emprestimo.data.dataEmprestimo.getDate() + 3)


    $scope.dateConfig = {
        format: 'dd/MM/yyyy HH:mm',
        showCalendar: true,
        closeOnChange: false,
        inputProperties: {
            class: 'form-control gmd'
        },
        change: function(){
            $scope.emprestimo.data.dataDevolucao = new Date();
            $scope.emprestimo.data.dataDevolucao.setDate($scope.emprestimo.data.dataEmprestimo.getDate() + 2);
             console.log($scope.emprestimo.data.dataDevolucao)//FUNCAO EXECUTADA QUANDO HÁ MUDANÇA NA DATA.
        }
    }

	//-----------------------------------------------------------------------------
$scope.salvar = function () {
}

	//-----------------------------------------------------------------------------

	$scope.metodoTeste = function () {
		var coringa = ($scope.itemSelecionado || {})
		console.log($scope.emprestimo);

    }
}

module.exports = EmprestimoFormController;
