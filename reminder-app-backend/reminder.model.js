const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Reminder = sequelize.define('Reminder', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Reminder;
