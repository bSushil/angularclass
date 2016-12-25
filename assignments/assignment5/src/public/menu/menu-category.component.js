(function()
{
  'use strict';

  angular.module('public')
  .component('menuCategory', {
    templateUrl:'templates/menu/menu-category.template.html',
    bindings: {
        category:'<'
    }
  });
})();
