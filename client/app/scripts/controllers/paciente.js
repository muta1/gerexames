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
        console.log('ERROR', error);
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
        // console.log('Todos pacientes da microarea - ', $scope.listPacientesMicroarea);
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
      $scope.addPaciente = true;
      $scope.editPaciente = false;
      $scope.dataPaciente = {};
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
      $scope.dataPaciente.CODIGO_MICROAREA = $scope.microAreaBuscada.id;
    }

    // -------------------------------------------
    // Remover Paciente
    $scope.deletarPaciente = function (paciente) {
      if (confirm("Deseja realmente remover " + paciente.NOME_PACIENTE + " ?")) {
        var _pacienteDelete = pacienteServices.delPaciente(paciente);
        _pacienteDelete.then(function (response) {
          //console.log('deletou com sucesso  ', response);
          $scope.formPaciente = false;
          $scope.listPacientesFoiEncontrado = false;
          $scope.listPacientesNenhumEncontrado = false;

          var _decrementePaciente = microAreaServices.decrementAtendidos($scope.microAreaBuscada.id);
          _decrementePaciente.then(function (res) {
            // console.log('decrementou')
          }, function (err) {
            console.log('falhou decrementou')
          })

        }, function (error) {
          console.log('não deletou', error);
        })
      }
    }


    $scope.submitForm = function (valid) {
      if (valid) {
        var pacienteData = $scope.dataPaciente;
        var objDataHoje = new Date().getFullYear();
        var objData = new Date(pacienteData.DATA_NASC).getFullYear();
        var idadePrioritária = (objDataHoje - objData);

        if (pacienteData.EXAME_CITOPATOLOGICO_ALTERADO == '0') {
          pacienteData.EXAME_CITOPATOLOGICO_DESC = "";
        }
        if (pacienteData.EXAME_MASTOLOGIA_ALTERADO == '0') {
          pacienteData.EXAME_MASTOLOGIA_DESC = "";
        }

        if (pacienteData.EXAME_MASTOLOGIA_ALTERADO == undefined) {
          pacienteData.EXAME_MASTOLOGIA_ALTERADO = 0;
        }
        if (pacienteData.EXAME_CITOPATOLOGICO_ALTERADO == undefined) {
          pacienteData.EXAME_CITOPATOLOGICO_ALTERADO = 0;
        }

        if (pacienteData.EXAME_MASTOLOGIA_ALTERADO == '1' || pacienteData.EXAME_CITOPATOLOGICO_ALTERADO == '1' || idadePrioritária >= 45) {
          pacienteData.EM_PRIORIDADE = 1;
        } else {
          pacienteData.EM_PRIORIDADE = 0;
        }
        pacienteData.CODIGO_MICROAREA = $scope.microAreaBuscada.id;

        if ($scope.editPaciente) { // update

          //console.log('update -> ', pacienteData)
          var _atualizarPaciente = pacienteServices.putPaciente(pacienteData);

          _atualizarPaciente.then(function (res) {
            $scope.formPaciente = false;
            $scope.listPacientesFoiEncontrado = false;
            $scope.listPacientesNenhumEncontrado = false;
          }, function (err) {
            console.log('Erro update submit - ', err);
          });
        } else { // insert

          //console.log('insert -> ', pacienteData)
          var _inserePaciente = pacienteServices.postPaciente(pacienteData);

          _inserePaciente.then(function (res) {
            $scope.formPaciente = false;
            $scope.listPacientesFoiEncontrado = false;
            $scope.listPacientesNenhumEncontrado = false;

            var _incrementPaciente = microAreaServices.incrementAtendidos($scope.microAreaBuscada.id);
            _incrementPaciente.then(function (res) {
              // console.log('decrementou')
            }, function (err) {
              console.log('falhou decrementou')
            })

          }, function (err) {
            console.log('Erro insert submit - ', err);
          });
        }

      } else {
        console.log('Operação inválida - SUBMIT FORM', valid);
      }
    }

  }]);
