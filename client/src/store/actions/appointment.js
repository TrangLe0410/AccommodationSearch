// import axios from 'axios';
// import actionTypes from './actionTypes';

// export const createAppointment = (appointmentData) => async (dispatch) => {
//     try {
//         const response = await axios.post('/api/v1/appointment/create-appointment', appointmentData);
//         dispatch({
//             type: actionTypes.CREATE_APPOINTMENT_SUCCESS,
//             appointment: response.data // Update this if needed based on server response
//         });
//         return response.data; // Return data from response if needed
//     } catch (error) {
//         console.error('Failed to create appointment:', error);
//         throw error; // Throw error to handle in component
//     }
// };