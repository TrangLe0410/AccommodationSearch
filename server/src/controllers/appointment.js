import * as appointmentService from '../services/appointment';

export const createNewAppointment = async (req, res) => {
    const { userId, postId, appointmentDate, appointmentTime, content } = req.body;
    try {
        if (!userId || !postId || !appointmentDate || !appointmentTime || !content) {
            return res.status(400).json({ err: 1, msg: 'Missing inputs' });
        }
        await appointmentService.createNewAppointmentService(userId, postId, { appointmentDate, appointmentTime, content });
        res.status(201).json({ message: 'Appointment created successfully' });
    } catch (error) {
        console.error('Failed to create appointment:', error);
        res.status(500).json({ err: -1, msg: 'Failed to create appointment' });
    }
};

export const getAppointmentsByUserId = async (req, res) => {
    const userId = req.params.userId;
    try {
        const appointments = await appointmentService.getAppointmentsByUserIdService(userId);
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Failed to fetch appointments:', error);
        res.status(500).json({ err: -1, msg: 'Failed to fetch appointments' });
    }
};

