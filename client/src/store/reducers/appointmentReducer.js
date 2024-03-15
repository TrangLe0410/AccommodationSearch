import actionTypes from "../actions/actionTypes";

const initialState = {
    appointments: [],

};

const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_APPOINTMENTS_REQUEST:
            return {
                ...state,
            };
        case actionTypes.FETCH_APPOINTMENTS_SUCCESS:
            return {
                ...state,

                appointments: action.payload,
            };
        case actionTypes.FETCH_APPOINTMENTS_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default appointmentReducer;
