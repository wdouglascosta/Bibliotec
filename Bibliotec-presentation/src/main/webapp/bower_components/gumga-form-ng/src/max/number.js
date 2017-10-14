(function(){
	'use strict';

	MaxNumber.$inject = [];

	function MaxNumber() {
		return {
			restrict: 'A',
			require: ['ngModel','?^gumgaForm'],
			link: function (scope, elm, attrs, controllers) {
				if (attrs.type != 'number') throw 'Esta diretiva suporta apenas inputs do tipo number';
				if (!attrs.gumgaMaxNumber) throw "O valor da diretiva gumga-max-number não foi informado.";

				let ngModelController 	= controllers[0],
						gumgaFormController	=	controllers[1],
						error								=	'maxnumber',
						name								=	attrs.name,
						field      = attrs.field,
						limitValue					= parseInt(attrs.gumgaMaxNumber);

				elm.attr('max', limitValue);

				function validateMaxNumber(inputValue) {
					if(inputValue){
						let isValid = parseFloat(inputValue) <= limitValue;
						ngModelController.$setValidity(error, isValid);
						gumgaFormController.changeStateOfInput(name, error, isValid, limitValue, field);
					}
					return inputValue;
				}

				ngModelController.$parsers.unshift(validateMaxNumber);
				ngModelController.$formatters.push(validateMaxNumber);

				attrs.$observe('gumgaMaxNumber', x => validateMaxNumber(ngModelController.$viewValue));

			}
		}
	}
	angular.module('gumga.form.max.number',[])
	.directive('gumgaMaxNumber',MaxNumber);
})();
