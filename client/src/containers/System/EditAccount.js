import React, { useState } from 'react'
import { InputReadOnly, InputFormV2 } from '../../components'
import anonAvatar from "../../assets/anon-avatar.png";

const EditAccount = () => {
    const [invalidFields, setInvalidFields] = useState([])
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl w-full text-start font-medium py-4 border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-[50%] py-6 flex flex-col gap-4'>
                <div className='flex items-center justify-center'>
                    <label className='flex-none' htmlFor="avartar"></label>
                    <img src={anonAvatar} alt='avatar' className='w-40 h-40 rounded-full object-cover' />
                </div>
                <div className="flex items-center justify-between">
                    <InputReadOnly
                        label='Mã thành viên'
                        className="input mr-4" />
                    <InputReadOnly
                        label='Số điện thoại'
                        className="input" />
                </div>
                <InputFormV2
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    label='Tên hiển thị'
                    className="input" />
                <InputFormV2
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    label='Zalo'
                    className="input" />
                <InputFormV2
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    label='Email'
                    className="input" />
                <InputFormV2
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    label='Facebook'
                    className="input" />
                <InputFormV2
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    label='Facebook'
                    className="input" />

            </div>
        </div>
    )
}

export default EditAccount
