const { Users } = require('../../db');

const authenticatedUser = async(nickname) => {
    try {
        const user = await Users.findByPk(nickname)
        if(!user) {
            throw new Error('usuario no encontrado');
        }
        return user
    } catch (error) {
        throw error;
    }
};

module.exports = authenticatedUser;