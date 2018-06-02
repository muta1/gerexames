'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PacienteCtrl
 * @description
 * # PacienteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PacienteCtrl', ['$scope', '$http', 'API', 'pacienteServices', 'NgTableParams', '$mdSidenav', '$location', 'microAreaServices', '$filter', function ($scope, $http, API, pacienteServices, NgTableParams, $mdSidenav, $location, microAreaServices, $filter) {
    // -------------------------------------------
    //$scope.listPacientesMicroarea = {};
    //$scope.listMicroAreas = {};

    $scope.getAllMicroareas = function () {
      var _microareas = microAreaServices.getMicroareas();

      _microareas.then(function (response) {
        if (response.data.length == 0) {
          $scope.foramEncontradasMicroares = false;
        } else {
          $scope.foramEncontradasMicroares = true;
          $scope.listMicroAreas = response.data;
        }
      }, function (error) {
        console.log('ERROR' + error);
      });
    }
    $scope.getAllMicroareas();

    //$scope.getAllMicroareas();


    // -------------------------------------------

    //$scope.listPacientesTemAlgo = false;
    $scope.buscarPacientes = function (mAreaObj) {
      var _pacientes = pacienteServices.getPacientesFromMicroarea(mAreaObj.id);

      _pacientes.then(function (response) {
        //console.log('mAreaObj :', mAreaObj);
        $scope.microAreaBuscada = mAreaObj;
        //console.log('oi meu chapa ',response.data.rows )
        $scope.listPacientesMicroarea = response.data.rows;
        console.log('Todos pacientes da microarea - ', $scope.listPacientesMicroarea);
        if ($scope.listPacientesMicroarea.length > 0) {
          $scope.listPacientesFoiEncontrado = true;
          $scope.listPacientesNenhumEncontrado = false;
        } else {
          $scope.listPacientesFoiEncontrado = false;
          $scope.listPacientesNenhumEncontrado = true;
        }

      }, function (error) {
        //$scope.listPacientesTemAlgo = false;
        console.log('ERROR' + error);
      });
    }

    // -------------------------------------------
    // INCOMUM ENTRE PACIENTES
    $scope.dataPaciente = {};
    $scope.formPaciente = false;
    $scope.clearPaciente = function () {
      $scope.dataPaciente = {};
    }

    // -------------------------------------------
    // ADICIONAR PACIENTE

    $scope.addPaciente = false;
    $scope.adicionarPaciente = function () {
      $scope.formPaciente = true;
      $scope.clearPaciente();
      $scope.addPaciente = true;
      $scope.editPaciente = false;
    }

    // -------------------------------------------
    // Editar Paciente
    $scope.editPaciente = false;
    $scope.editarPaciente = function (paciente) {
      $scope.formPaciente = true;

      $scope.editPaciente = true;
      $scope.addPaciente = false;
      console.log('paciente ao clicar em editar paciente - ', paciente)
      // novo Objeto Paciente
      $scope.dataPaciente.id = paciente.id;
      $scope.dataPaciente.EM_PRIORIDADE = 1;
      $scope.dataPaciente.NOME_PACIENTE = paciente.NOME_PACIENTE;
      $scope.dataPaciente.DATA_NASC = new Date(paciente.DATA_NASC);
      $scope.dataPaciente.TELEFONE_FIXO = paciente.TELEFONE_FIXO;
      $scope.dataPaciente.TELEFONE_CELULAR = paciente.TELEFONE_CELULAR;
      $scope.dataPaciente.RUA = paciente.RUA;
      $scope.dataPaciente.NUMERO = paciente.NUMERO;
      $scope.dataPaciente.BAIRRO = paciente.BAIRRO;
      $scope.dataPaciente.CEP = paciente.CEP;
      $scope.dataPaciente.EXAME_MASTOLOGIA_ALTERADO = paciente.EXAME_MASTOLOGIA_ALTERADO.toString();
      $scope.dataPaciente.EXAME_MASTOLOGIA_DESC = paciente.EXAME_MASTOLOGIA_DESC;
      $scope.dataPaciente.EXAME_CITOPATOLOGICO_ALTERADO = paciente.EXAME_CITOPATOLOGICO_ALTERADO.toString();
      $scope.dataPaciente.EXAME_CITOPATOLOGICO_DESC = paciente.EXAME_CITOPATOLOGICO_DESC;

      if ($scope.dataPaciente.EXAME_MASTOLOGIA_ALTERADO == '1' || $scope.dataPaciente.EXAME_CITOPATOLOGICO_ALTERADO == '1') {
        $scope.dataPaciente.EM_PRIORIDADE = 1;
      } else {
        $scope.dataPaciente.EM_PRIORIDADE = 0;
      }



      //$scope.dataPaciente.NOME_PACIENTE = paciente.NOME_PACIENTE;

      //$scope.dataPaciente.DATA_NASC = //new Date(paciente.DATA_NASC).toLocaleDateString();
    }

    // -------------------------------------------
    // Remover Paciente





    // --------------------------------------------
    // ADD PACIENTE
    $scope.adicionarPacienteFormulario = function (paciente) {
      console.log(paciente);
      pacienteServices.putPaciente(paciente);

    }

    // --------------------------------------------
    // ATUALIZAR PACIENTE
    $scope.atualizarPacienteFormulario = function (paciente) {
      console.log(paciente);
      //if()

      // var pacienteData = paciente; //console.log('paciente :', paciente);
      // var _atualizarPaciente = pacienteServices.putPaciente(pacienteData);

      // _atualizarPaciente.then(function (res) {
      //   console.log('atualizou - ', res.data);
      // }, function (err) {
      //   console.log('deu erro - ', err);
      // })
    }












    // --------------------------------------------
    // CONTROLE DE EXAMES ALTERADO OU NÃO
    // CITOPATOLOGICO
    $scope.varAlteradoCito = false;
    $scope.alteradoCito = function () {
      $scope.varAlteradoCito = true;
    }
    $scope.naoAlteradoCito = function () {
      $scope.varAlteradoCito = false;
      $scope.dataPaciente.EXAME_CITOPATOLOGICO_DESC = "";
    }

    // MASTOLOGIA
    $scope.varAlteradoMasto = false;
    $scope.alteradoMasto = function () {
      $scope.varAlteradoMasto = true;
    }
    $scope.naoAlteradoMasto = function () {
      $scope.varAlteradoMasto = false;
      $scope.dataPaciente.EXAME_MASTOLOGIA_DESC = "";
    }



    $scope.submitForm = function (valid) {
      if (valid) {
        console.log('form-paciente válido', valid)
      } else {
        console.log('form-paciente inválido', valid)
      }
    }

  }]);
