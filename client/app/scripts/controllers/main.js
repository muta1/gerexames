'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['$scope', '$http', 'API', 'mainServices', 'NgTableParams', '$mdSidenav', '$location', 'pacienteServices', function ($scope, $http, API, mainServices, NgTableParams, $mdSidenav, $location, pacienteServices) {
    $scope.openSidebar = function () {

      $mdSidenav('left').open();
    }
    $scope.closeSidebar = function () {
      $mdSidenav('left').close();
    }

    $scope.goToHome = function () {
      $location.url('/');
    }

    $scope.goToMicroarea = function () {
      $location.url('/microarea/');
    }

    $scope.goToPaciente = function () {
      $location.url('/paciente/');
    }

    $scope.goToAbout = function () {
      $location.url('/about/');
    }



    $scope.getAllPacientesEmPrioridade = function () {
      var _pacientes = mainServices.getAllPacientesEmPrioridade();

      _pacientes.then(function (response) {
        $scope.listPacientes = response.data;
      }, function (error) {
        console.log('ERROR' + error);
      });
    }
    //$scope.getAllPacientesEmPrioridade();




  }]);
