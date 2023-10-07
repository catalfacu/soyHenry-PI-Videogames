const axios = require('axios');
const {gamesInfo, dBInfoId} = require('../../utils/index');
const URL = "https://api.rawg.io/api/games/";
const {API_KEY} = process.env;


const getGameById = async (id) => {
    if(Number(id)) {
        const response = await axios(`${URL}${id}?key=${API_KEY}`);         //TODO: si el id es un numero hago una peticion de tipo get con un id para que me traiga la informacion del juego que requiero
        const game = response.data;
        const apiGame = gamesInfo(game);
        return apiGame; 
        }
    else if(!Number(id)) {
        const dbGame = dBInfoId(id);                                        //TODO: si el id no es un numero, devuelvo la info del juego de la db
        return dbGame;
    } else {
        throw new Error(' the ID not exist');
    }
};

module.exports = getGameById;