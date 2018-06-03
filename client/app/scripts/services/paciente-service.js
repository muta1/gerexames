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
        let data = {
          meusDados: microareaID
        }
        return $http.post(API + '/paciente/deleteFromMicroarea/', data);
      },
      delPaciente: function (paciente) {
        return $http.delete(API + '/paciente/' + paciente.id)
      },
      getPacientesFromMicroarea: function (microareaID) {
        let data = {
          meusDados: microareaID
        }
        return $http.post(API + '/paciente/pacientesFromMicroarea/', data);
      },
      putPaciente: function (paciente) {
        let data = {
          BAIRRO: paciente.BAIRRO,
          //     //   ​
          CEP: paciente.CEP,
          //     //   ​
          DATA_NASC: paciente.DATA_NASC.toString(),
          //     //   ​
          EM_PRIORIDADE: paciente.EM_PRIORIDADE,

          //     //   ​
          EXAME_CITOPATOLOGICO_ALTERADO: parseInt(paciente.EXAME_CITOPATOLOGICO_ALTERADO),
          //     //   ​
          EXAME_CITOPATOLOGICO_DESC: paciente.EXAME_CITOPATOLOGICO_DESC,
          //     //   ​
          EXAME_MASTOLOGIA_ALTERADO: parseInt(paciente.EXAME_MASTOLOGIA_ALTERADO),
          //     //   ​
          EXAME_MASTOLOGIA_DESC: paciente.EXAME_MASTOLOGIA_DESC,
          //     //   ​
          NOME_PACIENTE: paciente.NOME_PACIENTE,
          //     //   ​
          NUMERO: paciente.NUMERO,
          //     //   ​
          RUA: paciente.RUA,
          //     //   ​
          TELEFONE_CELULAR: paciente.TELEFONE_CELULAR,
          //     //   ​
          TELEFONE_FIXO: paciente.TELEFONE_FIXO,
          CODIGO_MICROAREA: paciente.CODIGO_MICROAREA
        }
        //console.log('data put -> ', data);
        // console.log('paciente:', data);
        return $http.patch(API + '/paciente/' + paciente.id, data);
      },
      postPaciente: function (paciente) {
        let data = {
          BAIRRO: paciente.BAIRRO,
          //     //   ​
          CEP: paciente.CEP,
          //     //   ​
          DATA_NASC: paciente.DATA_NASC.toString(),
          //     //   ​
          EM_PRIORIDADE: paciente.EM_PRIORIDADE,

          //     //   ​
          EXAME_CITOPATOLOGICO_ALTERADO: parseInt(paciente.EXAME_CITOPATOLOGICO_ALTERADO),
          //     //   ​
          EXAME_CITOPATOLOGICO_DESC: paciente.EXAME_CITOPATOLOGICO_DESC,
          //     //   ​
          EXAME_MASTOLOGIA_ALTERADO: parseInt(paciente.EXAME_MASTOLOGIA_ALTERADO),
          //     //   ​
          EXAME_MASTOLOGIA_DESC: paciente.EXAME_MASTOLOGIA_DESC,
          //     //   ​
          NOME_PACIENTE: paciente.NOME_PACIENTE,
          //     //   ​
          NUMERO: paciente.NUMERO,
          //     //   ​
          RUA: paciente.RUA,
          //     //   ​
          TELEFONE_CELULAR: paciente.TELEFONE_CELULAR,
          //     //   ​
          TELEFONE_FIXO: paciente.TELEFONE_FIXO,
          CODIGO_MICROAREA: paciente.CODIGO_MICROAREA,
          owner: paciente.CODIGO_MICROAREA
        }
        //console.log('data put -> ', data);
        // console.log('paciente to insert:', data);
        return $http.post(API + '/paciente/', data);
      }
    };

  }]);
