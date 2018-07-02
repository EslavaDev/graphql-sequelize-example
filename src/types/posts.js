export default `


    type Post {
        id: Int!
        description: String!
        status: String
        direction: String!
        price: Int
        workerId: Int
        worker: User
        userId: Int
        client:User
        createdAt: String
    }
    input iPost{
        id: Int
        description: String
        direction: String
    }

    input iTemp{
        user: Int
        worker: Int
    }

    type Query{
        getPost(id: Int!): Post!

    }


    type Mutation{
        createPost(post: iPost, temp: iTemp): Post!
        workerPost(post: iPost, temp: iTemp): Post!
    }
`;