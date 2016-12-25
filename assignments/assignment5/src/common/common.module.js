(function(){
  'use strict';

  angular.module('common', [])
  .constant('ApiBase', 'https://resappsvr.herokuapp.com/')
  .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider)
  {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})();
