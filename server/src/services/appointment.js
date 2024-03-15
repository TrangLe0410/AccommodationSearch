import db from '../models';
import { v4 as generateId } from 'uuid';

export const createNewAppointmentService = async (userId, postId, appointmentData) => {
    try {
        const appointmentId = generateId();
        await db.Appointment.create({
            id: appointmentId,
            userId,
            postId,
            appointmentDate: appointmentData.appointmentDate,
            appointmentTime: appointmentData.appointmentTime,
            content: appointmentData.content,
            status: 'pending'
        });
    } catch (error) {
        throw error;
    }
};
