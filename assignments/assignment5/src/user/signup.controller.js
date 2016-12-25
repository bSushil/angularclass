(function(){
  'use strict';

  angular.module('user')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserService'];

  function SignupController(MenuService, UserService)
  {
    var $ctrl = this;
    $ctrl.menuItemVerified = false;
    $ctrl.submit = function()
    {
      $ctrl.completed = true;
      UserService.storeDetail($ctrl.user.firstname, $ctrl.user.lastname, $ctrl.user.email, $ctrl.user.phone, $ctrl.user.menuchoice);
    };

    $ctrl.checkMenuExists = function()
    {
      var menuChoice = '';
      if($ctrl.user == undefined || $ctrl.user.menuchoice == undefined || $ctrl.user.menuchoice.length == 0)
        return false;

      menuChoice = $ctrl.user.menuchoice;

      var promise = MenuService.getMenuItem(menuChoice);
      promise.then(function(response)
      {
        $ctrl.menuItemError = '';
        $ctrl.menuItemVerified = true;
      })
      .catch(function(error){
        $ctrl.menuItemError = 'Selected menu item does not exist';
        $ctrl.menuItemVerified = false;
      });
    };
  }
})();
