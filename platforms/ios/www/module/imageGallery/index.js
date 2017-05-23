angular.module('ngImageGallery', [])

.constant('ngImageGalleryPath', 'module/imageGallery/themes')

.controller('imageGalleryController', ['$scope', '$location', '$state', 'ngImageGalleryPath', function($scope, $location, $state, path) {
    var _this = this;
    _this.subitems = null;

    if ($state.params.id) {
        for (var i in _this.data) {
          if (_this.data.hasOwnProperty(i)) {
            if (_this.data[i].id == $state.params.id) {
              _this.subitems = _this.data[i].items;
              break;
            }
          }
        }
    }

    _this.onClick = function(item, type, event) {
        if (event) {
            event.stopPropagation();
        }

        if (type === 'open') {
            for (var i in _this.data) {
                if (_this.data.hasOwnProperty(i)) {
                  if (_this.data[i].id == item.id) {
                    _this.data.subTitle = _this.data[i].title;
                    break;
                  }
                }
            }
            $location.path('app/imageGallery/' + item.id);
        } else {
            if (_this.events && _this.events[type]) {
                _this.events[type](item);
            }
        }
    };
    _this.contentUrl = function(type, sub) {
        if (_this.theme) {
            var basePath = path + '/' + _this.theme + '/';

            if (type === "html") {
                return (sub === true) ? basePath + 'sub-items.html' : basePath + 'index.html';
            } else if (type === "css") {
                return basePath + 'style.css';
            }
        }
    };
}])

.directive('imageGallery', [function() {
    return {
        restrict: 'E',
        scope: {
            theme : '=theme',
            data  : '=data',
            events: '=events'
        },
        bindToController : true,
        controllerAs: "imageGalleryController",
        controller: "imageGalleryController",
        template: '<link data-ng-href="{{imageGalleryController.contentUrl(\'css\')}}" rel="stylesheet"/><div ng-include="imageGalleryController.contentUrl(\'html\')"></div>'
      };
}])

.directive('subImageGallery', [function() {
    return {
        restrict: 'E',
        scope: {
            theme : '=theme',
            data  : '=data'
        },
        bindToController : true,
        controllerAs: "imageGalleryController",
        controller: "imageGalleryController",
        template: '<link data-ng-href="{{imageGalleryController.contentUrl(\'css\')}}" rel="stylesheet"/><div ng-include="imageGalleryController.contentUrl(\'html\', true)"></div>'
      };
}]);
