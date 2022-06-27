const {Router} = require('express')
const { getMovie, getMovieDetail, addMovie, delMovie, updateMovie } = require('../controller/moviesCont')
const router = Router()

router.get('/', [getMovie])
router.get('/detail/:MovieId', [getMovieDetail])
router.post('/', [addMovie])
router.delete('/delete/:MovieId', [delMovie])
router.patch('/update/:MovieId', [updateMovie])

module.exports = router

