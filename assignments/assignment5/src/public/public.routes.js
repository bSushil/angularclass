(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    }).
    state('public.menu', {
      url:'/menu',
      templateUrl:'templates/menu/menu.template.html',
      controller: 'MenuController as menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function(MenuService)
        {
            return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url:'/menu-items/{category}',
      templateUrl:'templates/menu/menu-items.template.html',
      controller:'MenuItemsController as menuItemsCtrl',
      resolve:{
        menuItems:['$stateParams', 'MenuService', function($stateParams, MenuService)
        {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    }).
    state('public.signup', {
      url:'/signup',
      templateUrl:'templates/user/signup.template.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    })
    .state('public.myinfo', {
      url:'/my-info',
      templateUrl:'templates/user/my-info.template.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfo',
      resolve:{
        myInfo:['UserService', function(UserService)
        {
          return UserService.getUserDetail();
        }]
      }
    });
}
})();
