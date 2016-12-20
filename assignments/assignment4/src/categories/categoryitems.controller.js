(function(){
  'use strict';

  angular.module('CategoryList')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['CategoryListService', 'items'];
  function CategoryItemsController(CategoryListService, items)
  {
    var menuItems = this;
    menuItems.items = [];
    menuItems.items = items.data.menu_items;
  }
})();
