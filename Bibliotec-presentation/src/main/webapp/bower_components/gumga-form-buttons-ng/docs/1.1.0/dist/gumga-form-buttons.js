(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  FormButtons.$inject = ['$state', '$stateParams', '$uibModal', '$interpolate', '$compile'];

  function FormButtons($state, $stateParams, $uibModal, $interpolate, $compile) {

    controller.$inject = ['$scope', '$element', '$attrs'];

    function controller($scope, $element, $attrs) {
      var vm = this;

      if (!$attrs.submit) throw 'É necessário passar uma função para submissão de formulário <gumga-form-buttons submit="foo()"></gumga-form-buttons>';

      var templateBlockBegin = '\n        <div class="row">\n          <div class="col-md-12">';
      var templateInline = '\n        <div ng-class="vm.getPosition()">\n\n         <div class="checkbox" style="display: inline;" for="gumgakeep" ng-if="vm.continue">\n           <label>\n             <input type="checkbox" class="gmd" data-ng-model="vm.shouldContinue"  id="gumgakeep" name="gumgakeep" ng-true-value="true" ng-false-value="false">\n             <span class="box"></span>\n             {{::vm.keepInsertingText}}\n           </label>\n         </div>\n          <button type="button" ng-click="vm.submit()" ng-disabled="!vm.valid" class="btn btn-primary form-buttons-margin {{vm.class}} {{vm.classSave}}" >\n            {{::vm.saveText}}\n          </button>\n          <button type="button" ng-click="vm.returnClicked()" class="btn btn-default form-buttons-margin {{vm.class}} {{vm.classCancel}}" ng-class="vm.reverseOrder ? \'pull-left\' : \'pull-right\'">\n          {{::vm.returnText}}\n          </button>\n        </div>';
      var templateBlockEnd = '\n        </div>\n      </div>\n            ';

      var modalTemplate = '\n        <div class="modal-body">\n          <h3>\n            <span class="glyphicon glyphicon-alert"></span>\n            Sair da tela e descartar altera\xE7\xF5es?\n          </h3>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" ng-click="ctrl.dismiss()">N\xE3o</button>\n          <button type="button" class="btn btn-primary" ng-click="ctrl.close()">Sim</button>\n        </div>\n\t\t\t';

      vm.modelInit = angular.copy(vm.model);
      vm.continue = $scope.$eval(vm.continue);
      vm.confirmDirty = $scope.$eval(vm.confirmDirty);
      vm.valid = $attrs.valid ? vm.valid : true;
      vm.saveText = $attrs.saveText ? $interpolate($attrs.saveText)($scope) : 'Salvar';
      vm.returnText = $attrs.returnText ? $interpolate($attrs.returnText)($scope) : 'Cancelar';
      vm.keepInsertingText = $attrs.keepInsertingText ? $interpolate($attrs.keepInsertingText)($scope) : 'Continuar Inserindo';
      vm.stateToReturn = $attrs.back || ($state.current !== '' ? $state.current.name.split('.')[0].concat('.list') : null);

      vm.getPosition = getPosition;
      vm.returnClicked = returnClicked;

      function getPosition() {
        return $attrs.position == 'left' ? 'pull-left' : 'pull-right';
      }

      function returnClicked() {
        if (vm.confirmDirty && !angular.equals(vm.modelInit, vm.model)) {
          var ModalController = function ModalController($uibModalInstance) {
            var ctrl = this;

            ctrl.dismiss = dismiss;
            ctrl.close = close;

            function close() {
              $uibModalInstance.close(true);
            }

            function dismiss() {
              $uibModalInstance.close(false);
            }
          };

          ModalController.$inject = ['$uibModalInstance'];

          $uibModal.open({
            template: modalTemplate,
            animate: false,
            size: 'md',
            controller: ModalController,
            controllerAs: 'ctrl'
          }).result.then(function (data) {
            if (data) $state.go(vm.stateToReturn);
          });
        } else {
          $state.go(vm.stateToReturn);
        }
      }

      $attrs.$observe('continue', function (value) {
        return vm.continue = $scope.$eval(vm.continue);
      });
      $attrs.$observe('confirmDirty', function (value) {
        return vm.confirmDirty = $scope.$eval(vm.confirmDirty);
      });
      $scope.$on('data-sent', function (value) {
        if (!vm.shouldContinue) $state.go(vm.stateToReturn);
      });

      var template = '';
      if ($attrs.hasOwnProperty('inline')) {
        template = templateInline;
      } else {
        template = templateBlockBegin + templateInline + templateBlockEnd;
      }
      $element.append($compile(template)($scope));
    }

    return {
      restrict: 'E',
      scope: {
        classSave: '@?',
        classCancel: '@?',
        class: '@?',
        submit: '&?',
        valid: '=?',
        model: '=?',
        continue: '@?',
        confirmDirty: '@?',
        reverseOrder: '=?'
      },
      controller: controller,
      bindToController: true,
      controllerAs: 'vm',
      // template,
      require: 'form'

    };
  }

  angular.module('gumga.formbuttons', ['ui.router', 'ui.bootstrap']).directive('gumgaFormButtons', FormButtons);
})();

},{}]},{},[1]);
