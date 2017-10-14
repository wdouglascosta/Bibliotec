define(function (require) {
    var angular = require('angular');
    require('app/modules/item/services/module');
    require('angular-ui-router');

    return angular
            .module('app.item.controllers', ['app.item.services','ui.router'])
            .controller('ItemFormController', require('app/modules/item/controllers/ItemFormController'))
            .controller('ItemListController', require('app/modules/item/controllers/ItemListController'));
});