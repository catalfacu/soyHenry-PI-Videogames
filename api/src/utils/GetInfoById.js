require("dotenv").config();
const { Videogame, Genre } = require("../db");

//-------------DATABASE INFO---------

const dBInfoId = async (idGame) => {
  const gameDb = await Videogame.findOne({
    where: {
      id: idGame,
    },
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const videogame = gameDb;

  const gameFound = {
    id: videogame.id,
    name: videogame.name,
    description: videogame.description
      ? videogame.description
      : "Not description",
    platforms: videogame.platforms.map((platform) => platform),
    image: videogame.image,
    released: videogame.released,
    rating: videogame.rating,
    genres: videogame.genres.map((genre) => genre.name),
    createdInDB: videogame.createdInDB,
  };
  return gameFound;
};

module.exports = { dBInfoId };
