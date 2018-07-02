'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../schemas/db')

module.exports = function setupPostModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('post', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    direction: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "en proceso"
    },
    price: {
      type: Sequelize.STRING
    }
  })
}
