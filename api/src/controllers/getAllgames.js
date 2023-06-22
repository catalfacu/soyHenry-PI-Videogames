const {infoDB, getApiInfo} = require('../utils/index');


//TODO: NI BIEN SE TENGA TIEMPO REFACTORIZAR EL CODIGO! 

const getAllGames = async() => {
    const apiGames = await getApiInfo();
    const gamesDB = await infoDB();
    const allGames = [...gamesDB,...apiGames];                  
    return allGames;
};

module.exports= getAllGames;