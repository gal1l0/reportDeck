'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    accessLevel: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};