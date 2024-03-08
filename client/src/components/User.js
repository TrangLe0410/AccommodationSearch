import React from 'react'
import { useSelector } from 'react-redux'
import anonAvatar from '../assets/anon-avatar.png'

const User = () => {
    const { currentData } = useSelector(state => state.user)

    return (
        <div className='flex items-center gap-2'>
            <img src={currentData?.avatar || anonAvatar} alt="avatar" className='w-12 object-cover rounded-full h-12 border-2 shadow-md border-white' />
            <div className='flex flex-col'>
                <span>Xin chào, <span className='font-semibold'>{currentData?.name}</span></span>

            </div>
        </div>
    )
}

export default User