/**
 * Conductor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

    chasis:{
      type:'number',
      required: true
    },
    nombreMarca:{
      type:'string',
      required: true
    },
    colorUno:{
      type:'string',
      required: true
    },
    colorDos:{
      type:'string',
      required: true
    },
    nombreModelo:{
      type:'string',
      required: true
    },
    anio:{
      type:'number',
      required: true
    },
    conductorIdFK:{
      model: 'Auto'
    }

  },

};

