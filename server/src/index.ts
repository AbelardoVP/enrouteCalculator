import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { initializeDatabase } from './utils/database.ts'
import ohmValueRoutes from './routes/ohmValueRoutes.ts'
import app from './app.ts'

mongoose.connect('mongodb://localhost:27017/electronicColorsCode').then(() => {
  console.log('DB connected')
  initializeDatabase()
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})
