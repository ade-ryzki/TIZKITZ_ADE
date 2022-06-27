const { Schedule } = require("../model")


const getSchedule = async (req, res) => {
    try {
        const response = await Schedule.findAll()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const getScheduleDetail = async (req, res) => {
    try {
        const response = await Schedule.findByPk(req.params.MovieId)
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const addSchedule = async (req, res) => {
    try {
        const response = await Schedule.create(req.body)
        return res.status(200).json({ msg: "Succes Add" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const delSchedule = async (req, res) => {
    try {
        const response = await Schedule.destroy({
            where: {
                id: req.params.MovieId
            }
        })
        return res.status(200).json({ msg: "Success Delete" })
    } catch (err) {
        return res.status(500).json({ msg: err.toString() })
    }
}

const updateSchedule = async (req, res) => {
    try {
        const response = await Schedule.update(req.body, {
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
    getSchedule,
    getScheduleDetail,
    addSchedule,
    delSchedule,
    updateSchedule
}