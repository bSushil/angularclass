(function () {
  'use strict';

  angular.module('CategoryList')
  .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['CategoryListService', 'items'];
  function CategoryListController(CategoryListService, items)
  {
    var catList = this;
    catList.items = [];

    catList.items = items.data;    
  }
})();
