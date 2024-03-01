import React from 'react'
import { SearchItem } from '../../components'
import icons from '../../ultils/icons'

const { GrNext, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, MdOutlineHouseSiding, FiSearch } = icons

const Search = () => {
    return (
        <div className='p-[10px] w-5/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-center  gap-2' >
            <SearchItem IconBefore={<MdOutlineHouseSiding />} fontWeight IconAfter={<GrNext />} text='Phòng trọ' />
            <SearchItem IconBefore={<HiOutlineLocationMarker />} IconAfter={<GrNext />} text='Chọn quận' />
            <SearchItem IconBefore={<TbReportMoney />} IconAfter={<GrNext />} text='Chọn giá' />
            <SearchItem IconBefore={<RiCrop2Line />} IconAfter={<GrNext />} text='Diện tích' />
            <button
                type='button'
                className='outline-none py-2 px-4 w-full rounded-md bg-[#0071c2] text-lg flex items-center justify-center gap-2 text-white font-medium hover:shadow-lg'

            >
                <FiSearch />
                Tìm kiếm
            </button>
        </div>
    )
}

export default Search;