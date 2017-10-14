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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  ManyToOne.$inject = ['$templateCache', '$uibModal', '$compile', '$timeout'];

  function ManyToOne($templateCache, $uibModal, $compile, $timeout) {
    controller.$inject = ['$scope', '$element', '$attrs', '$transclude'];

    function controller($scope, $element, $attrs, $transclude) {
      var manyToOneCtrl = this,
          ngModelCtrl = void 0,
          ngModelCtrlReset = void 0;

      var ERR_MSGS = {
        noValue: 'É necessário um atributo value no componente gumgaManyToOne',
        noField: 'É necessário um atributo field no componente gumgaManyToOne',
        noSearch: 'É necessário uma função de busca no componente gumgaManyToOne'
      };

      var possibleAttributes = ['loadingText', 'onSelect', 'value', 'list', 'searchMethod', 'field', 'onNewValueAdded', 'onValueSelected', 'onValueVisualizationOpened', 'onValueVisualizationClosed', 'tabindex'];

      var template = false;

      if (!$attrs.value) console.error(ERR_MSGS.noValue);
      if (!$attrs.field) console.error(ERR_MSGS.noField
      // if(!$attrs.searchMethod) console.error(ERR_MSGS.noSearch)

      );manyToOneCtrl.ev = {};
      manyToOneCtrl.list = manyToOneCtrl.list || [];
      manyToOneCtrl.ev.onNewValueAdded = $attrs.onNewValueAdded ? manyToOneCtrl.onNewValueAdded : angular.noop;
      manyToOneCtrl.ev.onSelect = $attrs.onSelect ? manyToOneCtrl.onSelect : angular.noop;
      manyToOneCtrl.ev.onValueVisualizationOpened = $attrs.onValueVisualizationOpened ? $attrs.onValueVisualizationOpened : angular.noop;
      manyToOneCtrl.ev.onValueVisualizationClosed = $attrs.onValueVisualizationClosed ? $attrs.onValueVisualizationClosed : angular.noop;
      manyToOneCtrl.field = $attrs.field || '';
      // manyToOneCtrl.description                   = $attrs.description                                         || false
      manyToOneCtrl.modalTitle = $attrs.modalTitle || 'Visualizador de Registro';
      manyToOneCtrl.modalFields = $attrs.modalFields ? $attrs.modalFields.split(',') : [manyToOneCtrl.field];
      manyToOneCtrl.postFields = $attrs.postFields ? $attrs.postFields.split(',') : [manyToOneCtrl.field];
      manyToOneCtrl.displayClear = manyToOneCtrl.hasOwnProperty('displayClear') ? manyToOneCtrl.displayClear : true;
      manyToOneCtrl.displayInfo = manyToOneCtrl.hasOwnProperty('displayInfo') ? manyToOneCtrl.displayInfo : true;
      manyToOneCtrl.editable = manyToOneCtrl.hasOwnProperty('editable') ? manyToOneCtrl.editable : true;
      manyToOneCtrl.async = manyToOneCtrl.hasOwnProperty('async') ? manyToOneCtrl.async : true;
      // manyToOneCtrl.showDescripion                = !!manyToOneCtrl.description

      function mirrorAttributes() {
        var isOneOfPossibles = function isOneOfPossibles(attribute) {
          return possibleAttributes.filter(function (value) {
            return attribute == value;
          }).length > 0;
        };
        return Object.keys($attrs.$attr).filter(function (value) {
          return !isOneOfPossibles(value);
        }).reduce(function (prev, next) {
          return prev += next + '="' + $attrs[next] + '"';
        }, '');
      }

      manyToOneCtrl.displayInfoButton = displayInfoButton;
      manyToOneCtrl.modelValueIsObject = modelValueIsObject;
      manyToOneCtrl.disabledDisplayInfo = disabledDisplayInfo;
      manyToOneCtrl.displayPlusButton = displayPlusButton;
      manyToOneCtrl.displayClearButton = displayClearButton;
      manyToOneCtrl.clearModel = clearModel;
      manyToOneCtrl.openInfo = openInfo;
      manyToOneCtrl.valueToAdd = '';
      manyToOneCtrl.afterSelect = afterSelect;
      manyToOneCtrl.openTypehead = openTypehead;
      manyToOneCtrl.showTypeheadAndHideMatch = showTypeheadAndHideMatch;

      manyToOneCtrl.proxySearch = function () {
        var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!manyToOneCtrl.async) {
          if (param) param = param.toLowerCase();
          return manyToOneCtrl.list.filter(function (listItem) {
            return listItem[manyToOneCtrl.field].toLowerCase().indexOf(param) != -1;
          });
        } else {
          return manyToOneCtrl.searchMethod({ param: param }).then(function (data) {
            if (data.filter(function (dataItem) {
              return dataItem[manyToOneCtrl.field] == param;
            }).length > 0 || !manyToOneCtrl.authorizeAdd) {
              return data;
            }
            var objToAppend = {};
            objToAppend[manyToOneCtrl.field] = manyToOneCtrl.valueToAdd;

            return data.concat(objToAppend);
          });
        }
      };

      manyToOneCtrl.proxySave = function (val, abc) {
        if (!abc) return;
        manyToOneCtrl.isTypeaheadOpen = true;
        var controllerAs = 'ctrl';
        var resolve = { value: function value() {
            return val;
          } };
        controller.$inject = ['$scope', '$uibModalInstance', 'value'];
        function controller($scope, $uibModalInstance, value) {
          var ctrl = this;
          ctrl.object = value;
          ctrl.cancel = function (obj) {
            return $uibModalInstance.dismiss('cancel');
          };
          ctrl.save = function (obj) {
            return $uibModalInstance.close(obj);
          };
        }

        function mountModalBody() {
          var fields = manyToOneCtrl.postFields;
          return fields.reduce(function (prev, next) {
            return prev += '\n                <div class="form-group">\n                  <label>' + next + '</label>\n                  <input type="text" class="form-control" ng-model="ctrl.object.' + next + '" />\n                </div>';
          }, ' ');
        }

        var template = '\n              <div class="modal-header">\n                <h3 class="modal-title">' + manyToOneCtrl.modalTitle + '</h3>\n              </div>\n              <div class="modal-body">\n                ' + mountModalBody() + '\n              </div>\n              <div class="modal-footer">\n                <button type="button" class="btn btn-default" ng-click="ctrl.cancel(ctrl.object)">Retornar</button>\n                <button type="button" class="btn btn-primary" ng-click="ctrl.save(ctrl.object)">Salvar</button>\n              </div>';

        $uibModal.open({ controller: controller, template: template, controllerAs: controllerAs, resolve: resolve }).result.then(function (value) {
          manyToOneCtrl.postMethod({ value: value }).then(function (dataFromPostMethod) {
            manyToOneCtrl.value = dataFromPostMethod.data.data;
            ngModelCtrl.$viewValue = dataFromPostMethod.data.data;
          });
        }, function (reject) {
          delete manyToOneCtrl.value;
        });
      };

      function displayClearButton() {
        return manyToOneCtrl.displayClear;
      }

      function displayInfoButton() {
        return manyToOneCtrl.displayInfo;
      }

      function modelValueIsObject() {
        if (manyToOneCtrl.disabled) return true;
        if (!manyToOneCtrl.value) return true;
        return !(_typeof(manyToOneCtrl.value) === 'object');
      }

      function disabledDisplayInfo() {
        return !(_typeof(manyToOneCtrl.value) === 'object');
      }

      function clearModel() {
        manyToOneCtrl.visible = 'typeahead';
        if (manyToOneCtrl.onDeselect) {
          manyToOneCtrl.onDeselect({ value: angular.copy(manyToOneCtrl.value) });
        }
        delete manyToOneCtrl.value;
      }

      function openTypehead() {
        if (manyToOneCtrl.isTypeaheadOpen) return;
        document.getElementById('typeahead-' + manyToOneCtrl.field + '-' + $attrs.value).focus();
      }

      function showTypeheadAndHideMatch() {
        manyToOneCtrl.visible = 'typeahead';

        $timeout(function () {
          manyToOneCtrl.value = angular.copy(manyToOneCtrl.inputMatchValue);
          openTypehead();
          delete manyToOneCtrl.inputMatchValue;
        });
      }

      manyToOneCtrl.isTypeaheadOpen = true;

      function displayPlusButton() {
        return manyToOneCtrl.postMethod && (typeof ngModelCtrl.$$rawModelValue === 'string' || ngModelCtrl.$$rawModelValue instanceof String) && ngModelCtrl.$$rawModelValue.length > 0;
      }

      function handlingInputVisible() {
        if (manyToOneCtrl.inputMatch) {
          var span = document.getElementById('match-' + manyToOneCtrl.field + '-' + $attrs.value);
          var inputMatch = manyToOneCtrl.inputMatch.replace(/{/g, '{{').replace(/}/g, '}}').replace(/item/g, 'manyToOneCtrl.value');
          var update = '<span style="display: none;" id="match-' + manyToOneCtrl.field + '-' + $attrs.value + '">' + inputMatch + '</span>';
          angular.element(span).replaceWith($compile(update)($scope));
          $timeout(function () {
            var content = document.getElementById('match-' + manyToOneCtrl.field + '-' + $attrs.value);
            manyToOneCtrl.inputMatchValue = content.innerHTML;
            manyToOneCtrl.visible = 'inputMatchValue';
          });
        } else {
          manyToOneCtrl.visible = 'typeahead';
        }
      }

      function afterSelect($item, $model, $label, $event, isBtn, match) {
        handlingInputVisible();
        if (!$model.id && manyToOneCtrl.authorizeAdd) {
          manyToOneCtrl.proxySave($model, isBtn);
        }
        if (manyToOneCtrl.ev.onSelect) manyToOneCtrl.ev.onSelect({ value: $model });
      }

      function openInfo() {
        var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var $event = arguments[1];


        manyToOneCtrl.isTypeaheadOpen = true;
        $event.stopImmediatePropagation();
        $event.preventDefault();
        controller.$inject = ['$scope', '$uibModalInstance'];

        function controller($scope, $uibModalInstance) {
          $scope.close = function () {
            return $uibModalInstance.close();
          };
        }

        function mountModalBody() {
          var fields = manyToOneCtrl.modalFields;
          return fields.reduce(function (prev, next) {
            return prev += '\n                <div class="form-group">\n                  ' + (typeof object[next] === 'string' || object[next] instanceof String ? '<label>' + next + '</label>' : ' ') + '\n                  ' + (typeof object[next] === 'string' || object[next] instanceof String ? '<input type="text" class="form-control" value="' + object[next] + '" disabled />' : ' ') + '\n                </div>';
          }, ' ');
        }

        var template = '\n            <div class="modal-header">\n              <h3 class="modal-title">' + manyToOneCtrl.modalTitle + '</h3>\n            </div>\n            <div class="modal-body">\n              ' + mountModalBody() + '\n            </div>\n            ';
        $uibModal.open({ controller: controller, template: template });
      }

      $transclude($scope, function (cloneEl) {
        angular.forEach(cloneEl, function (cl) {
          var element = angular.element(cl)[0];
          if (element.nodeName && element.nodeName === 'MATCH') {
            template = true;
            manyToOneCtrl.match = element.innerHTML;
          }
        });
      }

      /*  */
      );var baseTemplate = '\n          <div>\n            <div ng-class="{\'input-group\': (manyToOneCtrl.displayInfoButton() && manyToOneCtrl.modelValueIsObject()) || manyToOneCtrl.displayClearButton()}">\n                <input type="text"\n                       ng-init="manyToOneCtrl.visible = \'typeahead\'"\n                       ng-show="manyToOneCtrl.visible == \'typeahead\'"\n                       id="typeahead-' + manyToOneCtrl.field + '-' + $attrs.value + '"\n                       class="form-control gmd inputahead"\n                       tabindex="' + manyToOneCtrl.tabSeq + '"\n                       ng-disabled="manyToOneCtrl.disabled"\n                       ng-readonly="manyToOneCtrl.readonly"\n                       ng-model="manyToOneCtrl.value"\n                       onfocus="this.classList.add(\'focused\')"\n                       onblur="this.classList.remove(\'focused\')"\n                       ng-trim="true"\n                       uib-typeahead="$value as $value[manyToOneCtrl.field] for $value in manyToOneCtrl.proxySearch($viewValue)"\n                       typeahead-loading="manyToOneCtrl.typeaheadLoading" ' + mirrorAttributes() + '\n                       typeahead-template-url="manyToOneTemplate' + manyToOneCtrl.field + '-' + $attrs.value + '.html"\n                       typeahead-is-open="manyToOneCtrl.isTypeaheadOpen"\n                       typeahead-editable="' + manyToOneCtrl.editable + '"\n                       typeahead-show-hint="true"\n                       typeahead-min-length="0"\n                       typeahead-on-select="manyToOneCtrl.afterSelect($item, $model, $label, $event, \'isNotButton\', manyToOneCtrl.match)"\n                       autocomplete="off"/>\n                <input type="text" ng-keyup="manyToOneCtrl.showTypeheadAndHideMatch()" ng-model="manyToOneCtrl.inputMatchValue" class="form-control" ng-show="manyToOneCtrl.visible == \'inputMatchValue\'"/>\n                <div ng-show="manyToOneCtrl.typeaheadLoading && manyToOneCtrl.loadingText" style="position: absolute; top: 40px;">\n                <i class="glyphicon glyphicon-refresh"></i>\n                {{manyToOneCtrl.loadingText}}\n              </div>\n              <span ng-hide="true" id="match-' + manyToOneCtrl.field + '-' + $attrs.value + '"></span>\n              <div class="input-group-btn input-group-btn-icon" ng-show="(manyToOneCtrl.displayInfoButton() && manyToOneCtrl.modelValueIsObject()) || manyToOneCtrl.displayClearButton()">\n                <button type="button" class="btn btn-default gmd" ng-show="!manyToOneCtrl.modelValueIsObject() && manyToOneCtrl.displayClearButton()" ng-click="manyToOneCtrl.clearModel()">\n                  <span class="glyphicon glyphicon-remove"></span>\n                </button>\n                <button type="button" class="btn btn-default gmd"\n                        ng-show="manyToOneCtrl.modelValueIsObject() && manyToOneCtrl.displayClearButton()"\n                        ng-click="manyToOneCtrl.openTypehead()">\n                  <span class="{{!manyToOneCtrl.isTypeaheadOpen ? \'glyphicon glyphicon-chevron-down\' : \'glyphicon glyphicon-chevron-up\'}}"></span>\n                </button>\n                <button type="button" class="btn btn-default gmd" ng-show="!manyToOneCtrl.modelValueIsObject() && manyToOneCtrl.displayInfoButton()" ng-disabled="manyToOneCtrl.disabledDisplayInfo()" ng-click="manyToOneCtrl.openInfo(manyToOneCtrl.value, $event)">\n                  <span class="glyphicon glyphicon-info-sign"></span>\n                </button>\n              </div>\n            </div>\n          </div>';

      var templateForInnerMatch = !template ? '<span ng-bind-html="match.model.' + manyToOneCtrl.field + ' | uibTypeaheadHighlight:query"></span>' : '<span>' + manyToOneCtrl.match + '</span>';
      var templateForMatch = '\n          <a class="col-md-12 result gmd" style="white-space: normal;">\n            <span class="col-md-10 str" ng-click="manyToOneCtrl.select()">\n              ' + templateForInnerMatch + '\n              <span ng-show="$parent.$parent.$parent.$parent.manyToOneCtrl.valueToAdd == match.label && $parent.$parent.$parent.$parent.manyToOneCtrl.valueToAdd.length > 0 && !match.model.id && !!$parent.$parent.$parent.$parent.manyToOneCtrl.authorizeAdd">(novo)</span><br>\n            </span>\n            <span class="col-md-2">\n              <span class="icon text-right" ng-if="' + manyToOneCtrl.displayInfo + '" ng-click="$parent.$parent.$parent.$parent.manyToOneCtrl.openInfo(match.model, $event)" ng-hide="$parent.$parent.$parent.$parent.manyToOneCtrl.valueToAdd == match.label && !match.label.id">\n                <span class="glyphicon glyphicon-info-sign"></span>\n              </span>\n            </span>\n            <div class="clearfix"></div>\n          </a>';

      $templateCache.put('manyToOneTemplate' + manyToOneCtrl.field + '-' + $attrs.value + '.html', templateForMatch);

      var element = angular.element(baseTemplate),
          input = element.find('input'),
          form = $element.parent();
      while (form[0].nodeName != 'FORM') {
        form = form.parent();
      }var formController = $scope.$parent[form.attr('name')];

      $element.append($compile(element)($scope));

      ngModelCtrl = input.controller('ngModel');
      ngModelCtrlReset = angular.copy(ngModelCtrl);

      formController.$addControl(ngModelCtrl);

      ngModelCtrl.$viewChangeListeners.push(function () {
        // console.log('$viewChangeListeners', ngModelCtrl.$viewValue)
      });
      ngModelCtrl.$validators.manyToOne = function (modelValue, viewValue) {
        return modelValue ? !(typeof modelValue === 'string' || modelValue instanceof String) : true;
      };

      if (!modelValueIsObject()) {
        handlingInputVisible();
      }

      $scope.$watch(function () {
        return ngModelCtrl.$$rawModelValue;
      }, function (i) {
        if (ngModelCtrl.$$rawModelValue == '') {
          delete ngModelCtrl.$$rawModelValue;
          delete manyToOneCtrl.value;
        } else {
          manyToOneCtrl.valueToAdd = ngModelCtrl.$$rawModelValue;
        }
      });
    }

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        value: '=',
        loadingText: '@?',
        inputMatch: '@?',
        searchMethod: '&',
        postMethod: '&?',
        onSelect: '&?',
        onDeselect: '&?',
        list: '=?',
        authorizeAdd: '=?',
        disabled: '=?',
        readonly: '=?',
        displayInfo: '=?',
        displayClear: '=?',
        editable: '=?',
        tabSeq: '=?',
        async: '=?'
      },
      controllerAs: 'manyToOneCtrl',
      bindToController: true,
      controller: controller
    };
  }
  angular.module('gumga.manytoone', ['ui.bootstrap']).directive('gumgaManyToOne', ManyToOne);
})();

/***/ })
/******/ ]);