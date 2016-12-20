(function ()
{
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',
    {
      url:'/',
      templateUrl:'templates/home/main.template.html'
    })
    .state('categories',
    {
      url:'/category-list',
      templateUrl:'templates/categories/category.template.html',
      controller:'CategoryListController as catList',
      resolve:{
        items:['CategoryListService', function(CategoryListService)
        {
          return CategoryListService.getCategories();
        }]
      }
    }
    )
    .state('categoryItems',
    {
      url:'/category-items/{catID}',
      templateUrl:'templates/categories/categorymenu.template.html',
      controller:'CategoryItemsController as menuItems',
      resolve:{
        items:['$stateParams', 'CategoryListService', function($stateParams, CategoryListService)
        {
          return CategoryListService.getCategoryItems($stateParams.catID);
        }]
      }
    });
  }
})();
