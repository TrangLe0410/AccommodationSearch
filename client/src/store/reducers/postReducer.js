import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
    msg: '',
    count: 0,
    newPosts: [],
    postId: null,
    postDetails: [],
    postOfCurrent: [],
    dataEdit: null,
    outStandingPost: []
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POSTS_LIMIT:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        case actionTypes.GET_NEW_POST:
            return {
                ...state,
                msg: action.msg || '',
                newPosts: action.newPosts || []
            }
        case actionTypes.GET_OUTSTANDING:
            return {
                ...state,
                msg: action.msg || '',
                outStandingPost: action.outStandingPost || []
            }
        case actionTypes.GET_POST_ID_SUCCESS:
            return {
                ...state,
                postDetails: action.postDetails || [],
                msg: action.msg || '',
                count: action.count || 0
            };
        case actionTypes.GET_POSTS_ADMIN:
            return {
                ...state,
                msg: action.msg || '',
                postOfCurrent: action.posts || []
            }
        case actionTypes.EDIT_POST:
            return {
                ...state,
                dataEdit: action.dataEdit || null
            }
        case actionTypes.RESET_DATAEDIT_POST:
            return {
                ...state,
                dataEdit: null
            }
        default:
            return state;
    }
}

export default postReducer;
