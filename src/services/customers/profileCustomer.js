const Customer = require('../../models/customers.model')

const getCustomerProfile = async (userId) => {
    const customer = await Customer.findById(userId).select('_id name avatar email username');
    if (!customer) {
        throw new Error('Người dùng không tồn tại');
    }
    return customer;
};

const getUsernameById = async (userId) => {
    const user = await Customer.findById(userId).select('username -_id');
    if (!user || !user.username) {
        throw new Error('Username không tồn tại');
    }
    return user.username;
}

module.exports = { getCustomerProfile, getUsernameById };
