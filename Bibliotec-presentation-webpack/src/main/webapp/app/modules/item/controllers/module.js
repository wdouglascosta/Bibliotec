require('../services/module');

module.exports = angular
        .module('app.item.controllers', ['app.item.services'])
        .controller('ItemFormController', require('./ItemFormController'))
        .controller('ItemListController', require('./ItemListController'));
