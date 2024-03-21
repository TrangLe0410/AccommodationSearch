import actionTypes from './actionTypes'
import { getCommentsByPostIdService } from '../../services/comment';
export const createCommentRequest = (userId, postId, content) => ({
    type: actionTypes.CREATE_COMMENT_REQUEST,
    payload: { userId, postId, content }
});

export const createCommentSuccess = () => ({
    type: actionTypes.CREATE_COMMENT_SUCCESS
});

export const createCommentFailure = (error) => ({
    type: actionTypes.CREATE_COMMENT_FAILURE,
    payload: error
});

export const getCommentsByPostId = (postId) => {
    return async (dispatch) => {
        try {
            const comments = await getCommentsByPostIdService(postId);
            dispatch(getCommentsSuccess(comments));
        } catch (error) {
            dispatch(getCommentsFailure(error));
        }
    };
};

const getCommentsSuccess = (comments) => {
    return {
        type: actionTypes.GET_COMMENTS_SUCCESS,
        payload: comments
    };
};

const getCommentsFailure = (error) => {
    return {
        type: actionTypes.GET_COMMENTS_FAILURE,
        payload: error
    };
};