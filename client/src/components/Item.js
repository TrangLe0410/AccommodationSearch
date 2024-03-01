import React, { memo, useState } from 'react'
import icons from "../ultils/icons"
const indexs = [0, 1, 2, 3]
const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons
const Item = ({ images, user, title, star, description, attributes, address, id }) => {
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    return (
        <div className='w-full flex border-t border-orange-600 py-4'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
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

            </div>
            <div className="w-3/5">
                <div className=" flex justify-between gap-4 w-full">
                    <div className="text-red-600 font-medium ml-1 text-xl">

                        <GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />
                        <GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />
                        <GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />
                        <GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />
                        <GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />

                        {title}
                    </div>
                    <div className="w-[10%] flex justify-end">
                        <BsBookmarkStarFill size={28} color='orange' />
                    </div>

                </div>
                <div className="my-2 flex items-center justify-between text-[20px]">
                    <span className="font-bold text-green-600 whitespace-nowrap overflow-hidden text-ellipsis">{attributes?.price}</span>
                    <span>{attributes?.acreage}</span>
                    <span className=' whitespace-nowrap overflow-hidden text-ellipsis'>
                        {`${address.split(',')[address.split(',').length - 2]}${address.split(',')[address.split(',').length - 1]}`}
                    </span>

                    <span className="text-[16px] text-gray-500">3 giờ trước</span>
                </div>
                <p className='text-gray-500 text-lg w-full h-[90px] text-ellipsis overflow-hidden'>
                    {description}
                </p>
                <div className="flex items-center my-5 justify-between">
                    <div className="flex items-center text-lg">
                        <img src="https://hethongxephangtudong.net/public/client/images/no-avatar.png" alt="avatar" className="w-[50px] h-[50px] object-cover rounded-full " />
                        <p>{user?.name ?? 'Huyền Trang'}</p>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <button type="button" className="bg-blue-700 text-lg text-white p-1 rounded-md">
                            {`Gọi ${user?.phone || '0328626789'}`}
                        </button>
                        <button type="button" className="text-blue-700  text-lg px-1 rounded-md border hover:bg-blue-700 hover:text-[#ffffff] border-blue-700">
                            Nhắn tin zalo
                        </button>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default memo(Item)