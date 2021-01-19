const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const usersController = require("./usersController");

// Construct a schema, using GraphQl schema language
// type query indicates all the 'get' method. while type User defines the structures of the nested object
const schema = buildSchema(`
type Query {
    helloWorld: String,
    user(userNum: Int): userGames,
    data(data: String): [hash],
}
type userGames {
    code: Int,
    userNum: Int,
    nickName: String
}
type hash {
    ActionCost: Int,
    Area: Int
}
`);

const rootResolver = {
  helloWorld: "hello world",
  users: res => usersController.findUserGames(res.userNum),
  data: () => usersController.findData(this.data)
};

const graphql = graphqlHTTP({
  schema,
  rootValue: rootResolver,
  graphiql: true,
  pretty: true,
});

module.exports = graphql;
