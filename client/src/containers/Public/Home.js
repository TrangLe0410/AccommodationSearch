import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Home = () => {

    return (
        <div className='w-full flex  flex-col items-center  bg-primary ' >
            <Header />
            <div className='w-4/5 lg:w-4/5 flex flex-col items-start justify-start  '>
                <Outlet />
            </div>
            <Footer />


        </div>
    );
}
export default Home;