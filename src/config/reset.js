'user strict'

const setupDatabase = require('../schemas/db')
const setupUserModel = require('../models/user')
const setupPostModel = require('../models/post')

const defaults = require('defaults')
const configG = require('../config/config-db')



module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const PostModel = setupPostModel(config)


  // --------RELACIONES CON SEQUALIZE------------//



  //Relaciones tabla Pedido Post
  
  UserModel.hasMany(PostModel) // el 1 tiene muchos del 2
  PostModel.belongsTo(UserModel,{
    foreignKey: 'userId',
    constraints: false,
    as: 'client'
  }) // el 1 pertenece a 2

  UserModel.hasMany(PostModel) // el 1 tiene muchos del 2
  PostModel.belongsTo(UserModel,{
    foreignKey: 'workerId',
    constraints: false,
    as: 'worker'
  })



  // --------FIN DE RELACION SEQUALIZE-----------//

  if (config.setup) {
    await sequelize.sync({ force: true })
    console.log('entro aca')
  }


}
