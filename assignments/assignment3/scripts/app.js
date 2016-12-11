(function()
{
  'use strict';
  angular.module('ngFilterApp', [])
  .controller('SearchFilterController', SearchFilterController)
  .service('SearchMenuService', SearchMenuService)
  .constant('ApiPath', 'http://davids-restaurant.herokuapp.com')
  .directive('foundItemsList', FoundItemsListDirective)
  ;

  function FoundItemsListDirective()
  {
    return {
      restrict:'E',
      templateUrl:'templates/found-item.html',
      scope:{
        items:'<',
        title:'@title',
        onRemove:'&'
      },
      controller:FoundItemsListDirectiveController,
      controllerAs:'list',
      bindToController:true,
      link: FoundItemsListDirectiveLink,
      transclude:true
    };
  }

  function FoundItemsListDirectiveLink(scope, element, attrs, controller)
  {
    scope.$watch('list.checkItems()', function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if(newValue == 0 && oldValue > 0)
      {
        showError();
      }
      else {
        removeError();
      }
    });

    scope.$watch('list.checkSearchString()', function (newValue, oldValue) {
      if(newValue === true)
      {
        showError();
      }
      else {
        removeError();
      }
    });

    function showError()
    {
      var divError = element.find('div.error');
      divError.fadeIn(3000);
    }

    function removeError()
    {
      var divError = element.find('div.error');
      divError.fadeOut(3000);
    }
  }

  function FoundItemsListDirectiveController()
  {
    var theList = this;
    theList.checkItems = function()
    {
      return theList.items.length;
    }

    theList.checkSearchString = function()
    {
      if(theList.title.trim() === '')
        return true;
      return false;
    }
  }

  SearchFilterController.$inject = ['SearchMenuService'];
  function SearchFilterController(SearchMenuService)
  {
    var searchForm = this;
    searchForm.foundItems = [];
    searchForm.error = 'No Items Found';

    searchForm.search = function()
    {
      var searchKey = searchForm.searchKey;
      searchForm.title = searchForm.searchKey;

      if(searchKey == undefined) return false;

      searchForm.foundItems = [];
      var promise = SearchMenuService.filterMatchedItems(searchKey);
      promise.then(function(responseData)
      {
        var theResponse = responseData.data;
        for(var i = 0; i < responseData.length; i++)
        {
          searchForm.foundItems.push(responseData[i]);
        }
      });

      searchForm.removeItem = function(index)
      {
        searchForm.foundItems.splice(index, 1);
      }

    };
  }

  SearchMenuService.$inject = ['$http', 'ApiPath'];
  function SearchMenuService($http, ApiPath)
  {
    var theService = this;
    theService.foundItems = [];

    theService.loadMenuItems = function()
    {
      return $http({
        method: 'GET',
        url:(ApiPath + '/menu_items.json'),
      });
    };

    theService.filterMatchedItems = function(searchKey)
    {
      var promise = $http({
        method:'GET',
        url:(ApiPath + '/menu_items.json')
      });

      var thePromise = promise.then(function(responseData)
      {
        var matchedItems = [];
        var theResponse = responseData.data.menu_items;
          for(var i = 0; i < theResponse.length; i++)
          {
            var currentRecord = theResponse[i];
            var menuItemDescription = currentRecord.description;
            if(menuItemDescription.search(searchKey) > -1)
            {
              var itemData = {
                id : currentRecord.id,
                short_name: currentRecord.short_name,
                name: currentRecord.name,
                description: currentRecord.description
              };
              matchedItems.push(itemData);
            }
          }
          return matchedItems;
      });
      return thePromise;
    }
  }
})();
