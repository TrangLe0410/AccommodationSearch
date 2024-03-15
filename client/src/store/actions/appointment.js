import actionTypes from './actionTypes'
import { getAppointmentsByUserId } from '../../services/appointment'

export const fetchAppointments = (userId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_APPOINTMENTS_REQUEST });
        try {
            const appointments = await getAppointmentsByUserId(userId);
            dispatch({ type: actionTypes.FETCH_APPOINTMENTS_SUCCESS, payload: appointments });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_APPOINTMENTS_FAILURE, error: error.message });
        }
    };
};