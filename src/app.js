import express from 'express'
import { appConfig } from './config/app.config.js'
import { socketConfig } from './config/socket.config.js'
import { PORT } from './env/vars.env.js'

const app = express()

await appConfig(app, express)

const httpServer = app.listen(PORT, () => {
    console.info(`Server http run in route localhost:${PORT} ✅`)
    const memoryUsage = (process.memoryUsage().rss / (1024 * 1024)).toFixed(2)
    console.info(`Memory usage = ${memoryUsage}mb ♻️`)
})

await socketConfig(httpServer)