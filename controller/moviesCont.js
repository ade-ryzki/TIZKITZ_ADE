const { Movie } = require("../model")


const getMovie = async (req, res) => {
    try {
        const response = await Movie.findAll()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const getMovieDetail = async (req, res) => {
    try {
        const response = await Movie.findByPk(req.params.MovieId)
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const addMovie = async (req, res) => {
    try {
        const response = await Movie.create(req.body)
        return res.status(200).json({ msg: "Succes Add" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const delMovie = async (req, res) => {
    try {
        const response = await Movie.destroy({
            where: {
                id: req.params.MovieId
            }
        })
        return res.status(200).json({ msg: "Success Delete" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const updateMovie = async (req, res) => {
    try {
        const response = await Movie.update(req.body, {
            where: {
                id: req.params.MovieId
            }
        })
        return res.status(200).json({ msg: "Success Update" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

module.exports = {
    getMovie,
    getMovieDetail,
    addMovie,
    delMovie,
    updateMovie
}