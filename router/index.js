module.exports = (app) => {
    
    app.use('/api/movie', require('./moviesRoot'))
    app.use('/api/booking', require('./bookingRoot'))
    app.use('/api/schedule', require('./scheduleRoot'))
}