import db from '../models';
import { v4 as generateId } from 'uuid';

export const createNewCommentService = async (userId, postId, content) => {
    try {
        const commentId = generateId();
        await db.Comment.create({
            id: commentId,
            userId,
            postId,
            content,
            lastUpdate: new Date().toISOString(),
            rate: null // Assuming rate is nullable
        });
    } catch (error) {
        throw error;
    }
};
export const getCommentsByPostId = async (postId) => {
    try {
        const comments = await db.Comment.findAll({
            where: {
                postId: postId
            },
            include: [
                { model: db.User, as: 'user' } // Include user information
            ]
        });
        return comments;
    } catch (error) {
        throw error;
    }
};