/**
 * MicroareaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * @param req
   * @param res
   */
  findAll: (req, res) => {
    

    // Microarea
    //   .find()
    //   .exec((error, microareas) => {
    //     if (error) {
    //       console.log('error' + error);
    //       return res.serverError(error);
    //     }
    //     console.log('json funcionou ' + JSON.stringify(microareas));
    //     return res.jsonp([
    //       {
    //         name: 'Thelma',
    //         id: 1
    //       }, {
    //         name: 'Leonardo',
    //         id: 2
    //       }
    //     ]);//res.JSON(microareas);
    //   })

    // MicroareaModel
    //   .findOne({
    //     name
    //   })
    //   .exec((error, microarea) => {
    //       console.log('entrei aqui')
    //     if (error) return res.serverError(error)
    //     if (microarea) return res.json(microarea)
    //   })
  },
  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    // let {
    //   NOME_MICROAREA,
    //   NOME_AGENTE,
    //   META_ATENDIMENTO_MICROAREA
    // } = req.allParams()

    console.log('-----> ' + req.allParams());
    // MicroareaModel
    //   .create({
    //     NOME_MICROAREA,
    //     NOME_AGENTE,
    //     META_ATENDIMENTO_MICROAREA
    //   })
    //   .exec((error, microarea) => {
    //     if (error) return res.serverError(error)

    //     sails.log.info('Product created', microarea)

    //     if (microarea) return res.ok()
    //   })
  },

};
