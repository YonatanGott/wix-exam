import express from 'express'
import router from './routes/index'
import cors from 'cors'

// express app
const app = express()
const corsConfig = {
  origin: true,
  credentials: true,
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig))

// middleware
app.use(express.json())

// routes
app.use('/', router())

// app
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
