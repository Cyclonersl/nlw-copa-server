import Fastify from "fastify";
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from "./routes/pool";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";

async function bootstrap() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true
    })

    await fastify.register(jwt, {
        secret: 'NLW_COPA'
    })

    fastify.register(poolRoutes)
    fastify.register(guessRoutes)
    fastify.register(userRoutes)
    fastify.register(authRoutes)
    fastify.register(gameRoutes)

    await fastify.listen({ port: 3333 })
}

bootstrap()