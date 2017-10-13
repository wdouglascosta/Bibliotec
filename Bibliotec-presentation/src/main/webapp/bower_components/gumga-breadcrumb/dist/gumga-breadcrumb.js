(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  Breadcrumb.$inject = ['$rootScope'];
  function Breadcrumb($rootScope) {
    var template = ['<ol class="breadcrumb">', '<li ng-repeat="bread in breadcrumbs" ><a ui-sref="{{::bread.state}}">{{::bread.state}}</a></li>', '</ol>'];
    return {
      restrict: 'E',
      template: template.join('\n'),
      replace: true,
      link: function link($scope, $elm, $attrs) {
        $scope.$on('breadChanged', function () {
          $scope.breadcrumbs = $rootScope.breadcrumbs.filter(function (e) {
            return e.state.split('.').length >= 2;
          });
        });
      }
    };
  }
  angular.module('gumga.breadcrumb', []).directive('gumgaBreadcrumb', Breadcrumb);
})();

},{}]},{},[1]);
