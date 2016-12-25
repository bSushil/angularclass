(function(){
  'use strict';

  angular.module('public')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['menuItems'];

  function MenuItemsController(menuItems, ApiBase)
  {
    var $ctrl = this;
    $ctrl.menuItems = menuItems.menu_items;
    $ctrl.category = menuItems.category;
  }
})();
