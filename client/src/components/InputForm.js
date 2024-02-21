import React, { memo } from "react";

const InputForm = ({ lable }) => {
    return (
        <div>
            <lable htmlFor="phone" className="text-lg">{lable}</lable>
            <input
                type="text"
                id="phone"
                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full shadow-sm'
            />

        </div>


    );
}
export default memo(InputForm);