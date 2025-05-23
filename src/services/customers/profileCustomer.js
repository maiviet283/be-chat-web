const Customer = require('../../models/customers.model')

const getCustomerProfile = async (userId) => {
    const customer = await Customer.findById(userId).select('_id name avatar email username');
    if (!customer) {
        throw new Error('Người dùng không tồn tại');
    }
    return customer;
};

const getUsernameById = async (userId) => {
    const username = await Customer.findById(userId).select('_id username')
    if (!username) {
        throw new Error('Username Không Tồn Tại')
    }
    return username
}

module.exports = { getCustomerProfile, getUsernameById };
