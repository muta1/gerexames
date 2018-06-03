'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */

angular.module('clientApp')
  .controller('MicroareaCtrl', ['$scope', '$http', 'API', 'microAreaServices', 'NgTableParams', '$window', 'pacienteServices', function ($scope, $http, API, microAreaServices, NgTableParams, $window, pacienteServices) {

    $scope.editBtnClicked = false;
    $scope.addBtnClicked = false;
    $scope.dataMicroarea = {};

    $scope.addBtn = function () {
      $scope.reset();
      $scope.addBtnClicked = true;
      $scope.editBtnClicked = true;
    }

    $scope.getAllMicroareas = function () {
      var _microareas = microAreaServices.getMicroareas();

      _microareas.then(function (response) {
        $scope.listMicroAreas = response.data;
      }, function (error) {
        console.log('ERROR', error);
      });
    }
    $scope.getAllMicroareas();

    $scope.reset = function () {
      $scope.dataMicroarea = {};
      $scope.getAllMicroareas();
    }

    $scope.updateMicroArea = function (mAreaSave) {
      var _microareaSave = microAreaServices.putMicroarea(mAreaSave);
      _microareaSave.then(function (response) {
        console.log('atualizou', response);
        $scope.reset();
      }, function (error) {
        console.log('não salvou (update microarea)', error);
      })
    }
    $scope.saveMicroArea = function (mAreaAdd) {
      $scope.reset();
      var _microareaAdd = microAreaServices.postMicroarea(mAreaAdd);
      _microareaAdd.then(function (response) {
        console.log('salvou', response);
        $scope.reset();
      }, function (error) {
        console.log('não salvou (save microarea)', error);
      })
    }

    $scope.editarMicroArea = function (microarea) {
      $scope.editBtnClicked = true;
      $scope.addBtnClicked = false;
      $scope.dataMicroarea = microarea;
    }

    $scope.removeMicroArea = function (mAreaDelete) {
      if (confirm("Deseja remover " + mAreaDelete.NOME_MICROAREA + " ?")) {
        var _microareaDelete = microAreaServices.delMicroarea(mAreaDelete);
        _microareaDelete.then(function (response) {
          $scope.getAllMicroareas();
        }, function (error) {
          console.log('não deletou', error);
        })
      }
    }


    $scope.delTodosPacientesMicroarea = function (dado) {
      if (confirm("REALMENTE DESEJA REMOVER A MICROÁREA: " + dado.NOME_MICROAREA + "?\n\n\n*AVISO: TODOS OS PACIENTES VINCULADOS A ESTA MICROÁREA SERÃO DELETADOS!")) {

        var _teste = pacienteServices.delTodosPacientesMicroarea(dado.id);
        _teste.then(function (response) {
          console.log('del teve resposta  ', response);
          var _deleteMicroareaPai = microAreaServices.delMicroarea(dado.id);
          _deleteMicroareaPai.then(function (response) {
            $scope.getAllMicroareas();
            console.log('sucesso apagou pai tbm ', response);
          }, function (error) {
            console.log('não deletou', error);
          })

        }, function (err) {
          console.log('erro no teste  ', err);
        })
      }
    }


  }]);
