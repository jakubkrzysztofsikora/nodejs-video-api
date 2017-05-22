'use strict';

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var video = sequelize.define('video', {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true
    },
    path: Sequelize.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return video;
};