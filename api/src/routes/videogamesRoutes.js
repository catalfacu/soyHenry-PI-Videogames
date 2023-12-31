const {Router} = require('express');
const videogamesRouter = Router();
const getAllGames = require('../controllers/videogames/getAllgames');
const gamesByName = require('../controllers/videogames/getGamesByName');
const getGameById = require('../controllers/videogames/getGameId');
const postVideogame = require('../controllers/videogames/postVideogame');

//?---------GET ALLGAMES OR BY NAME ---------------
videogamesRouter.get('/' , async(req,res) => {
    const { name } = req.query;
    const allGames = await getAllGames();
    try {
        if(name) {
            const games = await gamesByName(name.toLocaleLowerCase());
            if(games.length === 0) {
                return res.status(404).send('the game you are looking for does not exist');
            }
            return res.status(200).json(games);
        };
        return res.status(200).json(allGames);
    } catch (error) {
        return res.status(500).json({err:error.message});
    }
});

//?---------GET BY ID ---------------

videogamesRouter.get('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const game = await getGameById(id);
        return res.status(200).json(game);
    } catch (error) {
        return res.status(404).json({ err: error.message });
    }
})


//?---------POST VIDEOGAME ---------------

videogamesRouter.post('/' ,async(req,res) => {
    const {name,description,platforms,image,released,rating,genre} = req.body;
    try {
        if(!name || !description || !platforms || !image || !released || !rating || !genre) {
            return res.status(400).send("faltan completar datos");
        };
        const newGame = await postVideogame(name,description,platforms,image,released,rating,genre);
        return res.status(200).json(newGame);
    } catch (error) {
    return res.status(500).json({err: error.message});
    }
});

module.exports = videogamesRouter;