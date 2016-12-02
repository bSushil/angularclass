(function()
{
  'use strict';
  angular.module('stringCodeCalculator', [])
  .controller('stringCodeCalculatorController', stringCodeCalculatorController)
  .filter('loves', lovesFilter);

  stringCodeCalculatorController.$inject = ['$scope', 'lovesFilter'];

  function stringCodeCalculatorController($scope, lovesFilter)
  {
    $scope.inputString = '';
    $scope.message = '';
    $scope.color = '';

    $scope.checkItems = function()
    {
      var itemsLength = checkString($scope.inputString);

      if(itemsLength == 0)
      {
        $scope.message = 'Empty Plate! Please enter something first!';
        $scope.color = 'warning';
      }
      else if (itemsLength > 3) {
        $scope.message = 'Too much food! You will get fat';
        $scope.color = 'warning';
      }
      else {
        $scope.message = 'Enjoy your meal!';
        $scope.color = 'green';
      }
    };

    function checkString($string)
    {
      var itemsCount = 0;
      var strParts = $string.split(',');
      for(var i = 0; i < strParts.length; i++)
      {
        if(strParts[i] != '')
          itemsCount++;
      }
      return itemsCount;
    }
  };

  function lovesFilter()
  {
    return function(input)
    {
      return input;
    }
  }
})();
