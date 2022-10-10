import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import excusesRoutes from './routes/excuses.js'
import morgan from 'morgan'

const app = express()

const PORT = process.env.PORT || 3000

class Server {
    constructor() {
        this.useMiddlewares()
        this.addRoutes()
        this.listenServer()
    }

    useMiddlewares() {
        app.use(morgan('dev'))
        app.use(cors())
        app.use(express.json())
    }

    addRoutes() {
        app.use('/excuses', excusesRoutes)
        app.use('/', (req, res) => res.send('Home'))
    }

    listenServer() {
        app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}`))
    }
}

new Server()
