'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PacienteCtrl
 * @description
 * # PacienteCtrl
 * Controller of the clientApp
 */
  angular.module('clientApp')
    .controller('PacienteCtrl', ['$scope', '$http', 'API', 'pacienteServices', 'NgTableParams','$mdSidenav','$location', function ($scope, $http, API, pacienteServices, NgTableParams, $mdSidenav, $location) {
      // $scope.openSidebar = function () {

      //   $mdSidenav('left').open();
      // }
      // $scope.closeSidebar = function () {
      //   $mdSidenav('left').close();
      // }

      // $scope.goToHome = function () {
      //   $location.url('/');
      // }

      // $scope.getAllPacientesEmPrioridade = function () {
      //   var _pacientes = mainServices.getAllPacientesEmPrioridade();

      //   _pacientes.then(function (response) {
      //     $scope.listPacientes = response.data;
      //   }, function (error) {
      //     console.log('ERROR' + error);
      //   });
      // }
      //$scope.getAllPacientesEmPrioridade();


    }]);
