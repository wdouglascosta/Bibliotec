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
Confirm.$inject = ['$interpolate', '$uibModal', '$compile', '$rootScope'];

function Confirm($interpolate, $uibModal, $compile, $rootScope) {

  return {
    restrict: 'A',
    priority: 0,
    terminal: true,
    scope: false,
    link: function link($scope, $element, $attrs) {
      var scope = $rootScope.$new();
      scope.ngClick = $attrs.ngClick;
      $element.removeAttr('ng-click').removeAttr('data-ng-click');

      var confirmationMessage = $interpolate($attrs.gumgaConfirm)($scope);
      var _size = $attrs.size || 'md';
      var _icon = $attrs.icon || 'glyphicon glyphicon-question-sign';
      var dismissButton = $attrs.dismissButton ? $interpolate($attrs.dismissButton)($scope) : 'Retornar';
      var confirmButton = $attrs.confirmButton ? $interpolate($attrs.confirmButton)($scope) : 'Confirmar';
      var confirmButtonClass = $attrs.confirmButtonClass ? $interpolate($attrs.confirmButtonClass)($scope) : 'btn btn-primary';
      var dismissButtonClass = $attrs.dismissButtonClass ? $interpolate($attrs.dismissButtonClass)($scope) : 'btn btn-default';
      var whatToDoWhenClicked = $attrs.ngClick;
      var whatToDoWhenDismiss = $attrs.dismiss;

      var elm = $compile($element[0].outerHTML.replace('gumga-confirm', 'label').replace('data-gumga-confirm', 'label'))($scope);

      $element.replaceWith(elm);

      elm.bind('click', function (event) {
        var controllerAs = 'ctrl';

        var resolve = {
          size: function size() {
            return _size;
          },
          icon: function icon() {
            return _icon;
          },
          confirmMessage: function confirmMessage() {
            return confirmationMessage;
          },
          dismissBtn: function dismissBtn() {
            return dismissButton;
          },
          confirmBtn: function confirmBtn() {
            return confirmButton;
          },
          dismissClass: function dismissClass() {
            return dismissButtonClass;
          },
          confirmClass: function confirmClass() {
            return confirmButtonClass;
          }
        };

        controller.$inject = ['$scope', '$uibModalInstance', 'confirmMessage', 'dismissBtn', 'confirmBtn', 'dismissClass', 'confirmClass'];

        function controller($scope, $uibModalInstance, confirmMessage, dismissBtn, confirmBtn, dismissClass, confirmClass) {
          var ctrl = this;

          ctrl.size = _size;
          ctrl.icon = _icon;
          ctrl.message = confirmMessage;
          ctrl.dismissButton = dismissBtn;
          ctrl.confirmButton = confirmBtn;
          ctrl.dismissButtonClass = dismissClass;
          ctrl.confirmButtonClass = confirmClass;
          ctrl.close = function (boolean) {
            return boolean ? $uibModalInstance.close() : $uibModalInstance.dismiss();
          };
        }

        var template = '\n        <div class="gumga-confirm modal-body">\n          <h3>\n            <i class="{{ ::ctrl.icon }}"></i>\n            {{ ::ctrl.message }}\n          </h3>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="{{ ::ctrl.dismissButtonClass }}" ng-click="ctrl.close(false)">{{ ::ctrl.dismissButton }}</button>\n          <button type="button" class="{{ ::ctrl.confirmButtonClass }}" ng-click="ctrl.close(true)"> {{ ::ctrl.confirmButton }}</button>\n        </div>';

        $uibModal.open({ controller: controller, template: template, size: _size, controllerAs: controllerAs, resolve: resolve, backdrop: 'static' }).result.then(function (value) {
          return $scope.$eval(scope.ngClick);
        }, function (reject) {
          return $scope.$eval(whatToDoWhenDismiss);
        });
      });
    }
  };
}

var _module = angular.module('gumga.confirm', ['ui.bootstrap']).directive('gumgaConfirm', Confirm);

exports.default = _module.name;

/***/ })
/******/ ]);