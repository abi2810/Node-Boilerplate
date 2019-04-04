/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');


const ActivityLog = sequelize.define('activity_log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    changed_desc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    change_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Model.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    users_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, 
);

module.exports = ActivityLog;
