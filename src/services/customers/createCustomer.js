const Customer = require('../../models/customers.model')
const bcrypt = require('bcryptjs');

const createCustomer = async (data) => {
    const { name, username, email, password } = data;

    if (!name || !username || !email || !password) {
        throw new Error('Vui lòng điền đầy đủ các trường: name, username, email, password');
    }

    const existing = await Customer.findOne({ $or: [{ email }, { username }] });
    if (existing) {
        throw new Error('Email hoặc username đã tồn tại');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = new Customer({
        name,
        username,
        email,
        password: hashedPassword,
    });

    return await newCustomer.save();
}

module.exports = {
    createCustomer
};