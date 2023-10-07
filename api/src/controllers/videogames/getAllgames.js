const {infoDB, getApiInfo} = require('../../utils/index');

const getAllGames = async() => {
    const apiGames = await getApiInfo();
    const gamesDB = await infoDB();
    const allGames = [...gamesDB,...apiGames];                  
    return allGames;
};

module.exports= getAllGames;