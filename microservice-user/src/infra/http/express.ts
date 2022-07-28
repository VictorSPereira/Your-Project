import { Handler, HttpServer, Method } from "./expressAdapter";
import express, {Express} from "express"

export class ExpressAdapter implements HttpServer<Express>{
    private app: Express;
    
    constructor(){
        this.app = express()
        this.app.use(express.json());
    }

    getApp(): Express {
        return this.app
    }
    listen(port: number, callback: () => void): void {
        this.app.listen(port, callback)
    }
    registerMiddlewere(handler: Handler): void {
        throw new Error("Method not implemented.");
    }
    on(method: Method, route: string, handler: Handler, ...middlewere: Handler[]): void {
        if(middlewere.length > 0){
            this.app[method](route, ...middlewere, handler)
            return;
        }
        this.app[method](route, handler)
    }

}