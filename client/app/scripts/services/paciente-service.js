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
      delTodosPacientesMicroarea: function (microareaID) {
        var data = {
          meusDados: microareaID
        }
        return $http.post(API + '/paciente/deleteFromMicroarea/', data);
      }
    };

  }]);
