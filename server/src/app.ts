import express from 'express'
import ohmValueRoutes from './routes/ohmValueRoutes.ts'
import cors from 'cors'
const app = express()

const allowedOrigins = ['http://localhost:5173']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', ohmValueRoutes)

export default app
