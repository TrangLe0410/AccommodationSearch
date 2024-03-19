import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import { apiDeletePost } from '../../services';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString';
import { path } from '../../ultils/constant';
import { Button } from '../../components';
import moment from "moment";
import Pagination from './Pagination'; // Import Pagination component

const ManageAllPost = () => {
    const dispatch = useDispatch();
    const { posts: allPosts } = useSelector(state => state.post);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const [updateData, setUpdateData] = useState(false);
    const [status, setStatus] = useState('0');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        dispatch(actions.getPosts());
    }, [dispatch]);

    useEffect(() => {
        // Reset current page to 1 when status changes
        setCurrentPage(1);
    }, [status]);

    useEffect(() => {
        filterPostsByStatus();
    }, [status, allPosts, currentPage]); // Include currentPage in dependencies

    const filterPostsByStatus = () => {
        let filteredPosts = [];
        if (status === '1') {
            filteredPosts = allPosts.filter(item => checkStatus(item?.overviews?.expired?.split(' ')[3]));
        } else if (status === '2') {
            filteredPosts = allPosts.filter(item => !checkStatus(item?.overviews?.expired?.split(' ')[3]));
        } else {
            filteredPosts = allPosts;
        }
        setFilteredPosts(filteredPosts);
    };

    const handleDeletePost = async (postId) => {
        const result = await Swal.fire({
            title: 'Bạn chắc chắn muốn xóa bài đăng?',
            text: 'Hành động này sẽ không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có!',
            cancelButtonText: 'Không'
        });

        if (result.isConfirmed) {
            const response = await apiDeletePost(postId);
            if (response?.data.err === 0) {
                Swal.fire('Thành công', 'Xóa bài đăng thành công', 'success');
                setUpdateData(prev => !prev);
            } else {
                Swal.fire('Oops!', 'Xóa bài đăng thất bại', 'error');
            }
        }
    };

    const checkStatus = (dateString) => moment(dateString, process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString());

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium '>Bài đăng trong hệ thống</h1>
                <select onChange={e => setStatus(e.target.value)} value={status} className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="0">Lọc theo trạng thái</option>
                    <option value="1">Đang hoạt động</option>
                    <option value="2">Đã hết hạn</option>
                </select>
            </div>

            {currentPosts.length > 0 ? (
                <table className='w-full table-auto bg-white'>
                    <thead className='bg-gray-100'>
                        <tr className='flex w-full'>
                            <th className='border flex-1 p-2'>Mã tin</th>
                            <th className='border flex-1 p-2'>Ảnh đại diện</th>
                            <th className='border flex-1 p-2'>Tiêu đề</th>
                            <th className='border flex-1 p-2'>Gía</th>
                            <th className='border flex-1 p-2'>Ngày bắt đầu</th>
                            <th className='border flex-1 p-2'>Ngày hết hạn</th>
                            <th className='border flex-1 p-2'>Trạng thái</th>
                            <th className='border flex-1 p-2'>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map(item => (
                            <tr className='flex h-[70px] text-sm items-center' key={item.id}>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.overviews?.code}</td>
                                <td className='border px-2 flex-1 h-full flex items-center justify-center  '>
                                    <img src={JSON.parse(item?.images?.image)[0] || ''} alt='avt-post' className='w-10 h-10 object-cover rounded-md' />
                                </td>
                                <td className='border px-2 flex-1 h-full text-center'>
                                    <Link to={`${path.DETAIL}${formatVietnameseToString(item?.title?.replaceAll('/', ''))}/${item?.id}`}>
                                        {item?.title?.slice(0, 40)}
                                    </Link>
                                </td>
                                <td className='border px-2 flex-1 h-full text-center '> {item?.attributes?.price}</td>
                                <td className='border px-2 flex-1 h-full text-center '> {item?.overviews?.created}</td>
                                <td className='border px-2 flex-1 h-full text-center '> {item?.overviews?.expired}</td>
                                <td className='border px-2 flex-1 h-full text-center '>
                                    {moment(item?.overviews?.expired?.split(' ')[3], process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString()) ? 'Đang hoạt động' : 'Đã hết hạn'}
                                </td>
                                <td className='border px-2 flex-1 h-full text-center items-center  flex gap-2 justify-center'>
                                    <Button
                                        text='Duyệt'
                                        bgColor='bg-green-600'
                                        textColor='text-white'
                                    />
                                    <Button
                                        text='Xóa'
                                        bgColor='bg-red-600'
                                        textColor='text-white'
                                        onClick={() => handleDeletePost(item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Không có bài đăng nào</p>
            )}

            {/* Pagination */}
            <div className='flex justify-center'>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={filteredPosts.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default ManageAllPost;
