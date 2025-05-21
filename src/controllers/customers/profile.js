const { getCustomerProfile } = require('../../services/customers/profileCustomer');

const profile = async (req, res) => {
    try {
        const customer = await getCustomerProfile(req.user.id);
        res.status(200).json({ user: customer });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { profile };
