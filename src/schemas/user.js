'use strict'

module.exports = function setupUser (UserModel) {
  async function findById (id) {
    return await UserModel.findById(id)
  }

  async function createOrUpdate (user) {
    const cond = {
      where: {
        id: user.id
      }
    }

    const existingAgent = await UserModel.findOne(cond)

    if (existingAgent) {
      const updated = await UserModel.update(user, cond)
      return updated ? UserModel.findOne(cond) : existingAgent
    }

    const result = await UserModel.create(user)
    return result.toJSON()
  }

  function findByStatus () {
    return UserModel.findOne({
      where: {
        status: true
      }
    })
  }

  function findAll () {
    return UserModel.findAll()
  }

  function findConnected () {
    return UserModel.findAll({
      where: {
        connected: true
      }
    })
  }

  function findByUsername (username) {
    return UserModel.findAll({
      where: {
        name,
        connected: true
      }
    })
  }

  return {
    findById,
    findAll,
    createOrUpdate,
    findByStatus,
    findConnected,
    findByUsername
  }
}
