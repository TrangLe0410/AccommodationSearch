import React, { memo } from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString';

const defaultImage = 'https://www.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-600nw-272872412.jpg';

const Sitem = ({ title, price, image, createdAt, id }) => {

    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow();
    }

    return (
        <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
            <img
                src={image && image[0] ? image[0] : defaultImage}
                alt="anh"
                className='w-[65px] h-[65px] object-cover flex-none rounded-md'
            />
            <div className='w-full flex-auto flex flex-col justify-between gap-1'>
                <Link to={`/chi-tiet/${formatVietnameseToString(title)}/${id}`}>
                    <h4 className='text-blue-600 text-base'>{`${title?.slice(0, 45)}...`}</h4>
                </Link>

                <div className=' flex items-center justify-between w-full'>
                    <span className='text-base font-medium text-green-500'>{price}</span>
                    <span className='text-base text-gray-300'>{formatTime(createdAt)}</span>
                </div>
            </div>
        </div>
    );
}

export default memo(Sitem);
