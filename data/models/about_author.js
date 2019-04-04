/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const AboutAuthor = Model.define('about_author', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    collections_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'collections',
        key: 'id'
      }
    },
    about_author_Text1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text3: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    about_author_Text4: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    about_author_Text5: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text6: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text7: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text8: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text9: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    about_author_Text10: {
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
  module.exports = AboutAuthor;