const { Booking } = require("../model")


const getBooking = async (req, res) => {
    try {
        const response = await Booking.findAll()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const getBookingDetail = async (req, res) => {
    try {
        const response = await Booking.findByPk(req.params.MovieId)
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const addBooking = async (req, res) => {
    try {
        const response = await Booking.create(req.body)
        return res.status(200).json({ msg: "Succes Add" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const delBooking = async (req, res) => {
    try {
        const response = await Booking.destroy({
            where: {
                id: req.params.MovieId
            }
        })
        return res.status(200).json({ msg: "Success Delete" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const updateBooking = async (req, res) => {
    try {
        const response = await Booking.update(req.body, {
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
    getBooking,
    getBookingDetail,
    addBooking,
    delBooking,
    updateBooking
}