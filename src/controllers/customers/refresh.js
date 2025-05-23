const {getUsernameById} = require('../../services/customers/profileCustomer')

const refresh_token = async (req, res) => {
    try {
        username = await getUsernameById(req)

    } catch (error) {
        
    }
}