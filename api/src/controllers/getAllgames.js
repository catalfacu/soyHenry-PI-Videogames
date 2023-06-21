const axios = require('axios');
const {infoDB, getApiInfo, gameByNameDb, gamesInfo} = require('../utils/index');
const URL= "https://api.rawg.io/api/games?search="
const {API_KEY} = process.env;

//TODO: NI BIEN SE TENGA TIEMPO REFACTORIZAR EL CODIGO! 

const getAllGames = async(req,res) => {
    try {
        const { name } = req.query;
        if(name) {                                                                //Si existe name en la url busca tanto en DB como en la api y guarda los primeros 15 resultados en un array y lo devuelve
        const gamesDb = await gameByNameDb(name);
        const {data: {results} } = await axios (`${URL}${name}&key=${API_KEY}`);
        const gamesApi = results.map(game => gamesInfo(game));
        const allGames = [...gamesDb,...gamesApi];
        const first15Games = allGames.slice(0,15);                                                                      
        return res.status(200).json(first15Games);

        } else {

        const apiGames = await getApiInfo();
        const gamesDB = await infoDB();
        const allGames = [...gamesDB,...apiGames];                  //Si no existe name en la url, muestra todos los juegos tanto de DB como de la Api
        return res.status(200).json(allGames);
        }
        
    } catch (error) {
        return res.status(500).json({err: error.message});
    }
};

module.exports= getAllGames;