(function(){
  'use strict';

  angular.module('public')
  .component('menuItem', {
    templateUrl:'templates/menu/menuitem.template.html',
    controller:MenuItemController,
    bindings:{
      item:'<',
    }
  });

  MenuItemController.$inject = ['ApiBase'];

  function MenuItemController(ApiBase)
  {
    var $ctrl = this;
    $ctrl.basePath = ApiBase;
  }
})();
