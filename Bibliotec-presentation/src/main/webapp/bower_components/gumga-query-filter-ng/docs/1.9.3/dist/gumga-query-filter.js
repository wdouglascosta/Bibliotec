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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);
__webpack_require__(4);

angular.module('gumga.queryfilter.factory', ['gumga.queryfilter.factory.hql', 'gumga.queryfilter.factory.querymodel']);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);
__webpack_require__(5);

angular.module('gumga.queryfilter.filter', ['gumga.queryfilter.filter.directive', 'gumga.queryfilter.filter.core']);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (function(){
//Description
Search.$inject = ['$q', '$timeout', '$compile', '$interpolate'];

function Search($q, $timeout, $compile, $interpolate) {

  var template = '\n    <style>\n      gumga-query .gumga-date {\n        left:0 !important;\n        top:35px;\n      }\n    </style>\n     <div class="input-group">\n        <input type="text" placeholder="Busque seus filtros salvos" class="form-control" ng-model="ctrl.searchField" ng-keyup="ctrl.doSearch(ctrl.searchField, $event, \'TYPEAHEAD\')" uib-typeahead="item.description for item in ctrl.proxyFn($viewValue)" typeahead-on-select="ctrl.filterSelect($item, $model, $label, $event)" ng-show="ctrl.hasQuerySaved && openFilter"/>\n            \n        <input type="number" ng-if="ctrl.getInputType() == \'number\'" ng-disabled="ctrl.getActivesFields().length == 0" class="form-control" ng-model="ctrl.searchField" ng-keyup="ctrl.doSearch(ctrl.searchField, $event)" ng-show="!ctrl.hasQuerySaved || !openFilter" />\n        <input type="text" ng-if="ctrl.getInputType() == \'text\'" ng-disabled="ctrl.getActivesFields().length == 0" class="form-control" ng-model="ctrl.searchField" ng-keyup="ctrl.doSearch(ctrl.searchField, $event)" ng-show="!ctrl.hasQuerySaved || !openFilter" />\n        \n        <input type="date" ng-if="ctrl.getInputType() == \'date\' && !ctrl.useGumgaDate()" ng-disabled="ctrl.getActivesFields().length == 0" class="form-control" ng-model="ctrl.searchField" ng-keyup="ctrl.doSearch(ctrl.searchField, $event)" ng-show="!ctrl.hasQuerySaved || !openFilter" />\n        <gumga-date ng-if="ctrl.getInputType() == \'date\' && ctrl.useGumgaDate()" ng-model="ctrl.searchField" ng-disabled="ctrl.getActivesFields().length == 0" ng-keyup="ctrl.doSearch(ctrl.searchField, $event)" ng-show="!ctrl.hasQuerySaved || !openFilter"></gumga-date>\n        \n        <span class="input-group-btn" uib-dropdown uib-keyboard-nav auto-close="outsideClick">\n          <button class="btn btn-default" type="button" uib-dropdown-toggle>\n            <span class="glyphicon glyphicon-chevron-down"><span>\n          </button>\n          <ul uib-dropdown-menu role="menu" aria-labelledby="single-button" class="dropdown-menu-search">\n            <li role="menuitem" ng-repeat="(key, $value) in ctrl.mapFields" style="{{ctrl.isDisabled($value.field) ? \'opacity: 0.3;\' : \'\'}}">\n              <a class="no-padding-search-fields">\n                <label ng-click="ctrl.checkFields($event, $value.field)">\n                  <input type="checkbox" ng-model="$value.checkbox" style="pointer-events: none;"/>\n                  {{::$value.label}}\n                </label>\n              </a>\n            </li>\n          </ul>\n          <button class="btn btn-default" ng-click="openFilter = !openFilter" type="button">\n            <span class="glyphicon glyphicon-filter"></span>\n          </button>\n          <button class="btn btn-primary" type="button" ng-click="ctrl.doSearch(ctrl.searchField)">\n            <span> {{::ctrl.searchText}} </span>\n            <span class="glyphicon glyphicon-search rotate-search-glyph"></span>\n          </button>\n        </span>\n      </div>\n      <div class="row replace-filter">\n        <div class="col-md-12">\n          <div id="replaceFilter"></div>\n        </div>\n      </div>';

  controller.$inject = ['$scope', '$element', '$attrs', '$transclude'];

  function controller($scope, $element, $attrs, $transclude) {
    var ctrl = this;

    var hasAttr = function hasAttr(string) {
      return !!$attrs[string];
    },
        FIELD_ERR = 'É necessário um parâmetro field na tag search-field.[<search-field field="foo"></search-field>]',
        SEARCH_ERR = 'É necessário passar uma função para o atributo "search". [search="foo(field, param)"]';

    ctrl.mapFields = {};
    ctrl.possibleAdvancedFields = [];

    if (!hasAttr('search')) console.error(SEARCH_ERR);

    $transclude(function (transcludeElement) {
      var alreadySelected = false,
          parentContext = $scope.$parent;

      [].slice.call(transcludeElement).forEach(function (value) {

        if (value && value.nodeName === 'ADVANCED-SEARCH-FIELD') ctrl.possibleAdvancedFields.push(value.outerHTML);
        if (!value || value.nodeName !== 'SEARCH-FIELD') return;

        var element = angular.element(value),
            field = element.attr('field') ? element.attr('field') : '',
            type = element.attr('type') ? element.attr('type') : 'string',
            checkbox = !!$scope.$eval(element.attr('select')),
            label = element.attr('label') ? $interpolate(element.attr('label'))(parentContext) : field.charAt(0).toUpperCase().concat(field.slice(1)),
            innerJoin = element.attr('inner-join') ? element.attr('inner-join').split(',') : [],
            leftJoin = element.attr('left-join') ? element.attr('left-join').split(',') : [];

        if (!field) console.error(FIELD_ERR);
        if (checkbox) alreadySelected = true;
        ctrl.mapFields[field] = { checkbox: checkbox, label: label, field: field, type: type, innerJoin: innerJoin, leftJoin: leftJoin };
      });

      if (!alreadySelected) {
        for (var first in ctrl.mapFields) {
          break;
        }if (first) ctrl.mapFields[first].checkbox = true;
      }
    });

    ctrl.$onInit = function () {
      ctrl.compileFilter = compileFilter;
      ctrl.doSearch = doSearch;
      ctrl.proxyFn = proxyFn;
      ctrl.filterSelect = filterSelect;
      ctrl.advancedSearch = hasAttr('advancedSearch') ? ctrl.advancedSearch : null;
      ctrl.containerAdvanced = hasAttr('containerAdvanced') ? ctrl.containerAdvanced : "replaceFilter";
      ctrl.savedFilters = hasAttr('savedFilters') ? ctrl.savedFilters : angular.noop;
      ctrl.searchText = hasAttr('searchText') ? $attrs['searchText'] : ' ';
      ctrl.proxySearch = function (param) {
        return ctrl.advancedSearch({ param: param });
      };
      ctrl.hasQuerySaved = !!$attrs.savedFilters;
      $scope.proxySave = function (query, name) {
        return ctrl.saveQuery({ query: query, name: name });
      };
      if (ctrl.advancedSearch) ctrl.compileFilter();
    };

    function compileFilter() {
      var template = '<gumga-filter-core ng-show="openFilter" use-gquery="' + $attrs.useGquery + '" is-open="true" search="ctrl.proxySearch(param)" ' + ($attrs.saveQuery ? 'save-query="saveQuery(query, name)"' : '') + 'is-query="true">' + ctrl.possibleAdvancedFields.reduce(function (prev, next) {
        return prev += next;
      }, '') + '</gumga-filter-core>',
          element = angular.element(document.getElementById(ctrl.containerAdvanced));
      element.replaceWith($compile(template)($scope));
    }

    var getTypeInputByTypeField = function getTypeInputByTypeField(type) {
      switch (type) {
        case 'string':
          return 'text';
        case 'number':
          return 'number';
        case 'date':
          return 'date';
        default:
          return 'text';
      }
    };

    ctrl.getInputType = function () {
      var selecteds = Object.keys(ctrl.mapFields).filter(function (value) {
        return !!ctrl.mapFields[value].checkbox;
      });
      if (selecteds.length == 0) ctrl.searchSimpleType = 'text';
      var type = ctrl.mapFields[selecteds[0]] && ctrl.mapFields[selecteds[0]].type ? ctrl.mapFields[selecteds[0]].type : 'string';
      ctrl.searchSimpleType = getTypeInputByTypeField(type);
      return ctrl.searchSimpleType;
    };

    function doSearch(param) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { keyCode: 13 };
      var inputType = arguments[2];

      if (event.keyCode !== 13 || inputType == 'TYPEAHEAD') return;
      var result = Object.keys(ctrl.mapFields).filter(function (value) {
        return !!ctrl.mapFields[value].checkbox;
      }).reduce(function (prev, next) {
        return prev += next.concat(',');
      }, '').slice(0, -1);

      if (result.length === 0) return;
      if (ctrl.useGquery) {
        var query = new GQuery();
        result = result.split(',');

        var innerJoins = [];
        var leftJoins = [];

        var selecteds = Object.keys(ctrl.mapFields).filter(function (value) {
          return !!ctrl.mapFields[value].checkbox;
        });

        selecteds.map(function (key) {
          return ctrl.mapFields[key];
        }).forEach(function (field) {
          if (field.innerJoin) {
            field.innerJoin.forEach(function (innerJoin) {
              if (innerJoins.indexOf(innerJoin) == -1) {
                innerJoins.push(innerJoin);
              }
            });
          }

          if (field.leftJoin) {
            field.leftJoin.forEach(function (leftJoin) {
              if (leftJoins.indexOf(leftJoin) == -1) {
                leftJoins.push(leftJoin);
              }
            });
          }
        });

        result.forEach(function (field, index) {
          var criteria = new Criteria(field, getComparisonOperatorByType(field), param == undefined || param == null ? '' : param);
          if (ctrl.mapFields[field].type == 'number') {
            criteria = new Criteria(field, getComparisonOperatorByType(field), param == undefined || param == null ? 0 : Number(param));
          } else if (ctrl.mapFields[field].type == 'date') {
            criteria = new Criteria(field, getComparisonOperatorByType(field), param == undefined || param == null ? new Date() : param);
          } else if (ctrl.mapFields[field].type == 'string') {
            criteria.setFieldFunction('lower(%s)');
            criteria.setValueFunction('lower(%s)');
          }

          if (index == 0) {
            query = new GQuery(criteria);
          } else {
            query = query.or(criteria);
          }
        });

        innerJoins.forEach(function (innerJoin) {
          query.join(new Join(innerJoin, JoinType.INNER));
        });

        leftJoins.forEach(function (leftJoin) {
          query.join(new Join(leftJoin, JoinType.LEFT));
        });

        if ($attrs.lastGquery) {
          ctrl.lastGquery = angular.copy(query);
        }
        ctrl.search({ param: query });
      } else {
        ctrl.search({ field: result, param: param });
      }
    }

    function getComparisonOperatorByType(field) {
      if (ctrl.mapFields[field].type == 'string') {
        return ComparisonOperator.CONTAINS;
      }
      return ComparisonOperator.EQUAL;
    }

    $scope.$watch('openFilter', function (open) {
      if (typeof open !== 'undefined') $scope.$broadcast('openOrCloseFilter', open);
    });

    ctrl.getActivesFields = function () {
      return Object.keys(ctrl.mapFields).filter(function (value) {
        return !!ctrl.mapFields[value].checkbox;
      });
    };

    ctrl.isDisabled = function (field) {
      var someChecked = ctrl.getActivesFields();
      if (ctrl.mapFields[field] && ctrl.mapFields[field].type) {
        var differentKinds = someChecked.filter(function (some) {
          return ctrl.mapFields[some].type != ctrl.mapFields[field].type;
        });
        return differentKinds.length > 0;
      }
    };

    ctrl.checkFields = function (event, field) {
      var someChecked = ctrl.getActivesFields();
      // if ((someChecked.length == 1 && someChecked[0] == field) || Object.keys(ctrl.mapFields).length == 1) {
      //   event.preventDefault();
      // }
      if (ctrl.mapFields[field] && ctrl.mapFields[field].type && getTypeInputByTypeField(ctrl.mapFields[field].type) != ctrl.searchSimpleType) {
        delete ctrl.searchField;
      }
      if (ctrl.mapFields[field] && ctrl.mapFields[field].type) {
        var differentKinds = someChecked.filter(function (some) {
          return ctrl.mapFields[some].type != ctrl.mapFields[field].type;
        });
        if (differentKinds.length > 0) {
          ctrl.mapFields[field].checkbox = false;
        }
      }

      event.stopPropagation();
    };

    ctrl.useGumgaDate = function () {
      try {
        return !!angular.module('gumga.date');
      } catch (error) {
        return false;
      }
    };

    function proxyFn($value) {
      return $q.when(ctrl.savedFilters({ page: location.hash }));
    }

    function filterSelect($item, $model, $label, $event) {
      $timeout(function () {
        return ctrl.searchField = '', $scope.$broadcast('filter-items', $item);
      });
    }
  }

  return {
    restrict: 'E',
    scope: {
      search: '&',
      advancedSearch: '&?',
      containerAdvanced: '@?',
      savedFilters: '&?',
      saveQuery: '&?',
      useGquery: '=?',
      lastGquery: '=?'
    },
    bindToController: true,
    transclude: true,
    controllerAs: 'ctrl',
    controller: controller,
    template: template
  };
}

angular.module('gumga.queryfilter.query', []).directive('gumgaQuery', Search);

// })()

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


HQLFactory.$inject = ['$filter'];

function HQLFactory($filter) {
  /*
    Regex de URL foi retirada do código-fonte do AngularJS, utilizado por eles para validar input[type="url"].
    LINK: https://github.com/angular/angular.js/blob/master/src/ng/directive/input.js#L26
   */
  var CPF_REGEX = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/,
      CNPJ_REGEX = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/,
      DATE_REGEX = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
      URL_REGEX = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      IP_REGEX = /(?:[0-9]{1,3}\.){3}[0-9]{1,3}/,
      NUMBER_REGEX = /^[0-9]+$/,
      FLOAT_REGEX = /^[0-9]+(\.[0-9]{1,2})?$/;

  var SUPPORTED_TYPES = {};

  SUPPORTED_TYPES['string'] = {
    validator: function validator(string) {
      return typeof string === 'string' || string instanceof String;
    },
    defaultCondition: hqlObjectCreator(['contains']),
    conditions: hqlObjectCreator(['eq', 'ne', 'contains', 'not_contains', 'starts_with', 'ends_with']),
    template: '<div class="input-group">\n                  <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" class="form-control" required autofocus style=" width: 150px;height: 40px;" />\n                  <div class="input-group-addon">\n                      <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                      <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                  </div>\n                  <div class="input-group-addon">\n                      <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                  </div>\n              </div>'
  };

  SUPPORTED_TYPES['number'] = {
    validator: function validator(str) {
      return NUMBER_REGEX.test(str);
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'gt', 'ge', 'lt', 'le']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" class="form-control" gumga-number required style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value)" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value)" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')"  class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['float'] = {
    validator: function validator(number) {
      return FLOAT_REGEX.test(number);
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'gt', 'ge', 'lt', 'le']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" class="form-control" gumga-number required style=" width: 150px;height: 40px;"/>\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value)" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value)" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['money'] = {
    validator: function validator(number) {
      return FLOAT_REGEX.test(number);
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'gt', 'ge', 'lt', 'le']),
    template: '<div class="input-group">\n                    <input ng-keyup="goSearch($event)" type="text" ng-model="$value.query.value" gumga-mask="R$ " class="form-control" gumga-number required style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value)" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value)" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['cpf'] = {
    validator: function validator(cpf) {
      return CPF_REGEX.test(utils.toCpf(cpf));
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'contains', 'not_contains', 'starts_with', 'ends_with']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" gumga-mask="999.999.999.99" class="form-control" required style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['cnpj'] = {
    validator: function validator(cnpj) {
      return CNPJ_REGEX.test(cnpj);
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'contains', 'not_contains', 'starts_with', 'ends_with']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" gumga-mask="99.999.999/9999-99" class="form-control" required style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['boolean'] = {
    validator: function validator(boolean) {
      return boolean == 'true' || boolean == 'false';
    },
    defaultCondition: hqlObjectCreator(['is']),
    conditions: hqlObjectCreator(['is']),
    template: ' <div class="radio"><label><input  type="radio" ng-model="$value.query.value" value="true"> {{$value.query.attribute.extraProperties.trueLabel}}</label></div><div class="radio"><label><input type="radio" ng-model="$value.query.value" value="false"> {{$value.query.attribute.extraProperties.falseLabel}} </label></div>'
  };

  SUPPORTED_TYPES['date'] = {
    validator: function validator(date) {
      return DATE_REGEX.test($filter('date')(date, 'dd/MM/yyyy'));
    },
    defaultCondition: hqlObjectCreator(['date_eq']),
    conditions: hqlObjectCreator(['date_eq', 'date_ne', 'date_lt', 'date_gt']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" gumga-mask="99/99/9999" class="form-control" required  style=" width: 150px;height: 40px;"/>\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['select'] = {
    validator: function validator(value) {
      return !!value;
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne']),
    template: '<select ng-model="$value.query.value" ng-options="d.field as d.label for d in $value.query.attribute.extraProperties.data track by d.field" class="form-control" required /></select>'
  };

  SUPPORTED_TYPES['enum'] = {
    validator: function validator(enumList) {
      return Array.isArray(enumList);
    },
    defaultCondition: hqlObjectCreator(['in']),
    conditions: hqlObjectCreator(['in']),
    template: '<div class="col-md-4" ng-class="{\'row\': $index % 3 == 0}" ng-repeat="d in $value.query.attribute.extraProperties.data"><label><input type="checkbox" ng-checked="$value.query.value.indexOf(d.field) > -1" ng-click="toggleEnum($event, $key, d.field)"></label> {{d.label}}</div>'
  };

  SUPPORTED_TYPES['email'] = {
    validator: function validator(emailAddress) {
      return typeof emailAddress === 'string' || emailAddress instanceof String;
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'contains', 'not_contains', 'starts_with', 'ends_with']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" class="form-control" required  style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['url'] = {
    validator: function validator(url) {
      return URL_REGEX.test(url);
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'contains', 'not_contains', 'starts_with', 'ends_with']),
    template: '<div class="input-group">\n                    <input type="url" ng-keyup="goSearch($event)" ng-model="$value.query.value" class="form-control" required  style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  SUPPORTED_TYPES['ip'] = {
    validator: function validator(ip) {
      return IP_REGEX.test(ip);
    },
    defaultCondition: hqlObjectCreator(['eq']),
    conditions: hqlObjectCreator(['eq', 'ne', 'contains', 'not_contains', 'starts_with', 'ends_with']),
    template: '<div class="input-group">\n                    <input type="text" ng-keyup="goSearch($event)" ng-model="$value.query.value" class="form-control" required style=" width: 150px;height: 40px;" />\n                    <div class="input-group-addon">\n                        <i ng-show="validator($value.query.value) && $value.query.value.length > 0" class="glyphicon glyphicon-ok" style="color:green"></i></span>\n                        <i ng-show="!validator($value.query.value) || !$value.query.value" class="glyphicon glyphicon-remove" style="color:red"></i>\n                    </div>\n                    <div class="input-group-addon">\n                        <button ng-click="callSearch($event, \'btn\')" class="btn btn-default">Buscar</button>\n                    </div>\n              </div>'
  };

  function useType(type) {
    return SUPPORTED_TYPES[type] || null;
  }

  function hqlObjectCreator() {
    var hqls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var hqlObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    hqlObjects['contains'] = { key: 'CONTAINS', hql: ' contains ', label: ' cont\xE9m ', before: ' like upper(\'%', after: '%\')' };
    hqlObjects['not_contains'] = { key: 'NOT_CONTAINS', hql: ' not_contains ', label: ' n\xE3o cont\xE9m ', before: ' not like upper(\'%', after: '%\')' };
    hqlObjects['starts_with'] = { keys: 'STARTS_WITH', hql: ' starts_with ', label: ' come\xE7a com ', before: ' like upper(\'', after: '%\')' };
    hqlObjects['ends_with'] = { key: 'ENDS_WITH', hql: ' ends_with ', label: ' termina com ', before: ' like upper(\'%', after: '\')' };
    hqlObjects['eq'] = { key: 'EQUAL', hql: ' eq ', label: ' igual ', before: ' = upper(\'', after: '\')' };
    hqlObjects['ne'] = { key: 'NOT_EQUAL', hql: ' ne ', label: ' diferente de ', before: ' != upper(\'', after: '\')' };
    hqlObjects['ge'] = { key: 'GREATER_EQUAL', hql: ' ge ', label: ' maior igual ', before: ' >= upper(\'', after: '\')' };
    hqlObjects['gt'] = { key: 'GREATER', hql: ' gt ', label: ' maior que ', before: ' >   ', after: '' };
    hqlObjects['le'] = { key: 'LOWER_EQUAL', hql: ' le ', label: ' menor igual ', before: ' <=  ', after: '' };
    hqlObjects['lt'] = { key: 'LOWER', hql: ' lt ', label: ' menor que ', before: ' < upper(\'', after: '\')' };
    hqlObjects['in'] = { key: 'IN', hql: ' in ', label: ' em', before: ' in (', after: ')' };
    hqlObjects['is'] = { key: 'IS', hql: ' is ', label: ' est\xE1 ', before: ' is ', after: '' };
    hqlObjects['date_eq'] = { key: 'EQUAL', hql: ' eq ', label: ' igual ', before: ' >= ', after: '' };
    hqlObjects['date_ne'] = { key: 'NOT_EQUAL', hql: ' ne ', label: ' diferente de ', before: ' <= ', after: '' };
    hqlObjects['date_lt'] = { key: 'LOWER_EQUAL', hql: ' ld ', label: ' anterior a ', before: ' <= ', after: '' };
    hqlObjects['date_gt'] = { key: 'GREATER_EQUAL', hql: ' gd ', label: ' posterior a ', before: ' >= ', after: ''

      // hqlObjects['date_eq']       = { hql: ` date_eq`       , label:  ` no dia `        , before: ` `}
    };return hqls.map(function (value) {
      return hqlObjects[value];
    });
  }

  function setJoins(mapObj, gQuery) {
    var innerJoins = [];
    var leftJoins = [];
    Object.keys(mapObj).map(function (key) {
      return mapObj[key];
    }).forEach(function (field) {
      if (field.query && field.query.attribute) {
        field.query.attribute.innerJoin.forEach(function (innerJoin) {
          if (innerJoins.indexOf(innerJoin) == -1) {
            innerJoins.push(innerJoin);
          }
        });
        field.query.attribute.leftJoin.forEach(function (leftJoin) {
          if (leftJoins.indexOf(leftJoin) == -1) {
            leftJoins.push(leftJoin);
          }
        });
      }
    });
    innerJoins.forEach(function (innerJoin) {
      gQuery = gQuery.join(new Join(innerJoin, JoinType.INNER));
    });

    leftJoins.forEach(function (leftJoin) {
      gQuery = gQuery.join(new Join(leftJoin, JoinType.LEFT));
    });
  }

  var createCriteriaLower = function createCriteriaLower(query, value) {
    var criteria = new Criteria(query.attribute.field, query.condition.key, value == undefined ? query.value : value);
    if (query.attribute.type == 'string') {
      criteria.setFieldFunction('lower(%s)');
      criteria.setValueFunction('lower(%s)');
    }
    return criteria;
  };

  function generateGQuery(mapObj) {
    var query = null;
    var querys = Object.keys(mapObj).map(function (key) {
      return mapObj[key];
    });
    var i = 0;

    // console.log(querys)

    if (querys[i].query.attribute.type == 'date') {
      var value = new Date(Date.parse(querys[i].query.value.replace(/(\d{2})(\d{2})(\d{4})/, "$2/$1/$3")));
      query = new GQuery(null, new Criteria(querys[i].query.attribute.field, querys[i].query.condition.key, value));
    } else if (querys[i].query.attribute.type == 'string') {
      query = new GQuery(null, createCriteriaLower(querys[i].query));
    } else if (querys[i].query.attribute.type == 'boolean') {
      query = new GQuery(null, new Criteria(querys[i].query.attribute.field, querys[i].query.condition.key, querys[i].query.value === 'true'));
    } else if (querys[i].query.attribute.type == 'number') {
      query = new GQuery(null, new Criteria(querys[i].query.attribute.field, querys[i].query.condition.key, Number(querys[i].query.value)));
    } else {
      query = new GQuery(null, new Criteria(querys[i].query.attribute.field, querys[i].query.condition.key, querys[i].query.value));
    }

    for (i = 2; i < querys.length; i += 2) {
      var previousValue = querys[i - 1];
      var _value = querys[i].query.value;
      if (querys[i].query.attribute.type == 'date') {
        _value = new Date(Date.parse(_value.replace(/(\d{2})(\d{2})(\d{4})/, "$2/$1/$3")));
      } else if (querys[i].query.attribute.type == 'boolean') {
        _value = _value == 'true';
      } else if (querys[i].query.attribute.type == 'number') {
        _value = Number(_value);
      }
      query = query[previousValue.query.value.toLowerCase()](createCriteriaLower(querys[i].query, _value));
    }

    return query;
  }

  function createHql() {
    var mapObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var useGQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var scopeParent = arguments[2];

    if (useGQuery) {
      scopeParent.ctrl.lastGquery = generateGQuery(mapObj);
      setJoins(mapObj, scopeParent.ctrl.lastGquery);
      return scopeParent.ctrl.lastGquery;
    }

    var aqo = [];
    var aq = Object.keys(mapObj).filter(function (value) {
      return mapObj[value].active && mapObj[value].query.value;
    }).map(function (val) {
      var attribute = 'obj.'.concat(mapObj[val].query.attribute ? mapObj[val].query.attribute.field : '*'),
          before = mapObj[val].query.condition ? mapObj[val].query.condition.before : '*',
          value = mapObj[val].query.value.replace ? mapObj[val].query.value.replace(/'/g, "''") : mapObj[val].query.value,
          after = mapObj[val].query.condition ? mapObj[val].query.condition.after : '*';

      if (mapObj[val].query.attribute) {
        switch (mapObj[val].query.attribute.type) {
          case 'date':
            var date = value.split('');
            value = '' + date[4] + date[5] + date[6] + date[7] + '-' + date[2] + date[3] + '-' + date[0] + date[1];

            // if (mapObj[val].query.condition.hql == ' eq ' || mapObj[val].query.condition.hql == ' ne ') {
            var valueBefore = 'to_timestamp(\'' + value + ' 00:00:00\',\'yyyy/MM/dd HH24:mi:ss\')',
                valueAfter = 'to_timestamp(\'' + value + ' 23:59:59\',\'yyyy/MM/dd HH24:mi:ss\')';

            switch (mapObj[val].query.condition.hql) {
              case ' eq ':
                value = valueBefore + ' AND ' + attribute + ' <= ' + valueAfter;
                break;
              case ' ne ':
                value = valueBefore + ' OR ' + attribute + ' >= ' + valueAfter;
                break;
              case ' ld ':
                value = valueAfter;
                break;
              case ' gd ':
                value = valueBefore;
                break;
            }
            // }
            // value = $filter('date')(new Date($filter('gumgaGenericFilter')(value, 'date')),'yyyy-MM-dd')
            // value = $filter('gumgaGenericFilter')(value, 'date')

            value = value;
            break;
          case 'enum':
            value = '\'' + mapObj[val].query.value.join("','") + '\'';
            break;
          case 'number':
          case 'float':
          case 'money':
            before = before.replace(/'/g, '');
            after = after.replace(/'/g, '');
            break;
          case 'string':
          case 'cpf':
          case 'cnpj':
            attribute = 'upper(' + attribute + ')';
            break;
        }
      }

      aqo.push({
        attribute: mapObj[val].query.attribute,
        condition: mapObj[val].query.condition,
        value: mapObj[val].query.value.replace ? mapObj[val].query.value.replace(/'/g, "''") : mapObj[val].query.value
      });

      return attribute.concat(before).concat(value).concat(after).replace(/obj.\*/g, '').replace(/\*/g, '');
    }).filter(function (item, idx, ary) {
      var operators = ["OR", "AND"];

      if (operators.indexOf(item) === -1) return true;

      var previousValue = ary[idx - 1];
      var nextValue = ary[idx + 1];
      if (previousValue !== undefined && operators.indexOf(previousValue) === -1 && nextValue !== undefined && operators.indexOf(nextValue) === -1) return true;

      return false;
    }).join(' ');

    if (aq.slice(-2) === 'ND' || aq.slice(-2) === 'OR') {
      aqo.pop();
      return { hql: aq.slice(0, -3), source: JSON.stringify(aqo) };
    }

    if (aq) {
      return { hql: aq, source: JSON.stringify(aqo) };
    }

    return {};
  }

  var utils = {
    toCpf: function toCpf(input) {
      var str = input + '';
      return str.replace(/\D/g, '').replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
  };

  function validator() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';

    return SUPPORTED_TYPES[type] ? SUPPORTED_TYPES[type].validator : angular.noop;
  }

  return { useType: useType, hqlObjectCreator: hqlObjectCreator, createHql: createHql, validator: validator };
}

angular.module('gumga.queryfilter.factory.hql', []).factory('HQLFactory', HQLFactory);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


QueryModelFactory.$inject = [];

function QueryModelFactory() {

  function QueryModel() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'NOTHING';
    var zIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 999;

    this.STATES = Object.freeze({
      NOTHING: 1, // 0000001
      ONLY_ATTRIBUTE: 2, // 0000010
      ATTRIBUTE_AND_CONDITION: 4, // 0000100
      EVERYTHING_NEEDED: 8, // 0001000
      UPDATING_ATTRIBUTE: 16, // 0010000
      UPDATING_CONDITION: 32, // 0100000
      UPDATING_VALUE: 64 // 1000000
    });
    this.query = query;
    this.active = active;
    this.activeStates = this.STATES[initialState];
    this.zIndex = zIndex;
  };

  // Functions

  QueryModel.prototype.addState = function (newState) {
    this.activeStates |= this.STATES[newState];
    return this;
  };
  QueryModel.prototype.removeState = function (stateToRemove) {
    this.activeStates &= ~this.STATES[stateToRemove];
    return this;
  };

  // Checking Functions

  QueryModel.prototype.isNOTHING = function () {
    return (this.activeStates & this.STATES['NOTHING']) != 0;
  };
  QueryModel.prototype.isONLY_ATTRIBUTE = function () {
    return (this.activeStates & this.STATES['ONLY_ATTRIBUTE']) != 0;
  };
  QueryModel.prototype.isATTRIBUTE_AND_CONDITION = function () {
    return (this.activeStates & this.STATES['ATTRIBUTE_AND_CONDITION']) != 0;
  };
  QueryModel.prototype.isEVERYTHING_NEEDED = function () {
    return (this.activeStates & this.STATES['EVERYTHING_NEEDED']) != 0;
  };
  QueryModel.prototype.isUPDATING_ATTRIBUTE = function () {
    return (this.activeStates & this.STATES['UPDATING_ATTRIBUTE']) != 0;
  };
  QueryModel.prototype.isUPDATING_CONDITION = function () {
    return (this.activeStates & this.STATES['UPDATING_CONDITION']) != 0;
  };
  QueryModel.prototype.isUPDATING_VALUE = function () {
    return (this.activeStates & this.STATES['UPDATING_VALUE']) != 0;
  };

  QueryModel.prototype.isBeingUpdated = function () {
    return this.isUPDATING_VALUE();
  };

  return {
    create: function create() {
      for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
        param[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(QueryModel, [null].concat(param)))();
    }
  };
}

angular.module('gumga.queryfilter.factory.querymodel', []).factory('QueryModelFactory', QueryModelFactory);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Filter.$inject = ['HQLFactory', '$compile', '$timeout', '$interpolate', 'QueryModelFactory', '$filter'];
function Filter(HQLFactory, $compile, $timeout, $interpolate, QueryModelFactory, $filter) {
  var template = '\n        <style>\n          .gumga-filter .dropdown-menu > li > a {\n            cursor: pointer;\n          }\n          .gumga-filter .panel-body .input-group-btn {\n            border: 1px solid #ccc;\n            border-left-width: 2px;\n            border-right-width: 2px;\n            border-radius: 4px;\n          }\n          .gumga-filter .panel-body .input-group-btn .btn {\n            border-color: transparent;\n            border-radius: 4px;\n            border: 1px;\n          }\n          .gumga-filter .panel-body .btn,\n          .gumga-filter .panel-body .input-group-btn .btn {\n            padding: 3px 6px;\n          }\n          .gumga-filter-panel {\n            position: absolute;\n            top: 100%;\n            left: 0;\n            z-index: 1000;\n            display: none;\n            float: left;\n            min-width: 160px;\n            padding: 12px;\n            margin: 2px 0 0;\n            font-size: 14px;\n            text-align: left;\n            background-color: #fff;\n            border: 1px solid #ccc;\n            border: 1px solid rgba(0,0,0,.15);\n            border-radius: 4px;\n            box-shadow: 0 6px 12px rgba(0,0,0,.175);\n            background-clip: padding-box;\n          }\n          .gumga-filter-panel .dropdown-menu li {\n            z-index: 3000;\n            position: absolute;\n            top: 100%;\n            left: 0;\n            z-index: 1000;\n            display: none;\n            float: left;\n            min-width: 160px;\n            padding: 12px;\n            margin: 2px 0 0;\n            font-size: 14px;\n            text-align: left;\n            background-color: #fff;\n            border: 1px solid #ccc;\n            border: 1px solid rgba(0,0,0,.15);\n            border-radius: 4px;\n            box-shadow: 0 6px 12px rgba(0,0,0,.175);\n            background:-clip padding-box;\n          }\n          gumga-filter .panel.heading {\n            padding: 5px 10px;\n          }\n          gumga-filter .form-inline.panel-body .input-group {\n            margin-right: 5px;\n          }\n          gumga-filter .form-inline.panel-body .input-group-btn > button,\n          gumga-filter .form-inline.panel-body .input-group-btn > btn-group > button[uib-dropdown-toggle] {\n            z-index: 0;\n          }\n          gumga-filter .form-inline.panel-body .input-group-btn > btn-group > ul[uib-dropdown-menu],\n          gumga-filter .form-inline.panel-body .input-group-btn > btn-group > ul[uib-dropdown-menu] > li {\n            z-index: 3000;\n          }\n          gumga-filter .btn-group.dropdown .glyphicon {\n            top: 3px;\n          }\n          gumga-query .row.replace-filter {\n            margin-top: .5%;\n          }\n        </style>\n        <div class="gumga-filter panel panel-default" >\n            <header class="panel-heading" style="padding: 5px 10px;">\n                <div class="row">\n                    <div class="col-md-8 col-xs-7">\n                        <h5>Pesquisa avan\xE7ada <strong ng-if="filterSelectItem"> - {{filterSelectItem.description}}</strong></h5>\n                    </div>\n                    <div class="col-md-4 col-xs-5" ng-show="saveQuery">\n                        <div class="input-group" >\n                            <input type="text" ng-model="nameSearch" class="form-control" id="_save" ng-show="saveFilterOpen" ng-keyup="saveSearch(nameSearch, $event)" ng-blur="closeInput()">\n                            <div class="input-group-btn">\n                                <button class="btn btn-success" ng-show="saveFilterOpen" ng-click="saveSearch(nameSearcht)" ng-disabled="!nameSearch">\n                                    <i class="glyphicon glyphicon-floppy-saved"></i>\n                                </button>\n                                <button class="btn btn-default pull-right" type="button" ng-hide="saveFilterOpen" ng-click="showInput()" ng-disabled="!isAnyQueryNotOk()">\n                                    <i class="glyphicon glyphicon-floppy-disk"></i>\n                                </button>\n                                <button class="btn btn-default"  ng-click="deleteFilter(filterSelectItem.id)" ng-if="filterSelectItem" style="float: right;margin-right: 15px;">\n                                    <i class="glyphicon glyphicon-floppy-remove"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </header>\n            <div class="form-inline panel-body">\n              <div class="row">\n                <div class="col-md-6">\n                  <h5><strong>Filtrar por:</strong></h5>\n                </div>\n                <div class="col-md-6">\n                  <button id="single-button" type="button" class="btn btn-default pull-right" ng-click="clearQuery()" ng-disabled="!isAnyQueryNotOk()" >\n                    <i class="glyphicon glyphicon-repeat"></i> Limpar filtros\n                  </button>\n                </div>\n              </div>\n              <div class="input-group" ng-repeat="($key, $value) in controlMap" style="margin-right: 1%;margin-top: 7.5px;z-index: {{$value.zIndex}}" ng-show="$value.active" id="first" >\n                  <div class="input-group-btn">\n                    <div class="btn-group" uib-dropdown ng-show="!$value.query.label" is-open="$value.isUPDATING_ATTRIBUTE()" auto-close="disabled">\n                      <button type="button" style="z-index: 0" class="btn btn-default" uib-dropdown-toggle ng-click="toggleUpdatingAttribute(this)" ng-disabled="$value.isUPDATING_VALUE() || $value.isUPDATING_CONDITION() || (!isAnyQueryNotOk() && $value.isEVERYTHING_NEEDED()) ">\n                        <span> {{ $value.query.attribute.label || \'Atributo\' }}  <i class="glyphicon glyphicon-chevron-down"></i></span>\n                      </button>\n                      <ul uib-dropdown-menu style="z-index: 3000" role="menu">\n                        <li style="z-index: 3000;" role="menuitem" ng-repeat="attribute in _attributes track by $index">\n                          <a ng-click="addAttribute(attribute, this.$parent, $key)">{{attribute.label}}</a>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class="btn-group" uib-dropdown is-open="$value.isUPDATING_CONDITION()" ng-show="!$value.query.label" auto-close="disabled">\n                      <button type="button" class="btn btn-default" uib-dropdown-toggle ng-click="toggleUpdatingCondition(this)" ng-disabled="$value.isUPDATING_VALUE() || $value.isUPDATING_ATTRIBUTE() || (!isAnyQueryNotOk() && $value.isEVERYTHING_NEEDED()) || $value.isNOTHING()">\n                          <span>{{ $value.query.condition.label || \'Condi\xE7\xE3o\' }} <i class="glyphicon glyphicon-chevron-down"></i></span>\n                      </button>\n                      <ul uib-dropdown-menu role="menu" >\n                        <li role="menuitem" ng-repeat="condition in conditions track by $index">\n                          <a ng-click="addCondition(condition, this.$parent, $key)">{{condition.label}}</a>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class="btn-group" id="_btnValue{{$key}}" ng-show="!$value.query.label">\n                      <button type="button" class="btn btn-default" ng-click="toggleUpdatingValue(this, $key)" ng-disabled="validatonValue($value)" id="_valueLabel{{$key}}">\n                          <span id="_conditionLabel{{$key}}">{{ getTextQuery($value) }} </span>\n                      </button>\n                      <div class="gumga-filter-panel" id="_panelValue{{$key}}"></div>\n                    </div>\n                    <div class="btn-group" ng-show="$value.query.label">\n                      <button type="button" class="btn btn-default" ng-click="updateOperator(this)" ng-disabled="!isAnyQueryNotOk()">\n                        <span> {{$value.query.label}} </span>\n                      </button>\n                    </div>\n                    <button type="button" style="z-index: 0;border-left: 1px solid #ccc; " class="btn btn-default" ng-click="removeQuery(this, $event, $index)" ng-show="!$value.query.label" ng-disabled="!$value.isEVERYTHING_NEEDED() || $value.isUPDATING_VALUE() ||(!isAnyQueryNotOk() && $value.isEVERYTHING_NEEDED()) ">\n                      <span class="glyphicon glyphicon-remove"></span>\n                    </button>\n                    </div>\n                  </div>\n                  <button id="single-button" type="button" class="btn btn-default" ng-click="addQuery()" ng-disabled="!isAnyQueryNotOk()" style="margin-top: 7.5px;" >\n                    <span class="glyphicon glyphicon-plus"></span>\n                  </button>\n                </div>\n              </div>\n            </div>\n        </div>';

  return {
    restrict: 'E',
    template: template,
    transclude: true,
    scope: {
      search: '&',
      saveQuery: '&',
      useGquery: '=?'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var outerScope = $scope.$parent.$parent;
      var FIELD_ERR = '\xC9 necess\xE1rio atribuir um valor ao atributo FIELD da tag ADVANCED-SEARCH-FIELD.',
          TYPE_ERR = 'O tipo "{1}" passado como par\xE2metro para o ADVANCED-SEARCH-FIELD n\xE3o \xE9 suportado.',
          NOTYPE_ERR = '\xC9 necess\xE1rio atribuir um valor ao atributo TYPE da tag ADVANCED-SEARCH-FIELD.',
          SEARCH_ERR = '\xC9 necess\xE1rio atribuir uma fun\xE7\xE3o para o atributo SEARCH. [search="foo()"]';

      var zIndexInitial = 999;

      $scope._attributes = [];
      $scope.controlMap = {};
      $scope.addCondition = addCondition;
      $scope.addQuery = addQuery;
      $scope.clearQuery = clearQuery;
      $scope.closeInput = closeInput;
      $scope.removeQuery = removeQuery;
      $scope.showInput = showInput;
      $scope.saveSearch = saveSearch;
      $scope.updateOperator = updateOperator;
      $scope.toggleEnum = toggleEnum;
      $scope.saveQuery = $attrs.saveQuery ? $scope.saveQuery : false;

      if (!$attrs.search) console.error(SEARCH_ERR);

      $scope.$on('filter-items', function (err, data) {
        var value = JSON.parse(data.value);
        $scope.controlMap = {};
        if ($scope.useGquery) {
          $timeout(function () {
            return $scope.search({ param: value });
          });
        } else {
          JSON.parse(value.source).forEach(function (val, index) {
            if (index % 2 == 0) {
              $scope.controlMap[index] = QueryModelFactory.create(val, true, 'EVERYTHING_NEEDED', zIndexInitial--);
            } else {
              $scope.controlMap[index] = QueryModelFactory.create({ value: val.value, label: val.value === 'AND' ? 'E' : 'OU' }, undefined, 'EVERYTHING_NEEDED', zIndexInitial--);
            }
          });
          $scope.filterSelectItem = data;
          $timeout(function () {
            return $scope.search({ param: HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent) });
          });
        }
      });

      $scope.getTextQuery = function ($value) {
        var toReturn = 'valor';
        if ($value && $value.query && $value.query.attribute) {
          if ($value.query.attribute.type && $value.query.attribute.type == 'select' && $value.query.value != undefined && $value.query.value != null) {
            var data = $value.query.attribute.extraProperties.data.filter(function (data) {
              return data.field == $value.query.value;
            });
            if (data.length > 0) {
              return data[0].label;
            }
          }
          toReturn = $filter('gumgaGenericFilter')($value.query.value ? $value.query.value.push && $value.query.value.length > 0 ? $value.query.value.join(', ') : $value.query.value : 'valor', $value.query.attribute.type);
        }
        return toReturn;
      };

      $scope.$on('openOrCloseFilter', function (event, openOrClose) {
        if (!openOrClose) {
          delete $scope.filterSelectItem;
          Object.keys($scope.controlMap).forEach(function (key) {
            var scope = getIndexScope(key);
            scope.$value.active = false;
            delete $scope.controlMap[key];
            $timeout(function (_) {
              return scope.$destroy();
            });
          });

          $scope.search({ param: {} });
          return;
        }

        if (!$scope.controlMap['0']) initialize();
      });

      $transclude(function (transcludeElement) {
        var parentContext = $scope.$parent.$parent;

        [].slice.call(transcludeElement).forEach(function (value, $index) {
          if (value.nodeName !== 'ADVANCED-SEARCH-FIELD') return;
          if (!value.getAttribute('field')) return console.error(FIELD_ERR);

          var field = value.getAttribute('field'),
              type = value.getAttribute('type'),
              innerJoin = value.getAttribute('inner-join') ? value.getAttribute('inner-join').split(',') : [],
              leftJoin = value.getAttribute('left-join') ? value.getAttribute('left-join').split(',') : [],
              label = value.getAttribute('label') ? $interpolate(value.getAttribute('label'))(parentContext) : field.charAt(0).toUpperCase().concat(field.slice(1)),
              extraProperties = {};

          if (!type) return console.error(NOTYPE_ERR);

          type = type.toLowerCase().trim() || '';
          label = label || field.charAt(0).toUpperCase() + field.slice(1);
          extraProperties = getExtraProperties(value);

          if (!HQLFactory.useType(type)) return console.error(TYPE_ERR.replace('{1}', type));

          $scope._attributes.push({ field: field, type: type, label: label, extraProperties: extraProperties, innerJoin: innerJoin, leftJoin: leftJoin });
        });
      });

      if (!$scope._attributes[0]) return;
      var getElm = function getElm(string) {
        return angular.element(document.getElementById(string));
      };
      var initialize = function initialize(_) {
        $scope.controlMap['0'] = QueryModelFactory.create({ attribute: {}, condition: {}, value: '' }, true, 'NOTHING', zIndexInitial--);

        $timeout(function (_) {
          var indexScope = getIndexScope();
          indexScope.$value.removeState('NOTHING').addState('UPDATING_ATTRIBUTE');
        });
      };

      initialize();

      var defaultAttribute = angular.copy($scope._attributes[0]),
          defaultCondition = angular.copy(HQLFactory.useType(defaultAttribute.type).defaultCondition)[0];

      $scope.addAttribute = addAttribute;
      $scope.toggleUpdatingAttribute = toggleUpdatingAttribute;

      $scope.addCondition = addCondition;
      $scope.toggleUpdatingCondition = toggleUpdatingCondition;

      $scope.toggleUpdatingValue = toggleUpdatingValue;

      $scope.goSearch = goSearch;

      $scope.callSearch = callSearch;

      $scope.deleteFilter = deleteFilter;

      $scope.isAnyQueryNotOk = isAnyQueryNotOk;

      $scope.lastOfControlMap = lastOfControlMap;

      $scope.getIndexScope = getIndexScope;

      $scope.validatonValue = validatonValue;

      function addAttribute(selectedAttribute, scope, key) {
        scope.$value.query.attribute = selectedAttribute;
        scope.conditions = HQLFactory.useType(selectedAttribute.type).conditions;
        scope.validator = HQLFactory.useType(selectedAttribute.type).validator;

        scope.$value.removeState('UPDATING_ATTRIBUTE').removeState('NOTHING').addState('ONLY_ATTRIBUTE');

        $timeout(function () {
          scope.$value.addState('UPDATING_CONDITION');
          if (scope.$value.isEVERYTHING_NEEDED()) {
            scope.$value.removeState('EVERYTHING_NEEDED');
            scope.$value.query.value = '';
          }
        });
      }

      function goSearch(event) {
        if (event.keyCode == 13) {
          callSearch(event);
        }
      }

      function deleteFilter(filterId) {
        //TODO fazer o deletar filtro
      }

      function toggleUpdatingAttribute(scope) {
        scope.$value.isUPDATING_ATTRIBUTE() ? scope.$value.removeState('UPDATING_ATTRIBUTE') : scope.$value.addState('UPDATING_ATTRIBUTE');
      }

      function addCondition(selectedCondition, scope, key) {
        scope.$value.query.condition = selectedCondition;
        scope.$value.removeState('UPDATING_CONDITION').removeState('ONLY_ATTRIBUTE');
        $timeout(function () {
          if (!scope.$value.isEVERYTHING_NEEDED()) {
            scope.$value.removeState('ATTRIBUTE_AND_CONDITION').addState('UPDATING_VALUE');
            compileContent(key, scope);
          } else {
            $scope.search({ param: HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent) });
          }
        });
      }

      function compileContent(key, scope) {
        var elm = getElm('_panelValue' + key);
        elm.addClass('show');
        if (scope.$value.query.attribute.type == 'enum') {
          elm.attr('style', 'width: 500px');
        } else if (scope.$value.query.attribute.type !== 'enum' && elm.attr('style')) {
          elm.removeAttr('style');
        }
        $compile(elm.html(HQLFactory.useType(scope.$value.query.attribute.type).template).contents())(scope);
      }

      function toggleUpdatingCondition(scope) {
        scope.$value.isUPDATING_CONDITION() ? scope.$value.removeState('UPDATING_CONDITION') : scope.$value.addState('UPDATING_CONDITION');
      }

      function toggleUpdatingValue(scope, key) {
        scope.$value.isUPDATING_VALUE() ? (scope.$value.removeState('UPDATING_VALUE'), getElm('_panelValue' + key).addClass('show')) : (scope.$value.addState('UPDATING_VALUE'), getElm('_panelValue' + key).addClass('show'));
      }

      function isAnyQueryNotOk() {
        return Object.keys($scope.controlMap).filter(function (intern) {
          return !$scope.controlMap[intern].isEVERYTHING_NEEDED() || $scope.controlMap[intern].isUPDATING_ATTRIBUTE() || $scope.controlMap[intern].isUPDATING_CONDITION() || $scope.controlMap[intern].isUPDATING_VALUE();
        }).filter(function (value) {
          return parseInt(value) % 2 == 0;
        }).length === 0;
      }

      function lastOfControlMap() {
        return Object.keys($scope.controlMap)[Object.keys($scope.controlMap).length - 1];
      }

      function getIndexScope() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var desiredScope = angular.element(document.getElementById('first')).scope();
        while (desiredScope.$index != index) {
          if (desiredScope.$$nextSibling == null) break;
          desiredScope = desiredScope.$$nextSibling;
        }
        return desiredScope;
      }

      function validatonValue($value) {
        return $value && ($value.isNOTHING() || $value.isUPDATING_ATTRIBUTE() || $value.isUPDATING_VALUE() || $value.isUPDATING_CONDITION() || !($value.isEVERYTHING_NEEDED() || !$value.isATTRIBUTE_AND_CONDITION()) || !isAnyQueryNotOk() && $value.isEVERYTHING_NEEDED());
      }

      function toggleEnum(event, key, field) {
        event.stopPropagation();
        var elm = getElm('_panelValue' + key).scope();
        if (!Array.isArray(elm.$value.query.value)) elm.$value.query.value = [];
        var index = elm.$value.query.value.indexOf(field);
        if (index > -1) {
          elm.$value.query.value.splice(index, 1);
        } else {
          elm.$value.query.value.push(field);
        }
      }

      function getExtraProperties(value) {
        var properties = void 0;
        switch (value.getAttribute('type')) {
          case 'boolean':
            {
              properties = { trueLabel: value.getAttribute('true-label'), falseLabel: value.getAttribute('false-label') };
              break;
            }
          case 'select':
            {
              properties = { data: outerScope[value.getAttribute('data')] };
              break;
            }
          case 'enum':
            {
              properties = { data: outerScope[value.getAttribute('data')] };
            }
        }
        return properties;
      }

      function addValue(index, value) {
        getElm('_value' + index).html(value);
      }

      function addQuery() {
        delete $scope.filterSelectItem;
        $scope.controlMap[parseInt(lastOfControlMap()) + 1] = QueryModelFactory.create({ value: 'AND', label: 'E' }, undefined, 'EVERYTHING_NEEDED', zIndexInitial--);
        $scope.controlMap[parseInt(lastOfControlMap()) + 1] = QueryModelFactory.create({ attribute: {}, condition: {}, value: '' }, undefined, 'NOTHING', zIndexInitial--);
        $timeout(function () {
          return getIndexScope(parseInt(lastOfControlMap())).$value.addState('UPDATING_ATTRIBUTE');
        });
      }

      function clearQuery() {
        $scope.controlMap = [];
        initialize();
      }

      function closeInput() {
        $timeout(function () {
          $scope.saveFilterOpen = false;
        }, 200);
      }

      function showInput() {
        $scope.saveFilterOpen = true;
        $timeout(function () {
          return document.getElementById('_save').focus();
        });
      }

      function saveSearch(name, event) {
        if (!event || event.keyCode == 13) {
          $scope.$parent.proxySave(HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent), $scope.nameSearch);
          $scope.saveFilterOpen = !$scope.saveFilterOpen;
          $scope.nameSearch = '';
        }
      }

      function removeQuery(scope, e, index) {
        delete $scope.filterSelectItem;
        if (!scope.$$prevSibling.$key && !scope.$$nextSibling) {
          scope.$value.query = { attribute: {}, condition: {}, value: '' };
          scope.$value.activeStates = 0;
          $timeout(function () {
            return scope.$value.addState('UPDATING_ATTRIBUTE');
          });
          callSearch(e, 'remove', index);
          return;
        }
        if (!scope.$$prevSibling.$key && scope.$$nextSibling) {
          scope.$value.active = false;
          scope.$$nextSibling.$value.active = false;
          $timeout(function () {
            return scope.$$nextSibling.$destroy(), scope.$destroy();
          });
          callSearch(e, 'remove', index);
          return;
        }
        if (scope.$$prevSibling.$key) {
          scope.$value.active = false;
          scope.$$prevSibling.$value.active = false;
          $timeout(function () {
            return scope.$$prevSibling.$destroy(), scope.$destroy();
          });
          callSearch(e, 'remove', index);
        }
      }

      function updateOperator(scope) {
        if (scope.$value.query.value === 'AND') {
          scope.$value.query.value = 'OR';
          scope.$value.query.label = 'OU';
          $scope.search({ param: HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent) });
          return;
        }
        scope.$value.query.value = 'AND';
        scope.$value.query.label = 'E';
        $scope.search({ param: HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent) });
      }

      document.addEventListener('click', function (e) {
        callSearch(e);
      });

      document.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
          Object.keys($scope.controlMap).forEach(function (key) {
            var scope = getIndexScope(key);
            if (scope.$value.activeStates !== 8) {
              if (scope.$$prevSibling.$key) {
                scope.$$prevSibling.$value.active = false;
                delete $scope.controlMap[scope.$$prevSibling.$key];
                $timeout(function () {
                  return scope.$$prevSibling.$destroy();
                });
              } else if (scope.$$nextSibling.$key) {
                scope.$$nextSibling.$value.active = false;
                delete $scope.controlMap[scope.$$nextSibling.$key];
                $timeout(function () {
                  return scope.$$nextSibling.$destroy();
                });
              } else if (scope.$$prevSibling.$key && scope.$$nextSibling.$key) {
                scope.$$nextSibling.$value.active = false;
                delete $scope.controlMap[scope.$$nextSibling.$key];
                $timeout(function () {
                  return scope.$$nextSibling.$destroy();
                });
              }
              scope.$value.active = false;
              delete $scope.controlMap[key];
              $timeout(function (_) {
                return scope.$destroy();
              });
            }
          });
        }
      });

      function callSearch(e, typeSearch) {
        var positionCondition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        var outerClick = true;
        var updatingValue = Object.keys($scope.controlMap).filter(function (intern) {
          return $scope.controlMap[intern].isUPDATING_VALUE();
        })[0],
            validator = void 0;

        var isPanelAParent = function isPanelAParent(element, id) {
          for (var desired = angular.element(element); desired.parent().length != 0; desired = desired.parent()) {
            if (desired[0].id == '_panelValue' + id) {
              desired = true;
              break;
            }
          }return desired === true ? desired : false;
        };

        if (e.target.id == '_conditionLabel' + updatingValue || e.target.id == '_valueLabel' + updatingValue) {
          return;
        }

        if (e.target.id == '_panelValue' + updatingValue || isPanelAParent(e.target, updatingValue)) {
          outerClick = false;
        }

        if ($scope.controlMap[updatingValue]) {
          validator = HQLFactory.validator($scope.controlMap[updatingValue].query.attribute.type);
        }
        if (outerClick && validator && validator($scope.controlMap[updatingValue].query.value) || e.type == 'keyup' || typeSearch == "btn") {
          var scopeBeingUpdated = getElm('_panelValue' + updatingValue).scope();
          $timeout(function () {
            return scopeBeingUpdated.$value.removeState('UPDATING_VALUE').removeState('ATTRIBUTE_AND_CONDITION').addState('EVERYTHING_NEEDED');
          });
          getElm('_panelValue' + updatingValue).removeClass('show');
          $scope.search({ param: HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent) });
        }
        if (typeSearch == "remove") {
          var param = positionCondition == 0 ? {} : HQLFactory.createHql($scope.controlMap, $scope.useGquery, $scope.$parent);
          $scope.search({ param: param });
        }
      }
    }
  };
}
angular.module('gumga.queryfilter.filter.core', []).directive('gumgaFilterCore', Filter);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Filter.$inject = ['HQLFactory', '$compile', '$timeout'];
function Filter(HQLFactory, $compile, $timeout) {
  var template = '\n    <div>\n      <button class="btn btn-default" ng-click="isOpen = !isOpen ">\n        <span class="glyphicon glyphicon-filter"></span>\n      </button>\n    </div>\n    <div id="replace"></div>\n    ';
  return {
    restrict: 'E',
    template: template,
    transclude: true,
    scope: {
      search: '&',
      saveQuery: '&',
      containerId: '@?'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      $scope.possibleAdvancedFields = [];

      $scope.search = $scope.search || angular.noop;
      $scope.saveQuery = $scope.saveQuery || angular.noop;
      $scope.containerId = $scope.containerId || "replace";

      $scope.proxySave = function (query) {
        $scope.saveQuery({ query: query, name: name });
      };
      $scope.proxySearch = function (param) {
        $scope.search({ param: param });
      };

      $transclude(function (transcludeElement) {
        [].slice.call(transcludeElement).forEach(function (value) {
          if (value && value.nodeName === 'ADVANCED-SEARCH-FIELD') $scope.possibleAdvancedFields.push(value.outerHTML);
        });

        var template = '<gumga-filter-core ng-show="isOpen" search="proxySearch(param)" ' + ($attrs.saveQuery ? 'save-query="saveQuery(query, name)"' : '') + '>\n                            ' + $scope.possibleAdvancedFields.reduce(function (prev, next) {
          return prev += next;
        }, '') + '\n                          </gumga-filter-core>',
            element = angular.element(document.getElementById($scope.containerId));

        element.replaceWith($compile(template)($scope));
      });
    }
  };
}
angular.module('gumga.queryfilter.filter.directive', []).directive('gumgaFilter', Filter);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
__webpack_require__(0);
__webpack_require__(2);
__webpack_require__(1);

var _module = angular.module('gumga.queryfilter', ['gumga.queryfilter.query', 'gumga.queryfilter.filter', 'gumga.queryfilter.factory']);

exports.default = _module;

/***/ })
/******/ ]);