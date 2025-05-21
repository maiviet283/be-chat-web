require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./src/configs/database');
const configViewEngine = require('./src/configs/viewEngine')

const homeRoutes = require('./src/routes/home.route')
const customerRoutes = require('./src/routes/customer.route')

// config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT
const host_name = process.env.HOST_NAME

// config template engine and static files
configViewEngine(app)

app.use('/media/customers', express.static('src/media/customers'));

app.use('/', homeRoutes)
app.use('/api/customers', customerRoutes)

connectDB().then(() => {
    app.listen(port, host_name, () => {
        console.log(`🚀 Server chạy tại: http://${host_name}:${port}`);
    });
});