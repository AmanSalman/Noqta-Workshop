import express from 'express'
import cors from 'cors'
import {products} from './products.js';
const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/products', (req, res) => {
    res.json({message:"success", products})
})
app.listen(3000 || process.env.PORT, () => {
    console.log('Example app listening on port 3000!')
})