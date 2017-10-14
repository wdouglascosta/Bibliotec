define(function(require) {
   require('angular')
   .module('app.item.services', [])
   .service('ItemService', require('app/modules/item/services/ItemService'));
});