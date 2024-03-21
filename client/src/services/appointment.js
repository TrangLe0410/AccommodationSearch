import axios from 'axios';
import axiosConfig from '../axiosConfig'

export const createNewAppointment = (formData) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: `/api/v1/appointment/create-appointment`,
            data: formData
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const getAppointmentsByUserId = (userId) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/appointment/get-appointments/${userId}`,
            params: { userId: userId }
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});
export const deleteAppointment = (appointmentId) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: `/api/v1/appointment/delete-appointment`,
            params: { appointmentId: appointmentId }
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});