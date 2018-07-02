export default {
    
  Query:{
      getPost: (parent, args, {models}) => models.Post.findById(args.id)
  },

  Mutation:{
      createPost: async(parent, args, {models}) => {
          const posts = await models.Post.createOrUpdate(args.post, args.temp)
          return posts
      },
      workerPost: async(parent, args, {models}) => {
        const posts = await models.Post.createOrUpdate(args.post, args.temp)
        return posts
    }
  }
}