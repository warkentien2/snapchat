'use strict';

angular.module('snapchatApp', ['snapchatApp.auth', 'snapchatApp.admin', 'snapchatApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
