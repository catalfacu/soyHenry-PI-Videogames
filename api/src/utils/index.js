const { gamesInfo,getApiInfo,infoDB } = require('./getInfoGames');
const {dBInfoId} = require('./GetInfoById');
const {gameByNameDb} = require('./getInfoByName');
const {apiGenres} = require('./GetInfoGenres');
module.exports = {
    gamesInfo,
    getApiInfo,
    infoDB,
    dBInfoId,
    gameByNameDb,
    apiGenres
};