/**
 * Paciente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    NOME_PACIENTE: {
      type: 'string',
      required: true
    },
    DATA_NASC: {
      type: 'string',
      columnType: 'date',
      required: true
    },
    TELEFONE_FIXO: {
      type: 'string'
    },
    TELEFONE_CELULAR: {
      type: 'string'
    },
    RUA: {
      type: 'string'
    },
    NUMERO: {
      type: 'string'
    },
    BAIRRO: {
      type: 'string'
    },
    CEP: {
      type: 'string'
    },
    EXAME_MASTOLOGIA_ALTERADO: {
      type: 'boolean'
    },
    EXAME_MASTOLOGIA_DESC: {
      type: 'string'
    },
    EXAME_CITOPATOLOGICO_ALTERADO: {
      type: 'boolean'
    },
    EXAME_CITOPATOLOGICO_DESC: {
      type: 'string'
    },
    EM_PRIORIDADE: {
      type: 'boolean'
    },
    


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    owner:{
      model:'microarea'
    }
  },

};
