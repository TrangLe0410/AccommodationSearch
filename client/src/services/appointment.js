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