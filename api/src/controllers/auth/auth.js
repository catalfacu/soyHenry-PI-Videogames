const {Users} = require('../../db');
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET_WORD} = process.env;

const authUser = async(email,password) => {
    try {
        const user = await Users.findOne({
            where: {email:email}
        });

        const passwordValid = await bcryptjs.compare(password, user.password);

        if(!user || !passwordValid) {
            throw new Error('Usuario o password incorrectos!!!');
        };

        const payload = {
            user: {
                email: user.email,
                password: user.password,
            }
        };

        let token= jwt.sign(payload,SECRET_WORD,{expiresIn: '15d'});
        return token;

    } catch (error) {
        return console.log(error);
    }
};

module.exports = authUser;
