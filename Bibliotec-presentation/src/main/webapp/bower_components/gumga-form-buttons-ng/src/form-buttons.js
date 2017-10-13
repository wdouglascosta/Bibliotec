(function () {
  'use strict';
  FormButtons.$inject = ['$state', '$stateParams', '$uibModal', '$interpolate', '$compile'];

  function FormButtons($state, $stateParams, $uibModal, $interpolate, $compile) {

    controller.$inject = ['$scope', '$element', '$attrs'];

    function controller($scope, $element, $attrs) {
      let vm = this;

      if (!$attrs.submit) throw 'É necessário passar uma função para submissão de formulário <gumga-form-buttons submit="foo()"></gumga-form-buttons>'

      const templateBlockBegin = `
        <div class="row">
          <div class="col-md-12">`
      const templateInline = `
        <div ng-class="vm.getPosition()">

         <div class="checkbox" style="display: inline;" for="gumgakeep" ng-if="vm.continue">
           <label>
             <input type="checkbox" class="gmd" data-ng-model="vm.shouldContinue"  id="gumgakeep" name="gumgakeep" ng-true-value="true" ng-false-value="false">
             <span class="box"></span>
             {{::vm.keepInsertingText}}
           </label>
         </div>
          <button type="button" ng-click="vm.submit()" ng-disabled="!vm.valid" class="btn btn-primary form-buttons-margin {{vm.class}} {{vm.classSave}}" >
            {{::vm.saveText}}
          </button>
          <button type="button" ng-click="vm.returnClicked()" class="btn btn-default form-buttons-margin {{vm.class}} {{vm.classCancel}}" ng-class="vm.reverseOrder ? 'pull-left' : 'pull-right'">
          {{::vm.returnText}}
          </button>
        </div>`
      const templateBlockEnd = `
        </div>
      </div>
            `

      const modalTemplate = `
        <div class="modal-body">
          <h3>
            <span class="glyphicon glyphicon-alert"></span>
            Sair da tela e descartar alterações?
          </h3>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" ng-click="ctrl.dismiss()">Não</button>
          <button type="button" class="btn btn-primary" ng-click="ctrl.close()">Sim</button>
        </div>
			`;

      vm.modelInit = angular.copy(vm.model);
      vm.continue = $scope.$eval(vm.continue);
      vm.confirmDirty = $scope.$eval(vm.confirmDirty);
      vm.valid = $attrs.valid ? vm.valid : true;
      vm.saveText = ($attrs.saveText) ? $interpolate($attrs.saveText)($scope) : 'Salvar';
      vm.returnText = ($attrs.returnText) ? $interpolate($attrs.returnText)($scope) : 'Cancelar';
      vm.keepInsertingText = ($attrs.keepInsertingText) ? $interpolate($attrs.keepInsertingText)($scope) : 'Continuar Inserindo';
      vm.stateToReturn = $attrs.back || ($state.current !== '' ? $state.current.name.split('.')[0].concat('.list') : null);

      vm.getPosition = getPosition;
      vm.returnClicked = returnClicked;

      function getPosition() {
        return ($attrs.position == 'left') ? 'pull-left' : 'pull-right';
      }

      function returnClicked() {
        if (vm.confirmDirty && !angular.equals(vm.modelInit, vm.model)) {

          ModalController.$inject = ['$uibModalInstance'];

          function ModalController($uibModalInstance) {
            let ctrl = this;

            ctrl.dismiss = dismiss;
            ctrl.close = close;

            function close() {
              $uibModalInstance.close(true);
            }

            function dismiss() {
              $uibModalInstance.close(false);
            }
          }

          $uibModal.open({
            template: modalTemplate,
            animate: false,
            size: 'md',
            controller: ModalController,
            controllerAs: 'ctrl'
          })
            .result.then((data) => {
              if (data) $state.go(vm.stateToReturn);
            })
        } else {
          $state.go(vm.stateToReturn);
        }
      }

      $attrs.$observe('continue', value => (vm.continue = $scope.$eval(vm.continue)));
      $attrs.$observe('confirmDirty', value => (vm.confirmDirty = $scope.$eval(vm.confirmDirty)));
      $scope.$on('data-sent', value => {
        if (!vm.shouldContinue) $state.go(vm.stateToReturn);
      });

      let template = ``;
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
      controller,
      bindToController: true,
      controllerAs: 'vm',
      // template,
      require: 'form'


    }
  }

  angular.module('gumga.formbuttons', ['ui.router', 'ui.bootstrap'])
    .directive('gumgaFormButtons', FormButtons);

})();
