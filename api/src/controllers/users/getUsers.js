const {Users} = require('../../db');

const getUsers = async () => {
    const users = await Users.findAll();

    return users;
}

module.exports = getUsers;