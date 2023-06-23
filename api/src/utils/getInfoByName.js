
const {Op} = require('sequelize');
const { Videogame, Genre } = require('../db');



//!--------INFO DB---------------

const gameByNameDb = async(name) => {
    const gamesDb = await Videogame.findAll({
        where: {
            nombre: {
                [Op.iLike]:`%${name}%`
            }
        },
        include: {
            model: Genre,                        
            attributes: ['nombre'],                   
            through: {
                attributes: [] 
        }
      }
    })

    const gamesFound = gamesDb.map( game => {
        return {
        id: game.id,
        name: game.nombre,
        description: game.descripcion? game.descripcion : 'sin descripcion',
        platforms: game.platformas?.map((platforma) => platforma),
        background_image: game.imagen,
        released: game.fecha_de_lanzamiento,
        rating: game.rating,
        genres: game.genres?.map((genre) => genre.nombre),
        }
    });
    return gamesFound;
}


module.exports = {gameByNameDb};