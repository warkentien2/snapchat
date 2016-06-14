'use strict';

angular.module('snapchatApp.auth', ['snapchatApp.constants', 'snapchatApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
