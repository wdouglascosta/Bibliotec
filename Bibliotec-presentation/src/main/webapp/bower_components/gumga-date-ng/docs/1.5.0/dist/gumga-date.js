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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  Mask.$inject = ['$parse'];
  function Mask($parse) {
    function isFocused(elem) {
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    }

    return {
      priority: 100,
      require: 'ngModel',
      restrict: 'A',
      scope: false,
      compile: function gumgaDateMaskCompilingFunction() {
        var options = {
          maskDefinitions: {
            // Numéricos
            '9': /\d/,
            // Alfa
            'A': /[a-zA-Z]/,
            // Alfanuméricos
            '*': /[a-zA-Z0-9]/
          },
          // Se true, limpa o campo caso inválido no evento onBlur
          clearOnBlur: true,
          // Eventos para processamento
          eventsToHandle: ['input', 'keyup', 'click', 'focus']
        };

        return function gumgaDateMaskLinkingFunction(scope, elm, attrs, ctrl) {
          var maskProcessed = false,
              eventsBound = false,
              maskCaretMap,
              maskPatterns,
              maskPlaceholder,
              maskComponents,
              minRequiredLength,
              value,
              valueMasked,
              isValid,
              originalPlaceholder = attrs.placeholder,
              originalMaxlength = attrs.maxlength,

          // // Variáveis usadas exclusivamente para eventos
          oldValue,
              oldValueUnmasked,
              oldCaretPosition,
              oldSelectionLength;

          function initialize(maskAttr) {
            if (!angular.isDefined(maskAttr)) {
              return uninitialize();
            }
            processRawMask(maskAttr);
            if (!maskProcessed) {
              return uninitialize();
            }
            initializeElement();
            bindEventListeners();
            return true;
          }

          function initPlaceholder(placeholderAttr) {
            if (!placeholderAttr) {
              return;
            }

            maskPlaceholder = placeholderAttr;
            // Atualizamos o valor do input
            if (maskProcessed) {
              elm.val(maskValue(unmaskValue(elm.val())));
            }
          }

          function formatter(fromModelValue) {
            if (!maskProcessed) {
              return fromModelValue;
            }
            value = unmaskValue(fromModelValue || '');
            isValid = validateValue(value);
            ctrl.$setValidity('mask', isValid);
            return isValid && value.length ? maskValue(value) : undefined;
          }

          function parser(fromViewValue) {
            if (!maskProcessed) {
              return fromViewValue;
            }
            value = unmaskValue(fromViewValue || '');
            isValid = validateValue(value);
            ctrl.$viewValue = value.length ? maskValue(value) : '';
            ctrl.$setValidity('mask', isValid);
            if (value === '' && attrs.required) {
              ctrl.$setValidity('required', !ctrl.$error.required);
            }
            return isValid ? value : undefined;
          }

          var linkOptions = options;

          if (attrs.gumgaDateMaskOptions) {
            linkOptions = scope.$eval(attrs.gumgaDateMaskOptions);
            if (angular.isObject(linkOptions)) {
              linkOptions = function (original, current) {
                for (var i in original) {
                  if (Object.prototype.hasOwnProperty.call(original, i)) {
                    if (current[i] === undefined) {
                      current[i] = angular.copy(original[i]);
                    } else {
                      angular.extend(current[i], original[i]);
                    }
                  }
                }
                return current;
              }(options, linkOptions);
            }
          } else {
            linkOptions = options;
          }

          attrs.$observe('gumgaDateMask', initialize);
          if (angular.isDefined(attrs.gumgaDateMaskPlaceholder)) {
            attrs.$observe('gumgaDateMaskPlaceholder', initPlaceholder);
          } else {
            attrs.$observe('placeholder', initPlaceholder);
          }
          var modelViewValue = false;
          attrs.$observe('modelViewValue', function (val) {
            if (val === 'true') {
              modelViewValue = true;
            }
          });
          scope.$watch(attrs.ngModel, function (val) {
            if (modelViewValue && val) {
              var model = $parse(attrs.ngModel);
              model.assign(scope, ctrl.$viewValue);
            }
          });
          ctrl.$formatters.push(formatter);
          ctrl.$parsers.push(parser);

          function uninitialize() {
            maskProcessed = false;
            unbindEventListeners();

            if (angular.isDefined(originalPlaceholder)) {
              elm.attr('placeholder', originalPlaceholder);
            } else {
              elm.removeAttr('placeholder');
            }

            if (angular.isDefined(originalMaxlength)) {
              elm.attr('maxlength', originalMaxlength);
            } else {
              elm.removeAttr('maxlength');
            }

            elm.val(ctrl.$modelValue);
            ctrl.$viewValue = ctrl.$modelValue;
            return false;
          }

          function initializeElement() {
            value = oldValueUnmasked = unmaskValue(ctrl.$modelValue || '');
            valueMasked = oldValue = maskValue(value);
            isValid = validateValue(value);
            var viewValue = isValid && value.length ? valueMasked : '';
            if (attrs.maxlength) {
              // Double maxlength to allow pasting new val at end of mask
              elm.attr('maxlength', maskCaretMap[maskCaretMap.length - 1] * 2);
            }
            if (!originalPlaceholder) {
              elm.attr('placeholder', maskPlaceholder);
            }
            elm.val(viewValue);
            ctrl.$viewValue = viewValue;
            ctrl.$setValidity('mask', isValid);
            // Não usando $setViewValue, então não sobreescreve
            // o valor do model sem interação do usuário.
          }

          function bindEventListeners() {
            if (eventsBound) {
              return;
            }
            elm.bind('blur', blurHandler);
            elm.bind('mousedown mouseup', mouseDownUpHandler);
            elm.bind(linkOptions.eventsToHandle.join(' '), eventHandler);
            elm.bind('paste', onPasteHandler);
            eventsBound = true;
          }

          function unbindEventListeners() {
            if (!eventsBound) {
              return;
            }
            elm.unbind('blur', blurHandler);
            elm.unbind('mousedown', mouseDownUpHandler);
            elm.unbind('mouseup', mouseDownUpHandler);
            elm.unbind('input', eventHandler);
            elm.unbind('keyup', eventHandler);
            elm.unbind('click', eventHandler);
            elm.unbind('focus', eventHandler);
            elm.unbind('paste', onPasteHandler);
            eventsBound = false;
          }

          function validateValue(value) {
            // Valida o tamanho mínimo requerido da máscara
            return value.length ? value.length >= minRequiredLength : true;
          }

          // Remove máscara
          function unmaskValue(value) {
            var valueUnmasked = '',
                maskPatternsCopy = maskPatterns.slice();
            // Processo para retirar componentes do valor
            value = value.toString();
            angular.forEach(maskComponents, function (component) {
              value = value.replace(component, '');
            });
            angular.forEach(value.split(''), function (chr) {
              if (maskPatternsCopy.length && maskPatternsCopy[0].test(chr)) {
                valueUnmasked += chr;
                maskPatternsCopy.shift();
              }
            });
            return valueUnmasked;
          }

          // Adiciona máscara
          function maskValue(unmaskedValue) {
            var valueMasked = '',
                maskCaretMapCopy = maskCaretMap.slice();

            angular.forEach(maskPlaceholder.split(''), function (chr, i) {
              if (unmaskedValue.length && i === maskCaretMapCopy[0]) {
                valueMasked += unmaskedValue.charAt(0) || '_';
                unmaskedValue = unmaskedValue.substr(1);
                maskCaretMapCopy.shift();
              } else {
                valueMasked += chr;
              }
            });
            return valueMasked;
          }

          // O atributo padrão placeholder funciona normalmente,
          // o atributo gumgaDateMaskPlaceholder define a máscara com o placeholder
          // e deve atender a quantidade de caracteres da máscara.
          function getPlaceholderChar(i) {
            var placeholder = angular.isDefined(attrs.gumgaDateMaskPlaceholder) ? attrs.gumgaDateMaskPlaceholder : attrs.placeholder;

            if (typeof placeholder !== 'undefined' && placeholder[i]) {
              return placeholder[i];
            } else {
              return '_';
            }
          }

          function getMaskComponents() {
            return maskPlaceholder.replace(/[_]+/g, '_').replace(/([^_]+)([a-zA-Z0-9])([^_])/g, '$1$2_$3').split('_');
          }

          function processRawMask(mask) {
            var characterCount = 0;

            maskCaretMap = [];
            maskPatterns = [];
            maskPlaceholder = '';

            if (typeof mask === 'string') {
              minRequiredLength = 0;

              var isOptional = false,
                  numberOfOptionalCharacters = 0,
                  splitMask = mask.split('');

              angular.forEach(splitMask, function (chr, i) {
                if (linkOptions.maskDefinitions[chr]) {

                  maskCaretMap.push(characterCount);

                  maskPlaceholder += getPlaceholderChar(i - numberOfOptionalCharacters);
                  maskPatterns.push(linkOptions.maskDefinitions[chr]);

                  characterCount++;
                  if (!isOptional) {
                    minRequiredLength++;
                  }
                } else if (chr === '?') {
                  isOptional = true;
                  numberOfOptionalCharacters++;
                } else {
                  maskPlaceholder += chr;
                  characterCount++;
                }
              });
            }
            // Posição do cursor imediatamente após última posição válida
            maskCaretMap.push(maskCaretMap.slice().pop() + 1);

            maskComponents = getMaskComponents();
            maskProcessed = maskCaretMap.length > 1 ? true : false;
          }

          function blurHandler() {
            // Se clearOnBlur for true em options,
            // limpa o campo caso esteja inválido.
            if (linkOptions.clearOnBlur) {
              oldCaretPosition = 0;
              oldSelectionLength = 0;
              if (!isValid || value.length === 0) {
                valueMasked = '';
                elm.val('');
                scope.$apply(function () {
                  ctrl.$setViewValue('');
                });
              }
            }
          }

          function mouseDownUpHandler(e) {
            if (e.type === 'mousedown') {
              elm.bind('mouseout', mouseoutHandler);
            } else {
              elm.unbind('mouseout', mouseoutHandler);
            }
          }

          elm.bind('mousedown mouseup', mouseDownUpHandler);

          function mouseoutHandler() {
            /*jshint validthis: true */
            oldSelectionLength = getSelectionLength(this);
            elm.unbind('mouseout', mouseoutHandler);
          }

          function onPasteHandler() {
            /*jshint validthis: true */
            setCaretPosition(this, elm.val().length);
          }

          function eventHandler(e) {
            /*jshint validthis: true */
            e = e || {};
            // Permite uma minificação mais eficiente
            var eventWhich = e.which,
                eventType = e.type;

            if (eventWhich === 16 || eventWhich === 91) {
              return;
            }

            var val = elm.val(),
                valOld = oldValue,
                valMasked,
                valUnmasked = unmaskValue(val),
                valUnmaskedOld = oldValueUnmasked,
                caretPos = getCaretPosition(this) || 0,
                caretPosOld = oldCaretPosition || 0,
                caretPosDelta = caretPos - caretPosOld,
                caretPosMin = maskCaretMap[0],
                caretPosMax = maskCaretMap[valUnmasked.length] || maskCaretMap.slice().shift(),
                selectionLenOld = oldSelectionLength || 0,
                isSelected = getSelectionLength(this) > 0,
                wasSelected = selectionLenOld > 0,

            // Case: Digitando um caracter para substituir uma seleção
            isAddition = val.length > valOld.length || selectionLenOld && val.length > valOld.length - selectionLenOld,

            // Case: Delete e backspace se comportam de forma idêntica em uma seleção
            isDeletion = val.length < valOld.length || selectionLenOld && val.length === valOld.length - selectionLenOld,
                isSelection = eventWhich >= 37 && eventWhich <= 40 && e.shiftKey,
                // Arrow key codes

            isKeyLeftArrow = eventWhich === 37,

            // Necessária devido ao evento não fornecer um keycode
            isKeyBackspace = eventWhich === 8 || eventType !== 'keyup' && isDeletion && caretPosDelta === -1,
                isKeyDelete = eventWhich === 46 || eventType !== 'keyup' && isDeletion && caretPosDelta === 0 && !wasSelected,

            // Lida com casos onde acento circunflexo é movido e colocado na frente da posição maskCaretMap inválido.
            // Logic abaixo assegura que, ao clicar ou posicionamento acento circunflexo para a esquerda, acento
            // circunflexo é movido para a esquerda até à direita directamente de caráter não-máscara.
            // Também aplicado para clicar uma vez que os usuários são (discutivelmente) mais propensos a voltar
            // atrás com um personagem ao clicar dentro de uma entrada cheia.
            caretBumpBack = (isKeyLeftArrow || isKeyBackspace || eventType === 'click') && caretPos > caretPosMin;

            oldSelectionLength = getSelectionLength(this);

            // Eventos que não requerem nenhuma ação
            if (isSelection || isSelected && (eventType === 'click' || eventType === 'keyup')) {
              return;
            }

            // Controle de valores
            // ==============

            // User attempted to delete but raw value was unaffected--correct this grievous offense
            // O usuário tentou apagar, mas valor bruto não foi afetado - corrigir este grave ofensa
            if (eventType === 'input' && isDeletion && !wasSelected && valUnmasked === valUnmaskedOld) {
              while (isKeyBackspace && caretPos > caretPosMin && !isValidCaretPosition(caretPos)) {
                caretPos--;
              }
              while (isKeyDelete && caretPos < caretPosMax && maskCaretMap.indexOf(caretPos) === -1) {
                caretPos++;
              }
              var charIndex = maskCaretMap.indexOf(caretPos);
              // Strip out non-mask character that user would have deleted if mask hadn't been in the way.
              valUnmasked = valUnmasked.substring(0, charIndex) + valUnmasked.substring(charIndex + 1);
            }

            // Atualiza valor
            valMasked = maskValue(valUnmasked);

            oldValue = valMasked;
            oldValueUnmasked = valUnmasked;
            elm.val(valMasked);
            ctrl.$setViewValue(valUnmasked);

            // Posição do cursor
            // ===================

            // Caractere digitado a frente nos casos em que o primeiro caractere de entrada é um char máscara e o cursor
            // for colocado na posição 0.
            if (isAddition && caretPos <= caretPosMin) {
              caretPos = caretPosMin + 1;
            }

            if (caretBumpBack) {
              caretPos--;
            }

            caretPos = caretPos > caretPosMax ? caretPosMax : caretPos < caretPosMin ? caretPosMin : caretPos;

            while (!isValidCaretPosition(caretPos) && caretPos > caretPosMin && caretPos < caretPosMax) {
              caretPos += caretBumpBack ? -1 : 1;
            }

            if (caretBumpBack && caretPos < caretPosMax || isAddition && !isValidCaretPosition(caretPosOld)) {
              caretPos++;
            }
            oldCaretPosition = caretPos;
            setCaretPosition(this, caretPos);
          }

          function isValidCaretPosition(pos) {
            return maskCaretMap.indexOf(pos) > -1;
          }

          function getCaretPosition(input) {
            if (!input) return 0;
            if (input.selectionStart !== undefined) {
              return input.selectionStart;
            } else if (document.selection) {
              if (isFocused(elm[0])) {
                // Maldito seja o IE
                input.focus();
                var selection = document.selection.createRange();
                selection.moveStart('character', input.value ? -input.value.length : 0);
                return selection.text.length;
              }
            }
            return 0;
          }

          function setCaretPosition(input, pos) {
            if (!input) return 0;
            if (input.offsetWidth === 0 || input.offsetHeight === 0) {
              return; // Inputs escondidos
            }
            if (input.setSelectionRange) {
              if (isFocused(elm[0])) {
                input.focus();
                input.setSelectionRange(pos, pos);
              }
            } else if (input.createTextRange) {
              // Maldito seja o IE
              var range = input.createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
            }
          }

          function getSelectionLength(input) {
            if (!input) return 0;
            if (input.selectionStart !== undefined) {
              return input.selectionEnd - input.selectionStart;
            }
            if (document.selection) {
              return document.selection.createRange().text.length;
            }
            return 0;
          }
        };
      }
    };
  }
  angular.module('gumga.date.mask', []).directive('gumgaDateMask', Mask);
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  var GumgaService = function GumgaService() {

    var configuration = {
      background: '#1abc9c',
      primaryColor: '#1abc9c',
      fontColor: '#fff',
      format: 'dd/MM/yyyy',
      minYear: 1700,
      timeZone: "America/Sao_Paulo",
      maxYear: 2050,
      position: 'BOTTOM_LEFT',
      changeDateOnTab: false,
      showCalendar: true,
      closeOnChange: false,
      inputProperties: {
        class: 'form-control gmd'
      }
    };

    var getDefaultConfiguration = function getDefaultConfiguration() {
      return configuration;
    };

    var setDefaultConfiguration = function setDefaultConfiguration(config) {
      Object.keys(config).forEach(function (key) {
        return configuration[key] = config[key];
      });
    };

    return {
      getDefaultConfiguration: getDefaultConfiguration,
      setDefaultConfiguration: setDefaultConfiguration,
      $get: function $get() {
        return {
          getDefaultConfiguration: getDefaultConfiguration,
          setDefaultConfiguration: setDefaultConfiguration
        };
      }
    };
  };

  angular.module('gumga.date.service', []).provider('GumgaDateService', GumgaService);
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dateStyle = __webpack_require__(4);

var _dateStyle2 = _interopRequireDefault(_dateStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useGumgaLayout() {
  try {
    return !!angular.module('gumga.layout');
  } catch (error) {
    return false;
  }
}

var input = useGumgaLayout() ? '\n    <div style="{{label ? \'height: 34px;\' : \'\'}}">\n      <input  ng-focus="config.open();inputFocused = true;"\n              ng-blur="inputFocused = false;"\n              ng-model="value"\n              gumga-date-mask="{{mask}}"\n              ng-disabled="ngDisabled"\n              class="gumga-date-input {{inputProperties.class}}"\n              placeholder="{{inputProperties.placeholder}} "/>\n        <span class="bar"></span>\n        <label for="email" class="control-label" ng-if="label">{{label}}</label>\n    </div>\n  ' : '\n  <input  ng-focus="config.open();inputFocused = true;"\n          ng-blur="inputFocused = false;"\n          ng-model="value"\n          gumga-date-mask="{{mask}}"\n          ng-disabled="ngDisabled"\n          class="gumga-date-input {{inputProperties.class}}"\n          placeholder="{{inputProperties.placeholder}} "/>\n  ';

exports.default = '\n  <style>' + _dateStyle2.default + '</style>\n\n  ' + input + '\n\n  <div class="gumga-date" ng-show="opened" id="gumga-date-{{uid}}" style="{{getPosition()}}">\n    <div class="month" style="background:{{config.background ? config.background : getDefaultConfiguration().background}}">\n      <ul>\n        <span data-ng-click="alterView(\'hours\')"\n              ng-hide="type == \'DATE\'" ng-show="view != \'hours\' || type == \'HOUR\'"\n              class="hours">\n              {{gumgaDateValue.getHours() < 10 ? "0"+gumgaDateValue.getHours() : gumgaDateValue.getHours()}}\n                :\n              {{gumgaDateValue.getMinutes() < 10 ? "0"+gumgaDateValue.getMinutes() : gumgaDateValue.getMinutes()}}\n              </span><br>\n\n        <span data-ng-click="alterView(\'days\')"\n              ng-show="view == \'hours\' && (type == \'DATE\' || type == \'DATE_HOUR\') || type == \'DATE\'"\n              class="hours">{{value}}</span>\n\n        <br>\n        <li ng-show="view != \'hours\' && (type == \'DATE\' || type == \'DATE_HOUR\')" class="prev" ng-click="handlingMonths(gumgaDateValue, -1)">&#10094;</li>\n        <li ng-show="view != \'hours\' && (type == \'DATE\' || type == \'DATE_HOUR\')" class="next" ng-click="handlingMonths(gumgaDateValue, +1)">&#10095;</li>\n        <li ng-show="view != \'hours\' && (type == \'DATE\' || type == \'DATE_HOUR\')" style="text-align:center">\n          <span style="padding: 10px;" data-ng-click="alterView(\'months\')">{{getMonth()}}</span><br>\n          <span data-ng-click="alterView(\'months\')" style="font-size:18px">{{getYear()}}</span>\n        </li>\n\n        <div class="gumga-date-hour" ng-show="view == \'hours\'">\n            <span class="glyphicon glyphicon-chevron-up" ng-click="handlingHours(1)"></span>\n              <li>{{gumgaDateValue.getHours() < 10 ? "0"+gumgaDateValue.getHours() : gumgaDateValue.getHours()}}</li>\n            <span class="glyphicon glyphicon-chevron-down" ng-click="handlingHours(-1)"></span>\n        </div>\n        <div ng-show="view == \'hours\'" class="gumga-date-separator">\n          <span>:</span>\n        </div>\n        <div class="gumga-date-minutes" ng-show="view == \'hours\'">\n          <span class="glyphicon glyphicon-chevron-up" ng-click="handlingMinutes(1)"></span>\n            <li >{{gumgaDateValue.getMinutes() < 10 ? "0"+gumgaDateValue.getMinutes() : gumgaDateValue.getMinutes()}}</li>\n          <span class="glyphicon glyphicon-chevron-down" ng-click="handlingMinutes(-1)"></span>\n        </div>\n\n      </ul>\n    </div>\n\n    <div class="year-and-month" id="year-and-month-{{uid}}">\n      <ul class="change-month" ng-show="view == \'months\'" ng-repeat="year in years">\n        <span class="year">{{year}}</span>\n\n        <div style="width: 170px;float: right;">\n          <li data-ng-repeat="month in getGumgaMonths(true)" data-ng-click="setYearAndMonth(year, month)">\n            <span ng-class="{\'active\' : isThatMonth(year, month)}">{{month}}</span>\n          </li>\n        </div>\n\n      </ul>\n    </div>\n\n    <ul class="weekdays" ng-show="view == \'days\'">\n      <li ng-repeat="weekday in getWeekDays()">{{weekday}}</li>\n    </ul>\n    <ul class="days" ng-show="view == \'days\'">\n      <li data-ng-click="setDay(row)" data-ng-repeat="row in rows track by $index">\n          <span ng-class="{\'active\' : isToday(row)}" style="{{row.style}}">{{row.value}}</span>\n      </li>\n    </ul>\n  </div>\n\n';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  __webpack_require__(1);
  __webpack_require__(0);
  var TEMPLATE = __webpack_require__(2).default;

  var GumgaDate = function GumgaDate($timeout, $filter, $locale, GumgaDateService) {
    return {
      restrict: 'E',
      template: TEMPLATE,
      scope: {
        config: '=?configuration',
        ngModel: '=',
        ngDisabled: '=?'
      },
      require: '^ngModel',
      link: function link(scope, elm, attrs) {
        var self = scope;
        self.uid = Math.floor(Math.random() * 99999999);

        self.config = self.config || {};

        self.label = attrs.label;

        self.getDefaultConfiguration = function () {
          return GumgaDateService.getDefaultConfiguration();
        };

        self.range = function (min, max, step) {
          if (!self.opened) return [];
          step = step || 1;
          var input = [];
          for (var i = min; i <= max; i += step) {
            input.push(i);
          }
          return input;
        };

        self.getScrollSize = function () {
          if (!self.gumgaDateValue) return;
          var index = self.gumgaDateValue.getFullYear() - self.getMinYear();
          return index * 92 - 50;
        };

        self.getWeekDays = function () {
          var dateformats = $locale.DATETIME_FORMATS;
          return dateformats.SHORTDAY.map(function (day) {
            return day.substring(0, 3);
          });
        };

        self.getGumgaMonths = function (cut) {
          var dateformats = $locale.DATETIME_FORMATS;
          return dateformats.STANDALONEMONTH.map(function (day) {
            return cut ? day.substring(0, 3) : day;
          });
        };

        var formatDate = function formatDate(date, format) {
          return $filter('date')(date, format);
        };

        var setType = function setType() {
          self.type = self.inputFormat.toLowerCase().indexOf('hh:mm') != -1 && self.inputFormat.toLowerCase().indexOf('dd') == -1 ? 'HOUR' : self.type;

          self.type = self.inputFormat.toLowerCase().indexOf('hh:mm') != -1 && self.inputFormat.toLowerCase().indexOf('dd') != -1 ? 'DATE_HOUR' : self.type;

          self.type = self.inputFormat.toLowerCase().indexOf('hh:mm') == -1 && self.inputFormat.toLowerCase().indexOf('dd') != -1 ? 'DATE' : self.type;

          if (self.type == 'HOUR') {
            self.alterView('hours');
          } else {
            self.alterView('days');
          }
        };

        var init = function init() {
          self.inputFormat = self.config.format ? self.config.format : self.getDefaultConfiguration().format;
          setType();

          self.mask = self.inputFormat.replace(/[a-zA-Z\d]/g, '9');

          self.inputProperties = {
            class: self.config.inputProperties && self.config.inputProperties.class ? self.config.inputProperties.class : self.getDefaultConfiguration().inputProperties.class,
            placeholder: self.config.inputProperties && self.config.inputProperties.placeholder ? self.config.inputProperties.placeholder : angular.noop()
          };

          self.style = {
            fontColor: self.config.fontColor || self.getDefaultConfiguration().fontColor,
            background: self.config.background || self.getDefaultConfiguration().background
          };

          if (self.ngModel && self.ngModel instanceof Date) {
            self.gumgaDateValue = self.ngModel;
            self.setNgModel(self.gumgaDateValue);
          } else if (self.ngModel && typeof self.ngModel == "string") {
            var date = moment(self.ngModel).toDate();
            self.gumgaDateValue = date;
            self.setNgModel(self.gumgaDateValue);
          } else {
            self.gumgaDateValue = new Date();
          }
        };

        var isDate = function isDate(s) {
          var separators = ['\\.', '\\-', '\\/'];
          var bits = s.split(new RegExp(separators.join('|'), 'g'));
          var d = new Date(bits[2], bits[1] - 1, bits[0]);
          return d.getFullYear() == bits[2] && d.getMonth() + 1 == bits[1];
        };

        self.alterView = function (view) {
          $timeout(function () {
            self.view = view;
            if (view == 'months') {
              if (!self.years) self.years = self.range(self.getMinYear(), self.getMaxYear());
              handlingScroll();
            }
          });
        };

        var calendar = undefined;

        var animateScroll = function animateScroll(size, scrollTop) {
          angular.element(calendar).animate({ scrollTop: size }, 400);
        };

        $timeout(function () {
          calendar = document.getElementById('year-and-month-' + self.uid);
        }, 1000);

        var handlingScroll = function handlingScroll() {
          $timeout(function () {
            var size = self.getScrollSize();
            animateScroll(size, calendar.scrollTop);
          });
        };

        self.handlingHours = function (num) {
          self.gumgaDateValue.setHours(self.gumgaDateValue.getHours() + num);
          self.setNgModel(self.gumgaDateValue);
        };

        self.handlingMinutes = function (num) {
          self.gumgaDateValue.setMinutes(self.gumgaDateValue.getMinutes() + num);
          self.setNgModel(self.gumgaDateValue);
        };

        self.getFormatLength = function () {
          return self.inputFormat ? self.inputFormat.replace(/[^a-zA-Z0-9]/g, '').length : 0;
        };

        self.setGumgaDateValue = function (value, event) {
          if (!value) return;
          checkDateIsValid(value);
        };

        function checkDateIsValid(value, ignoreModel) {
          self.inputFormat = self.config.format ? self.config.format : self.getDefaultConfiguration().format;
          var minYear = self.getMinYear();
          var maxYear = self.getMaxYear();
          var timeZone = self.config.timeZone ? self.config.timeZone : self.getDefaultConfiguration().timeZone;
          var date = moment(value, self.inputFormat.toUpperCase().replace('HH:MM', 'hh:mm')).tz(timeZone).toDate();
          if (value && date != 'Invalid Date' && date.getFullYear() >= minYear && date.getFullYear() <= maxYear) {
            self.gumgaDateValue = date;
            if (!ignoreModel) {
              self.setNgModel(self.gumgaDateValue);
            }
            if (self.config.change) self.config.change(self.ngModel);
          } else {
            self.value = null;
          }
        }

        self.getMinYear = function () {
          return self.config.minYear ? self.config.minYear : self.getDefaultConfiguration().minYear;
        };

        self.getMaxYear = function () {
          return self.config.maxYear ? self.config.maxYear : self.getDefaultConfiguration().maxYear;
        };

        self.getMonth = function () {
          if (!self.gumgaDateValue || !(self.gumgaDateValue instanceof Date)) return;
          return self.getGumgaMonths()[self.gumgaDateValue.getMonth()];
        };

        self.setDay = function (day) {
          if (!self.gumgaDateValue || !(self.gumgaDateValue instanceof Date)) return;
          var update = new Date();
          update.setYear(day.year);
          update.setMonth(day.mouth);
          update.setDate(day.value);
          update.setHours(self.gumgaDateValue.getHours());
          update.setMinutes(self.gumgaDateValue.getMinutes());
          update.setSeconds(self.gumgaDateValue.getSeconds());
          self.gumgaDateValue = update;
          self.setNgModel(self.gumgaDateValue);
          if (self.config.change) self.config.change(self.ngModel);
          if (self.config.hasOwnProperty('closeOnChange') ? self.config.closeOnChange : self.getDefaultConfiguration().closeOnChange) {
            self.config.close();
          }
        };

        self.setYearAndMonth = function (year, month) {
          if (!self.gumgaDateValue || !(self.gumgaDateValue instanceof Date)) return;
          self.getGumgaMonths(true).forEach(function (gumgaMonth, index) {
            if (gumgaMonth == month) {
              var update = new Date();
              update.setYear(year);
              update.setMonth(index);
              update.setDate(self.gumgaDateValue.getDate());
              update.setHours(self.gumgaDateValue.getHours());
              update.setMinutes(self.gumgaDateValue.getMinutes());
              update.setSeconds(self.gumgaDateValue.getSeconds());
              self.gumgaDateValue = update;
              self.setNgModel(self.gumgaDateValue);
              self.alterView('days');
            }
          });
        };

        self.getYear = function () {
          if (!self.gumgaDateValue) return;
          return self.gumgaDateValue.getFullYear();
        };

        self.isToday = function (day) {
          return day.value == self.gumgaDateValue.getDate() && day.mouth == self.gumgaDateValue.getMonth();
        };

        self.isThatMonth = function (year, mouth) {
          return self.getGumgaMonths(true)[self.gumgaDateValue.getMonth()] == mouth && self.gumgaDateValue.getFullYear() == year;
        };

        self.config.open = function (event) {
          if (event) event.stopPropagation();
          if (self.config.hasOwnProperty('showCalendar') ? self.config.showCalendar : self.getDefaultConfiguration().showCalendar) {
            self.opened = true;
            setType();
            newCalendar(self.gumgaDateValue.getMonth(), self.gumgaDateValue.getFullYear());
          }
        };

        self.config.close = function () {
          self.opened = false;
          self.alterView('days');
        };

        var getDaysInMonth = function getDaysInMonth(date) {
          return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        };

        self.handlingMonths = function (date, num) {
          self.gumgaDateValue = moment(date).add(num, 'months').toDate();
          self.setNgModel(self.gumgaDateValue);
          if (self.view == 'months') {
            handlingScroll();
          }
        };

        self.$watch('config', function () {
          init();
        }, true);

        self.$watch('ngModel', function (value) {
          $timeout(function () {
            if (self.ngModel && self.ngModel instanceof Date) {
              self.gumgaDateValue = self.ngModel;
              newCalendar(value.getMonth(), value.getFullYear());
              self.value = formatDate(angular.copy(value), self.inputFormat);
            }
            if (self.ngModel && typeof self.ngModel == "string") {
              var date = moment(self.ngModel).toDate();
              self.gumgaDateValue = date;
              newCalendar(date.getMonth(), date.getFullYear());
              var timeZone = self.config.timeZone ? self.config.timeZone : self.getDefaultConfiguration().timeZone;
              var dateValue = moment(self.value, self.inputFormat.toUpperCase().replace('HH:MM', 'hh:mm')).tz(timeZone).toDate();
              if (self.value != formatDate(angular.copy(date), self.inputFormat) && dateValue.getMinutes() != date.getMinutes() + 1) {
                checkDateIsValid(formatDate(angular.copy(date), self.inputFormat), true);
              }
            }
            if (!value && !self.inputFocused) {
              self.gumgaDateValue = new Date();
              newCalendar(self.gumgaDateValue.getMonth(), self.gumgaDateValue.getFullYear());
              self.value = null;
            }
          });
        }, true);

        self.$watch('value', function (value) {
          return value ? self.setGumgaDateValue(value) : self.ngModel = null;
        });

        self.setNgModel = function (value) {
          var timeZone = self.config.timeZone ? self.config.timeZone : self.getDefaultConfiguration().timeZone;
          self.ngModel = moment.tz(value, timeZone).format();
          newCalendar(value.getMonth(), value.getFullYear());
          self.value = formatDate(angular.copy(value), self.inputFormat);
        };

        elm.bind('click', function (event) {
          event.stopPropagation();
        });

        var incrementDay = function incrementDay(event) {
          var day = undefined;
          switch (event.keyCode) {
            case 38:
              //UP
              day = moment(self.gumgaDateValue).add(-7, 'days').toDate();
              break;
            case 40:
              //DOWN
              day = moment(self.gumgaDateValue).add(+7, 'days').toDate();
              break;
            case 37:
              //LEFT
              day = moment(self.gumgaDateValue).add(-1, 'days').toDate();
              break;
            case 39:
              //RIGHT
              day = moment(self.gumgaDateValue).add(+1, 'days').toDate();
              break;
            case 13:
              //ENTER
              self.setNgModel(self.gumgaDateValue);
              self.config.close();
              break;
            case 9:
              var change = self.config.hasOwnProperty('changeDateOnTab') ? self.config.changeDateOnTab : self.getDefaultConfiguration().changeDateOnTab;
              if (self.inputFocused && !self.ngModel && change) {
                self.gumgaDateValue = new Date();
                self.setNgModel(self.gumgaDateValue);
              } else if (!self.inputFocused) {
                self.config.close();
              }
              break;
          }

          $timeout(function () {
            if (!self.opened || !day) return;
            event.stopPropagation();
            self.gumgaDateValue = day;
            self.setNgModel(self.gumgaDateValue);
          });
        };

        var incrementMinutes = function incrementMinutes(event) {
          var minutes = 0;
          switch (event.keyCode) {
            case 38:
              //UP
              minutes = moment(self.gumgaDateValue).add(+1, 'minutes').toDate();
              break;
            case 40:
              //DOWN
              minutes = moment(self.gumgaDateValue).add(-1, 'minutes').toDate();
              break;
          }
          $timeout(function () {
            if (minutes == 0 || !self.opened) return;
            event.stopPropagation();
            self.gumgaDateValue = minutes;
            self.setNgModel(self.gumgaDateValue);
          });
        };

        var listenerClick = document.addEventListener('click', function (event) {
          $timeout(self.config.close);
        });

        var listenerKey = document.addEventListener('keyup', function (event) {
          self.opened && self.view == 'days' ? incrementDay(event) : angular.noop();
          self.opened && self.view == 'hours' ? incrementMinutes(event) : angular.noop();
        });

        self.$on('$destroy', function () {
          document.removeEventListener('click', listenerClick);
          document.removeEventListener('keyup', listenerKey);
        });

        var newCalendar = function newCalendar(mouth, year) {
          if (!self.opened) return;
          var primaryDay = new Date(year, mouth, 1),
              count = 1;
          var possibilities = new Array(42);

          for (var x = 0; x < possibilities.length; x++) {
            possibilities[x] = "";
          }

          for (var _x = primaryDay.getDay(); _x < possibilities.length; _x++) {
            var data = new Date(year, mouth, count);
            possibilities[_x] = { value: data.getDate() };
            possibilities[_x].style = data.getMonth() != mouth ? 'color: #b7aaaa !important;' : '';
            possibilities[_x].style += possibilities[_x].value < 10 ? 'padding-left: 9.75px;padding-right: 9.75px;' : '';
            possibilities[_x].mouth = data.getMonth();
            possibilities[_x].year = data.getFullYear();
            count++;
          }

          var previousMonth = moment(new Date(year, mouth, 1)).add(-1, 'months');
          for (var i = 0; i < primaryDay.getDay(); i++) {
            possibilities[primaryDay.getDay() - 1 - i] = {
              value: previousMonth.daysInMonth() - i,
              style: 'color: #b7aaaa !important;',
              mouth: previousMonth.toDate().getMonth(),
              year: previousMonth.toDate().getFullYear()
            };
          }
          self.rows = possibilities;
        };

        self.getPosition = function () {
          var position = self.config.position ? self.config.position : self.getDefaultConfiguration().position;
          switch (position.toUpperCase()) {
            case 'LEFT_BOTTOM':
              return 'top: 25px;left: -235px;';
              break;
            case 'LEFT_TOP':
              if (self.view == 'days' || self.view == 'months') return 'top: -290px;left: -235px;';
              if (self.view == 'hours') return 'top: -130px;left: -235px;';
              break;
            case 'BOTTOM_LEFT':
              return 'left: 15px;';
              break;
            case 'BOTTOM_RIGHT':
              return 'right: 15px;';
              break;
            case 'RIGHT_BOTTOM':
              return 'right: -235px;';
              break;
            case 'RIGHT_TOP':
              if (self.view == 'days' || self.view == 'months') return 'top: -290px;right: -235px;';
              if (self.view == 'hours') return 'top: -130px;right: -235px;';
              break;
            case 'TOP_LEFT':
              if (self.view == 'days' || self.view == 'months') return 'top: -325px;left: 15px;';
              if (self.view == 'hours') return 'top: -165px; left: 15px;';
              break;
            case 'TOP_RIGHT':
              if (self.view == 'days' || self.view == 'months') return 'top: -325px;right: 15px;';
              if (self.view == 'hours') return 'top: -165px; right: 15px;';
              break;
          }
        };
      }
    };
  };

  GumgaDate.$inject = ['$timeout', '$filter', '$locale', 'GumgaDateService'];

  angular.module('gumga.date', ['gumga.date.service', 'gumga.date.mask']).directive('gumgaDate', GumgaDate);
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n  scrollbar[orient=\"vertical\"] scrollbarbutton,\n  scrollbar[orient=\"vertical\"] slider,\n  scrollbar[orient=\"horizontal\"] scrollbarbutton,\n  scrollbar[orient=\"horizontal\"] slider{\n    display:none;\n  }\n\n  .gumga-date-input{\n    width: 100%;\n  }\n\n  .year-and-month::-webkit-scrollbar {\n      width: 10px;\n  }\n\n  .year-and-month::-webkit-scrollbar-track{\n      -webkit-box-shadow: inset 0 0 6px #f5f5f5;\n  }\n\n  .year-and-month::-webkit-scrollbar-thumb {\n    background-color: #ccc;\n    outline: 1px solid slategrey;\n  }\n\n  .gumga-date-hour::-webkit-scrollbar, .gumga-date-minutes::-webkit-scrollbar {\n    display: none;\n    width: 1px;\n  }\n\n  .gumga-date-hour::-webkit-scrollbar-track, .gumga-date-minutes::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  .gumga-date-hour::-webkit-scrollbar-thumb, .gumga-date-minutes::-webkit-scrollbar-thumb {\n    display: none;\n  }\n\n  .gumga-date {\n    font-family: Verdana,sans-serif;\n    box-sizing:border-box;\n    width: 250px;\n    position: absolute;\n    z-index: 999999999;\n    display: inline-block;\n    -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none; /* Safari */\n       -khtml-user-select: none; /* Konqueror HTML */\n         -moz-user-select: none; /* Firefox */\n          -ms-user-select: none; /* Internet Explorer/Edge */\n              user-select: none;\n  }\n\n  .gumga-date-hour{\n    width: 93px;\n    float: left;\n    text-align: center;\n    height: 100px;\n    overflow: hidden;\n    overflow-y: scroll;\n  }\n\n  #gumga-date-{{uid}} .gumga-date-hour > span, #gumga-date-{{uid}} .gumga-date-minutes > span {\n    color: {{config.fontColor ? config.fontColor : getDefaultConfiguration().fontColor}} !important;\n    cursor: pointer;\n  }\n\n  #gumga-date-{{uid}} .gumga-date-separator{\n    float: left;\n    width: 13px;\n    height: 100%;\n    font-size: 25px;\n    color: {{config.fontColor ? config.fontColor : getDefaultConfiguration().fontColor}} !important;\n    padding-top: 35px;\n  }\n\n  .gumga-date-minutes{\n    width: 93px;\n    text-align: center;\n    height: 100px;\n    overflow: hidden;\n    overflow-y: scroll;\n  }\n\n  .gumga-date-hour > li,  .gumga-date-minutes > li{\n    font-size: 40px !important;\n  }\n\n  #gumga-date-{{uid}} > .month > ul .hours {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 6px;\n    font-size: 14px;\n    cursor : pointer;\n    text-align: center;\n    color: {{style.fontColor ? style.fontColor : '#fff'}} !important;\n    background: rgba(43, 38, 38, 0.21);\n    height: 32px;\n  }\n\n  .gumga-date > .month > ul .hours:hover {\n    font-size: 15px;\n    transition: all 1s;\n  }\n\n  .gumga-date > .month {\n      padding: 25px 25px;\n      width: 100%;\n  }\n\n  .gumga-date > .month ul {\n      margin: 0;\n      list-style: none;\n      padding: 0;\n  }\n\n  .gumga-date > .month ul li {\n      color: white;\n      font-size: 18px;\n      text-transform: uppercase;\n      cursor: pointer;\n      letter-spacing: 3px;\n  }\n\n  .gumga-date > .month .prev {\n      float: left;\n      padding-top: 10px;\n      outline: none;\n      cursor: pointer;\n  }\n\n  .gumga-date > .month .next {\n      float: right;\n      padding-top: 10px;\n      cursor: pointer;\n      outline: none;\n  }\n\n  .gumga-date > .year-and-month {\n      background-color: #eee;\n      max-height: 204px;\n      text-align: center;\n      overflow-x: auto;\n      transition-property: all;\n       transition-duration: .5s;\n  }\n\n  .gumga-date > .weekdays,  .gumga-date > .year-and-month >  .change-month{\n      margin: 0;\n      padding: 10px 0;\n      background-color: #ddd;\n      padding-left: 3px;\n      list-style: none;\n  }\n\n  .gumga-date > .year-and-month > .change-month {\n    background-color: #eee;\n    max-height: 210px;\n    text-align: center;\n    overflow: auto;\n  }\n\n  .gumga-date > .year-and-month > .change-month li {\n      cursor: pointer;\n      padding: 5px;\n      width: 40px;\n      text-align: center;\n      float: left;\n      font-size: 10px;\n  }\n\n  .gumga-date > .year-and-month > .change-month > .year{\n      display: block;\n      text-align: left;\n      font-weight: 800;\n      padding-left: 15px;\n      margin-top: 27px;\n      float: left;\n      width: 60px;\n  }\n\n  .gumga-date > .weekdays li {\n      display: inline-block;\n      width: 35px;\n      color: #666;\n      text-align: center;\n  }\n\n  .gumga-date > .days {\n      padding: 10px 0;\n      background: #eee;\n      margin: 0;\n      padding-left: 3px;\n  }\n\n  .gumga-date > .days li {\n      list-style-type: none;\n      display: inline-block;\n      width: 35px;\n      text-align: center;\n      margin-bottom: 5px;\n      font-size:12px;\n      color: #777;\n      cursor: pointer;\n  }\n\n  .gumga-date > .days li .active {\n      padding: 5px;\n      color: white !important\n  }\n\n  @media screen and (max-width:720px) {\n      .gumga-date > .weekdays li, .days li {width: 13.1%;}\n  }\n\n  @media screen and (max-width: 420px) {\n      .gumga-date > .weekdays li, .days li {\n        width: 12.5%;\n      }\n      .gumga-date > .days li .active {\n        padding: 2px;\n      }\n  }\n\n  @media screen and (max-width: 290px) {\n      .gumga-date > .weekdays li, .days li {\n        width: 12.2%;\n      }\n  }\n  #gumga-date-{{uid}} > .month ul li {\n    color: {{config.fontColor ? config.fontColor : getDefaultConfiguration().fontColor}};\n  }\n  #gumga-date-{{uid}} > .days li .active{\n    background: {{config.primaryColor ? config.primaryColor : getDefaultConfiguration().primaryColor}} !important;\n    border-radius: 50%;\n  }\n  #gumga-date-{{uid}} > .days li:hover{\n    color: {{config.primaryColor ? config.primaryColor : getDefaultConfiguration().primaryColor}};\n  }\n  #gumga-date-{{uid}} > .year-and-month > .change-month  li:hover{\n    color: {{config.primaryColor ? config.primaryColor : getDefaultConfiguration().primaryColor}} !important;\n  }\n  #gumga-date-{{uid}} > .year-and-month > .change-month  li .active{\n    background: {{config.primaryColor ? config.primaryColor : getDefaultConfiguration().primaryColor}} !important;\n    color: {{config.fontColor ? config.fontColor : getDefaultConfiguration().fontColor}} !important;\n    padding: 5px;\n    border-radius: 10px;\n  }\n\n";

/***/ })
/******/ ]);