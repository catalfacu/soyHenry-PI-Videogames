const { Router } = require('express');
const { postVideogame } = require('../controllers/postVideogame');
const genderRouter = require('./genresRouter');
const videogamesRouter = require('./videogamesRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//?----------GET ALLGAMES Y GET BY NAME---------------
router.use("/videogames", videogamesRouter);


//?-----------GET /videogames/:id---------------------
//router.get("/videogames/:id" , getGameById);


//?------------GET /genres ---------------------------
router.use("/genres", genderRouter);


//?------------POST /videogames-----------------------

//router.post("/videogames", postVideogame);


module.exports = router;
