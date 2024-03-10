import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import moment from "moment"
import { Button, UpdatePost } from '../../components'


const ManagePost = () => {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const { postOfCurrent, dataEdit } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin())
    }, [])

    useEffect(() => {
        !dataEdit && setIsEdit(false)

    }, [dataEdit])

    const checkStatus = (dateString) => moment(dateString, process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString())



    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium '>Quản lý bài đăng</h1>
                <select className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="">Lọc theo trạng thái</option>

                </select>
            </div>
            <table className='w-full table-auto'>
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
                    {!postOfCurrent
                        ? <tr>
                            <td colSpan="7" className="text-center">hahahaha</td>
                        </tr>
                        : postOfCurrent?.map(item => {
                            return (
                                <tr className='flex h-20 text-sm items-center' key={item.id}>
                                    <td className='border px-2 flex-1 h-full text-center '>{item?.overviews?.code}</td>
                                    <td className='border px-2 flex-1 h-full flex items-center justify-center  '>
                                        <img src={JSON.parse(item?.images?.image)[0] || ''} alt='avt-post' className='w-10 h-10 object-cover rounded-md' />
                                    </td>
                                    <td className='border px-2 flex-1 h-full text-center '> {`${item?.title?.slice(0, 45)}...`}</td>
                                    <td className='border px-2 flex-1 h-full text-center '> {item?.attributes?.price}</td>
                                    <td className='border px-2 flex-1 h-full text-center '> {item?.overviews?.created}</td>
                                    <td className='border px-2 flex-1 h-full text-center '> {item?.overviews?.expired}</td>
                                    <td className='border px-2 flex-1 h-full text-center '>
                                        {checkStatus(item?.overviews?.expired?.split(' ')[3]) ? 'Đang hoạt động' : 'Đã hết hạn'}</td>
                                    <td className='border px-2 flex-1 h-full text-center items-center  flex gap-2 justify-center'>
                                        <Button
                                            text='Sửa'
                                            bgColor='bg-green-600'
                                            textColor='text-white'
                                            onClick={() => {
                                                dispatch(actions.editData(item))
                                                setIsEdit(true)
                                            }}
                                        />
                                        <Button
                                            text='Xóa'
                                            bgColor='bg-red-600'
                                            textColor='text-white'
                                        />

                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}

        </div>
    )
}

export default ManagePost