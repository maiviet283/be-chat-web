require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('✅ Kết nối MongoDB thành công!');
    } catch (err) {
        console.error('❌ Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
