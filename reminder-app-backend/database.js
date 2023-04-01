const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('virtualisation', 'root', 'ixGz2yIwobdPNZg4wYKd', { //nom de la base, username, password
  host: 'db',
  dialect: 'mysql',
});

(async () => {
  try {
    console.log('Waiting for the MySQL database to be ready...');
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before trying to connect
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;