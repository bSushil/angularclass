(function()
{
  'use strict';

  angular.module('user')
  .directive('menuItem', MenuItemDirective);

  function MenuItemDirective()
  {
    return {
      restrict:'E',
      template:'templates/user/userinfo.template.html'
    }
  }
})();
