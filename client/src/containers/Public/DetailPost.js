import React, { useEffect } from "react"

import { ItemSidebar, RelatedPost } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../store/actions'
import icons from '../../ultils/icons'
import { useParams } from "react-router-dom"

const { GrStar } = icons
const DetailPost = (images, user, title, star, description, attributes, address, id, createdAt, match) => {
    const { postId, provinces } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const { postDetails } = useSelector(state => state.app);
    const { postId: postIdFromParams } = useParams(); // Get the post ID from the URL

    useEffect(() => {
        // Now use the id from useParams
        dispatch(actions.getPostById(postIdFromParams));
    }, [dispatch, postIdFromParams]);
    console.log('current id', postIdFromParams)
    console.log('postDetails', postDetails);



    return (
        <div className='w-full flex flex-col gap-3 mt-1.5' >
            <div>
                <h1 className="text-[32px] font-bold">{title}</h1>
                <p className="text-lg text-gray-700"></p>
            </div>
            <div className="w-full flex gap-5">
                <div className='w-[70%] mb-5 p-4 bg-white border border-gray-300 rounded-lg' >
                    detail post
                    <div className="my-2 flex items-center justify-between text-[20px]">
                        <span className="font-bold text-green-600 whitespace-nowrap overflow-hidden text-ellipsis">{attributes?.price}</span>
                        <span>{attributes?.acreage}</span>
                        <span className=' whitespace-nowrap overflow-hidden text-ellipsis'>
                            {address}
                        </span>

                        <span className="text-[16px] text-gray-500">{createdAt}</span>
                    </div>
                </div>

                <div className='w-[30%] flex flex-col justify-start items-center'>
                    <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                        <h3 className='text-xl p-3 font-semibold mb-6'> Thông tin liên hệ</h3>

                    </div>
                    <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                        <RelatedPost />
                    </div>
                    <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                        <ItemSidebar isDouble={true} title={'Tin nổi bật'} />
                    </div>
                    <div className="mb-5 w-full p-3 bg-white border border-gray-300 rounded-lg">
                        <ItemSidebar isDouble={true} content={provinces} title={'Quận cho thuê'} />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default DetailPost;
