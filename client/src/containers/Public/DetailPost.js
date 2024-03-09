import React, { useEffect } from "react"
import { ItemSidebar, RelatedPost } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../store/actions'
import { useParams } from "react-router-dom";
import icons from '../../ultils/icons'
import moment from 'moment'
import 'moment/locale/vi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { GrStar, MdLocationPin, TbReportMoney, RiCrop2Line, FaRegClock, FaPhoneAlt, IoCalendarNumberOutline, GiPayMoney } = icons
const DetailPost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { provinces } = useSelector(state => state.app);
    const { postDetails, msg } = useSelector(state => state.post);
    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])


    useEffect(() => {
        dispatch(actions.getPostById(postId));
    }, [dispatch, postId]);
    const handleStar = (star) => {
        let stars = [];
        for (let i = 1; i <= +star; i++) stars.push(<GrStar className="star-item" style={{ color: '#fbbf24' }} size={23} />);
        return stars;
    };
    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow()
    }
    const { title, star, description, attributes, images, address, user, id, createdAt } = postDetails;
    console.log(postDetails)
    const descriptionArray = description && JSON.parse(description);
    const imagesArray = images && JSON.parse(images.image);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (

        <div className='w-full flex flex-col gap-3  mt-1.5' >
            <div className="w-full flex gap-5 ">
                <div className='w-[70%] mb-5 p-4 bg-white border border-gray-300 rounded-lg' >
                    <div>
                        {/* <Slider /> */}
                        <Slider {...settings}>
                            {imagesArray &&
                                imagesArray.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`slide-${index}`} className="w-full h-[360px] object-cover" />
                                    </div>
                                ))}
                        </Slider>
                        <div className="text-red-600 ml-4 font-medium mt-4 text-2xl"
                        >
                            {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                                return (
                                    <span key={number}>{star}</span>
                                )
                            })}
                            {title}

                        </div>
                        <div className=" flex ml-4 items-center mt-4 gap-4">
                            <MdLocationPin size={20} />
                            <div className="text-lg">{address}</div>
                        </div>
                        <div className="flex items-center ml-4 justify-between mt-3 w-3/5">
                            <div className="flex  items-center gap-4">
                                <TbReportMoney size={20} />
                                <span className="text-xl font-bold text-green-600"> {attributes?.price}</span>
                            </div>
                            <div className="flex  items-center gap-4">
                                <RiCrop2Line size={20} />
                                <span className="text-base"> {attributes?.acreage}</span>
                            </div>
                            <div className="flex  items-center gap-4">
                                <FaRegClock size={20} />
                                <span className="text-base"> {formatTime(createdAt)}</span>
                            </div>
                        </div>

                        <div className="post-detail ml-4 ">
                            <h3 className="font-medium mt-6 text-xl">Thông tin mô tả</h3>
                            <div className="flex-row mt-4 ml-5 gap-3">
                                {descriptionArray && descriptionArray.map((item, index) => (
                                    // Check if the item is not an empty string
                                    item.trim() !== '' && (
                                        <div key={index}>
                                            {item}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        <div className="contact ml-4">
                            <h3 className="font-medium mt-20 text-xl">Thông tin liên hệ</h3>
                            <div className="grid grid-cols-2 mt-4 ml-5">
                                <div className="flex gap-3 flex-col ">
                                    <span>Liên hệ:</span>
                                    <span className="bg-gray-100">Số điện thoại:</span>
                                    <span>Zalo:</span>
                                </div>
                                <div className="flex gap-3 flex-col">
                                    <span>{user?.name ?? 'Huyền Trang'}</span>
                                    <span className="bg-gray-100">{user?.phone}</span>

                                    <span>{user?.zalo ?? user?.phone}</span>
                                </div>
                            </div>
                        </div>
                        <div className="location ">
                            <h3 className="font-medium mt-8 text-xl">Bản đồ</h3>
                            <div className=" flex ml-4 items-center mt-4 gap-4">
                                <MdLocationPin size={20} />
                                <div className="text-lg">{address}</div>
                            </div>
                            <div className="mt-4">
                                <img src="https://www.google.com/maps/vt/data=ShvPpFyWGgdCNPi08WRw0qTlMyZRwfyxYYuBeCTZIPsl0-qa4jVmhwYqt4ML3lzO2y9kNB9msu36UdhTcowOmMM4KPnv1CwY0m6rvGnvLOcUCtEEKMaxak8n0rHj1b5yeyyk9chAaCrUonEh-FP895QgMQJDHzfd-4W6VhZPK_4Bpf5r9HQuXabmPZpLIlIKA3APp7_epH7Csv1bjAlDfMho23pYEGlMUd9JqXzGZ-PcHvkJZwnRtt-HBjvG1C_-gr0jUrDb4pp7iMpKKvheWR4dlFQML_HpULWoCcW75vCUHcqUoRP6VumpKdZNCkJtsIFpl_9ypaqb6mlz"
                                    alt="location"></img>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='w-[30%] flex flex-col justify-start items-center'>
                    <div className="mb-5 w-full p-4 bg-[#febb02] border border-gray-300 rounded-lg">
                        <div className=" block text-center">
                            <div className="flex flex-col items-center justify-center text-lg font-bold">
                                <img src="https://hethongxephangtudong.net/public/client/images/no-avatar.png" alt="avatar" className="w-[100px] h-[100px] object-cover rounded-full mb-4" />
                                <p className="mt-2">{user?.name}</p>
                                <div className="phone w-[100%] mt-3 justify-center border-[#16c784] border rounded-lg  h-[40px] flex gap-3 items-center bg-[#16c784] ">
                                    <FaPhoneAlt size={24} color="white" />
                                    <button className=" text-white">{user?.phone}</button>
                                </div>
                                <div className="phone w-[100%] mt-3 justify-center  border rounded-lg  h-[40px] flex gap-3 items-center bg-white ">
                                    <IoCalendarNumberOutline size={24} color="black" />
                                    <button className=" text-black font-semibold">Đặt lịch hẹn</button>
                                </div>
                                <div className="phone w-[100%] mt-3 justify-center  border rounded-lg  h-[40px] flex gap-3 items-center bg-white ">
                                    <GiPayMoney size={24} color="black" />
                                    <button className=" text-black font-semibold">Đặt cọc tiền</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                        <RelatedPost />
                    </div>
                    {/* <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                        <ItemSidebar title={'Tin nổi bật'} />
                    </div> */}
                </div>

            </div>


        </div>
    )
}

export default DetailPost;
