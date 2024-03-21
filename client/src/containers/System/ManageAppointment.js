import React, { useEffect } from 'react';
import icons from '../../ultils/icons';
import * as actions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments, getCurrent } from '../../store/actions';
import { Link } from 'react-router-dom'; // Import thêm Link từ react-router-dom
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString';
import Swal from 'sweetalert2';
import { path } from '../../ultils/constant';
import { deleteAppointment } from '../../services/appointment'; // Import hàm xóa lịch hẹn từ service

const { MdDeleteForever, IoMdCheckmarkCircle } = icons;

const ManageAppointment = () => {
    const dispatch = useDispatch();
    const { currentData } = useSelector(state => state.user);
    const { posts } = useSelector(state => state.post);
    const appointments = useSelector(state => state.appointments.appointments.data);

    useEffect(() => {
        const userId = currentData?.id;
        if (userId) {
            dispatch(fetchAppointments(userId));
        }
    }, [currentData?.id, dispatch]);

    useEffect(() => {
        dispatch(actions.getPosts());
    }, []);

    const handleDeleteAppointment = async (appointmentId) => {
        // Sử dụng SweetAlert2 để hỏi người dùng chắc chắn muốn xóa không
        const result = await Swal.fire({
            title: 'Bạn chắc chắn muốn xóa lịch hẹn?',
            text: 'Hành động này sẽ không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có!',
            cancelButtonText: 'Không'
        });

        if (result.isConfirmed) {
            try {
                await deleteAppointment(appointmentId);
                // Refresh danh sách lịch hẹn sau khi xóa thành công
                const userId = currentData?.id;
                if (userId) {
                    dispatch(fetchAppointments(userId));
                }
                Swal.fire('Thành công', 'Xóa lịch hẹn thành công', 'success');
            } catch (error) {
                console.error('Failed to delete appointment:', error);
                Swal.fire('Oops!', 'Xóa lịch hẹn thất bại', 'error');
            }
        }
    };



    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium'>Quản lý lịch hẹn</h1>
            </div>
            <table className='w-full table-auto'>
                <thead className='bg-gray-100'>
                    <tr className='flex w-full'>
                        {/* <th className='border flex-1 p-2'>Mã lịch</th> */}
                        <th className='border flex-1 p-2'>Tên bài đăng</th>
                        <th className='border flex-1 p-2'>SĐT chủ phòng</th>
                        <th className='border flex-1 p-2'>Tên chủ phòng</th>
                        <th className='border flex-1 p-2'>Ngày hẹn</th>
                        <th className='border flex-1 p-2'>Thời gian hẹn</th>
                        <th className='border flex-1 p-2'>Nội dung</th>
                        <th className='border flex-1 p-2'>Trạng thái</th>
                        <th className='border flex-1 p-2'>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments && appointments.length > 0 ? (
                        appointments.map(item => {
                            const post = posts.find(post => post.id === item?.postId);
                            const title = post ? post.title : 'Unknown Title';
                            const id = post ? post.id : ''; // ID của bài đăng
                            return (
                                <tr key={item?.id} className='flex h-16 text-sm items-center'>
                                    {/* <td className='border px-2 flex-1 h-full text-center'>{item?.id}</td> */}
                                    <td className='border px-2 flex-1 h-full text-center'>
                                        <Link to={`${path.DETAIL}${formatVietnameseToString(title?.replaceAll('/', ''))}/${id}`}>
                                            {title?.slice(0, 40)}
                                        </Link>
                                    </td>
                                    <td className='border px-2 flex-1 h-full text-center'>{item?.name}</td>
                                    <td className='border px-2 flex-1 h-full text-center'>{item?.phone}</td>
                                    <td className='border px-2 flex-1 h-full text-center'>{item?.appointmentDate && new Date(item.appointmentDate).toLocaleDateString()}</td>
                                    <td className='border px-2 flex-1 h-full text-center'>{item?.appointmentTime}</td>
                                    <td className='border px-2 flex-1 h-full text-center'>{item?.content?.slice(0, 40)}</td>
                                    <td className='border px-2 flex-1 h-full text-center'>{item?.status}</td>
                                    <td className='border px-2 flex-1 h-full text-center items-center  flex gap-2 justify-center'>
                                        <IoMdCheckmarkCircle
                                            color='green'
                                            size={32}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <MdDeleteForever
                                            color='red'
                                            size={32}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleDeleteAppointment(item?.id)}
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">Không có lịch hẹn nào!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAppointment;
