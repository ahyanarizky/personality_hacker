'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ramalan = sequelize.define('Ramalan', {
    ramalan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ramalan;
};