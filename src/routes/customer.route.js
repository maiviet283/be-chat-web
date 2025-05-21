const express = require('express')
const router = express.Router()

const {register} = require('../controllers/customers/register')
const {login} = require('../controllers/customers/login')


router.post('/register', register)
router.post('/login', login)

module.exports = router