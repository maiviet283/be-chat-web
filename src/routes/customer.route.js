const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/authMiddleware');

const {register} = require('../controllers/customers/register')
const {login} = require('../controllers/customers/login')
const { profile } = require('../controllers/customers/profile');
const {refresh_token} = require('../controllers/customers/refresh')


router.post('/register', register)
router.post('/login', login)
router.get('/me', authMiddleware, profile);
router.post('/refresh-token',authMiddleware, refresh_token);

module.exports = router