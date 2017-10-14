require('../services/module');

module.exports = angular
        .module('app.balconista.controllers', ['app.balconista.services'])
        .controller('BalconistaFormController', require('./BalconistaFormController'))
        .controller('BalconistaListController', require('./BalconistaListController'));
