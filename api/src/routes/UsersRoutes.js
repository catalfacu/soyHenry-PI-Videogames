const {Router} = require('express');
const usersRouter = Router();
const bcrypt = require('bcrypt');
const postUser = require('../controllers/users/PostUser');
const authuser = require('../controllers/auth/authenticateUser');
const authmiddle = require('../middleware/Authmiddleware');
const authenticatedUser = require('../controllers/auth/authenticatedUser');

//?----------- POST USER ---------------

usersRouter.post('/', async(req,res)=>{
    let {
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
        if(password) password = await bcrypt.hash(password, 10);

    const newUser = await postUser(nickname,name,lastname,birthday,password,email);
    return res.status(200).json(newUser);

    } catch (error) {
       return res.status(500).json({err: error.message}); 
    }
});

//?------------------ AUTH USER ----------------------------------

usersRouter.post('/auth', async(req,res)=>{
    const {email,password} = req.body;

    try {
        if(!email || !password) {
            return res.status(400).json({err: 'datos incompletos'}) }

        const auth = await authuser(email,password);
        if(!auth) {
            return res.status(400).json({err: 'datos incorrectos'});
        };
        return res.status(200).json(auth);
    } catch (error) {
        return res.status(500).json({err: error.message})
    }
})

usersRouter.get('/auth',authmiddle, async(req,res)=> {
    try {
        const {nickname} = req.user;
        const user = await authenticatedUser(nickname);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
})

module.exports = usersRouter;