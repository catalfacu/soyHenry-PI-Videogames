require('dotenv').config();
const { Op } = require('sequelize');
const {Videogame, Genre} = require('../db');

//-------------DATABASE INFO---------

const dBInfoId = async(idGame) => {
    const gameDb = await Videogame.findOne({
        where: {
            id: idGame }
        ,
        include: {
            model: Genre,                        
            attributes: ['nombre'],                   
            through: {
                attributes: [] 
        }
      }
    });
        const videogame = gameDb;

    const gameFound = {
            id: videogame.id,
            name: videogame.nombre,
            description: videogame.descripcion?videogame.descripcion: 'Not description',
            platforms: videogame.plataformas.map(plataforma => plataforma),
            background_image: videogame.imagen,
            released: videogame.fecha_de_lanzamiento,
            rating: videogame.rating,
            genres: videogame.genre.map(genre => genre.nombre)
        }
       return gameFound;
};

module.exports = { dBInfoId };