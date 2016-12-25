(function()
{
  'use strict';

  angular.module('user')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['myInfo'];

  function MyInfoController(myInfo)
  {
    var $ctrl = this;
    $ctrl.userInfo = myInfo;
  }
})();
