'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */

angular.module('clientApp')
  .controller('MicroareaCtrl', ['$scope', '$http', 'API', function ($scope, $http, API) {
    
    
    $http({
      method: 'GET',
      url: API+'/microarea'
    }).then(function (response) {
      
      console.log('mainctrl response sucesso',response.data);

    }).catch(function (err){
        console.log('error ---> MicroareaCtrl 1',err);
    });
  }]);
