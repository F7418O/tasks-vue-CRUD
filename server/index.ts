import express from 'express'
import morgan from 'morgan' // Morgan es un Middleware
import cors from 'cors' //Middleware
import router from './routes/index'
import { startConnections } from './database'

const app = express()
startConnections()

app.use(cors())//Permite peticiones de diferentes puertos
app.use(morgan('dev'))//Detalla las peticiones hechas
app.use(express.json())
app.use('/api',router)

app.set('port', 4040)
app.listen(app.get('port'), () => {
    console.log(`Listening in port ${app.get('port')}`)
})

