const {Router} = require('express');
const getGenders = require('../controllers/genres/getGenres');

const genderRouter = Router();

genderRouter.get('/', async (req,res) => {
    try {
        const genres = await getGenders();
        return res.status(200).json(genres);
    } catch (error) {
        return res.status(500).json({err:error.message});
    }
})

module.exports = genderRouter;