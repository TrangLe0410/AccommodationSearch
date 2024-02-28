import React, { memo } from 'react'

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className='shadow-md rounded-bl-md text-blue-700 rounded-br-md cursor-pointer hover:text-orange-600'>
            <img
                src={image}
                alt={name}
                className='w-[220px] h-[140px] object-cover rounded-tl-md rounded-tr-md'
            />
            <div className='font-medium p-2 text-[16px] text-center'>{name}</div>
        </div>
    )
}

export default memo(ProvinceBtn);