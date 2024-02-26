import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";

import { useNavigate, Link } from "react-router-dom";
import { path } from '../../ultils/constant';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions'
const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.auth)
    const goLogin = useCallback(() => {
        navigate(path.LOGIN)
    }, [navigate])
    const [isFixed, setIsFixed] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full ${isFixed ? 'fixed top-0 bg-white' : 'sticky top-0 bg-white'} flex items-center justify-center border-b border-solid border-black border-opacity-15 z-50`}>
            <div className="w-4/5 flex items-center justify-between ">
                <div className="w-full flex items-center justify-between boder-bottom ">
                    <div>
                        <Link to={path.HOME}>
                            <img src={logo} alt="logo" className="h-[140px] object-contain" />
                        </Link>
                    </div>
                    <div className="container">
                        <div className="flex -mx-4 items-center justify-between relative">
                            <div className="flex px-4 justify-between items-center w-full">
                                <div>
                                    <nav id="navbarCollapse"
                                        className=" absolute w-full flex items-center justify-center lg:w-auto lg:flex-grow lg:items-center 
                                                    lg:justify-end lg:ml-20 lg:mr-0 lg:py-0 lg:px-0 lg:static lg:shadow-none lg:bg-transparent"
                                    >
                                        <ul className="blcok lg:flex">
                                            <li className="relative group">
                                                <Link to={path.HOME}
                                                    className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70
                                                    lg:group-hover:text-[#3056D3] group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0  flex mx-8 lg:mr-0"
                                                >
                                                    Trang Chủ
                                                </Link>
                                            </li>
                                            <li className="relative group">
                                                <a href="#about"
                                                    className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                >
                                                    Phòng Trọ
                                                </a>
                                            </li>
                                            <li className="relative group">
                                                <a href="#about"
                                                    className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                >
                                                    Chung cư
                                                </a>
                                            </li>
                                            <li className="relative group">
                                                <a href="#about"
                                                    className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                >
                                                    Tìm người ở ghép
                                                </a>
                                            </li>
                                            <li className="relative group">
                                                <a href="#about"
                                                    className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                >
                                                    Liên hệ
                                                </a>
                                            </li>
                                            <li className="relative group submenu-item">
                                                <div className="text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3] group-hover:text-primary
                                                                py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8  lg:mr-0 lg:ml-8 xl:ml-12 relative
                                                                after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current
                                                                after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:-translate-y-1/2 after:mt-[-2px]"
                                                >
                                                    Dịch vụ
                                                </div>
                                                <div className="submenu hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm
                                                                lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible  group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                                                    <a href="about.html" className=" block text-lg text-dark lg:text-[#090E34] rounded hover:text-[#3056D3] py-[10px] px-4 "
                                                    >
                                                        Thuê nhà nguyên căn
                                                    </a>
                                                    <a href="pricing.html" className="block text-lg text-dark lg:text-[#090E34] rounded hover:text-[#3056D3] py-[10px] px-4"
                                                    >
                                                        Tìm phòng trọ
                                                    </a>
                                                    <a href="pricing.html" className="block text-lg text-dark lg:text-[#090E34] rounded hover:text-[#3056D3] py-[10px] px-4"
                                                    >
                                                        Tìm người ở ghép
                                                    </a>
                                                    <a href="pricing.html" className="block text-lg text-dark lg:text-[#090E34] rounded hover:text-[#3056D3] py-[10px] px-4"
                                                    >
                                                        Cho thuê trọ
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-3">
                    {!isLoggedIn && <div className="flex items-center gap-3">
                        <Button text={'Đăng nhập'} textColor={'text-[#3961fb]'} bgColor='bg-[#0000]'
                            onClick={goLogin} />
                        <Link to={path.REGISTER}>
                            <Button text={'Đăng ký'} textColor={'text-white'} bgColor='bg-[#3961fb]' />
                        </Link>
                    </div>
                    }

                    {isLoggedIn && <div>
                        <small> Ten</small>
                        <Button text={'Đăng xuất'} textColor={'text-[#3961fb]'} bgColor='bg-[#0000]'
                            onClick={() => dispatch(actions.logout())}
                        />
                    </div>
                    }

                </div>
            </div>

        </div>




    );
}
export default Header;