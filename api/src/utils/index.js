const { gamesInfo,getApiInfo,infoDB } = require('./getInfoGames');
const {dBInfoId} = require('./GetInfoById');
const {gameByNameDb} = require('./getInfoByName');
module.exports = {
    gamesInfo,
    getApiInfo,
    infoDB,
    dBInfoId,
    gameByNameDb
};