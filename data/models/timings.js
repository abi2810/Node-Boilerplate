/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Timings = Model.define(
  'timings', 
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    from_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    to_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    day: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    draft_lists_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'draft_lists',
        key: 'id'
      }
    },
    lists_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'lists',
        key: 'id'
      }
    }
  },
);
module.exports = Timings;
