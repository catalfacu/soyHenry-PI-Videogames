const { apiGenres } = require('../utils/index');
const { Genre } = require('../db');
const getGenres = async (req,res) => {
    try {
        const nameGenres = await apiGenres();
        const genres = nameGenres.map(genre => {
            return {
                nombre: genre
            };
        });

        const createdGenres = await Genre.bulkCreate(genres);
        return res.status(200).json(createdGenres);

    } catch (error) {
        return res.status(500).json({err: error.message});
    }
};

module.exports = {getGenres};