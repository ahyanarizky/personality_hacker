'use strict';
module.exports = function(sequelize, DataTypes) {
  var Kepribadian = sequelize.define('Kepribadian', {
    kepribadian: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Kepribadian;
};