import express from 'express'
import connectDB from './config/db.js'
import { config } from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import { protect } from './middleware/authMiddleware.js'


config()

const app = express()
app.use(express.json())

connectDB()


app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} on ${PORT}`))