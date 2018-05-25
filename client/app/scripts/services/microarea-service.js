'use strict';

/**
 * @ngdoc function
 * @name clientApp:MicroareaCtrl
 * @description
 * # MicroareaCtrl
 * Service of the clientApp
 */
angular.module('buyerApp')
  .factory('microAreaServices', function ($http, $scope, API) {
    console.log('A API CHAMADA DO MICROSERVICES EH --> ' + API);
  })
