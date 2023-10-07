const { apiGenres } = require('../../utils/index');
const { Genre } = require('../../db');


const getGenres = async () => {
    const nameGenres = await apiGenres();
    const genres = nameGenres.map(genre => {
        return {
            name: genre
        };
    });

    const createdGenres = await Genre.bulkCreate(genres);
    return createdGenres;
};

module.exports = getGenres;