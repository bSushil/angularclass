(function()
{
  'use strict';

  angular.module('CategoryList')
  .component('menuList', {
    templateUrl: 'templates/categories/menuitem.template.html',
    bindings: {
      items: '<'
    }
  });
})();
