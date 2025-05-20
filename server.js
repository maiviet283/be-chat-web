require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./src/configs/database');
const configViewEngine = require('./src/configs/viewEngine')

const homeRoute = require('./src/routes/home.route')

// config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// port and host name : server web
const port = process.env.PORT
const host_name = process.env.HOST_NAME

// config template engine and static files
configViewEngine(app)

app.use('/', homeRoute)

connectDB().then(() => {
    app.listen(port, host_name, () => {
        console.log(`🚀 Server chạy tại: http://${host_name}:${port}`);
    });
});