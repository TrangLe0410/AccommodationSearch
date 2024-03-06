import React, { memo, useState } from 'react'
import icons from "../ultils/icons"
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/vi'
import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString'
const indexs = [0, 1, 2, 3]
const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons
const Item = ({ images, user, title, star, description, attributes, address, id, createdAt }) => {
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    const handleStar = (star) => {
        let stars = []
        for (let i = 1; i <= +star; i++) stars.push(<GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />)
        return stars

    }
    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow()
    }
    return (
        <div className='w-full flex border-t border-orange-600 py-4'>
            <Link to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
                className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
                {images.length > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt="preview" className='w-[48%] h-[150px] object-cover' />
                    )
                })}

                <div className='w-full flex items-center'>
                    <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-3 bottom-3'>{`${images.length} ảnh`}</span>
                    <span
                        className='text-white absolute right-10 bottom-3'
                        onMouseEnter={() => setIsHoverHeart(true)}
                        onMouseLeave={() => setIsHoverHeart(false)}
                    >
                        {isHoverHeart ? <RiHeartFill size={30} color='red' /> : <RiHeartLine size={30} />}
                    </span>

                </div>

            </Link>
            <div className="w-3/5">
                <div className=" flex justify-between gap-4  w-full">
                    <Link to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
                        className="text-red-600 font-medium ml-1 text-lg"
                    >
                        {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                            return (
                                <span key={number}>{star}</span>
                            )
                        })}
                        {title}

                    </Link>
                    <div className="w-[10%] flex justify-end">
                        <BsBookmarkStarFill size={28} color='orange' />
                    </div>

                </div>
                <div className="my-2 flex items-center justify-between text-base">
                    <span className="font-bold text-green-600 whitespace-nowrap overflow-hidden text-ellipsis">{attributes?.price}</span>
                    <span>{attributes?.acreage}</span>
                    <span className=' whitespace-nowrap overflow-hidden text-ellipsis'>
                        {`${address.split(',')[address.split(',').length - 2]}${address.split(',')[address.split(',').length - 1]}`}
                    </span>

                    <span className="text-base text-gray-500">{formatTime(createdAt)}</span>
                </div>
                <p className='text-gray-500 text-base w-full h-[70px] text-ellipsis overflow-hidden'>
                    {description}
                </p>
                <div className="flex items-center my-5 justify-between mt-10">
                    <div className="flex items-center text-base">
                        <img src="https://hethongxephangtudong.net/public/client/images/no-avatar.png" alt="avatar" className="w-[50px] h-[50px] object-cover rounded-full " />
                        <p>{user?.name ?? 'Huyền Trang'}</p>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <button type="button" className="bg-blue-700 text-base text-white p-1 rounded-md">
                            {`Gọi ${user?.phone || '0328626789'}`}
                        </button>
                        <button type="button" className="text-blue-700  text-base px-1 rounded-md border hover:bg-blue-700 hover:text-[#ffffff] border-blue-700">
                            Nhắn tin zalo
                        </button>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default memo(Item)