const {Videogame, Genre} = require('../db');

const postVideogame = async (nombre,descripcion,plataformas,imagen,fecha_de_lanzamiento,rating,generos) => {
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

    return newGame;
};

module.exports = postVideogame;