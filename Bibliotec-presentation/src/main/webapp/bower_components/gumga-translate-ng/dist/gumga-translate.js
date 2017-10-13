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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
	'use strict';

	TranslateHelper.$inject = ['$timeout'];
	function TranslateHelper($timeout) {
		return {
			translators: {},
			setTranslators: function setTranslators(language, obj) {
				var self = this;
				function iterate(obj, string) {
					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							_typeof(obj[key]) == 'object' ? iterate(obj[key], string + '.' + key) : self.translators[(string + '.' + key).substring(1).toLowerCase()] = obj[key];
						}
					}
				}
				iterate(obj, '');
				sessionStorage.setItem('language', angular.toJson(this.translators));
			},
			returnTranslation: function returnTranslation(string) {
				return this.translators[string.toLowerCase().replace(/\s/g, '')];
			}
		};
	}

	angular.module('gumga.translate.directive.translatehelper', []).factory('TranslateHelper', TranslateHelper);
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  TranslateTag.$inject = ['TranslateHelper', '$compile', '$timeout'];
  function TranslateTag(TranslateHelper, $compile, $timeout) {
    var child;
    return {
      restrict: 'A',
      link: function link(scope, elm, attrs) {
        if (!attrs.gumgaTranslateTag) throw 'You must pass a valid value to gumgaTranslateTag';
        $timeout(function () {
          var translation = TranslateHelper.returnTranslation(attrs.gumgaTranslateTag) || attrs.gumgaTranslateTag;
          if (elm[0].childNodes.length > 0 && elm[0].childNodes[0].nodeName != '#text') {
            scope.child = elm[0].childNodes[0];
            elm[0].innerHTML = translation;
            elm.append($compile(scope.child)(scope));
          } else {
            elm[0].innerHTML = translation || elm[0].innerHTML;
          }
        }, 100);
      }
    };
  }

  angular.module('gumga.translate.directive.translatetag', ['gumga.translate.directive.translatehelper']).directive('gumgaTranslateTag', TranslateTag);
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

	function Translate($http, TranslateHelper, $timeout, $gumgaTranslate) {
		var ch = 0;
		return {
			restrict: 'AEC',
			scope: false,
			priority: 9999,
			link: function link($scope, $elm, $attrs) {
				var language = $attrs.gumgaTranslate.toLowerCase() || navigator.language.toLowerCase();

				$http.get($gumgaTranslate.getURL()).then(function (values) {
					TranslateHelper.setTranslators(language, values.data);
				});
			}
		};
	}

	Translate.$inject = ['$http', 'TranslateHelper', '$timeout', '$gumgaTranslate'];

	angular.module('gumga.translate.directive', ['gumga.translate.directive.translatehelper']).directive('gumgaTranslate', Translate);
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


TranslateFilter.$inject = ['TranslateHelper', '$timeout'];

function TranslateFilter(TranslateHelper, $timeout) {
  return function translate(value, entity) {
    if (value) {
      if (!angular.isString(value)) throw 'É necessário passar uma string para o filtro gumgaTranslate';
      var stringToTranslate = entity ? entity.toLowerCase().concat('.').concat(value ? value.toLowerCase() : ' ') : value ? value.toLowerCase() : ' ';

      return TranslateHelper.returnTranslation(stringToTranslate) || value;
    }
    return value;
  };
}

angular.module('gumga.translate.filter', ['gumga.translate.helper']).filter('gumgaTranslate', TranslateFilter);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
	'use strict';

	TranslateHelper.$inject = [];

	function TranslateHelper() {
		return {
			translators: {},
			_translation: {},
			setTranslators: function setTranslators(language, obj) {
				var self = this;
				function iterate(obj, string) {
					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							_typeof(obj[key]) == 'object' ? iterate(obj[key], string + '.' + key) : self.translators[(string + '.' + key).substring(1).toLowerCase()] = obj[key];
						}
					}
				}
				iterate(obj, '');
				sessionStorage.setItem('language', angular.toJson(this.translators));
			},
			returnTranslation: function returnTranslation(string) {
				return this.translators[string.toLowerCase().replace(/\s/g, '')];
			},
			__getFromLocalStorage: function __getFromLocalStorage() {
				var language = localStorage.getItem('GUMGACurrent'),
				    self = this;
				function iterate(obj, string) {
					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							_typeof(obj[key]) == 'object' ? iterate(obj[key], string + '.' + key) : self._translation[(string + '.' + key).substring(1)] = obj[key];
						}
					}
				}
				if (language && localStorage.getItem('GUMGA' + language)) {
					iterate(JSON.parse(localStorage.getItem('GUMGA' + language)), '');
					return true;
				}
			},
			getTranslate: function getTranslate(toTranslate) {
				var self = this;
				if (Object.getOwnPropertyNames(self._translation).length === 0) self.__getFromLocalStorage();
				if (!toTranslate || typeof toTranslate != 'string') throw 'The value passed to GumgaTranslate is Wrong!';
				if (self._translation[toTranslate]) return self._translation[toTranslate];
				return toTranslate;
			}
		};
	}
	angular.module('gumga.translate.helper', []).factory('GumgaTranslateHelper', TranslateHelper);
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  Translate.$inject = [];
  function Translate() {
    return {
      $get: ['$http', function ($http) {
        var self = this;
        this._url = this._url || './i18n/' + self._language + '.json';
        $http.get(this._url).then(function SuccessGet(values) {
          localStorage.setItem('GUMGA' + self._language, JSON.stringify(values.data));
          localStorage.setItem('GUMGACurrent', self._language);
        });
        return self;
      }],
      setLanguage: function setLanguage(language) {
        if (!language) throw 'You must pass a language to GumgaTranslate';
        this._language.toLowerCase() !== language.toLowerCase() ? this._language = language : function () {};
      },
      _language: 'pt-br',
      setURL: function setURL(url) {
        this._url = url;
      },
      getURL: function getURL() {
        return this._url;
      }
    };
  }
  angular.module('gumga.translate.provider', []).provider('$gumgaTranslate', Translate);
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);
__webpack_require__(4);
__webpack_require__(3);

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);

angular.module('gumga.translate', ['gumga.translate.provider', 'gumga.translate.filter', 'gumga.translate.helper', 'gumga.translate.directive', 'gumga.translate.directive.translatetag', 'gumga.translate.directive.translatehelper']);

/***/ })
/******/ ]);