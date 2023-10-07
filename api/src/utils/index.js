const { gamesInfo,getApiInfo,infoDB } = require('./Videogames/getInfoGames');
const {dBInfoId} = require('./Videogames/GetInfoById');
const {gameByNameDb} = require('./Videogames/getInfoByName');
const {apiGenres} = require('./genres/GetInfoGenres');
module.exports = {
    gamesInfo,
    getApiInfo,
    infoDB,
    dBInfoId,
    gameByNameDb,
    apiGenres
};