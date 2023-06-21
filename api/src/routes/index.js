const { Router } = require('express');
const getAllGames = require('../controllers/getAllgames');
const getGameById = require('../controllers/getGameId');
const getGamesbyName = require('../controllers/getGameByName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//GET /videogames
router.get("/videogames", getAllGames);
//GET /videogames/:id
router.get("/videogames/:id" , getGameById)
//GET /videogames/name?="..."
router.get("/videogames/?name=", getGamesbyName);
//POST /videogames
//GET /genres
module.exports = router;
