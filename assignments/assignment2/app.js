(function()
{
  'use strict';
  angular.module('ngShoppingList', [])
  .controller('itemsToBuyController', itemsToBuyController)
  .controller('itemsBoughtController', itemsBoughtController)
  .provider('shoppingList', shoppingListProvider);


  itemsToBuyController.$inject = ['shoppingList'];
  function itemsToBuyController(shoppingList)
  {
    var list = this;
    list.items = [];
    list.items.push({itemName: 'Momo', itemQuantity:2});
    list.items.push({itemName: 'Juice', itemQuantity:5});
    list.items.push({itemName: 'Biscuits', itemQuantity:10});
    list.items.push({itemName: 'Soap', itemQuantity:3});
    list.items.push({itemName: 'Laddoo', itemQuantity:20});

    list.setBought = function(index)
    {
      var theItem = list.items[index];
      shoppingList.addItem(theItem.itemName, theItem.itemQuantity);
      list.items.splice(index, 1);
    };
  };

  itemsBoughtController.$inject = ['shoppingList'];
  function itemsBoughtController(shoppingList)
  {
    var list = this;
    list.items = shoppingList.getItems();
  }

  function shoppingListService()
  {
    var service = this;
    var items = [];

    service.addItem = function(itemName, itemQuantity)
    {
      var theItem = {};
      theItem.itemName = itemName;
      theItem.itemQuantity = itemQuantity;
      items.push(theItem);
    };

    service.getItems = function()
    {

      return items;
    };
  }

  function shoppingListProvider()
  {
    var theProvider = this;

    theProvider.$get = function()
    {
      return new shoppingListService();
    }
  }
})();
