import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
    msg: '',
    count: 0,
    newPosts: [],
    postId: null  // Assuming postId is a single value, not an array
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
        case actionTypes.GET_POST_ID:
            return {
                ...state,
                msg: action.msg || '',
                postId: action.id !== undefined ? action.id : null
            };
        default:
            return state;
    }
}

export default postReducer;
