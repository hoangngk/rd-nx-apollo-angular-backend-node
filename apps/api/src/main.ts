import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { connectDb } from './app/database/index'
import { resolvers, typeDefs } from './app/graphql'

async function startApolloServer(app: Application) {
  const db = await connectDb()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  })
  await server.start()
  server.applyMiddleware({ app, path: '/api' })

  app.listen(process.env.PORT, () =>
    console.log(`GraphQL API is running on http://localhost:${process.env.PORT}`)
  )
}

startApolloServer(express())
