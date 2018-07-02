'use strict'

module.exports = function setupPost (PostModel, UserModel) {
  
  async function findById (id) {
    return await PostModel.findOne({
      where:{id},
      include:[{
        model:UserModel,
        as: "client"
      },
      {
        model:UserModel,
        as: "worker"
      }]
    })
  }

  async function createOrUpdate (post, temp) {

    let user, worker
    if(temp !== null){

    (temp.user) ? user = await UserModel.findOne({
      where: {id: temp.user}
    }) : '';
    
    (temp.worker)? worker = await UserModel.findOne({
      where: {id: temp.worker}
    }) : '';

    if(user){
      Object.assign(post, {userId: user.id})
    }else{
      return {status: 404, message: "trabajador no existe"}
    }

    (worker)?Object.assign(post, {workerId: worker.id}) : "";

  }
  console.log("id",post.id)
    if(post.id){  
    const cond = {
          where: {
            id: post.id
          },
          include:[{
            model:UserModel,
            as: "client"
          },
          {
            model:UserModel,
            as: "worker"
          }]
        }
        if(post){
        const existingClasif = await PostModel.findOne(cond)
    
        if (existingClasif !== null) {
          const updated = await PostModel.update(post, cond);
          const newUpdate = await PostModel.findOne(cond);
          return updated ? newUpdate : existingClasif
        }else{
          return "no se pudo actualizar el post"
        }
      }
    }
        const result = await PostModel.create(post)
        return result.toJSON()
        
      }

  async function findByStatus () {
    return await PostModel.findOne({
      where: {
        status: true
      }
    })
  }

  async function findAll () {
    return await PostModel.findAll({
      include: [{
        model:UserModel,
        as: "client"
      },
      {
        model:UserModel,
        as: "worker"
      }
    ],
    raw: true
    })
  }

  return {
    findById,
    findAll,
    createOrUpdate,
    findByStatus
  }
}
