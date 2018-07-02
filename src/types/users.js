export default `


    type User {
        id: Int!
        password: String!
        name: String!
        lastname: String!
        phone: String!
        identification: String!
        email: String!
        direction: String!
    }

    type Query{
        message: String
        getOneUser(id: Int!): User!
        getAllUser: [User!]!
    }

    type Mutation{
        createUser(
            email: String!, 
            password: String!,
            name: String!, 
            lastname: String!,
            phone: String!, 
            identification: String!,
            direction: String!
        ): User!
    }
`;
