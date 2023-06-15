import { ApiError } from "../errors/Api.error.js"
// import { generateWhatsapp } from "../utils/twilio.js"

export const errorMiddlewares = async (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            status: false,
            error: err.message
        })
    }

    console.error({error: err.message, stack: err.stack})
    // await generateWhatsapp(err)
    return res.status(500).json({
        status: false,
        error: 'Internal Server Error'
    })
}