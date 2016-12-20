(function()
{
  'use strict';

  angular.module('CategoryList')
  .component('catList', {
    templateUrl: 'templates/categories/categoryitem.template.html',
    bindings: {
      items: '<'
    }
  });
})();
