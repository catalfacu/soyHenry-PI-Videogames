const axios = require('axios');
const URL= "https://api.rawg.io/api/games?search=";
const {API_KEY} = process.env;
const { gameByNameDb, gamesInfo } = require('../../utils/index');

const gamesByName = async (name) => {
    const gamesDb = await gameByNameDb(name);
    
    const { data: {results} } = await axios (`${URL}${name}&key=${API_KEY}`);
    const gamesApi = results.map( game => gamesInfo(game) );

    const allGames = [...gamesDb,...gamesApi];
    const first15Games = allGames.slice(0,15);
    return first15Games;    
};

module.exports = gamesByName;