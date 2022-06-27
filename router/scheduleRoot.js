const {Router} = require('express')
const { getSchedule, getScheduleDetail, addSchedule, delSchedule, updateSchedule } = require('../controller/scheduleCont')
const router = Router()

router.get('/', [getSchedule])
router.get('/detail/:ScheduleId', [getSchedule])
router.post('/', [addSchedule])
router.delete('/delete/:ScheduleId', [delSchedule])
router.patch('/update/:ScheduleId', [updateSchedule])

module.exports = router

