require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
};

module.exports = { generateAccessToken, generateRefreshToken, verifyToken };
