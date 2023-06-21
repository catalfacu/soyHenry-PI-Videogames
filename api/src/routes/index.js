const { Router } = require('express');
const getAllGames = require('../controllers/getAllgames');
const getGameById = require('../controllers/getGameId');
const { getGenres } = require('../controllers/getGenres');
const { postVideogame } = require('../controllers/postVideogame');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//?----------GET ALLGAMES Y GET BY NAME---------------
router.get("/videogames", getAllGames);


//?-----------GET /videogames/:id---------------------
router.get("/videogames/:id" , getGameById);


//?------------GET /genres ---------------------------
router.get("/genres", getGenres);


//?------------POST /videogames-----------------------

router.post("/videogames", postVideogame);


module.exports = router;
