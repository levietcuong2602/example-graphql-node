const express = require("express");

const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync("**/**/*.graphql");
const resolversArray = loadFilesSync("**/**/*.resolver.js");

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: {
    //   orders: () => require("./graphql/dummy/orders"),
    //   products: () => require("./graphql/dummy/products"),
    // },
    graphiql: true,
  })
);

app.listen(3002, () => {
  console.log("GraphQL server is running on port 3002");
});
