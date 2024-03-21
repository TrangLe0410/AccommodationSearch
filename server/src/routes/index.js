import authRouter from './auth'
import insertRouter from './insert'
import categoryRouter from './category'
import priceRouter from './price'
import areaRouter from './area'
import postRouter from './post'
import provinceRouter from './province'
import userRouter from './user'
import appointmentRouter from './appointment'
import commentRouter from './comment'
const initRoutes = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/insert', insertRouter)
    app.use('/api/v1/category', categoryRouter)
    app.use('/api/v1/price', priceRouter)
    app.use('/api/v1/area', areaRouter)
    app.use('/api/v1/post', postRouter)
    app.use('/api/v1/province', provinceRouter)
    app.use('/api/v1/user', userRouter)
    app.use('/api/v1/appointment', appointmentRouter)
    app.use('/api/v1/comment', commentRouter)

    return app.use('/', (req, res) => {
        res.send('server on...')
    })
}

export default initRoutes