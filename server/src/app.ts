import express from 'express'
import ohmValueRoutes from './routes/ohmValueRoutes.ts'
import cors from 'cors'
const app = express()

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:5173']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

// Then pass these options to cors:
app.use(cors(options))
// check if we need this body parsers not necessary
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', ohmValueRoutes)

export default app
