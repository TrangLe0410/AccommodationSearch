import db from '../models'

// GET CURRENT
export const getOne = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get user',
            response
        })
    } catch (error) {
        reject(error)
    }
})
export const getUserService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findAll({
            raw: true,
            attributes: ['id', 'name', 'phone', 'zalo', 'fbUrl', 'role']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get prices.',
            response
        })
    } catch (error) {
        reject(error)
    }
})