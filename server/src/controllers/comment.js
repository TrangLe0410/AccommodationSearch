import * as commentService from '../services/comment';
import * as userService from '../services/user'
export const createNewComment = async (req, res) => {
    const { userId, postId, content } = req.body;
    try {
        if (!userId || !postId || !content) {
            return res.status(400).json({ err: 1, msg: 'Missing inputs' });
        }
        await commentService.createNewCommentService(userId, postId, content);
        res.status(201).json({ message: 'Comment created successfully' });
    } catch (error) {
        console.error('Failed to create comment:', error);
        res.status(500).json({ err: -1, msg: 'Failed to create comment' });
    }
};
export const getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;
    try {
        const comments = await commentService.getCommentsByPostId(postId);
        res.status(200).json(comments);
    } catch (error) {
        console.error('Failed to get comments:', error);
        res.status(500).json({ err: -1, msg: 'Failed to get comments' });
    }
};

export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        console.error('Failed to get user:', error);
        res.status(500).json({ err: -1, msg: 'Failed to get user' });
    }
};