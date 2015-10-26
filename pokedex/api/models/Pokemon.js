/**
* Pokemon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      size: 24,
      unique: true
    },
    tipo1:{
      type:'string',
      enum:['dark', 'fire', 'water', 'dragon', 'fly']
    },
    tipo2:{
      type:'string',
      enum:['dark', 'fire', 'water', 'dragon', 'fly']
    },
    numero:{
      type:'number',
      unique: true,
      primaryKey:true
    },
    habilidadEspecial:{
      type:'string',
      defaulsTo:'NA'
    }
  }
};
