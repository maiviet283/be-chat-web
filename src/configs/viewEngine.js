const express = require('express')

const configViewEngine = (app) => {
    app.set('views', './src/views/')
    app.set('view engine','ejs')
    app.use(express.static('public'))
}

module.exports = configViewEngine