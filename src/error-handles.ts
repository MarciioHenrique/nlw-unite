import { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { BadRequest } from "./routes/errors/BadRequest";

type FastifyInstanceError = FastifyInstance["errorHandler"]

export const errorHandler: FastifyInstanceError = (error, request, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: "Error during validation",
            errors: error.flatten().fieldErrors
        })
    }

    if (error instanceof BadRequest) {
        return reply.status(400).send({
            message: error.message
        })
    }

    return reply.status(500).send({
        message: "Internal server error"
    })
}