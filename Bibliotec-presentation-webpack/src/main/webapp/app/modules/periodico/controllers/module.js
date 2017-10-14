require('../services/module');

module.exports = angular
        .module('app.periodico.controllers', ['app.periodico.services'])
        .controller('PeriodicoFormController', require('./PeriodicoFormController'))
        .controller('PeriodicoListController', require('./PeriodicoListController'));
