import { __dirname } from "../utils/utils.js"
import { routes } from "../routes/index.js"
import {errorMiddlewares} from '../middlewares/Errors.middleware.js'
import { passportConfig } from "./passport.config.js"
import passport from "passport"
import cookieParser from "cookie-parser"
import { COOKIE_SECRET } from "../env/vars.env.js"


export const appConfig = async (app, express) => {
    // config
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(express.static(__dirname + '../../public'))
    //cookie
    app.use(cookieParser(COOKIE_SECRET))
    //passport
    passportConfig()
    app.use(passport.initialize())
    //router
    await routes(app)
    //middlewares
    app.use(errorMiddlewares)
}