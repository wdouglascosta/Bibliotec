describe('Gumga.core:Required', () => {

  let compile, scope, filter, controller;

  beforeEach(module('gumga.form'));

  beforeEach(inject(($compile, $rootScope, $filter) => {
    scope = $rootScope;
    filter = $filter;

    let template = `
      <form name="Teste" gumga-form>
      <input type="text" name="nome" ng-model="pessoa.nome" gumga-required>
      </form>`;

    let elm = angular.element(template);
    $compile(elm)(scope);
    controller = elm.controller('gumgaForm')
    scope.$digest();
  }));

  it('should valid', function () {
    spyOn(controller, 'changeStateOfInput');
    scope.Teste.nome.$setViewValue('texto');
    expect(scope.pessoa.nome).toEqual('texto');
    expect(controller.changeStateOfInput).toHaveBeenCalledWith('nome', 'required', true, null, undefined);
    expect(scope.Teste.nome.$valid).toBe(true);
    expect(scope.Teste.nome.$invalid).toBe(false);

  });
  it('should invalid', function () {
    spyOn(controller, 'changeStateOfInput');
    scope.Teste.nome.$setViewValue('');
    expect(scope.pessoa.nome).toEqual('');
    expect(controller.changeStateOfInput).toHaveBeenCalledWith('nome', 'required', false, null, undefined);
    expect(scope.Teste.nome.$valid).toBe(false);
    expect(scope.Teste.nome.$invalid).toBe(true);
  });
});
