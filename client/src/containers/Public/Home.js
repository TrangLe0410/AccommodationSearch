import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Home = () => {

    return (
        <div className='w-full flex gap-6 flex-col items-center h-full'>
            <Header />

            <div className='w-4/5 lg:w-4/5 flex flex-col items-start justify-start  '>
                <Outlet />
            </div>
            <Footer />


        </div>
    );
}
export default Home;