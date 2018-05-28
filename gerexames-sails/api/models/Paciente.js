/**
 * Paciente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'paciente',
  attributes: {

    id: {
      type: 'number',
      autoIncrement: true
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    NOME_PACIENTE: {
      type: 'string',
      required: true
    },
    DATA_NASC: {
      type: 'string',
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
      type: 'string',
      columnType: 'text'
    },
    EXAME_CITOPATOLOGICO_ALTERADO: {
      type: 'boolean'
    },
    EXAME_CITOPATOLOGICO_DESC: {
      type: 'string',
      columnType: 'text'
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
    owner: {
      model: 'Microarea',
      columnName: 'CODIGO_MICROAREA'
    },
    createdAt: {
      type: 'number',
      autoCreatedAt: true,
    },
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true,
    }
  },

};
