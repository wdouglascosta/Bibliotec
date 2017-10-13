(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

},{}],2:[function(require,module,exports){
'use strict';

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

},{}],3:[function(require,module,exports){
'use strict';

(function () {
	'use strict';

	Translate.$inject = ['$http', 'TranslateHelper', '$timeout'];
	function Translate($http, TranslateHelper, $timeout) {
		var ch = 0;
		return {
			restrict: 'AEC',
			scope: false,
			priority: 9999,
			link: function link($scope, $elm, $attrs) {
				var language = $attrs.gumgaTranslate.toLowerCase() || navigator.language.toLowerCase();
				$http.get('./i18n/' + language + '.json').then(function (values) {
					TranslateHelper.setTranslators(language, values.data);
				});
			}
		};
	}

	angular.module('gumga.translate.directive', ['gumga.translate.directive.translatehelper']).directive('gumgaTranslate', Translate);
})();

},{}],4:[function(require,module,exports){
'use strict';

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

},{}],5:[function(require,module,exports){
'use strict';

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

},{}],6:[function(require,module,exports){
'use strict';

require('./helper/helper.js');
require('./filter/filter.js');
require('./provider/provider.js');

require('./directive/translate/translate.js');
require('./directive/helper/helper.js');
require('./directive/translate-tag/translate-tag.js');

angular.module('gumga.translate', ['gumga.translate.helper', 'gumga.translate.filter', 'gumga.translate.provider', 'gumga.translate.directive', 'gumga.translate.directive.translatetag', 'gumga.translate.directive.translatehelper']);

},{"./directive/helper/helper.js":1,"./directive/translate-tag/translate-tag.js":2,"./directive/translate/translate.js":3,"./filter/filter.js":4,"./helper/helper.js":5,"./provider/provider.js":7}],7:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  Translate.$inject = [];
  function Translate() {
    return {
      $get: function $get($http) {
        var self = this;
        $http.get('/i18n/' + self._language + '.json').then(function SuccessGet(values) {
          localStorage.setItem('GUMGA' + self._language, JSON.stringify(values.data));
          localStorage.setItem('GUMGACurrent', self._language);
        });
        return self;
      },
      setLanguage: function setLanguage(language) {
        if (!language) throw 'You must pass a language to GumgaTranslate';
        this._language.toLowerCase() !== language.toLowerCase() ? this._language = language : function () {};
      },
      _language: 'pt-br'
    };
  }
  angular.module('gumga.translate.provider', []).provider('$gumgaTranslate', Translate);
})();

},{}]},{},[6]);
