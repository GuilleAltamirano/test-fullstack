import express from 'express'
import next from 'next'
import commander from './utils/commander.js'
import { appConfig } from './config/app.config.js'
import { socketConfig } from './config/socket.config.js'
import { PORT } from './env/vars.env.js'

const mode = commander.mode

const dev = mode !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(async () => {
    const app = express()

    await appConfig(app, express)

    app.all('*', (req, res) => {
        return handle(req, res)
    })

    const httpServer = app.listen(PORT, () => {
        console.info(`Server http run in route localhost:${PORT} ✅`)
        const memoryUsage = (process.memoryUsage().rss / (1024 * 1024)).toFixed(2)
        console.info(`Memory usage = ${memoryUsage}mb ♻️`)
    })

    await socketConfig(httpServer)
})