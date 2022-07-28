import {ExpressAdapter} from './infra/http/express'

const server = new ExpressAdapter()

server.listen(3333, () => console.log('serverOn'))