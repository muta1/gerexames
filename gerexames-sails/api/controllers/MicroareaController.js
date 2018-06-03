/**
 * MicroareaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  decrementPacienteAtendido: function (req, res) {
    var decrementAtendidos = function () {
      var decrementFromMicroarea = 'UPDATE microarea SET PACIENTES_ATENDIDOS_MICROAREA = PACIENTES_ATENDIDOS_MICROAREA - 1  WHERE microarea.id = $1';

      var id = req.body.meusDados;

      //console.log('var é ' + id);

      sails.sendNativeQuery(decrementFromMicroarea, [id]).then(function (response) {
        //console.log('resposta nativa ' + response);
        res.ok('200');
      }, function (err) {
        //console.log('erro :', err);
        res.ok('200');
      })
    }
    decrementAtendidos();
    // pacientesDestruidos().then(function () {
    //   res.ok('200');
    // });
  },
  incrementPacienteAtendido : function (req, res) {
    var incrementAtendidos = function () {
      var incrementFromMicroarea = 'UPDATE microarea SET PACIENTES_ATENDIDOS_MICROAREA = PACIENTES_ATENDIDOS_MICROAREA + 1  WHERE microarea.id = $1';

      var id = req.body.meusDados;

      //console.log('var é ' + id);

      sails.sendNativeQuery(incrementFromMicroarea, [id]).then(function (response) {
        //console.log('resposta nativa ' + response);
        res.ok('200');
      }, function (err) {
        //console.log('erro :', err);
        res.ok('200');
      })
    }
    incrementAtendidos();
    // pacientesDestruidos().then(function () {
    //   res.ok('200');
    // });
  }
};
