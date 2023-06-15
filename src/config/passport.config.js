import passport from "passport"
import jwt from "jsonwebtoken"
import { Strategy, ExtractJwt } from "passport-jwt"
import GoogleStrategy from "passport-google-oauth2"
import { cookieExtractor, googleController,  } from "../controllers/sessions.controller.js"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET_KEY } from "../env/vars.env.js"

export const generateToken = async (user) => {return jwt.sign({user}, JWT_SECRET_KEY, {expiresIn: "1h"})}

export const passportConfig = async () => {
    passport.use('jwt', new Strategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: JWT_SECRET_KEY
    }, async (jwt_payload, done) => {try {return done(null, jwt_payload)} 
        catch (error) {done(error)}
    }))

    passport.use('google', new GoogleStrategy.Strategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/api/sessions/auth/google/callback",
        passReqToCallback: true,
        scope: [ 'email', 'profile' ]
    }, googleController))
}