const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    avatar: { type: String, default: '', },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true, },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    isActive: { type: Boolean, default: true },
    isOnline: { type: Boolean, default: false, },
    lastSeen: { type: Date, default: Date.now, },
    createdAt: { type: Date, default: Date.now, },
}, {
    timestamps: true
});

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;