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


    $scope.buscarPacientes = function (mAreaObj) {
      var _pacientes = pacienteServices.getPacientesFromMicroarea(mAreaObj);

      _pacientes.then(function (response) {
        console.log('oi meu chapa ',response )
        // $scope.listPacientesMicroarea = response.data;
      }, function (error) {
        console.log('ERROR' + error);
      });
    }

    // -------------------------------------------

  }]);
