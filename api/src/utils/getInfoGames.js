require('dotenv').config();
const axios = require('axios');
const { Op } = require('sequelize');
const {API_KEY} = process.env;
const {Videogame, Genre} = require('../db');
const URL = "https://api.rawg.io/api/games";


//-------------------GET GAMES FOR API AND DB--------------------------

//*GET GAMES FOR API
const gamesInfo = (videogame) => {
    return {
        id: videogame.id,
        name: videogame.name,
        description: videogame.description?videogame.description:'not description',
        platforms: videogame.platforms.map(platform=>platform.platform.name),
        image: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genre: videogame.genres.map( genre => genre.name )
    }
};

const getApiInfo = async () => {
    let allInfo = [];

    const responses = await Promise.all([
        axios(`${URL}?key=${API_KEY}`),
        axios(`${URL}?key=${API_KEY}&page=2`),
        axios(`${URL}?key=${API_KEY}&page=3`),         //*en el array responses guardo la respuesta del axios a la api,de las primeras 5 paginas
        axios(`${URL}?key=${API_KEY}&page=4`),
        axios(`${URL}?key=${API_KEY}&page=5`),
    ]);

    responses.forEach(response=>{
        allInfo = allInfo.concat(response.data.results); //? en el array allInfo guardo la respuesta de cada promesa del array responses 
    });

    const allGamesApi = allInfo.map( game => gamesInfo(game) ); //? en este array guardo solo la info que requiero de todos los juegos
    
    return allGamesApi;
}; 

//? GET GAMES FOR DB

const infoDB = async () => {
    const dbVideogames = await Videogame.findAll({
        include: {
            model: Genre,                             //*Mediante el metodo findAll de sequelize, busco todos los registros de videogames,
            attributes: ['nombre'],                   //* incluyendo sus relaciones con el modelo Genres
            through: {
                attributes: []
            }
        }
    });

   let gameDBInfo = dbVideogames.map(videogame => {
    return {
        id: videogame.id,
        name: videogame.nombre,
        description: videogame.descripcion?videogame.descripcion: 'Not description',
        platforms: videogame.plataformas.map(plataforma => plataforma),
        background_image: videogame.imagen,
        released: videogame.fecha_de_lanzamiento,
        rating: videogame.rating,
        genres: videogame.genre.map(genre => genre.nombre)
    }
   });
   return gameDBInfo; 
};

module.exports = {
    gamesInfo,
    getApiInfo,
    infoDB
};