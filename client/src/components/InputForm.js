import React, { memo } from "react";

const InputForm = ({ lable, value, setValue, type, invalidFields, setInvalidFields }) => {
    return (
        <div>
            <lable htmlFor="phone" className="text-lg">{lable}</lable>
            <input

                id="phone"
                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full shadow-sm'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [type]: e.target.value }))}
                onFocus={() => setInvalidFields([])}
            />
            {invalidFields.length > 0 && invalidFields.some(i => i.name === type) && <small className='text-red-500 italic'>{invalidFields.find(i => i.name === type)?.message}</small>}

        </div>


    );
}
export default memo(InputForm);