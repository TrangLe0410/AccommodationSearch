import React, { memo } from 'react'

const ProvinceBtn = ({ name, image, onClick }) => {
    return (
        <div className='shadow-md rounded-bl-md text-blue-700 rounded-br-md cursor-pointer hover:text-orange-600'
            onClick={onClick}>
            <img
                src={image}
                alt={name}
                className='w-[220px] h-[140px] object-cover rounded-tl-md rounded-tr-md'
            />
            <div className='font-medium p-2 text-base text-center'>{name}</div>
        </div>
    );
};

export default memo(ProvinceBtn);