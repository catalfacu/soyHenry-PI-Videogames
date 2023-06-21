const {gameByNameDb} = require('../utils/getInfoByName');

const getGamesbyName = async (req,res) => {
    try {
        const {name} = req.query;
        const games = await gameByName(name);
        return res.json(games);
    } catch (error) {
        return status(500).json({err: error.message});
    }
};

module.exports = getGamesbyName;