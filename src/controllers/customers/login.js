const { loginCustomer } = require('../../services/customers/loginCustomer');

const login = async (req, res) => {
    try {
        const customer = await loginCustomer(req.body);

        if (!customer.isActive) {
            return res.status(403).json({ error: 'Tài khoản của bạn đã bị hạn chế hoặc bị cấm.' });
        }

        res.status(200).json({
            message: 'Đăng nhập thành công',
            data: {
                accessToken: customer.accessToken,
                refreshToken: customer.refreshToken,
            }
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    login
};
