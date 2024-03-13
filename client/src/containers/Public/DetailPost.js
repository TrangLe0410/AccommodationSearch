import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsLimit } from '../../store/actions'
import { UseSelector } from 'react-redux'
import { SliderPost } from '../../components'
import icons from '../../ultils/icons'
import objToArr from '../../ultils/Common/objToArr'
import { ItemSidebar, RelatedPost } from "../../components"
const { GrStar, MdLocationPin, TbReportMoney, RiCrop2Line, FaRegClock, FaPhoneAlt, IoCalendarNumberOutline, GiPayMoney } = icons
const DetailPost = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        postId && dispatch(getPostsLimit({ id: postId }))

    }, [postId])
    const handleStar = (star) => {
        let stars = [];
        for (let i = 1; i <= +star; i++) stars.push(<GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />);
        return stars;
    };
    return (
        <div className='w-full flex gap-4'>
            <div className='w-[70%] border bg-white border-gray-300 rounded-lg p-4' >
                <SliderPost images={posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)} />
                <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-bold text-red-600'>
                        {handleStar(+posts[0]?.star).map((star, number) => (
                            <span key={number}>{star}</span>
                        ))}
                        {posts[0]?.title}
                    </h2>

                    <div className='flex items-center gap-2'>
                        <span>Chuyên mục:</span>
                        <span className='text-blue-600 font-medium hover:text-orange-500 cursor-pointer'>{posts[0]?.overviews?.area}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdLocationPin size={20} color='#2563eb' />
                        <span>{posts[0]?.address}</span>
                    </div>
                    <div className='flex items-center gap-16'>
                        <span className='flex items-center gap-3'>
                            <TbReportMoney size={20} />
                            <span className='font-semibold text-lg text-green-600'>{posts[0]?.attributes?.price}</span>
                        </span>
                        <span className='flex items-center gap-3'>
                            <RiCrop2Line size={20} />
                            <span>{posts[0]?.attributes?.acreage}</span>
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaRegClock size={20} />
                            <span>{posts[0]?.attributes?.published}</span>

                        </span>
                    </div>
                </div>
                <div className='mt-8'>
                    <h3 className='font-semibold text-xl my-4'> Thông tin mô tả</h3>
                    <div className='flex flex-col gap-3 '>

                        {posts[0]?.description && JSON.parse(posts[0]?.description)?.map((item, index) => {
                            return (<span key={index}>{item}</span>)
                        })}
                    </div>
                </div>
                <div className='mt-8'>
                    <h3 className='font-semibold text-xl my-4'> Đặc điểm tin đăng</h3>
                    <table className='w-full'>
                        <tbody className='w-full'>
                            <tr className='w-full'>
                                <td className='p-2'>Mã tin</td>
                                <td className='p-2'>{posts[0]?.overviews?.code}</td>
                            </tr>
                            <tr className='w-full bg-gray-200'>
                                <td className='p-2'>Khu vực</td>
                                <td className='p-2'>{posts[0]?.overviews?.area}</td>
                            </tr>
                            <tr className='w-full'>
                                <td className='p-2'>Đối tượng cho thuê</td>
                                <td className='p-2'>{posts[0]?.overviews?.target}</td>
                            </tr>
                            <tr className='w-full bg-gray-200'>
                                <td className='p-2'>Ngày đăng</td>
                                <td className='p-2'>{posts[0]?.overviews?.created}</td>
                            </tr>
                            <tr className='w-full'>
                                <td className='p-2'>Ngày hết hạn</td>
                                <td className='p-2'>{posts[0]?.overviews?.expired}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='mt-8'>
                    <h3 className='font-semibold text-xl my-4'> Thông tin liên hệ</h3>
                    <table className='w-full'>
                        <tbody className='w-full'>
                            <tr className='w-full'>
                                <td className='p-2'>Liên hệ</td>
                                <td className='p-2'>{posts[0]?.user?.name}</td>
                            </tr>
                            <tr className='w-full bg-gray-200'>
                                <td className='p-2'>Điện thoại</td>
                                <td className='p-2'>{posts[0]?.user?.phone}</td>
                            </tr>
                            <tr className='w-full'>
                                <td className='p-2'>Zalo</td>
                                <td className='p-2'>{posts[0]?.user?.zalo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-8'>
                    <h3 className='font-semibold text-xl my-4'> Bản đồ</h3>
                    <div className=" flex ml-4 items-center mt-4 gap-4">
                        <MdLocationPin size={20} />
                        <div className="text-lg">{posts[0]?.address}</div>
                    </div>
                    <div className="mt-4">
                        <img src="https://www.google.com/maps/vt/data=ShvPpFyWGgdCNPi08WRw0qTlMyZRwfyxYYuBeCTZIPsl0-qa4jVmhwYqt4ML3lzO2y9kNB9msu36UdhTcowOmMM4KPnv1CwY0m6rvGnvLOcUCtEEKMaxak8n0rHj1b5yeyyk9chAaCrUonEh-FP895QgMQJDHzfd-4W6VhZPK_4Bpf5r9HQuXabmPZpLIlIKA3APp7_epH7Csv1bjAlDfMho23pYEGlMUd9JqXzGZ-PcHvkJZwnRtt-HBjvG1C_-gr0jUrDb4pp7iMpKKvheWR4dlFQML_HpULWoCcW75vCUHcqUoRP6VumpKdZNCkJtsIFpl_9ypaqb6mlz"
                            alt="location"></img>
                    </div>


                </div>
            </div>

            <div className='w-[30%] flex flex-col justify-start items-center'>
                <div className="mb-5 w-full p-4 bg-[#febb02] border border-gray-300 rounded-lg">
                    <div className=" block text-center">
                        <div className="flex flex-col items-center justify-center text-lg font-bold">
                            <img src="https://hethongxephangtudong.net/public/client/images/no-avatar.png" alt="avatar" className="w-[100px] h-[100px] object-cover rounded-full mb-4" />
                            <p className="mt-2">{posts[0]?.user?.name}</p>
                            <div className="phone w-[100%] mt-3 justify-center border-[#16c784] border rounded-lg  h-[40px] flex gap-3 items-center bg-[#16c784] ">
                                <FaPhoneAlt size={24} color="white" />
                                <button className=" text-white">{posts[0]?.user?.phone}</button>
                            </div>
                            <div className="phone w-[100%] mt-3 justify-center  border rounded-lg  h-[40px] flex gap-3 items-center bg-white ">
                                <IoCalendarNumberOutline size={24} color="black" />
                                <button className=" text-black font-semibold">Đặt lịch hẹn</button>
                            </div>
                            <div className="phone w-[100%] mt-3 justify-center  border rounded-lg  h-[40px] flex gap-3 items-center bg-white ">
                                <GiPayMoney size={24} color="black" />
                                <button className=" text-black font-semibold">Đặt cọc tiền</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                    <RelatedPost />
                </div>
                <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                    <RelatedPost newPost />
                </div>
            </div>
        </div>
    )
}

export default DetailPost