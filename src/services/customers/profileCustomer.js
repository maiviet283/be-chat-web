const Customer = require('../../models/customers.model')

const getCustomerProfile = async (userId) => {
    const customer = await Customer.findById(userId).select('_id name avatar email username');
    if (!customer) {
        throw new Error('Người dùng không tồn tại');
    }
    return customer;
};

module.exports = { getCustomerProfile };
