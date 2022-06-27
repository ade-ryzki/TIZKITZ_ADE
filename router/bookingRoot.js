const {Router} = require('express')
const { getBooking, getBookingDetail, addBooking, delBooking, updateBooking } = require('../controller/bookingCont')
const router = Router()

router.get('/', [getBooking])
router.get('/detail/:BookingId', [getBookingDetail])
router.post('/', [addBooking])
router.delete('/delete/:BookingId', [delBooking])
router.patch('/update/:BookingId', [updateBooking])

module.exports = router

