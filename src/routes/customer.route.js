const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/authMiddleware');

const {register} = require('../controllers/customers/register')
const {login} = require('../controllers/customers/login')
const { profile } = require('../controllers/customers/profile');


router.post('/register', register)
router.post('/login', login)
router.get('/me', authMiddleware, profile);

module.exports = router