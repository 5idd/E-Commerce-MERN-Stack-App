import express from 'express'
const app = express()
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/products', productRoutes)
