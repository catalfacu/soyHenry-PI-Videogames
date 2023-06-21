const {Videogame, Genre} = require('../db');

const postVideogame = async (req,res) => {
    try {
        const {nombre,descripcion,plataformas,imagen,fecha_de_lanzamiento,rating,generos} = req.body;
        if(!nombre || !descripcion || !plataformas || !imagen || !fecha_de_lanzamiento || !rating || !generos) {
            return res.status(400).send("faltan completar datos");
        }
        const newGame = await Videogame.create({
            nombre,
            descripcion,
            plataformas,
            imagen,
            fecha_de_lanzamiento,
            rating,
        });

        const genreIds = [];
        for(const genreName of generos) {
            const genre = await Genre.findOne({
                where: {
                    nombre: genreName,
                },
            });
            if(genre) {
                genreIds.push(genre.id);
            }
        }

        await newGame.addGenre(genreIds);

        return res.status(200).json(newGame);
    } catch (error) {
        return res.status(500).json({err: error.message});
    }
};

module.exports = { postVideogame };