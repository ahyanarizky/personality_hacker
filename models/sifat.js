'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sifat = sequelize.define('Sifat', {
    sifat: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sifat;
};