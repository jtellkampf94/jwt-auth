import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./UserResolver";

(async () => {
  const app = express();
  app.get("/", (req, res) => res.send("hello"));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver]
    })
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server listening on port 4000");
  });
})();
