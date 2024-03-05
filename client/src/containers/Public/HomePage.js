import React, { useEffect } from "react"
import { text } from "../../ultils/constant"
import { Province, Slider, ItemSidebar, RelatedPost } from "../../components"
import { Search, List, Pagination } from "./index"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../store/actions'
import { useSearchParams } from "react-router-dom"
const Homepage = () => {
    const { categories, prices, areas } = useSelector(state => state.app)


    return (
        <div className='w-full flex flex-col gap-3 mt-1.5' >
            <Slider />
            <Search />

            <div>
                <h1 className="text-[32px] font-bold">{text.HOME_TITLE}</h1>
                <p className="text-lg text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>

            <Province />
            <div className="w-full flex gap-5">
                <div className='w-[70%]' >
                    <List />
                    <Pagination />

                </div>
                <div className='w-[30%] flex flex-col justify-start items-center'>
                    <div className="mb-5 w-full p-4 bg-white border border-gray-300 shadow-sm rounded-md">
                        <ItemSidebar content={categories} title={'Danh mục cho thuê'} />
                    </div>
                    <div className="mb-5 w-full p-4 bg-white border border-gray-300 rounded-lg">
                        <ItemSidebar type='priceCode' isDouble={true} content={prices} title={'Xem theo giá'} />
                    </div>
                    <div className="mb-5 w-full p-4 bg-white border border-gray-300 rounded-lg">
                        <ItemSidebar type='areaCode' isDouble={true} content={areas} title={'Xem theo diện tích'} />
                    </div>
                    <div className="mb-5 w-full p-4 bg-white border border-gray-300 rounded-lg">
                        <RelatedPost />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Homepage