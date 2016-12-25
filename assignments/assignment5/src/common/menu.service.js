(function(){
  'use strict';

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiBase', '$q'];

  function MenuService($http, ApiBase, $q)
  {
    var theService = this;

    theService.getCategories = function()
    {
      return $http.get(ApiBase+'categories.json')
      .then(function(response)
      {
        return response.data;
      });
    };

    theService.getMenuItems = function(category)
    {
      var config = {};
      if(category)
        config.params = {'category':category};
      return $http.get(ApiBase+'menu_items.json', config)
      .then(function(response){
        return response.data;
      });
    };

    theService.getMenuItem = function(shortCode)
    {
      var successCallBack = function(response)
      {
        return response.data;
      }

      return $http.get(ApiBase+'menu_items/'+shortCode+'.json')
      .then(successCallBack);
    }
  }
})();
