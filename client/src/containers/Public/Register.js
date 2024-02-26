import React, { useState } from "react"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import InputForm from "../../components/InputForm"
import * as actions from '../../store/actions'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [invalidFields, setInvalidFields] = useState([])
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: '',
        email: ''
    })


    const handleSubmit = async () => {
        let invalids = validate(payload)
        if (invalids === 0)
            dispatch(actions.register(payload))
        navigate('/login');
    }

    const validate = (payload) => {
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được để trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 6 ký tự.'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break

                case 'email':
                    // Kiểm tra định dạng email sử dụng regular expression
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(item[1])) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Email không hợp lệ.'
                        }])
                        invalids++
                    }
                    break;

                default:
                    break;
            }
        })
        return invalids
    }
    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm '>
            <h3 className="font-semibold text-4xl mb-3">Đăng Ký</h3>
            <div className="w-full flex flex-col gap-3">
                <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} lable={'Họ Tên'} value={payload.name} setValue={setPayload} type={'name'} />
                <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} lable={'Số Điện Thoại'} value={payload.phone} setValue={setPayload} type={'phone'} />
                <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} lable={'Email'} value={payload.email} setValue={setPayload} type={'email'} />
                <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} lable={'Mật khẩu'} value={payload.password} setValue={setPayload} type={'password'} />

                <div className="mt-4">
                    <Button bgColor='bg-secondary1' textColor='text-white' fullWidth text='Đăng Ký'
                        onClick={handleSubmit}
                    />
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