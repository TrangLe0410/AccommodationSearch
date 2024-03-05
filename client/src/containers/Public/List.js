import React, { useEffect } from 'react'
import { Button, Item } from '../../components'
import { getPosts, getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
const List = ({ categoryCode }) => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {}
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        if (categoryCode) searchParamsObject.categoryCode = categoryCode
        dispatch(getPostsLimit(searchParamsObject))
    }, [searchParams, categoryCode])
    // useEffect(() => {
    //     dispatch(getPosts())
    // })
    return (
        <div className='w-full bg-white mt-6 shadow-sm rounded-md border border-gray-300 p-8 items-start'>
            <div className='flex items-center justify-between'>
                <h4 className='text-3xl font-semibold'> Danh sách bài đăng</h4>
                <span className='text-lg'> Cập nhật: 12:05 25/08/2023</span>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span className='text-lg'>Sắp xếp: </span>
                <Button bgColor='bg-gray-200' hover={'hover:bg-gray-300'} text={'Mặc định'} />
                <Button bgColor='bg-gray-200' hover={'hover:bg-gray-300'} text={'Mới nhất'} />
                <Button bgColor='bg-gray-200' hover={'hover:bg-gray-300'} text={'Nhiều nhất'} />
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