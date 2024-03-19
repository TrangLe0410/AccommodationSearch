import React, { useCallback, useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { Button, User } from "../../components";
import { useNavigate, NavLink, useSearchParams, Link } from "react-router-dom";
import { path } from '../../ultils/constant';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions';
import icons from '../../ultils/icons'
import menuManage from '../../ultils/menuManage'
const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons
const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.auth);
    const { currentData } = useSelector(state => state.user)
    const [isShowMenu, setIsShowMenu] = useState(false)
    console.log(currentData)
    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, [navigate]);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const [isFixed, setIsFixed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dispatch = useDispatch();
    const headerRef = useRef();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [searchParams.get('page')]);

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
        <div ref={headerRef} className={`w-full h-[100px] ${isFixed ? 'fixed top-0 bg-white' : 'sticky top-0 bg-white'} flex items-center justify-center border-b border-solid border-black border-opacity-15 z-50`}>
            <div className="w-4/5 flex items-center justify-between ">
                <div className="w-full flex items-center justify-between boder-bottom ">
                    <div>
                        <NavLink to={path.HOME}>
                            {/* Set a fixed size for the logo */}
                            <img src={logo} alt="logo" className="h-[100px] object-contain" />
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
                                                        className="ud-menu-scroll text-base text-dark lg:text-[#090E34] lg:group-hover:opacity-70
                                                    lg:group-hover:text-[#3056D3] group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0  flex mx-8 lg:mr-0"
                                                    >
                                                        Trang Chủ
                                                    </NavLink>
                                                </li>
                                                <li className="relative group">

                                                    <Link to="/cho-thue-phong-tro"
                                                        className="ud-menu-scroll text-base text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Phòng Trọ
                                                    </Link>
                                                </li>
                                                <li className="relative group">
                                                    <Link to="/nha-cho-thue"
                                                        className="ud-menu-scroll text-base text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Nhà cho thuê
                                                    </Link>
                                                </li>
                                                <li className="relative group">
                                                    <Link to="/cho-thue-can-ho"
                                                        className="ud-menu-scroll text-base text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Căn Hộ
                                                    </Link>
                                                </li>
                                                <li className="relative group">
                                                    <Link to="/tin-tuc"
                                                        className="ud-menu-scroll text-base text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Tin tức
                                                    </Link>
                                                </li>
                                                <li className="relative group">
                                                    <Link to="/lien-he"
                                                        className="ud-menu-scroll text-base text-dark lg:text-[#090E34] lg:group-hover:opacity-70 lg:group-hover:text-[#3056D3]
                                                        group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                                                    >
                                                        Liên hệ
                                                    </Link>
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
                                <span className="text-base">Menu</span>
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 14a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2H10zm0-5a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H10zm0-5a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H10z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isDropdownVisible && (
                                <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <NavLink to={path.HOME} className="block px-4 py-2  text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Trang Chủ</NavLink>
                                        <NavLink to={path.CHO_THUE_PHONG_TRO} className="block px-4 text-base py-2  lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Phòng Trọ</NavLink>
                                        <NavLink to={path.NHA_CHO_THUE} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Nhà Cho Thuê</NavLink>
                                        <NavLink to={path.CHO_THUE_CAN_HO} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Căn Hộ</NavLink>
                                        <NavLink to={path.TIN_TUC} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Tin Tức</NavLink>
                                        <NavLink to={path.LIEN_HE} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Liên Hệ</NavLink>
                                        <NavLink to={path.TIN_TUC} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Dịch Vụ</NavLink>
                                        <NavLink to={path.LOGIN} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Đăng Nhập</NavLink>
                                        <NavLink to={path.REGISTER} className="block px-4 py-2 text-base lg:text-[#090E34] hover:bg-gray-100" role="menuitem">Đăng Ký</NavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {!isLoggedIn && (
                                <div className="flex items-center gap-3">
                                    <Button text={'Đăng nhập'} width={'w-[100px]'} textColor={'text-[#3961fb]'} hover={'hover:bg-blue-700 hover:text-[#ffffff]'}
                                        border={'border'} bgColor='bg-[#0000]' onClick={goLogin} />
                                    <NavLink to={path.REGISTER}>
                                        <Button text={'Đăng ký'} width={'w-[100px]'} textColor={'text-white'} hover={'hover:bg-blue-700 hover:text-[#ffffff]'}
                                            border={'border'} bgColor='bg-[#3961fb]' />
                                    </NavLink>
                                </div>
                            )}

                            {isLoggedIn && <div className='flex items-center gap-3 relative'>
                                <User onClick={() => setIsShowMenu(prev => !prev)} />
                                <Button
                                    text={'Quản lý tài khoản'}
                                    textColor='text-white'
                                    textFont='text-sm'
                                    bgColor='bg-blue-700'
                                    IcAfter={BsChevronDown}
                                    width={'w-[200px]'}
                                    onClick={() => setIsShowMenu(prev => !prev)}

                                />
                                {isShowMenu && <div className='absolute min-w-200 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col'>
                                    {menuManage.map(item => {
                                        return (
                                            <Link
                                                className='hover:text-orange-500 flex items-center gap-2 text-blue-600 border-b border-gray-200 py-2'
                                                key={item.id}
                                                to={item?.path}
                                            >
                                                {item?.icon}
                                                {item.text}
                                            </Link>
                                        )
                                    })}
                                    <span
                                        className='cursor-pointer hover:text-orange-500 text-blue-500 py-2 flex items-center gap-2'
                                        onClick={() => {
                                            setIsShowMenu(false)
                                            dispatch(actions.logout())
                                        }}
                                    >
                                        <AiOutlineLogout />
                                        Đăng xuất
                                    </span>
                                </div>}
                            </div>}



                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;