require('../services/module');

module.exports = angular
        .module('app.livro.controllers', ['app.livro.services'])
        .controller('LivroFormController', require('./LivroFormController'))
        .controller('LivroListController', require('./LivroListController'));
