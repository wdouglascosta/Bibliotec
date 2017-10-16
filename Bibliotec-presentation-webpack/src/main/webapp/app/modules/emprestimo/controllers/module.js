require('../services/module');

module.exports = angular
        .module('app.emprestimo.controllers', ['app.emprestimo.services'])
        .controller('ModalLivroController', require('./ModalLivroController'))
        .controller('EmprestimoFormController', require('./EmprestimoFormController'))
        .controller('EmprestimoListController', require('./EmprestimoListController'));
