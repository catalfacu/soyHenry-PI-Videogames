const { Router } = require('express');
const genderRouter = require('./genresRouter');
const videogamesRouter = require('./videogamesRoutes');
const usersRoutes = require('./UsersRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//?---------- VIDEOGAMES ROUTES ---------------
router.use("/videogames", videogamesRouter);


//?------------ GENRES ROUTES ---------------------------
router.use("/genres", genderRouter);

//?------------ USERS ROUTES --------------------

router.use("/users", usersRoutes);



module.exports = router;
