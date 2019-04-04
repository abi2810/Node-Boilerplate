/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const List = Model.define('lists', {
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
    draft_lists_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'draft_lists',
        key: 'id'
      }
    },
    list_Text1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text2: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    list_Text3: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    list_Text4: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    list_Text5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text10: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text11: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text12: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text13: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text14: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text15: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text16: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text17: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text18: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text19: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text20: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_Text21: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '0'
    },
    list_Text22: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    list_Text23: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    list_Text24: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    list_Number1: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    list_Number2: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    list_Number3: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    list_Flag1: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    list_Flag2: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Model.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, 
);

module.exports = List;
