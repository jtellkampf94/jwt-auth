import express from "express";
import { ApolloServer } from "apollo-server-express";

(async () => {
  const app = express();
  app.get("/", (req, res) => res.send("hello"));

  const apolloServer = new ApolloServer({
    typeDefs: `
    type Query {
      hello: String!
    }
    `,
    resolvers: {
      Query: {
        hello: () => "hello world"
      }
    }
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server listening on port 4000");
  });
})();
