// Ionic Starter App

var googleAnalyticsIdApp = "XX-XXXXXXX-X";

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('appetite', ['ionic', 'demo', 'authentication', 'appetite.controllers', 'appetite.services'])

.run(function($ionicPlatform, $window, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    /*gaPlugin = $window.plugins.gaPlugin;
    gaPlugin.init(function(){}, function(){console.log("Error")}, googleAnalyticsIdApp, 10);
    $rootScope.gaPlugIn = gaPlugin;

      //App it s not a page we need to track. We just need to initize and set the rootscpe variable.
      if($rootScope.gaPlugIn === undefined)
      {
          console.log("App: $rootScope.gaPlugIn === undefined ");
      }    */

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('authentication',{
          url:'/authentication',
          templateUrl: 'templates/authentication.html',
          controller:'AuthenticationCtrl'

      })

      .state('forgotPassword', {
          url: "templates/forgot-password",
          templateUrl: "forgot-password.html"
      })

      .state('addFoodExperience', {
          url: "templates/addFoodExperience",
          templateUrl: "addFoodExperience.html"
      })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

//    .state('tab.friends', {
//      url: '/friends',
//      views: {
//        'tab-friends': {
//          templateUrl: 'templates/tab-friends.html',
//          controller: 'FriendsCtrl'
//        }
//      }
//    })

    .state('tab.addFoodExperience', {
        url: '/addFoodExperience',
        views: {
            'addFoodExperience': {
                templateUrl: 'templates/addFoodExperience.html',
                controller: 'AddFoodExperienceCtrl'
            }
        }
    })

    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('tab/dash');

  loadParse();

});

function loadParse()
{
    var PARSE_APP_ID = "RCREiObXuaqyM2kg5RHkJqmObD21AL52l0uleGA1";
    var PARSE_JS_ID = "J6oVk4gyfM1JY92GhoVnY7ROlcd8CDUXkrCEHlri";


    Parse.initialize(PARSE_APP_ID, PARSE_JS_ID);
}

