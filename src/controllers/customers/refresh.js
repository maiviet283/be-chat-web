const {getUsernameById} = require('../../services/customers/profileCustomer')
const {generateAccessToken} = require('../../configs/jwt')

const refresh_token = async (req, res) => {
    try {
        const id = req.user.id
        
        const username = await getUsernameById(id)

        const accessToken = generateAccessToken({ id, username });

        return res.status(200).json({ accessToken });
    
    } catch (error) {
        console.error('Refresh token error:', error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = {refresh_token}