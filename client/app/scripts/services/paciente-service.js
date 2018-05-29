'use strict';

/**
 * @ngdoc function
 * @name clientApp:pacienteServices
 * @description
 * # pacienteServices
 * Service of the clientApp
 */
angular.module('clientApp')
  .factory('pacienteServices', ['$http', 'API', function ($http, API) {
    return {
      getTodosPacientes: function () {

      },
      delTodosPacientesMicroarea: function (microareaID) {
        var data = {
          meusDados: microareaID
        }
        return $http.post(API + '/paciente/deleteFromMicroarea/', data);
      },
      getPacientesFromMicroarea: function(microareaID){
        var data = {
          meusDados: microareaID
        }
        return $http.post(API + '/paciente/pacientesFromMicroarea/', data);
      }
    };

  }]);
