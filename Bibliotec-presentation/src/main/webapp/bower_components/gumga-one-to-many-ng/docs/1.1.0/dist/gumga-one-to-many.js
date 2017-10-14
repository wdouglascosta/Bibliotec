/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


OneToMany.$inject = ['$interpolate', '$uibModal', '$populate'];
function OneToMany($interpolate, $uibModal, $populate) {
  var template = ['<div class="col-md-12">', '  <button type="button" class="btn btn-default" ng-click="newModal()">{{name}}</button>', '  <ul class="list-group">', '    <li ng-repeat="child in children" class="list-group-item">', '      <div class="row">', '        <div ng-hide="property" class="col-md-8" ng-transclude></div>', '        <div ng-show="property" class="col-md-8">{{::child[property]}}</div>', '        <div class="col-md-4">', '          <button type="button" class="{{::removeButtonClass}}" title="{{::removeButtonTitle}}" ng-click="removeFromList(child)">', '            <i class="{{::removeButtonIcon}}"></i> {{::removeButton}}', '          </button>', '          <button type="button" class="{{::editButtonClass}}" title="{{::editButtonTitle}}" ng-click="newModal(child)">', '            <i class="{{::editButtonIcon}}"></i> {{::editButton}}', '          </button>', '        </div> ', '      </div> ', '    </li>', '  <ul>', '</div>', '<div class="clearfix"></div>'];

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
    link: function link(scope, elm, attrs) {
      var eventHandler = {
        valueVisualizationOpened: attrs.onValueVisualizationOpened ? scope.onValueVisualizationOpened : angular.noop,
        valueVisualizationClosed: attrs.onValueVisualizationClosed ? scope.onValueVisualizationClosed : angular.noop,
        delete: attrs.onDelete ? scope.onDelete : angular.noop
      };
      scope.newModal = newModal;

      scope.editButton = attrs.editButton ? $interpolate(attrs.editButton)(scope) : 'Editar';
      scope.editButtonTitle = attrs.editButtonTitle ? $interpolate(attrs.editButtonTitle)(scope) : 'Editar';
      scope.editButtonClass = attrs.editButtonClass ? $interpolate(attrs.editButtonClass)(scope) : 'btn btn-default pull-right btn-sm';
      scope.editButtonIcon = attrs.editButtonIcon ? $interpolate(attrs.editButtonIcon)(scope) : 'glyphicon glyphicon-pencil';

      scope.removeButton = attrs.removeButton ? $interpolate(attrs.removeButton)(scope) : 'Remover';
      scope.removeButtonTitle = attrs.removeButtonTitle ? $interpolate(attrs.removeButtonTitle)(scope) : 'Remover';
      scope.removeButtonClass = attrs.removeButtonClass ? $interpolate(attrs.removeButtonClass)(scope) : 'btn btn-default pull-right btn-sm';
      scope.removeButtonIcon = attrs.removeButtonIcon ? $interpolate(attrs.removeButtonIcon)(scope) : 'glyphicon glyphicon-remove';

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
            entity: function entity() {
              return scope.etty;
            },
            title: function title() {
              return scope.modalTitle;
            },
            populateScope: function populateScope() {
              return $populate.populateScope;
            }
          }
        });
        modalInstance.result.then(getFromModal);
      }
    }
  };
}
angular.module('gumga.onetomany', ['gumga.populate']).directive('gumgaOneToMany', OneToMany);

/***/ })
/******/ ]);