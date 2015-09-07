"use strict";

module.exports = function(sequelize, DataTypes) {
  var Identities = sequelize.define("Identities", {
      identity:DataTypes.STRING
  }
//      , {
//    classMethods: {
//      associate: function(models) {
//          //Identities.hasMany(models.User);
//      }
//    }
//  }
  );

  return Identities;
};
