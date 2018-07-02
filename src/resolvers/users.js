export default {
    
    Query:{
        message: ( parent, args, context ) => "Hola Mundo",
        getAllUser: (parent, args, {models} ) => models.User.findAll(),
        getOneUser: (parent, args, {models}) => models.User.findById(args.id)
    },

    Mutation:{
        createUser: async(parent, args, {models}) => {
            const user = await models.User.createOrUpdate(
                args
            )
            return user
        }
    }
}