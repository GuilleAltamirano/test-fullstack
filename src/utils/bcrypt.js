import { hashSync, genSaltSync, compareSync} from "bcrypt"

export const createHash = async password => hashSync(password, genSaltSync(10))

export const isValidPassword = async (user, password) => compareSync(password, user.password)