import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { Header } from '../Public'
import Sidebar from './Sidebar' // Đảm bảo import component Sidebar từ đúng đường dẫn
const Dashboard = () => {
    const { isLoggedIn, role } = useSelector(state => state.auth)


    if (!isLoggedIn || role !== 'admin') {
        return <Navigate to={`/${path.LOGIN}`} replace={true} />
    }
    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <Header />
            <div className='flex w-full h-screen flex-auto'>
                <Sidebar />
                <div className='flex-auto bg-white shadow-md h-full p-4 overflow-y-scroll'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard