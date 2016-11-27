(function()
{
  'use strict';
  angular.module('stringCodeCalculator', [])


  .controller('stringCodeCalculatorController', function($scope)
  {
    $scope.inputString = '';
    $scope.message = '';

    $scope.checkItems = function()
    {
      var itemsLength = checkString($scope.inputString);
      switch(itemsLength)
      {
        case (itemsLength > 3): $scope.message = 'Too much food';
        case 0: $scope.message = 'Empty Plate!';
        default: $scope.message = 'Enjoy your food!';
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
  });
})();
