import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import { useNavigate, NavLink } from "react-router-dom";
import { path } from '../../ultils/constant';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions';

const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.auth);
    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, [navigate]);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    // const DropdownMenu = () => {
    //     const [isDropdownVisible, setDropdownVisible] = useState(false);

    //     const toggleDropdown = () => {
    //         setDropdownVisible(!isDropdownVisible);
    //     };

    // }


    const [isFixed, setIsFixed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);

        };


        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Initial check for mobile on component mount
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`w-full h-[100px] ${isFixed ? 'fixed top-0 bg-white' : 'sticky top-0 bg-white'} flex items-center justify-center border-b border-solid border-black border-opacity-15 z-50`}>
            <div className="w-4/5 flex items-center justify-between ">
                <div className="w-full flex items-center justify-between boder-bottom ">
                    <div>
                        <NavLink to={path.HOME}>
                            {/* Set a fixed size for the logo */}
                            <img src={logo} alt="logo" className="h-[125px] object-contain" />
                        </NavLink>
                    </div>
                    <div className="container">
                        <div className={`flex -mx-4 items-center justify-between relative ${isMobile ? 'lg:hidden' : ''}`}>
                            <div className="flex px-4 justify-between items-center w-full">
                                <div>
                                    <nav
                                        id="navbarCollapse"
                                        className={`absolute w-full flex items-center justify-center lg:w-auto lg:flex-grow lg:items-center 
                                        lg:justify-end lg:ml-20 lg:mr-0 lg:py-0 lg:px-0 lg:static lg:shadow-none lg:bg-transparent ${isMobile ? 'lg:hidden' : ''}`}
                                    >
                                        {isMobile ? null : (
                                            <ul className="blcok lg:flex" >
                                                <li className="relative group">
                                                    <NavLink to={`/`}
                                                        className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70
                                                    lg:group-hover:text-[#3056D3] group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0  flex mx-8 lg:mr-0"
                                                    >
                                                        Trang Chủ
                                                    </NavLink>
                                                </li>
                                                <li className="relative group">
                                                    <NavLink to={path.CHO_THUE_PHONG_TRO}
                                                        className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Phòng Trọ
                                                    </NavLink>
                                                </li>
                                                <li className="relative group">
                                                    <NavLink to={path.NHA_CHO_THUE}
                                                        className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Nhà cho thuê
                                                    </NavLink>
                                                </li>
                                                <li className="relative group">
                                                    <NavLink to={path.CHO_THUE_CAN_HO}
                                                        className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Căn Hộ
                                                    </NavLink>
                                                </li>
                                                <li className="relative group">
                                                    <NavLink to={path.TIN_TUC}
                                                        className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Tin tức
                                                    </NavLink>
                                                </li>
                                                <li className="relative group">
                                                    <NavLink to={path.LIEN_HE}
                                                        className="ud-menu-scroll text-lg text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Liên hệ
                                                    </NavLink>
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
                                        )}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {isMobile ? (
                        <div className="relative inline-block text-left">
                            <button type="button" onClick={toggleDropdown} className="inline-flex items-center justify-center gap-2 text-[#3961fb]">
                                <span className="text-lg">Menu</span>
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 14a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2H10zm0-5a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H10zm0-5a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H10z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isDropdownVisible && (
                                <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <NavLink to={path.HOME} className="block px-4 py-2  text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Trang Chủ</NavLink>
                                        <NavLink to={path.CHO_THUE_PHONG_TRO} className="block px-4 text-lg py-2  lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Phòng Trọ</NavLink>
                                        <NavLink to={path.NHA_CHO_THUE} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Nhà Cho Thuê</NavLink>
                                        <NavLink to={path.CHO_THUE_CAN_HO} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Căn Hộ</NavLink>
                                        <NavLink to={path.TIN_TUC} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Tin Tức</NavLink>
                                        <NavLink to={path.LIEN_HE} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Liên Hệ</NavLink>
                                        <NavLink to={path.TIN_TUC} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Dịch Vụ</NavLink>
                                        <NavLink to={path.LOGIN} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Đăng Nhập</NavLink>
                                        <NavLink to={path.REGISTER} className="block px-4 py-2 text-lg lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Đăng Ký</NavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {!isLoggedIn && (
                                <div className="flex items-center gap-3">
                                    <Button text={'Đăng nhập'} textColor={'text-[#3961fb]'} border={'border'} bgColor='bg-[#0000]' onClick={goLogin} />
                                    <NavLink to={path.REGISTER}>
                                        <Button text={'Đăng ký'} textColor={'text-white'} border={'border'} bgColor='bg-[#3961fb]' />
                                    </NavLink>
                                </div>
                            )}

                            {isLoggedIn && (
                                <div>
                                    <small>Ten</small>
                                    <Button text={'Đăng xuất'} textColor={'text-[#3961fb]'} border={'border'} bgColor='bg-[#0000]' onClick={() => dispatch(actions.logout())} />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
