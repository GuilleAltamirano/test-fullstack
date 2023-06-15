import { mockingProductsController } from "../controllers/testing.controller.js"
import Routers from "./router.js"

class TestingRouter extends Routers {
    constructor () {
        super()
    }

    async init(){
        this.get('/mockingproducts', ['PUBLIC'], mockingProductsController)

    }
}

export const testingRouter = new TestingRouter()
