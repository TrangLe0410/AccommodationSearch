import React, { useEffect } from 'react'
import { Button, Item } from '../../components'
import { getPosts, getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPostsLimit(0))

    }, [])
    return (
        <div className='w-full bg-white shadow-sm rounded-md border border-gray-300 p-8 items-start'>
            <div className='flex items-center justify-between my-3'>
                <h4 className='text-3xl font-semibold'> Danh sách bài đăng</h4>
                <span className='text-lg'> Cập nhật: 12:05 25/08/2023</span>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span className='text-lg'>Sắp xếp: </span>
                <Button bgColor='bg-gray-200' text={'Mặc định'} />
                <Button bgColor='bg-gray-200' text={'Mới nhất'} />
                <Button bgColor='bg-gray-200' text={'Nhiều nhất'} />
            </div>
            <div className='items'>
                {posts?.length > 0 && posts.map(item => {
                    return (
                        <Item
                            key={item?.id}
                            address={item?.address}
                            attributes={item?.attributes}
                            description={JSON.parse(item?.description)}
                            images={JSON.parse(item?.images?.image)}
                            star={+item?.star}
                            title={item?.title}
                            user={item?.user}
                            id={item?.id}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default List