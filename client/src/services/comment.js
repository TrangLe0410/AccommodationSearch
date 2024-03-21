import axiosConfig from '../axiosConfig';

export const createNewCommentService = async (userId, postId, content) => {
    try {
        const response = await axiosConfig.post('/api/v1/comment/create-comment', { userId, postId, content });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getCommentsByPostIdService = async (postId) => {
    try {
        const response = await axiosConfig.get(`/api/v1/comment/comments/${postId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
