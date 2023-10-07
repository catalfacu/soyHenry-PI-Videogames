const axios = require('axios');
const URL = "https://api.rawg.io/api/genres";
const {API_KEY} = process.env;


//--------Genres de la api------

const apiGenres = async() => {
    const {data: {results} } = await axios(`${URL}?key=${API_KEY}`);
    const genres = results.map(genre => genre.name);
    return genres;
};

module.exports= { apiGenres };