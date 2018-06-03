/**
 * PacienteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // deleteAllPacientesFromMicroarea: function(mArea){

  //   var pacientesDestruidos = await Paciente.destroy({owner:{id: mArea.id}}).fetch();

  //   if(pacientesDestruidos.length === 0) {
  //     res.ok();
  //   } else {
  //     sails.log('Deleted book with `id: 4`:', burnedBooks[0]);
  //     res.error();
  //   }
  // }
  deletarTodosPacientesDessaMicroarea: function (req, res) {
    var pacientesDestruidos = function () {
      var DeletePacientesFromMicroarea = 'DELETE FROM paciente WHERE paciente.CODIGO_MICROAREA = $1';

      var id = req.body.meusDados;

      //console.log('var é ' + id);

      sails.sendNativeQuery(DeletePacientesFromMicroarea, [id]).then(function (response) {
        //console.log('resposta nativa ' + response);
        res.ok('200');
      }, function (err) {
        //console.log('erro :', err);
        res.ok('200');
      })
    }
    pacientesDestruidos();
    // pacientesDestruidos().then(function () {
    //   res.ok('200');
    // });
  },
  /** OTHER FUNCTIONS BELOW */
  pacientesFromMicroarea: function (req, res) {
    var pacientesEncontrados = function () {
      var pacientesFromMicroarea = 'SELECT * FROM paciente WHERE paciente.CODIGO_MICROAREA = $1';

      var id = req.body.meusDados;

      //console.log('var é ' + id);

      sails.sendNativeQuery(pacientesFromMicroarea, [id]).then(function (response) {
        //console.log('resposta nativa ' + response);
        res.status(200).json(response)
      }, function (err) {
        console.log('erro :', err);
        res.status(200).json({
          status: 'Nada foi encontrado'
        });
      })
    }
    pacientesEncontrados();
  }
}
