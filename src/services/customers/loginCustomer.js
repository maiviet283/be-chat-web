const Customer = require('../../models/customers.model');
const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../../configs/jwt');


const loginCustomer = async (data) => {
    const { username, email, password } = data;

    if ((!username && !email) || !password) {
        throw new Error('Vui lòng nhập username hoặc email và mật khẩu');
    }

    const user = await Customer.findOne({
        $or: [
            { username: username || null },
            { email: email || null }
        ]
    });

    if (!user) {
        throw new Error('Tài khoản không tồn tại');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Mật khẩu không đúng');
    }

    const accessPayload = {
        id: user._id,
        username: user.username,
    };

    const refreshPayload = {
        id: user._id,
        type: "refresh"
    };

    const accessToken = generateAccessToken(accessPayload);
    const refreshToken = generateRefreshToken(refreshPayload);

    return {
        accessToken,
        refreshToken,
        isActive: user.isActive,
    };
};

module.exports = {
    loginCustomer
};
