'use strict';

/**
 * @ngdoc function
 * @name clientApp:microAreaServices
 * @description
 * # microAreaServices
 * Service of the clientApp
 */
angular.module('clientApp')
  .factory('microAreaServices', ['$http', 'API', function ($http, API) {
    return {
      getMicroareas: function () {
        return $http.get(API + '/microarea');
      },
      putMicroarea: function (mArea) {
        let data = {
          NOME_MICROAREA: mArea.NOME_MICROAREA,
          NOME_AGENTE: mArea.NOME_AGENTE,
          META_ATENDIMENTO_MICROAREA: mArea.META_ATENDIMENTO_MICROAREA,
        }
        return $http.put(API + '/microarea/' + mArea.id, data);
      },
      delMicroarea: function (id) {
        return $http.delete(API + '/microarea/' + id);
      },
      postMicroarea: function (mArea) {
        let data = {
          NOME_MICROAREA: mArea.NOME_MICROAREA,
          NOME_AGENTE: mArea.NOME_AGENTE,
          META_ATENDIMENTO_MICROAREA: mArea.META_ATENDIMENTO_MICROAREA,
        }
        return $http.post(API + '/microarea/', data);
      },
      incrementAtendidos: function (mAreaID) {
        let data = {
          meusDados: mAreaID
        }
        return $http.post(API + '/microarea/increment/',data);
      },
      decrementAtendidos: function (mAreaID) {
        let data = {
          meusDados: mAreaID
        }
        return $http.post(API + '/microarea/decrement/', data);
      }
    };

  }]);
