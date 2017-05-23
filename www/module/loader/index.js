angular.module('ngLoader', [])

.constant('ngLoaderPath', 'module/loader/themes/')

.controller('loaderController', ['$scope', 'ngLoaderPath', function($scope, path) {
  var _this = this;
  _this.contentUrl = function(type) {
      if (_this.theme) {
          if (type === "html") {
              return path + "/" + _this.theme + '/index.html';
          } else if (type === "css") {
              return path + "/" + _this.theme + "/style.css";
          }
      }
  };
}])

.factory('LoaderService', function($rootScope, $ionicLoading) {

  // Trigger the loading indicator
  return {
        show : function() { //code from the ionic framework doc

            // Show the loading overlay and text
            $rootScope.loading = $ionicLoading.show({

              // The text to display in the loading indicator
              content: 'Loading',

              // The animation to use
              animation: 'fade-in',

              // Will a dark overlay or backdrop cover the entire view
              showBackdrop: true,

              // The maximum width of the loading indicator
              // Text will be wrapped if longer than maxWidth
              maxWidth: 200,

              // The delay in showing the indicator
              showDelay: 500
            });
        },
        hide : function(){
            $rootScope.loading.hide();
        }
    }
});

.directive('loader', [function(){
    return {
        restrict: 'E',
        scope: {
            theme  : '=theme',
            data   : '=data',
            events : '=events'
        },
        bindToController : true,
        controllerAs: "loaderController",
        controller: "loaderController",
        template: '<link data-ng-href="{{loaderController.contentUrl(\'css\')}}" rel="stylesheet"/><div ng-include="loaderController.contentUrl(\'html\')"></div>'
    };
}]);