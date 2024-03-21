import db from '../models';
import { v4 as generateId } from 'uuid';

export const createNewAppointmentService = async (userId, postId, appointmentData) => {
    try {
        const appointmentId = generateId();
        await db.Appointment.create({
            id: appointmentId,
            userId,
            postId,
            name: appointmentData.name,
            phone: appointmentData.phone,
            appointmentDate: appointmentData.appointmentDate,
            appointmentTime: appointmentData.appointmentTime,
            content: appointmentData.content,
            status: 'pending'
        });
    } catch (error) {
        throw error;
    }
};

export const getAppointmentsByUserIdService = async (userId) => {
    try {
        const appointments = await db.Appointment.findAll({
            where: {
                userId
            },
            include: [
                { model: db.User, as: 'user' }, // Include user information
                // { model: db.Post, as: 'post' }
            ]
        });
        return appointments;
    } catch (error) {
        throw error;
    }
};

export const deleteAppointment = (appointmentId) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Appointment.destroy({
            where: { id: appointmentId }

        })
        resolve({
            err: response > 0 ? 0 : 1,
            msg: response > 0 ? 'Delete appointment succsess' : 'No post delete',
        })

    } catch (error) {
        reject(error)
    }
})
