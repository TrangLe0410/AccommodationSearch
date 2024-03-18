import actionTypes from "../actions/actionTypes"

const initState = {
    isLoggedIn: false,
    token: null,
    msg: '',
    role: '' // Thêm trường role vào initState
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            const { token, role } = action.data
            return {
                ...state,
                isLoggedIn: true,
                token,
                role,
                msg: ''
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                role: '', // Đặt lại vai trò thành rỗng khi đăng nhập thất bại
                msg: action.data,
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                role: '', // Đăng xuất cũng đặt lại vai trò thành rỗng
                msg: ''
            }
        default:
            return state
    }
}

export default authReducer