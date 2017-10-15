require('../services/module');

module.exports = angular
        .module('app.reserva.controllers', ['app.reserva.services'])
        .controller('ReservaFormController', require('./ReservaFormController'))
        .controller('ReservaListController', require('./ReservaListController'));
