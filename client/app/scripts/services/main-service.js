'use strict';

/**
 * @ngdoc function
 * @name clientApp:microAreaServices
 * @description
 * # microAreaServices
 * Service of the clientApp
 */
angular.module('clientApp')
  .factory('mainServices', ['$http', 'API', function ($http, API) {
    return {
      getAllPacientesEmPrioridade: function () {
        return $http.get(API + '/paciente/?EM_PRIORIDADE=true');
      }//,
      // getQuantidadePacientes: function(microareaID){
      //   return $http.get(API + '/?owner='+microareaID);
      // }
    };

  }]);
