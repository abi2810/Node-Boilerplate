/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');


const AboutApp = Model.define('about_app', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    about_app_Text1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_app_Text2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_app_Text3: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    about_app_Text4: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    about_app_Text5: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    about_app_Text6: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    about_app_Text7: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_app_Text8: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_app_Text9: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_app_Text10: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_app_Text11: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, 
);
  module.exports = AboutApp;
