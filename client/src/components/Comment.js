import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentRequest } from '../store/actions/comment';
import { createNewCommentService, getCommentsByPostIdService } from '../services/comment';
import { useParams } from 'react-router-dom';
import anonAvatar from '../assets/anon-avatar.png'
const Comment = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const { currentData } = useSelector(state => state.user);

    const [commentContent, setCommentContent] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const fetchComments = async () => {
        try {
            const commentsData = await getCommentsByPostIdService(postId);
            setComments(commentsData);
        } catch (error) {
            console.error('Failed to fetch comments:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userId = currentData.id;
        const content = event.target.body.value; // Extract content from form

        try {
            dispatch(createCommentRequest(userId, postId, content));
            await createNewCommentService(userId, postId, content);

            setCommentContent('');

            // Sau khi tạo xong comment mới, cập nhật lại danh sách comment
            fetchComments();
        } catch (error) {
            console.error('Failed to create comment:', error);
        }
    };

    return (
        <div className="w-full bg-white p-2 my-4">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    {comments.map((comment, index) => (
                        <div key={index} className="flex w-full justify-between border rounded-md">
                            <div className="p-3">
                                <div className="flex gap-3 items-center">
                                    <img src={anonAvatar} alt="avatar"
                                        className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400" />
                                    <h3 className="font-bold">
                                        {comment.user.name}
                                    </h3>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full my-8">
                    <textarea
                        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="body"
                        placeholder="Nhập bình luận"
                        required
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="w-full flex justify-end px-3">
                    <input
                        type="submit"
                        className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                        value="Post Comment"
                    />
                </div>
            </form>
        </div>
    );
};

export default Comment;
