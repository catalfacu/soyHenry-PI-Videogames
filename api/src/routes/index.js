const { Router } = require('express');
const getAllGames = require('../controllers/getVideogames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//GET /videogames
router.get("/videogames", getAllGames);
//GET /videogames/:id
//GET /videogames/name?="..."
//POST /videogames
//GET /genres
module.exports = router;
