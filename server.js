//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./models')
const userRoutes = require ('./Routes/userRoutes')
const cors = require('cors');

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
// app.use(cors);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//routes for the user API
app.use('/api/users', userRoutes);
//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))