(function()
{
  'use strict';

  angular.module('user')
  .service('UserService', UserService);

  UserService.$inject = ['ApiBase'];

  function UserService(ApiBase)
  {
    var theService = this;
    theService.userDetail = {};

    theService.storeDetail = function(firstName, lastName, email, phoneNumber, menuChoice)
    {
      theService.userDetail.firstName = firstName;
      theService.userDetail.lastName = lastName;
      theService.userDetail.email = email;
      theService.userDetail.phoneNumber = phoneNumber;
      theService.userDetail.menuChoice = menuChoice;
    }

    theService.getUserDetail = function()
    {
      return theService.userDetail;
    }
  }
})();
