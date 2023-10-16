const {Users} = require('../../db');

const postUser = async (nickname,name,lastname,birthday,password,email) => {
    const newUser = await Users.create({
        nickname,
        name,
        lastname,
        birthday,
        password,
        email,
    });

    return newUser;
};


module.exports = postUser;