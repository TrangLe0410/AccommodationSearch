import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm '>
            <h3 className="font-semibold text-4xl mb-3">Đăng Ký</h3>
            <div className="w-full flex flex-col gap-3">
                <lable htmlFor="name" className="text-lg">Họ và tên</lable>
                <input
                    type="text"
                    id="phone"
                    className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full shadow-sm'
                />
                <lable htmlFor="phone" className="text-lg">Số điện thoại</lable>
                <input
                    type="text"
                    id="phone"
                    className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full shadow-sm'
                />
                <lable htmlFor="email" className="text-lg">Email</lable>
                <input
                    type="text"
                    id="phone"
                    className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full shadow-sm'
                />
                <lable htmlFor="phone" className="text-lg">Mật khẩu</lable>
                <input
                    type="password"
                    id="password"
                    className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full shadow-sm'
                />

                <div className="mt-4">
                    <Button bgColor='bg-secondary1' textColor='text-white' fullWidth text='Đăng Ký' />
                </div>
                <div className='mt-4 flex items-center justify-between'>
                    <div> Bạn đã có tài khoản?
                        <Link to="/login" className="text-[blue] hover:text-[#FF6600]">
                            Đăng nhập ngay
                        </Link>
                    </div>

                </div>

            </div>
        </div>


    );
}
export default Register;