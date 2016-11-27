(function()
{
  'use strict';
  angular.module('stringCodeCalculator', [])


  .controller('stringCodeCalculatorController', function($scope)
  {
    $scope.inputString = '';
    $scope.message = '';
    $scope.color = '';

    $scope.checkItems = function()
    {
      if($scope.inputString == '')
      {
        $scope.color = 'warning';
        $scope.message = 'Please enter something first';
      }

      var itemsLength = checkString($scope.inputString);
      switch(itemsLength)
      {
        case (itemsLength > 3): $scope.message = 'Too much food'; $scope.color = 'warning'; break;
        case 0: $scope.message = 'Empty Plate!';$scope.color = 'warning'; break;
        default: $scope.message = 'Enjoy your food!';$scope.color = 'green'; break;
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
