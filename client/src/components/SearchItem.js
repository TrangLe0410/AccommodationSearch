import React, { memo } from 'react'

const SearchItem = ({ IconBefore, IconAfter, text, fontWeight, defaultText }) => {
    return (
        <div className='bg-white py-2 px-4 w-full rounded-md text-gray-400 text-lg flex items-center justify-between'>

            <div className='flex items-center gap-2'>
                {IconBefore}
                <span
                    className={fontWeight && 'font-medium text-black'}>{text}</span>

            </div>
            {IconAfter}
        </div>
    )
}

export default memo(SearchItem);