(function(){
  'use strict';

  angular.module('user')
  .directive('userInfo', UserInfoDirective);

  function UserInfoDirective()
  {
    return {
      restrict:'E',
      templateUrl:'templates/user/userinfo.template.html',
      scope:{
        detail:'<'
      },
      controller:UserInfoDirectiveController,
      controllerAs:'userDetail',
      bindToController:true,
      link: UserDetailDirectiveLink,
      transclude:true
    };
  }

  function UserDetailDirectiveLink(scope, element, attrs, controller)
  {
    var errorElement = element.find('div.error');
    scope.$watch('userDetail.checkDetail()', function(newValue, oldValue)
    {
      if(newValue > 0)
        removeError();
      else
        showError();
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

  function UserInfoDirectiveController()
  {
    var theUser = this;

    theUser.checkDetail = function()
    {
      if(theUser.detail.firstName != undefined && theUser.detail.firstName.length > 0)
        return true;
      return false;
    };
  }
})();
