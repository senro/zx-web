"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name:DataTypes.STRING,
      sex:DataTypes.STRING,
      identity:DataTypes.STRING,
      email:DataTypes.STRING,
      description:DataTypes.STRING,
      userPic:DataTypes.STRING,
      Lng:DataTypes.STRING,
      Lat:DataTypes.STRING
  }
//      {
//    classMethods: {
//      associate: function(models) {
//        //User.hasMany(models.Task)
//      }
//    }
//  }
  );

  return User;
};
