(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  Counter.$inject = ['$compile', '$timeout'];
  function Counter($compile, $timeout) {
    return {
      restrict: 'A',
      require: ['^form', 'ngModel'],
      link: function link(scope, elem, attrs) {
        scope._max = parseInt(attrs.gumgaMaxLengthText);

        if (!isNaN(parseInt(attrs.gumgaCounter))) {
          scope._max = parseInt(attrs.gumgaCounter);
        }

        var template = '<p class="{{_max <= teste.length ? \'text-danger\' : \'text-muted\'}}">{{_max <= ' + attrs.ngModel + '.length ? "Você atingiu o limite de ' + scope._max + ' caracteres" : _max - ' + attrs.ngModel + '.length + " caracteres restantes" }}</p>';
        elem.after($compile(template)(scope));

        angular.element(elem).keyup(function ($event) {
          if ($event.target.value && $event.target.value.length > scope._max) {
            $event.target.value = $event.target.value.substring(0, scope._max);
            $timeout(function () {
              return scope.ngModel = $event.target.value;
            }, 10);
          }
        });
      }
    };
  }
  angular.module('gumga.counter', []).directive('gumgaCounter', Counter);
})();

},{}]},{},[1]);
