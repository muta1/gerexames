'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */

 angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngTable'
  ])
  .constant('API','http://localhost:1337')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/microarea',{
        templateUrl: 'views/microarea.html',
        controller: 'MicroareaCtrl',
        controllerAs: 'micro'
      })
      .when('/paciente',{
        templateUrl: 'views/paciente.html',
        controller: 'PacienteCtrl',
        controllerAs: 'paci'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
