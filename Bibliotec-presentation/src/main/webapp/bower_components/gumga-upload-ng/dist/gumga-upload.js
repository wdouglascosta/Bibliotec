(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  Upload.$inject = ['$http', '$parse', '$timeout', '$compile'];
  function Upload($http, $parse, $timeout, $compile) {
    var templateBebin = '\n        <div class="full-width-without-padding" style="text-align: center;margin: 2px;">\n            <div ng-click="fireClick()" ng-show="flag" class="col-md-1" tooltip="{{::tooltipText}}" tooltip-placement="right">';

    var defaultAvatar = '\n\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ng-attr-width="{{imageWidth}}" ng-attr-height="{{imageHeight}}" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">\n            <path id="avatar" fill="#cccccc" d="M490.579,383.029c-14.152-22.086-61.763-35.824-108.835-55.453c-47.103-19.633-58.268-26.439-58.268-26.439\n                l-0.445-45.182c0,0,17.646-13.557,23.127-56.074c11.01,3.198,22.619-16.461,23.237-26.824c0.625-9.98-1.508-37.662-14.981-34.877\n                c2.754-20.845,4.741-39.586,3.764-49.505c-3.495-36.295-39.23-74.578-94.182-74.578c-54.95,0-90.7,38.283-94.193,74.578\n                c-0.978,9.919,1.019,28.661,3.758,49.505c-13.455-2.785-15.587,24.897-14.979,34.877c0.635,10.363,12.196,30.021,23.255,26.824\n                c5.462,42.517,23.122,56.074,23.122,56.074l-0.441,45.182c0,0-11.178,6.807-58.268,26.439\n                c-47.104,19.629-94.683,33.367-108.851,55.453c-12.7,19.777-8.882,114.875-8.882,114.875h470.946\n                C499.462,497.904,503.281,402.806,490.579,383.029z"/>\n        </svg>';

    var avatar = '\n        <img id="avatar" ng-src="{{avatar}}" width="128px" height="128px" style="text-align: center" >';

    var templateEnd = '\n            </div>\n            <img src="#" alt="Uploaded Image" ng-show="!flag" class="img-rounded"/>\n            <input type="file" name="upload" id="upload" ng-hide="true"/>\n            <div style="display: block;">\n                <button type="button" class="btn btn-link" ng-hide="flag" ng-click="deleteImage()"> Delete Image <span class="glyphicon glyphicon-trash"></span></button>\n            </div>\n        </div>';

    link.$inject = ['$scope', '$element', '$attrs'];

    function link($scope, $element, $attrs) {

      $scope.imageHeight = $scope.imageHeight || 128;
      $scope.imageWidth = $scope.imageWidth || 128;

      var model = $parse($attrs.attribute),
          modelSetter = model.assign,
          reader = new FileReader(),
          element = void 0,
          image = void 0;

      $timeout(function () {
        element = $element.find('input'), image = $element.find('img')[0];

        element.bind('change', function () {
          $scope.$apply(function () {
            var x = void 0;
            modelSetter($scope, element[0].files[0]);
            $scope.flag = false;
            reader.onloadend = function () {
              image.src = reader.result;

              image.width = $scope.imageWidth || 128;
              image.height = $scope.imageHeight || 128;
              var x = $attrs.attribute.split('.');
              $scope.uploadMethod({ image: $scope[x[0]][x[1]] }).then(function (val) {
                $scope.model.name = val.data;
              });
            };
            reader.readAsDataURL(element[0].files[0]);
          });
        });
      });

      $scope.fireClick = function () {
        $element.find('input')[0].click();
      };

      $scope.$watch('model', function () {
        if ($scope.model) {
          if ($scope.model.bytes) {
            $scope.flag = false;
            image.src = 'data:' + $scope.model.mimeType + ';base64,' + $scope.model.bytes;
            image.width = $scope.imageWidth || 128;
            image.height = $scope.imageHeight || 128;
          }
        } else {
          $scope.model = {};
        }
      });

      if (!$attrs.attribute) console.error('You must pass an attribute to GumgaUpload');

      $scope.flag = true;

      function scaleSize(maxW, maxH, currW, currH) {
        var ratio = currH / currW;
        if (currW >= maxW && ratio <= 1) {
          currW = maxW;
          currH = currW * ratio;
        } else if (currH >= maxH) {
          currH = maxH;
          currW = currH / ratio;
        }
        return [currW, currH];
      }

      $scope.deleteImage = function () {
        image.src = '';
        $scope.flag = true;

        // element[0].files = [];
        $scope.deleteMethod();
      };

      var template = '';
      template = template.concat(templateBebin);
      if ($scope.avatar) {
        template = template.concat(avatar);
      } else {
        template = template.concat(defaultAvatar);
      }
      template = template.concat(templateEnd);
      $element.append($compile(template)($scope));
    }
    return {
      restrict: 'AE',
      scope: {
        model: '=attribute',
        uploadMethod: '&',
        deleteMethod: '&',
        tooltipText: '@',
        avatar: '@',
        imageWidth: '@?',
        imageHeight: '@?'
      },
      link: link
    };
  }
  angular.module('gumga.upload', []).directive('gumgaUpload', Upload);
})();

},{}]},{},[1]);
