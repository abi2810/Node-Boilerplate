const Sequelize = require('sequelize')
// To Set environments
const NODE_ENV = process.env.NODE_ENV || 'development'

const dbUrl = {
  development: process.env.DATABASE_URL_DEV,
  staging: process.env.DATABASE_URL_STAGING,
  production: process.env.DATABASE_URL_PROD,
}
const sequelize = new Sequelize(dbUrl[NODE_ENV], {
  // logging: false, // Turn off logging SQL query to console
  define: {
    freezeTableName: true,
  },
});
//sequelize db collection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
