require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require("express");

const userRoutes = require('./routes/users')

const midllewareLogRequest = require('./middleware/logs')



const app = express();

app.use(midllewareLogRequest)
app.use(express.json())

app.use((req, res, next) => {
    console.log('middleware ke dua')
    next()
})

app.use('/users', userRoutes)

app.use('/', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`server behasil di running di port ${PORT}`);
});
