import actionTypes from './actionTypes'
import { apiGetPosts, apiGetPostsLimit, apiGetNewPosts, apigetPostById, apiGetPostsLimitAdmin } from '../../services/post'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}

export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimit(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null
        })
    }
}
export const getNewPosts = () => async (dispatch) => {
    try {
        const response = await apiGetNewPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_NEW_POST,
                newPosts: response.data.response,
            })
        } else {
            dispatch({
                type: actionTypes.GET_NEW_POST,
                msg: response.data.msg,
                newPosts: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_NEW_POST,
            newPosts: null
        })
    }
}

export const getPostById = (postId) => async (dispatch) => {
    try {
        const response = await apigetPostById(postId);

        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_POST_ID_SUCCESS,
                postDetails: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POST_ID_FAIL,
                postDetails: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POST_ID_FAIL,
            postDetails: 'An error occurred while fetching the post.',
        });
    }
};

export const getPostsLimitAdmin = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimitAdmin(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                msg: response.data.msg,
                posts: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null
        })
    }
}

export const editData = (dataEdit) => ({
    type: actionTypes.EDIT_POST,
    dataEdit
})

export const resetDataEdit = () => ({
    type: actionTypes.RESET_DATAEDIT_POST
})