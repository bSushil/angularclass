(function(){
  'use strict';

  angular.module('CategoryList')
  .service('CategoryListService', CategoryListService)
  .constant('ApiPath', 'https://davids-restaurant.herokuapp.com');

  CategoryListService.$inject = ['$http', 'ApiPath'];

  function CategoryListService($http, ApiPath)
  {
    var catService = this;
    //var catList = [];
    catService.getCategories = function()
    {
      var promise = $http({
        method:'GET',
        url:(ApiPath + '/categories.json')
      });

      return promise;
    };

    catService.getCategoryItems = function(catID)
    {
      var promise = $http({
        method:'GET',
        url:(ApiPath + '/menu_items.json?category='+catID),
        data:{category:catID}
      });

      return promise;
    }
  }
})();
