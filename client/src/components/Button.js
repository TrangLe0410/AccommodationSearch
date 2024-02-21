import React, { memo } from 'react'



const Button = ({ text, textColor, bgColor, onClick, px, fullWidth }) => {
    return (
        <button
            type='button'
            className={`py-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${fullWidth && 'w-full'}  outline-none rounded-md text-lg border 
            border-solid border-[#3961fb] hover:bg-blue-700 hover:text-[#ffffff] w-32 h-12 gap-1` }
            onClick={onClick}
        >
            <span> {text}</span>

        </button>
    )
}

export default memo(Button)