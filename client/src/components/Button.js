import React, { memo } from 'react'



const Button = ({ text, textColor, bgColor, onClick, px, fullWidth, border, IcAfter, hover }) => {
    return (
        <button
            type='button'
            className={`py-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${fullWidth && 'w-full'} flex items-center justify-center outline-none rounded-md text-lg ${border} 
            border-solid ${hover} border-[#3961fb] w-32 h-12 gap-1`}
            onClick={onClick}
        >
            <span> {text}</span>
            <span>{IcAfter && <IcAfter />}</span>

        </button>
    )
}

export default memo(Button)