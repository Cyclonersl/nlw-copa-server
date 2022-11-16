import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function gameRoutes(fastify: FastifyInstance) {
    fastify.get('/pools/:id/game', {
        onRequest: authenticate
    }, async (request) => {
        const getPoolParams = z.object({
            id: z.string()
        })

        const { id } = getPoolParams.parse(request.params)

        const games = prisma.game.findMany({
            orderBy: {
                date: 'desc'
            }

        })
    })
}