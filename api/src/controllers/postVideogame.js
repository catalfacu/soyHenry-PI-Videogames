const {Videogame, Genre} = require('../db');

const postVideogame = async (name,description,platforms,image,released,rating,genre,) => {
    const newGame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        released,
        rating,
        genre,
    });

    const genreIds = [];

    for(const genreName of genre) {
      const genre = await Genre.findOne({
        where: {
          name: genreName,
        },
      });
      if (genre) {
        genreIds.push(genre.id);
      }
    }

    await newGame.addGenre(genreIds);

    return newGame;
};

module.exports = postVideogame;