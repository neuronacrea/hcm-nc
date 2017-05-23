// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var App = angular.module('starter',
  ['ionic', 'ngLoginAndRegister', 'ngCheckBox', 'ngImageGallery',
  'ngLeftMenu', 'ngShapeImageView', 'ngSearch', 'ngParallax', 'ngListView','ngSplashScreen', 'ngWizard', 'ngSpinner'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$stateProvider

.state('leftMenu', {
   url: '/leftMenu',
   cache: false,
   templateUrl: 'templates/leftMenu.html',
   controller: 'AppCtrl as appCtrl'
})
.state('login', {
    url: '/login',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/login.html'
        }
    },
    controller: 'loginCtrl'
})

.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl as appCtrl'
})

// have this on mind for documentation
.state('app.imageGallery', {
    url: '/imageGallery/:id',
    views: {
        'indexContent': {
            templateUrl: 'module/imageGallery/index.html'
        }
    }
})
.state('app.profile', {
    url: '/profile',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/index.html',
            controller: 'ProfileController'
        }
    }
})
.state('app.salary', {
    url: '/salary/:anio/:mes',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/salary.html'
        }
    }
})
.state('app.vacations', {
    url: '/vacations',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/vacations.html'
        }
    }
})
.state('app.news', {
    url: '/news',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/news.html'
        }
    }
})
.state('app.absenteeism', {
    url: '/absenteeism',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/absenteeism.html'
        }
    }
})
.state('app.certificates', {
    url: '/certificates',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/certificates.html'
        }
    }
})
.state('app.queries', {
    url: '/queries',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/queries.html'
        }
    }
})
.state('app.viatics', {
    url: '/viatics',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/viatics.html'
        }
    }
})
.state('app.calendar1', {
    url: '/calendar1',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/calendar1.html'
        }
    }
})
.state('app.calendar2', {
    url: '/calendar2',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/calendar2.html'
        }
    }
})
.state('app.calendar3', {
    url: '/calendar3',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/calendar3.html'
        }
    }
})
.state('app.login', {
    url: '/login',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/login.html'
        }
    }
})
.state('app.recover', {
    url: '/recover',
    views: {
        'indexContent': {
            templateUrl: 'module/profile/recover.html'
        }
    }
})

.state('app.content', {
    url: '/content',
    views: {
        'indexContent': {
            templateUrl: 'templates/content.html'
        }
    },
    controller: 'AppCtrl as appCtrl'
})


.state('app.item', {
    url: '/:item',
    cache: false,
    views: {
        'indexContent': {
            templateUrl: 'templates/items.html'
        }
    },
    controller: 'AppCtrl as appCtrl'
})

.state('app.subitem', {
    url: '/:item/:subitem',
    cache: false,
    views: {
        'indexContent': {
            templateUrl: 'templates/items.html'
        }
      },
      controller: 'AppCtrl as appCtrl'
});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/');
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      //
      if (typeof analytics !== "undefined") {
        analytics.startTrackerWithId("UA-35500609-11");
      }

  });
});
