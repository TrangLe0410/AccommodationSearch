import React, { useEffect, useState } from 'react'
import { Sitem } from './index'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions'


const RelatedPost = ({ newPost }) => {
    const { newPosts, outStandingPost } = useSelector(state => state.post)
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        newPost ? dispatch(actions.getNewPosts()) : dispatch(actions.getOutstandingPost())
    }, [])

    useEffect(() => {
        newPost ? setPosts(newPosts) : setPosts(outStandingPost)
    }, [newPosts, outStandingPost])
    console.log(outStandingPost)
    return (
        <div className='w-full bg-white  rounded-md p-4' >
            <h3 className='font-semibold mb-4 text-xl'>{newPost ? 'Tin mới đăng' : 'Tin nổi bật'}</h3>
            <div className='w-full  flex flex-col gap-2'>
                {posts?.map(item => {
                    return (
                        <Sitem
                            key={item.id}
                            title={item.title}
                            price={item?.attributes?.price}
                            createdAt={item.createdAt}
                            image={JSON.parse(item.images.image)}
                            id={item.id} // Make sure to pass the id
                            star={item.star}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default RelatedPost