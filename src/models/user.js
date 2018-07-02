'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../schemas/db')

module.exports = function setupUserModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname:{
      type: Sequelize.STRING,
      allowNull: false
    },
    phone:{
      type: Sequelize.STRING,
      allowNull: false
    },
    direction:{
      type: Sequelize.STRING,
      allowNull: true
    },
    identification:{
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
