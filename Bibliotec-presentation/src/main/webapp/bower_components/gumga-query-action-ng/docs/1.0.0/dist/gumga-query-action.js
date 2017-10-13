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


Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = '\n  <div class="btn-toolbar" role="toolbar">\n    <div class="btn-group">\n      <button type="button" class="btn btn-default"\n        data-ng-show="$ctrl.showBtnSearch()" data-ng-click="$ctrl.setBeyond()">\n        <span data-ng-show="!$ctrl.beyond">Deseja marcar todos os <strong data-ng-bind="$ctrl.entity.count"></strong> registros da pesquisa?</span>\n        <span data-ng-show="$ctrl.beyond">Desfazer sele\xE7\xE3o de registros da pesquisa</span>\n      </button>\n      <button type="button" class="btn btn-default"\n        data-ng-show="$ctrl.showBtnBeyond()" data-ng-click="$ctrl.setBeyond()">\n        <span data-ng-show="!$ctrl.beyond">Deseja marcar todos os <strong data-ng-bind="$ctrl.entity.count"></strong> registros alem desta p\xE1gina?</span>\n        <span data-ng-show="$ctrl.beyond">Desfazer sele\xE7\xE3o de registros al\xE9m desta p\xE1gina</span>\n      </button>\n    </div>\n    <div class="btn-group" uib-dropdown>\n      <button id="split-button" type="button" class="btn btn-default"\n        data-ng-disabled="$ctrl.disabledAction()"\n        data-ng-click="$ctrl.setAction($ctrl.firstAction)">\n        {{$ctrl.firstAction.label}}\n      </button>\n      <button type="button" class="btn btn-default"\n        data-ng-disabled="$ctrl.disabledAction()"\n        uib-dropdown-toggle>\n        <span class="caret"></span>\n      </button>\n      <ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="split-button">\n        <li role="menuitem" data-ng-repeat="action in $ctrl.actions">\n          <a href="#" data-ng-click="$ctrl.setAction(action)">{{action.label}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n';
var component = {
  restrict: 'E',
  bindings: {
    query: '<',
    entity: '<',
    selected: '<',
    beyond: '=',
    actions: '<',
    onAction: '&'
  },
  template: template,
  controller: function controller() {
    var ctrl = this;
    ctrl.setAction = function (option) {
      var queryaction = {};
      if (ctrl.beyond && ctrl.query) {
        queryaction = ctrl.query;
      } else if (!ctrl.beyond) {
        queryaction.ids = !ctrl.beyond ? ctrl.selected.map(function (item) {
          return item.id;
        }) : [];
      }
      queryaction.action = option.key;
      ctrl.onAction({ queryaction: queryaction });
      ctrl.beyond = false;
      ctrl.query = false;
    };
    ctrl.disabledAction = function () {
      return ctrl.selected.length == 0;
    };
    ctrl.showBtnSearch = function () {
      return ctrl.entity.data.length == ctrl.selected.length && ctrl.entity.count > ctrl.entity.pageSize && ctrl.query;
    };
    ctrl.showBtnBeyond = function () {
      return ctrl.entity.data.length == ctrl.selected.length && ctrl.entity.count > ctrl.entity.pageSize && !ctrl.query;
    };
    ctrl.setBeyond = function () {
      ctrl.beyond = !ctrl.beyond;
    };
    ctrl.$onInit = function () {
      ctrl.firstAction = ctrl.actions[0];
      ctrl.beyond = false;
      ctrl.actions.shift();
    };
  }
};

var _module = angular.module('gumga.queryaction', []).component('gumgaQueryAction', component);

exports.default = _module.name;

/***/ })
/******/ ]);