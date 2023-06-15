import { __dirname } from "../utils/utils.js"
import { routes } from "../routes/index.js"
import {errorMiddlewares} from '../middlewares/Errors.middleware.js'
import { passportConfig } from "./passport.config.js"
import passport from "passport"
import cookieParser from "cookie-parser"
import { COOKIE_SECRET, WHITE_LIST } from "../env/vars.env.js"
import cors from 'cors'

export const appConfig = async (app, express) => {
    // config
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(express.static(__dirname + '../../public'))
    app.use(cors({
        origin: WHITE_LIST,
        credentials: true
    }))
    //cookie
    app.use(cookieParser(COOKIE_SECRET))
    //passport
    await passportConfig()
    app.use(passport.initialize())
    //router
    await routes(app)
    //middlewares
    app.use(errorMiddlewares)
}