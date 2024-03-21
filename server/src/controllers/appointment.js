import * as appointmentService from '../services/appointment';
import * as userService from '../services/user'
import * as postService from '../services/post'
export const createNewAppointment = async (req, res) => {
    const { name, phone, userId, postId, appointmentDate, appointmentTime, content } = req.body;
    try {
        if (!userId || !name || !phone || !postId || !appointmentDate || !appointmentTime || !content) {
            return res.status(400).json({ err: 1, msg: 'Missing inputs' });
        }
        // Truyền userId vào hàm tạo lịch hẹn mới
        await appointmentService.createNewAppointmentService(userId, postId, { appointmentDate, name, phone, appointmentTime, content });
        res.status(201).json({ message: 'Appointment created successfully' });
    } catch (error) {
        console.error('Failed to create appointment:', error);
        res.status(500).json({ err: -1, msg: 'Failed to create appointment' });
    }
};

export const getAppointmentsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const appointments = await appointmentService.getAppointmentsByUserIdService(userId);
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Failed to fetch appointments:', error);
        res.status(500).json({ err: -1, msg: 'Failed to fetch appointments' });
    }
};

export const deleteAppointment = async (req, res) => {
    const { appointmentId } = req.query
    const { id } = req.user
    try {
        if (!appointmentId || !id) return res.status(400).json({
            err: 1,
            msg: 'Mising inputs'
        })
        const response = await appointmentService.deleteAppointment(appointmentId)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
