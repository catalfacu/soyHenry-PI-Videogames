const axios = require('axios');
const {gamesInfo, dBInfoId} = require('../utils/index');
const URL = "https://api.rawg.io/api/games/";
const {API_KEY} = process.env;


const getGameById = async (req,res) => {
 try {
    const {id} = req.params
if(Number(id)) {
    const response = await axios(`${URL}${id}?key=${API_KEY}`);         //TODO: si el id es un numero hago una peticion de tipo get con un id para que me traiga la informacion del juego que requiero
    const game = response.data;
    const apiGame = gamesInfo(game);
    return res.status(200).json(apiGame); 
    }
else if(!Number(id)) {
    const dbGame = dBInfoId(id);                                        //TODO: si el id no es un numero, devuelvo la info del juego de la db
    return res.status(200).json(dbGame);
}

 } catch (error) {
    return res.status(404).json({err: error.message});
 }
};

module.exports = getGameById;