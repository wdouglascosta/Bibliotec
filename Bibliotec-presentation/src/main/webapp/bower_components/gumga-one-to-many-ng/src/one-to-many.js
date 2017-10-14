'use strict';
OneToMany.$inject = ['$interpolate', '$uibModal', '$populate'];
function OneToMany($interpolate, $uibModal, $populate) {
  var template = [
    '<div class="col-md-12">',
    '  <button type="button" class="btn btn-default" ng-click="newModal()">{{name}}</button>',
    '  <ul class="list-group">',
    '    <li ng-repeat="child in children" class="list-group-item">',
    '      <div class="row">',
    '        <div ng-hide="property" class="col-md-8" ng-transclude></div>',
    '        <div ng-show="property" class="col-md-8">{{::child[property]}}</div>',
    '        <div class="col-md-4">',
    '          <button type="button" class="{{::removeButtonClass}}" title="{{::removeButtonTitle}}" ng-click="removeFromList(child)">',
    '            <i class="{{::removeButtonIcon}}"></i> {{::removeButton}}',
    '          </button>',
    '          <button type="button" class="{{::editButtonClass}}" title="{{::editButtonTitle}}" ng-click="newModal(child)">',
    '            <i class="{{::editButtonIcon}}"></i> {{::editButton}}',
    '          </button>',
    '        </div> ',
    '      </div> ',
    '    </li>',
    '  <ul>',
    '</div>',
    '<div class="clearfix"></div>'
  ];

  return {
    restrict: 'E',
    template: template.join('\n'),
    transclude: true,
    scope: {
      children: '=',
      templateUrl: '@',
      property: '@displayableProperty',
      name: '@',
      size: '@?',
      controller: '@',
      onDelete: '&?',
      onValueVisualizationOpened: '&?',
      onValueVisualizationClosed: '&?',
      modalTitle: '@'
    },
    link: function (scope, elm, attrs) {
      var eventHandler = {
        valueVisualizationOpened: (attrs.onValueVisualizationOpened ? scope.onValueVisualizationOpened : angular.noop),
        valueVisualizationClosed: (attrs.onValueVisualizationClosed ? scope.onValueVisualizationClosed : angular.noop),
        delete: (attrs.onDelete ? scope.onDelete : angular.noop)
      };
      scope.newModal = newModal;

      scope.editButton = attrs.editButton ? $interpolate(attrs.editButton)(scope) : 'Editar'
      scope.editButtonTitle = attrs.editButtonTitle ? $interpolate(attrs.editButtonTitle)(scope) : 'Editar'
      scope.editButtonClass = attrs.editButtonClass ? $interpolate(attrs.editButtonClass)(scope) : 'btn btn-default pull-right btn-sm'
      scope.editButtonIcon = attrs.editButtonIcon ? $interpolate(attrs.editButtonIcon)(scope) : 'glyphicon glyphicon-pencil'

      scope.removeButton = attrs.removeButton ? $interpolate(attrs.removeButton)(scope) : 'Remover'
      scope.removeButtonTitle = attrs.removeButtonTitle ? $interpolate(attrs.removeButtonTitle)(scope) : 'Remover'
      scope.removeButtonClass = attrs.removeButtonClass ? $interpolate(attrs.removeButtonClass)(scope) : 'btn btn-default pull-right btn-sm'
      scope.removeButtonIcon = attrs.removeButtonIcon ? $interpolate(attrs.removeButtonIcon)(scope) : 'glyphicon glyphicon-remove'

      scope.removeFromList = removeFromList;
      scope.getFromModal = getFromModal;
      scope.name = scope.name || 'Novo';
      if (!scope.children) console.error('You must provide a list to GumgaOneToMany');
      if (!scope.templateUrl) console.error('You must provide a templateUrl for the modal');
      if (!scope.property) console.error('You must provide a property to display in GumgaOneToMany');
      if (!scope.controller) console.error('You must provide a controller to the modal');
      function getFromModal(selected) {
        eventHandler.valueVisualizationClosed();
        if (JSON.stringify(scope.etty) !== '{}') {
          scope.children.splice(scope.children.indexOf(scope.etty), 1, selected);
        } else {
          scope.children.push(selected);
        }
      }
      function removeFromList(obj) {
        eventHandler.delete({ $value: obj });
        scope.children.splice(scope.children.indexOf(obj), 1);
      }
      function newModal(obj) {
        scope.etty = {};
        if (obj) {
          scope.etty = obj;
        }
        eventHandler.valueVisualizationOpened();
        var modalInstance = $uibModal.open({
          templateUrl: scope.templateUrl,
          size: scope.size || 'md',
          controller: scope.controller,
          resolve: {
            entity: function () {
              return scope.etty;
            },
            title: function () {
              return scope.modalTitle;
            },
            populateScope: function () {
              return $populate.populateScope;
            }
          }
        });
        modalInstance.result.then(getFromModal);
      }


    }
  };
}
angular.module('gumga.onetomany', ['gumga.populate'])
  .directive('gumgaOneToMany', OneToMany)
