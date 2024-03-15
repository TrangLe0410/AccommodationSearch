import express from 'express'
import * as appointmentController from '../controllers/appointment'
import verifyToken from '../middlewares/verifyToken'
const router = express.Router()

router.use(verifyToken)
router.post('/create-appointment', appointmentController.createNewAppointment);
router.get('/get-appointments/:userId', appointmentController.getAppointmentsByUserId);

export default router