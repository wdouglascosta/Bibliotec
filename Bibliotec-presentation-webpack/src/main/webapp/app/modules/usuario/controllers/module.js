require('../services/module');

module.exports = angular
        .module('app.usuario.controllers', ['app.usuario.services'])
        .controller('UsuarioFormController', require('./UsuarioFormController'))
        .controller('UsuarioListController', require('./UsuarioListController'));
