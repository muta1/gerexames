'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PacienteCtrl
 * @description
 * # PacienteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PacienteCtrl', ['$scope', '$http', 'API', 'pacienteServices', 'NgTableParams', '$mdSidenav', '$location', 'microAreaServices', function ($scope, $http, API, pacienteServices, NgTableParams, $mdSidenav, $location, microAreaServices) {
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
    // ADICIONAR PACIENTE
    $scope.addPaciente = false;
    $scope.adicionarPaciente = function (){
      $scope.addPaciente = true;
    }
  }]);
