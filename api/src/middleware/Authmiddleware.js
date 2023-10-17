const jwt = require('jsonwebtoken');
const {SECRET_WORD} = process.env;

const authmiddle = async (req,res,next) => {
    const token = req.header('x-auth-token');

    if(!token) {
        return res.status(400).json({msg:'no hay token'});
    }

    try {
        const decoded = jwt.verify(token,SECRET_WORD);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(400).json({msg: 'Token no valido'});
    }
}

module.exports = authmiddle;