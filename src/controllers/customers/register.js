const { createCustomer } = require('../../services/customers/createCustomer')

const register = async (req, res) => {
    try {
        const customer = await createCustomer(req.body);
        res.status(201).json({
            message: 'Đăng ký thành công',
            user: {
                name: customer.name,
                email: customer.email,
                username: customer.username,
            }
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    register
};