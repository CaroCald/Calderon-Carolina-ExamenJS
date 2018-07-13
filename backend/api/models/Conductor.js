/**
 * Conductor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombres:{
      type:'string',
      required: true
    },
    apellidos:{
      type:'string',
      required: true
    },
    fechaNacimiento:{
      type:'string',
      required: true
    },
    numeroAutos:{
      type:'number',
      required: true
    },
    licenciaValida:{
      type:'boolean',
      required: true
    },
    conductor:{
      collection: 'Auto',
      via:'autoIdFK'
    }
  }
};

