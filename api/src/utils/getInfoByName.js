
const {Op} = require('sequelize');
const { Videogame, Genre } = require('../db');



//!--------INFO DB---------------

const gameByNameDb = async(name) => {
    const gamesDb = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]:`%${name}%`
            }
        },
        include: {
            model: Genre,                        
            attributes: ['name'],                   
            through: {
                attributes: [] 
        }
      }
    })

    const gamesFound = gamesDb.map( game => {
        return {
        id: game.id,
        name: game.name,
        description: game.description? game.description : 'sin descripcion',
        platforms: game.platforms?.map((platform) => platform),
        image: game.image,
        released: game.released,
        rating: game.rating,
        genres: game.genre?.map((genre) => genre.name),
        }
    });
    return gamesFound;
}


module.exports = {gameByNameDb};