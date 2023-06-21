const { Router } = require('express');
const getAllGames = require('../controllers/getAllgames');
const getGameById = require('../controllers/getGameId');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//GET /videogames
//GET /videogames/name?="..."
router.get("/videogames", getAllGames);
//GET /videogames/:id
router.get("/videogames/:id" , getGameById)
//POST /videogames
//GET /genres
module.exports = router;
