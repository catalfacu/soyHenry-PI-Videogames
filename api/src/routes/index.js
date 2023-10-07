const { Router } = require('express');
const genderRouter = require('./genresRouter');
const videogamesRouter = require('./videogamesRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//?---------- VIDEOGAMES ROUTES ---------------
router.use("/videogames", videogamesRouter);


//?------------ GENRES ROUTES ---------------------------
router.use("/genres", genderRouter);



module.exports = router;
