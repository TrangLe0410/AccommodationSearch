import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const registerService = ({ phone, password, name, email }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: { phone },
            defaults: {
                phone,
                name,
                email,
                password: hashPassword(password),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, { expiresIn: '2d' })
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Register is successfully !' : 'Phone number has been aldready used !',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})

export const loginService = async ({ phone, password }) => {
    try {
        const response = await db.User.findOne({
            where: { phone },
            raw: true
        });

        if (!response) {
            return {
                err: 2,
                msg: 'Phone number not found!',
                token: null
            };
        }

        const isCorrectPassword = bcrypt.compareSync(password, response.password);

        if (!isCorrectPassword) {
            return {
                err: 2,
                msg: 'Password is wrong!',
                token: null
            };
        }

        const token = jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '2d' });

        // Lấy vai trò của người dùng
        const role = response.role;

        // Trả về đối tượng phản hồi với vai trò đã được thêm vào
        return {
            err: 0,
            msg: 'Login is successfully!',
            token,
            role
        };

    } catch (error) {
        throw error;
    }
};

export const getUserRole = (userId) => new Promise(async (resolve, reject) => {
    try {
        const userData = await db.User.findOne({
            where: { id: userId },
            attributes: ['role'], // Lấy trường role từ cơ sở dữ liệu
            raw: true
        });
        resolve(userData.role);
    } catch (error) {
        reject(error);
    }
});