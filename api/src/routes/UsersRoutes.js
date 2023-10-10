const {Router} = require('express');
const usersRouter = Router();
const postUser = require('../controllers/users/PostUser');

//?----------- POST USER ---------------

usersRouter.post('/', async(req,res)=>{
    const {
        nickname,
        name,
        lastname,
        birthday,
        password,
        email} = req.body;
    
    try {
        if(!nickname || !name || !lastname || !birthday || !password || !email) {
            return res.status(400).json({error: 'Faltan completar datos'});
        };
    const newUser = await postUser(nickname,name,lastname,birthday,password,email);
    return res.status(200).json(newUser);

    } catch (error) {
       return res.status(500).json({err: error.message}); 
    }
});

module.exports = usersRouter;