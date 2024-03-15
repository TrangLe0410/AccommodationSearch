import React, { useEffect, useId } from 'react'
import { Button } from '../../components'
import icons from '../../ultils/icons'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppointments, getCurrent } from '../../store/actions'
const { MdDeleteForever, IoMdCheckmarkCircle } = icons
const ManageAppointment = () => {
    const dispatch = useDispatch();
    const { currentData } = useSelector(state => state.user)


    const appointments = useSelector(state => state.appointments);
    useEffect(() => {
        const userId = currentData.id;
        console.log(currentData.id)
        if (userId) {
            dispatch(fetchAppointments(userId));
        }
    }, [currentData.id, dispatch]);

    console.log(appointments);
    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium '>Quản lý lịch hẹn</h1>

            </div>
            <table className='w-full table-auto'>
                <thead className='bg-gray-100'>
                    <tr className='flex w-full'>
                        <th className='border flex-1 p-2'>Mã lịch</th>
                        <th className='border flex-1 p-2'>Số điện thoại</th>
                        <th className='border flex-1 p-2'>Tên người hẹn</th>
                        <th className='border flex-1 p-2'>Ngày hẹn</th>
                        <th className='border flex-1 p-2'>Thời gian hẹn</th>
                        <th className='border flex-1 p-2'>Nội dung</th>
                        <th className='border flex-1 p-2'>Trạng thái</th>
                        <th className='border flex-1 p-2'>Tùy chọn</th>
                    </tr>
                </thead>

                <tbody>
                    {appointments && appointments.length > 0 ? (
                        appointments.map(item => (
                            <tr key={item.id} className='flex h-16 text-sm items-center'>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.id}</td>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.phone}</td>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.name}</td>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.date}</td>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.time}</td>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.content}</td>
                                <td className='border px-2 flex-1 h-full text-center '>{item?.status}</td>
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
                                    />
                                </td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No appointments found</td>
                        </tr>
                    )}
                </tbody>
            </table>


        </div >
    )
}

export default ManageAppointment