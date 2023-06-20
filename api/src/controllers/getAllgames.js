const {infoDB, getApiInfo} = require('../utils/index');

const getAllGames = async(req,res) => {
    try {
        const apiGames = await getApiInfo();
        const gamesDB = await infoDB();
        const allGames = apiGames.concat(gamesDB);
        return res.status(200).json(allGames);
        
    } catch (error) {
        return res.status(500).json({err: error.message});
    }
};

module.exports= getAllGames;