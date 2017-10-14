require('../services/module');

module.exports = angular
        .module('app.bibliotecario.controllers', ['app.bibliotecario.services'])
        .controller('BibliotecarioFormController', require('./BibliotecarioFormController'))
        .controller('BibliotecarioListController', require('./BibliotecarioListController'));
