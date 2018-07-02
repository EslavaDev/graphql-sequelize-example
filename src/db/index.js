'use strict'

const setupDatabase = require('../schemas/db')
const setupUserModel = require('../models/user')
const setupPostModel = require('../models/post')

const setupUser = require('../schemas/user')
const setupPost = require('../schemas/post')

const defaults = require('defaults')
const config = require('../config/config-db')()





const sequelize = setupDatabase(config)
const UserModel = setupUserModel(config)
const PostModel = setupPostModel(config)


// --------RELACIONES CON SEQUALIZE------------//

  //Relaciones tabla Pedido Post
  
  UserModel.hasMany(PostModel) // el 1 tiene muchos del 2
  PostModel.belongsTo(UserModel
    ,{
    foreignKey: 'userId',
    constraints: false,
    as: 'client'
  }
) // el 1 pertenece a 2

  UserModel.hasMany(PostModel) // el 1 tiene muchos del 2
  PostModel.belongsTo(UserModel,{
    foreignKey: 'workerId',
    constraints: false,
    as: 'worker'
  })





  // --------FIN DE RELACION SEQUALIZE-----------//


  // para validad que la base de datos esta bien configurada
  sequelize.sync()
  .then(console.log("hola"))
  .catch((err) => {
    console.error(`Server failed to start due to error: ${err}`)
  });

  // configuraciond e la base de datos

 

  const User = setupUser(UserModel)
  const Post = setupPost(PostModel, UserModel)
  

export default {
    User,
    Post
  }
