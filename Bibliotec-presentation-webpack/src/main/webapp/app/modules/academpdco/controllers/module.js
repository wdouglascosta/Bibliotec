require('../services/module');

module.exports = angular
        .module('app.academpdco.controllers', ['app.academpdco.services'])
        .controller('AcademPdcoFormController', require('./AcademPdcoFormController'))
        .controller('AcademPdcoListController', require('./AcademPdcoListController'));
