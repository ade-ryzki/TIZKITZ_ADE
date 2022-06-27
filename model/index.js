const { dataBase } = require("../config/db")
const Booking = require("./booking")
const Movie = require("./movies")
const Schedule = require("./schedule")

const model = {}
model.Movie = Movie
model.Booking = Booking
model.Schedule = Schedule
// plus

// dataBase.sync({ force: true })
dataBase.sync()

module.exports = model