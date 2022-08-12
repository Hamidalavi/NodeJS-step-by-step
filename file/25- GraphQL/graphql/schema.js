// const { buildSchema } = require("graphql");

// module.exports = buildSchema(`
//     type RootQuery {
//         hello: String
//     }

//     schema {
//         query: RootQuery
//     }
// `);

// ---

// const { buildSchema } = require("graphql");

// module.exports = buildSchema(`
//     type TestData {
//         text: String!
//         number: Int!
//     }

//     type RootQuery {
//         hello: TestData!
//     }

//     schema {
//         query: RootQuery
//     }
// `);

// ---

const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        email: String!
        password: String
        name: String!
        status: String!
        posts: [Post!]!
    }

    input UserInputData {
        email: String
        name: String
        password: String
    }

    type RootQuery {
        hello: String
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
