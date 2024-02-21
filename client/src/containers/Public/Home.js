import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className='w-full h-full flex gap-6 flex-col items-center justify-between bg-primary ' >
            <Header />
            <div className="w-full flex flex-col items-center justify-start">
                <Outlet />
            </div>
            <Footer />


        </div>
    );
}
export default Home;