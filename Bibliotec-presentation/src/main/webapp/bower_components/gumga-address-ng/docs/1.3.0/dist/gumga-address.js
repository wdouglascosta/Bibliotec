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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GumgaAddressModalController = function GumgaAddressModalController($scope, factoryData, GumgaAddressService, $uibModalInstance, apiSearchCep) {

  $scope.value = {};
  $scope.factoryData = angular.copy(factoryData);

  $scope.getCitiesByUF = function (uf) {
    delete $scope.value.localization;
    delete $scope.value.premisse;
    delete $scope.ceps;
    GumgaAddressService.getLocations(uf, apiSearchCep).then(function (resp) {
      $scope.cities = resp.data;
    });
  };

  $scope.getPremisseByUFAndCity = function (uf, city) {
    delete $scope.value.premisse;
    delete $scope.ceps;
    GumgaAddressService.getPremisseByUFAndCity(uf, city, apiSearchCep).then(function (resp) {
      $scope.premisses = resp.data;
    });
  };

  $scope.searchCep = function (uf, city, premisse) {
    if (!premisse) return;
    if (!city) return;
    if (!uf) return;
    $scope.lookingZipCode = true;
    GumgaAddressService.searchCepByUfAndCityAndPremisse(uf, city, premisse, apiSearchCep).then(function (resp) {
      $scope.ceps = resp.data;
      $scope.lookingZipCode = false;
    });
  };

  $scope.select = function (cep) {
    $uibModalInstance.close(cep);
  };
};

GumgaAddressModalController.$inject = ['$scope', 'factoryData', 'GumgaAddressService', '$uibModalInstance', 'apiSearchCep'];

exports.default = GumgaAddressModalController;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n<div class=\"modal-header\">\n    <h3 class=\"modal-title\">Encontrar cep</h3>\n</div>\n<div class=\"modal-body\" id=\"modal-body\">\n\n  <form>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n           <label for=\"UF\">UF</label>\n            <select ng-model=\"value.state\" ng-change=\"getCitiesByUF(value.state)\" class=\"form-control gmd\" ng-options=\"uf for uf in factoryData.ufs\"></select>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n        \t\t<label for=\"Localidade\">Localidade</label>\n        \t\t<input type=\"text\" typeahead-on-select=\"getPremisseByUFAndCity(value.state, value.localization)\" ng-disabled=\"!value.state || cities.length == 0\" placeholder=\"Digite para buscar...\" typeahead-min-length=\"0\" uib-typeahead=\"city for city in cities | filter:$viewValue | limitTo:8\" ng-model=\"value.localization\" class=\"form-control gmd\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"form-group\">\n            <label for=\"Localidade\">Logradouro</label>\n            <input type=\"text\"\n              ng-disabled=\"!value.state || cities.length == 0\"\n              placeholder=\"Digite para buscar...\"\n              ng-model-options=\"{debounce: 1000}\"\n              ng-change=\"searchCep(value.state, value.localization, value.premisse)\"\n              ng-model=\"value.premisse\"\n              class=\"form-control gmd\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"max-height: 200px;overflow: auto;\">\n        <label ng-if=\"lookingZipCode\">\n          <i class=\"glyphicon glyphicon-refresh\"></i>\n          Buscando, aguarde um momento...\n        </label>\n        <label ng-if=\"ceps.length == 0 && !lookingZipCode\">\n          Nada encontrado com base na sua pesquisa.\n        </label>\n        <table ng-show=\"ceps.length > 0 && !lookingZipCode\" class=\"table table-striped\">\n            <tr>\n              <th>Bairro</th>\n              <th>Logradouro</th>\n              <th>Cep</th>\n              <th></th>\n            </tr>\n            <tr ng-repeat=\"cep in ceps | limitTo:20\">\n              <td>{{cep.bairro}}</td>\n              <td>{{cep.logradouro}}</td>\n              <td>{{cep.cep}}</td>\n              <td>\n                <button class=\"gmd btn btn-primary\" ng-click=\"select(cep)\">Selecionar</button>\n              </td>\n            </tr>\n        </table>\n      </div>\n    </div>\n\n  </form>\n\n</div>\n\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function AddressProvider() {

  var defaultConfiguration = {
    servicesAPI: 'http://45.33.100.20/services-api',
    translation: {
      country: 'Pais',
      zipCode: 'CEP',
      premisseType: 'Tipo Logradouro',
      premisse: 'Logradouro',
      number: 'Número',
      information: 'Complemento',
      neighbourhood: 'Bairro',
      state: 'UF',
      stateCode: 'Cód. UF',
      localization: 'Localidade',
      formalCode: 'Cód. IBGE',
      coordinates: 'Latitude e Longitude'
    }
  };

  var setServicesAPI = function setServicesAPI(apiLocation) {
    return defaultConfiguration['servicesAPI'] = apiLocation;
  };

  var getServicesAPI = function getServicesAPI() {
    return defaultConfiguration['servicesAPI'];
  };

  var setTranslation = function setTranslation(translation) {
    return Object.keys(translation).forEach(function (key) {
      return defaultConfiguration['translation'][key] = translation[key];
    });
  };

  var getTranslation = function getTranslation() {
    return defaultConfiguration['translation'];
  };

  return {
    setServicesAPI: setServicesAPI,
    getServicesAPI: getServicesAPI,
    setTranslation: setTranslation,
    getTranslation: getTranslation,
    $get: function $get() {
      return {
        setServicesAPI: setServicesAPI,
        getServicesAPI: getServicesAPI,
        setTranslation: setTranslation,
        getTranslation: getTranslation
      };
    }
  };
}

AddressProvider.$inject = [];

exports.default = AddressProvider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  AddressService.$inject = ['$http', '$q', '$gumgaAddress'];
  function AddressService($http, $q, $gumgaAddress) {
    var base = $gumgaAddress.getServicesAPI();

    return {
      everyUf: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
      everyLogradouro: ['Outros', 'Aeroporto', 'Alameda', 'Área', 'Avenida', 'Campo', 'Chácara', 'Colônia', 'Condomínio', 'Conjunto', 'Distrito', 'Esplanada', 'Estação', 'Estrada', 'Favela', 'Fazenda', 'Feira', 'Jardim', 'Ladeira', 'Largo', 'Lago', 'Lagoa', 'Loteamento', 'Núcleo', 'Parque', 'Passarela', 'Pátio', 'Praça', 'Quadra', 'Recanto', 'Residencial', 'Rodovia', 'Rua', 'Setor', 'Sítio', 'Travessa', 'Trevo', 'Trecho', 'Vale', 'Vereda', 'Via', 'Viaduto', 'Viela', 'Via'],
      availableCountries: ['Brasil'],
      returnFormattedObject: function returnFormattedObject() {
        return {
          zipCode: null,
          premisseType: null,
          premisse: null,
          number: null,
          information: null,
          neighbourhood: null,
          localization: null,
          state: null,
          country: null
        };
      },
      getLocations: function getLocations(uf, apiSearchCep) {
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/buscar-cidades?uf=' + uf);
      },
      getGoogleCoords: function getGoogleCoords(address, callback) {
        /**
         * Foi feito assim pelo fato da existência de headers que bloqueiam a requisição.
         */

        var httpRequest;
        httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = loadContent;
        httpRequest.open('GET', 'http://maps.google.com/maps/api/geocode/json?address=' + address);
        httpRequest.send();

        function loadContent() {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            callback({ data: httpRequest.responseText, status: httpRequest.status });
          }
        }
      },
      getPremisseByUFAndCity: function getPremisseByUFAndCity(uf, city, apiSearchCep) {
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/buscar-logradouros?uf=' + uf + '&cidade=' + city);
      },
      searchCepByUfAndCityAndPremisse: function searchCepByUfAndCityAndPremisse(uf, city, premisse, apiSearchCep) {
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/buscar-endereco-completo?uf=' + uf + '&cidade=' + city + '&logradouro=' + premisse);
      },
      getCep: function getCep(cep, apiSearchCep) {
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/busca-cep/' + cep);
      }
    };

    function getApiSearchCep(apiSearchCep) {
      return apiSearchCep || base;
    }
  }
  angular.module('gumga.address.services', []).factory('GumgaAddressService', AddressService);
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addressModalTemplate = __webpack_require__(1);

var _addressModalTemplate2 = _interopRequireDefault(_addressModalTemplate);

var _addressModalController = __webpack_require__(0);

var _addressModalController2 = _interopRequireDefault(_addressModalController);

var _addressProvider = __webpack_require__(2);

var _addressProvider2 = _interopRequireDefault(_addressProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(3);


'use strict';
AddressDirective.$inject = ['GumgaAddressService', '$http', '$compile', '$uibModal', '$timeout', '$injector', '$gumgaAddress'];
function AddressDirective(GumgaAddressService, $http, $compile, $uibModal, $timeout, $injector, $gumgaAddress) {

  function useGumgaLayout() {
    try {
      return !!angular.module('gumga.layout');
    } catch (error) {
      return false;
    }
  }

  var templateBegin = '<div class="row">' + ' <div class="col-md-12 col-sm-12 col-xs-12">' + '   <accordion>' + '	  <accordion-group is-open="false" heading="{{::title}}">';
  var blockCountryCep = useGumgaLayout() ? '<div class="row">\n     <div class="col-md-8">\n      <div class="form-group" style="margin-top: 21px;">\n       <gmd-select ng-model="value.country"\n                     ng-disabled="true"\n                     placeholder="{{getTranslateByKey(\'country\')}}">\n        <gmd-option    ng-repeat="pais in factoryData.availableCountries"\n                       ng-value="pais"\n                       ng-label="pais">\n          {{pais}}\n        </gmd-option>\n      </gmd-select>\n      </div>\n      </div>\n     <div class="col-md-4">\n      <div class="form-group">\n        <a data-ng-click="openModal()" style="cursor: pointer;margin: 0;float: right;" class="text text-primary">N\xE3o sabe?</a>\n        <div class="input-group" style="width: 100%;">\n          <gmd-input>\n            <input type="text"\n                   class="form-control gmd"\n                   ng-keypress="custom($event,value.zipCode)"\n                   ng-keyup="notfound=false"\n                   gumga-mask="99999-999"\n                   ng-model="value.zipCode"  id="input{{::id}}"\n                   required>\n            <label for="input{{::id}}" class="control-label">{{getTranslateByKey(\'zipCode\')}}</label>\n          </gmd-input>\n          <span class="input-group-btn">\n            <button ng-show="!notfound" style="margin-bottom: 22px;" class="btn btn-primary gmd" type="button" ng-click="searchCep(value.zipCode)" ng-disabled="loader{{::id}}" id="buttonSearch{{::id}}"><i class="glyphicon glyphicon-search"></i></button>\n            <button ng-show="notfound"  style="margin-bottom: 22px;" uib-tooltip="Cep n\xE3o encontrado!" popover-trigger="\'mouseenter\'" class="btn btn-danger gmd" type="button"><i class="glyphicon glyphicon-info-sign"></i></button>\n          </span>\n        </div>\n\n      </div>\n     </div>\n    </div>' : '<div class="row">\n     <div class="col-md-8">\n    \t<div class="form-group">\n       <label for="country">{{getTranslateByKey(\'country\')}}</label>\n    \t  <select ng-readonly="true" ng-model="value.country" class="form-control" ng-options="pais for pais in factoryData.availableCountries"></select>\n    \t</div>\n    \t</div>\n     <div class="col-md-4">\n    \t<div class="form-group">\n       <label for="input{{::id}}">{{getTranslateByKey(\'zipCode\')}}</label>\n       <a data-ng-click="openModal()" style="cursor: pointer;margin: 0;float: right;" class="text text-primary">N\xE3o sabe?</a>\n    \t  <div class="input-group" style="width: 100%;">\n    \t\t<input type="text" ng-keyup="notfound=false" class="form-control" gumga-mask="99999-999" ng-model="value.zipCode" id="input{{::id}}" ng-keypress="custom($event,value.zipCode)">\n    \t\t<span class="input-group-btn">\n    \t    <button ng-show="!notfound" class="btn btn-primary" type="button" ng-click="searchCep(value.zipCode)" ng-disabled="loader{{::id}}" id="buttonSearch{{::id}}"><i class="glyphicon glyphicon-search"></i></button>\n    \t    <button ng-show="notfound" uib-popover="Cep n\xE3o encontrado!" popover-trigger="\'mouseenter\'" class="btn btn-danger" type="button"><i class="glyphicon glyphicon-info-sign"></i></button>\n    \t\t</span>\n    \t  </div>\n    \t</div>\n     </div>\n    </div>';

  var streetType = useGumgaLayout() ? '\n      <div class="form-group">\n        <gmd-select ng-model="value.premisseType" placeholder="{{getTranslateByKey(\'premisseType\')}}">\n          <gmd-select-search ng-model="searchStreetTypes"\n                placeholder="Buscar...">\n          </gmd-select-search>\n         <gmd-option    ng-repeat="type in streetTypes | filter: searchStreetTypes track by $index"\n                        ng-value="type"\n                        ng-label="type">\n           {{type}}\n         </gmd-option>\n       </gmd-select>\n      </div>\n    ' : '\n      <div class="form-group">\n       <label for="tipoLogradouro">{{getTranslateByKey(\'premisseType\')}}</label>\n       <input type="text" ng-model="value.premisseType" typeahead-min-length="0" uib-typeahead="type for type in streetTypes | filter:$viewValue | limitTo:8" typeahead-editable="false" typeahead-show-hint="true" typeahead-min-length="0" class="form-control" typeahead-editable="false" typeahead-show-hint="true" typeahead-min-length="0">\n      </div>\n    ';
  var street = useGumgaLayout() ? '\n      <div class="form-group">\n        <gmd-input>\n         <input type="text"\n                class="form-control gmd"\n                ng-blur="searchCoordsOnPremisse(value, true)"\n                ng-model="value.premisse"\n                required>\n         <span class="bar"></span>\n         <label class="control-label">{{getTranslateByKey(\'premisse\')}}</label>\n       </gmd-input>\n      </div>\n    ' : '\n      <div class="form-group">\n       <label for="premisse">{{getTranslateByKey(\'premisse\')}}</label>\n       <input type="text" ng-model="value.premisse" class="form-control" ng-blur="searchCoordsOnPremisse(value, true)"/>\n      </div>\n    ';
  var number = useGumgaLayout() ? '\n    <div class="form-group">\n      <gmd-input>\n       <input type="text"\n              class="form-control gmd"\n              ng-blur="searchCoordsOnNumber(value, true)"\n              ng-model="value.number"\n              required>\n       <span class="bar"></span>\n       <label class="control-label">{{getTranslateByKey(\'number\')}}</label>\n     </gmd-input>\n    </div>\n    ' : '\n    <div class="form-group">\n    \t\t<label for="number">{{getTranslateByKey(\'number\')}}</label>\n    \t\t<input type="text" ng-model="value.number" class="form-control" id="numberInput{{::id}}" ng-blur="searchCoordsOnNumber(value, true)"/>\n    </div>\n    ';

  var blockStreet = '<div class="row">' + '		<div class="col-md-4">' + streetType + '		</div>' + '		<div class="col-md-8">' + street + '		</div>' + '</div>';
  var blockStreetNumber = '<div class="row">' + '		<div class="col-md-4">' + streetType + '		</div>' + '		<div class="col-md-5">' + street + '		</div>' + '		<div class="col-md-3">' + number + '		</div>' + '</div>';
  var blockComplement = useGumgaLayout() ? '\n      <div class="row">\n    \t\t<div class="col-md-6">\n    \t\t\t\t<div class="form-group">\n                <gmd-input>\n                  <input type="text"\n                         class="form-control gmd"\n                         ng-model="value.information"\n                         required>\n                  <span class="bar"></span>\n                  <label class="control-label">{{getTranslateByKey(\'information\')}}</label>\n                </gmd-input>\n    \t\t\t\t</div>\n    \t\t</div>\n    ' : '\n     <div class="row">\n    \t\t<div class="col-md-6">\n    \t\t\t\t<div class="form-group">\n    \t\t\t\t\t\t<label for="information">{{getTranslateByKey(\'information\')}}</label>\n    \t\t\t\t\t\t<input type="text" ng-model="value.information" class="form-control"/>\n    \t\t\t\t</div>\n    \t\t</div>\n      ';

  var blockNeighbourhood = useGumgaLayout() ? '\n      <div class="row">\n          <div class="col-md-12">\n              <div class="form-group">\n                  <gmd-input>\n                    <input type="text"\n                           class="form-control gmd"\n                           ng-model="value.neighbourhood" id="name"\n                           required>\n                    <span class="bar"></span>\n                    <label for="name" class="control-label">{{getTranslateByKey(\'neighbourhood\')}}</label>\n                  </gmd-input>\n              </div>\n          </div>\n      </div>\n    ' : '\n      <div class="row">\n      \t\t<div class="col-md-12">\n      \t\t\t\t<div class="form-group">\n      \t\t\t\t\t\t<label for="neighbourhood">{{getTranslateByKey(\'neighbourhood\')}}</label>\n      \t\t\t\t\t\t<input type="text" ng-model="value.neighbourhood" class="form-control"/>\n      \t\t\t\t</div>\n      \t\t</div>\n      </div>\n    ';

  var state = useGumgaLayout() ? '\n    <div class="form-group">\n      <gmd-select ng-model="value.state" placeholder="{{getTranslateByKey(\'state\')}}">\n        <gmd-select-search ng-model="searchUF"\n                placeholder="Buscar...">\n        </gmd-select-search>\n        <gmd-option    ng-repeat="uf in factoryData.ufs | filter: searchUF"\n                       ng-value="uf"\n                       ng-label="uf">\n          {{uf}}\n        </gmd-option>\n      </gmd-select>\n\t\t</div>\n    ' : '<div class="form-group">\n        <label for="uf">{{getTranslateByKey(\'state\')}}</label>\n    \t\t<select ng-model="value.state" class="form-control" ng-options="uf for uf in factoryData.ufs"></select>\n    </div>';

  var stateCode = useGumgaLayout() ? '\n    <div class="form-group">\n      <gmd-input>\n        <input type="text"\n          class="form-control gmd"\n          ng-model="value.stateCode"\n          required>\n        <span class="bar"></span>\n        <label for="stateCode">{{getTranslateByKey(\'stateCode\')}}</label>\n      </gmd-input>\n\t\t</div>\n    ' : '\n    <div class="form-group">\n\t\t\t\t<label for="stateCode">{{getTranslateByKey(\'stateCode\')}}</label>\n\t\t\t\t<input type="text" ng-model="value.stateCode" class="form-control"/>\n\t\t</div>\n    ';

  var city = useGumgaLayout() ? '\n    <div class="form-group">\n      <gmd-input>\n        <input type="text"\n          class="form-control gmd"\n          ng-model="value.localization"\n          required>\n        <span class="bar"></span>\n        <label class="control-label">{{getTranslateByKey(\'localization\')}}</label>\n      </gmd-input>\n    </div>\n    ' : '\n    <div class="form-group">\n    \t\t<label for="localization">{{getTranslateByKey(\'localization\')}}</label>\n    \t\t<input type="text" ng-model="value.localization" class="form-control"/>\n    </div>\n    ';

  var codIBGE = useGumgaLayout() ? '<div class="form-group">\n         <gmd-input>\n           <input type="text"\n             class="form-control gmd"\n             id="CodIBGE{{::id}}"\n             ng-model="value.formalCode"\n             required>\n           <span class="bar"></span>\n           <label for="CodIBGE{{::id}}" class="control-label">{{getTranslateByKey(\'formalCode\')}}</label>\n         </gmd-input>\n     </div> ' : '<div class="form-group">\n    \t\t<label for="CodIBGE{{::id}}">{{getTranslateByKey(\'formalCode\')}}</label>\n    \t\t<input type="text" ng-model="value.formalCode" class="form-control" id="CodIBGE{{::id}}"/>\n    </div> ';

  var blockStateCity = '<div class="row">' + '		<div class="{{withStateCode ? \'col-md-2\' : \'col-md-4\'}}">' + state + '		</div>' + '		<div class="col-md-2" ng-show="withStateCode">' + stateCode + '		</div>' + '		<div class="col-md-8">' + city + '		</div>' + '</div>';
  var blockStateCityIBGE = '<div class="row">' + '		<div class="{{withStateCode ? \'col-md-2\' : \'col-md-4\'}}">' + state + '		</div>' + '		<div class="col-md-2" ng-show="withStateCode">' + stateCode + '		</div>' + '		<div class="col-md-4">' + city + '		</div>' + '		<div class="col-md-4">' + codIBGE + '		</div>' + '</div>';
  var blockLatLng = useGumgaLayout() ? '\n      <div class="col-md-6">\n       <div class="form-group" style="margin-top: -24px;">\n          <label for="Latitude{{::id}}" style="font-size: 14px;color: #999;font-weight: normal;pointer-events: none;">{{getTranslateByKey(\'coordinates\')}}</label>\n       <div class="input-group">\n       <div class="input-group-btn" uib-tooltip="Visualizar mapa">\n         <button type="button" class="btn btn-default btn-block" ng-disabled="!value.localization" ng-click="openMaps(value)" target="_blank"><i class="glyphicon glyphicon-map-marker"></i></button>\n       </div>\n       <div class="input-group-btn" style="width:calc(50% - 24px)">\n         <input style="border-left: 0px; border-right: 0px;" type="text" ng-model="value.latitude" class="form-control" id="Latitude{{::id}}"/>\n       </div>\n       <input style="" type="text" ng-model="value.longitude" class="form-control" id="Longitude{{::id}}"/>\n       <div class="input-group-btn">\n          <button type="button" uib-tooltip="Buscar Coordenadas" class="btn btn-default btn-block" ng-click="searchCoords(value)"><i class="glyphicon glyphicon-globe"></i></button>\n       </div>\n     </div></div>\n    ' : '\n    <div class="col-md-6">\n     <div class="form-group">\n        <label for="Latitude{{::id}}">{{getTranslateByKey(\'coordinates\')}}</label>\n     <div class="input-group">\n     <div class="input-group-btn" uib-tooltip="Visualizar mapa">\n       <button type="button" class="btn btn-default btn-block" ng-disabled="!value.localization" ng-click="openMaps(value)" target="_blank"><i class="glyphicon glyphicon-map-marker"></i></button>\n     </div>\n     <div class="input-group-btn" style="width:calc(50% - 24px)">\n       <input style="border-left: 0px; border-right: 0px;" type="text" ng-model="value.latitude" class="form-control" id="Latitude{{::id}}"/>\n     </div>\n     <input style="" type="text" ng-model="value.longitude" class="form-control" id="Longitude{{::id}}"/>\n     <div class="input-group-btn">\n        <button type="button" uib-tooltip="Buscar Coordenadas" class="btn btn-default btn-block" ng-click="searchCoords(value)"><i class="glyphicon glyphicon-globe"></i></button>\n     </div>\n    </div></div>\n    ';

  var templateEnd = '						</accordion-group>' + '				</accordion>' + '		</div>' + '</div>';
  return {
    restrict: 'E',
    scope: {
      value: '=',
      onSearchCepStart: '&?',
      onSearchCepSuccess: '&?',
      onSearchCepError: '&?',
      apiSearchCep: '@?',
      coordsByCep: '@?',
      coordsByPremisse: '@?',
      coordsByNumber: '@?'
    },
    //template: template.join('\n'),
    link: function link(scope, elm, attrs, ctrl) {

      scope.cities = [];

      scope.getTranslateByKey = function (key) {
        return $gumgaAddress.getTranslation()[key];
      };

      function isEmpty(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }return true;
      }
      function forceAttr2Bool(attr) {
        return attr == undefined || attr == 'true' ? true : false;
      }

      function forceAttr2BoolCoords(attr) {
        return attr == 'true' ? true : false;
      }

      if (isEmpty(scope.value)) scope.value = GumgaAddressService.returnFormattedObject();

      attrs.countryCep = forceAttr2Bool(attrs.countryCep);
      attrs.street = forceAttr2Bool(attrs.street);
      attrs.streetNumber = forceAttr2Bool(attrs.streetNumber);
      attrs.complement = forceAttr2Bool(attrs.complement);
      attrs.neighborhood = forceAttr2Bool(attrs.neighborhood);
      attrs.stateCity = forceAttr2Bool(attrs.stateCity);
      attrs.stateCityIbge = forceAttr2Bool(attrs.stateCityIbge);
      attrs.latLng = forceAttr2Bool(attrs.latLng);
      attrs.maps = forceAttr2Bool(attrs.maps);
      attrs.coordsByCep = forceAttr2BoolCoords(attrs.coordsByCep);
      attrs.coordsByPremisse = forceAttr2BoolCoords(attrs.coordsByPremisse);
      attrs.coordsByNumber = forceAttr2BoolCoords(attrs.coordsByNumber);

      if (attrs.stateCode) scope.withStateCode = forceAttr2Bool(attrs.stateCode);

      scope.streetTypes = ['AV', 'AVENIDA', 'RUA', 'ROD.', 'BC', 'TRAVESSA', 'ALAMEDA', 'VIELA', 'CAMINHO', 'ESTRADA', 'PRAÇA', 'PASSAGEM', 'VILA', 'VIADUTO', 'RODOVIA', 'BECO', 'ACESSO', 'LARGO', 'VIA', 'CAMPO', 'MONTE', 'LADEIRA', 'CALÇADA', 'LOTEAMENTO', 'ROTATÓRIA', 'PASSEIO', 'NÚCLEO', 'PARQUE', 'ANTIGA', 'LAGO', 'BOULEVARD', 'ACAMPAMENTO', 'COMPLEXO', 'CONTORNO', 'BALÇO', 'CONJUNTO', 'MORRO', 'CONDOMÍNIO', 'TERMINAL', 'ESCADA', 'FAVELA', 'COLÔNIA', 'RECANTO', 'ALTO', 'ILHA', 'JARDIM', 'PASSARELA', 'PONTE', 'GALERIA', 'VALE', 'VEREDA', 'ENTRADA', 'BULEVAR', 'TRECHO', 'TÚNEL', 'ESTACIONAMENTO', 'QUADRA', 'BOSQUE', 'RETORNO', 'PÁTIO', 'PRAIA', 'RAMAL', 'BAIXA', 'CHÁCARA', 'SÍTIO', 'UNIDADE', 'RESIDENCIAL', 'FEIRA', 'ESTAÇÂO', 'RÓTULA', 'CANAL', 'FAZENDA', 'RETIRO', 'SETOR', 'RAMPA', 'ESPLANADA', 'CAMPUS', 'BLOCO', 'CENTRO', 'MÓDULO', 'ESTÁDIO', 'ESCADARIA', 'AEROPORTO', 'SERVIDÃO', 'FERROVIA', 'TREVO', 'PORTO', 'ATALHO', 'DISTRITO', 'CORREDOR', 'FONTE', 'CÓRREGO', 'CIRCULAR', 'CAIS', 'SUBIDA', 'LAGOA', 'PROLONGAMENTO', 'DESCIDA', 'PARALELA', 'ELEVADA', 'RETA', 'PONTA', 'VALA', 'BURACO', 'MARINA', 'FORTE', 'PARADA', 'LINHA', 'FRANCISCO', 'MARECHAL', 'ROD.', 'CICLOVIA'];

      if (!attrs.name) console.error("É necessário passar um parâmetro 'name' como identificador para GumgaAddress");
      if (!(!attrs.street || !attrs.streetNumber) || !(!attrs.stateCity || !attrs.stateCityIbge)) console.error("É necessário usar ao menos um dos elementos principais [street ou street-number e state-city ou state-city-ibge] para GumgaAddress");
      if (!attrs.countryCep && (attrs.onSearchCepStart || attrs.onSearchCepSuccess || attrs.onSearchCepError)) throw "É necessário uso do atributo country-cep para uso das funções [on-search-cep-start / on-search-cep-success / on-search-cep-error]";

      var template = '';

      template = template.concat(templateBegin);

      if (attrs.countryCep) template = template.concat(blockCountryCep);
      if (attrs.stateCity) template = template.concat(blockStateCity);
      if (attrs.stateCityIbge) template = template.concat(blockStateCityIBGE);
      if (attrs.neighborhood) template = template.concat(blockNeighbourhood);
      if (attrs.street) template = template.concat(blockStreet);
      if (attrs.streetNumber) template = template.concat(blockStreetNumber);
      if (attrs.complement) template = template.concat(blockComplement);
      if (attrs.latLng) template = template.concat(blockLatLng);
      // if (attrs.maps) template = template.concat(blockMaps);

      template = template.concat(templateEnd);

      elm.append($compile(template)(scope));

      scope.title = attrs.title || 'Endereço';
      scope.id = attrs.name;
      scope['loader' + scope.id] = false;
      scope['maps' + scope.id] = false;
      scope.factoryData = {
        ufs: GumgaAddressService.everyUf,
        logs: GumgaAddressService.everyLogradouro,
        availableCountries: GumgaAddressService.availableCountries
      };
      scope.value.country = scope.factoryData.availableCountries[0];

      var eventHandler = {
        searchCepStart: attrs.onSearchCepStart ? scope.onSearchCepStart : angular.noop,
        searchCepSuccess: attrs.onSearchCepSuccess ? scope.onSearchCepSuccess : angular.noop,
        searchCepError: attrs.onSearchCepError ? scope.onSearchCepError : angular.noop
      };

      scope.openModal = function () {
        var modal = $uibModal.open({
          template: _addressModalTemplate2.default,
          controller: _addressModalController2.default,
          size: 'lg',
          resolve: {
            factoryData: scope.factoryData,
            apiSearchCep: scope.apiSearchCep
          }
        });

        modal.result.then(function (cep) {
          if (cep) {
            scope.searchCep(cep.cep);
            scope.value.zipCode = cep.cep;
            scope.value.codigo_ibge = cep.codigoIbgeCidade;
          }
        });
      };

      scope.custom = function ($event, cep) {
        if (cep && $event.charCode == 13) {
          scope.searchCep(cep);
        }
      };

      scope.openMaps = function (value) {
        if (!value.number) {
          value.number = '';
        }
        var maps = 'https://www.google.com.br/maps/place/' + value.premisseType + ' ' + value.premisse + ',' + value.number + ',' + value.localization;
        window.open(maps);
      };

      scope.searchCoords = function (value, isSearchField) {

        if (value.latitude && value.longitude && isSearchField) return;

        var address = angular.copy(value);

        for (var key in address) {
          if (!address[key]) {
            address[key] = "";
          }
        }

        var formattedAddress = address.premisseType + " " + address.premisse + ", " + address.number + " " + address.neighbourhood + " - " + address.state + " " + address.country;

        GumgaAddressService.getGoogleCoords(formattedAddress, function (data) {
          if (data.status == 200) {
            data = { data: JSON.parse(data.data) };
            scope.value.latitude = data.data.results[0].geometry.location.lat;
            scope.value.longitude = data.data.results[0].geometry.location.lng;
          }
        });
      };

      scope.searchCoordsOnPremisse = function (value, isSearchField) {
        if (attrs.coordsByPremisse) scope.searchCoords(value, isSearchField);
      };

      scope.searchCoordsOnNumber = function (value, isSearchField) {
        if (attrs.coordsByNumber) scope.searchCoords(value, isSearchField);
      };

      scope.returnLink = function (value) {
        if (!value.number) {
          value.number = '';
        }
        return 'https://www.google.com.br/maps/place/' + value.premisseType + ' ' + value.premisse + ',' + value.number + ',' + value.localization;
      };

      scope.searchCep = function (cep) {
        scope['loader' + scope.id] = true;
        eventHandler.searchCepStart();
        GumgaAddressService.getCep(cep, scope.apiSearchCep).then(function (response) {
          eventHandler.searchCepSuccess({ $value: response.data });
          scope['loader' + scope.id] = false;
          if (parseInt(response.data.resultado) == 1) {
            scope.value.premisseType = response.data.tipo_logradouro ? response.data.tipo_logradouro : scope.value.premisseType;
            scope.value.premisse = response.data.logradouro ? response.data.logradouro : scope.value.premisse;
            scope.value.localization = response.data.cidade ? response.data.cidade : scope.value.localization;
            scope.value.neighbourhood = response.data.bairro ? response.data.bairro : scope.value.neighbourhood;
            scope.value.state = response.data.uf ? response.data.uf : scope.value.state;
            scope.value.stateCode = response.data.codigo_estado ? response.data.codigo_estado : scope.value.stateCode;
            if (attrs.coordsByCep) scope.searchCoords(scope.value);
            scope.value.formalCode = response.data.ibge_cod_cidade ? response.data.ibge_cod_cidade : scope.value.formalCode;
            scope.value.country = 'Brasil';
          } else {
            scope.notfound = true;
            document.getElementById('input' + scope.id).focus();
            $timeout(function () {
              document.getElementById('input' + scope.id).select();
            }, 10);
          }
        }, function (error) {
          return eventHandler.searchCepError({ $value: error });
        });
      };

      var stateCodes = {
        'AC': 12,
        'AL': 27,
        'AP': 16,
        'AM': 13,
        'BA': 29,
        'CE': 23,
        'DF': 53,
        'ES': 32,
        'GO': 52,
        'MA': 21,
        'MT': 51,
        'MS': 50,
        'MG': 31,
        'PA': 15,
        'PB': 25,
        'PR': 41,
        'PE': 26,
        'PI': 22,
        'RJ': 33,
        'RN': 24,
        'RS': 43,
        'RO': 11,
        'RR': 14,
        'SC': 42,
        'SP': 35,
        'SE': 28,
        'TO': 17
      };
      scope.setStateCode = function (uf) {
        scope.value.stateCode = stateCodes[uf];
      };

      if (scope.value.zipCode) {
        // scope.searchCep(scope.value.zipCode);
      }
    }
  };
}

angular.module('gumga.address', ['gumga.address.services']).directive('gumgaAddress', AddressDirective).provider('$gumgaAddress', _addressProvider2.default);

/***/ })
/******/ ]);