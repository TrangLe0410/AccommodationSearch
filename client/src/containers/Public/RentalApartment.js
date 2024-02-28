import React from "react"
import { text } from "../../ultils/constant"
import { Province, Slider } from "../../components"
import Search from "./Search"


const RentalApaetment = () => {
    return (
        <div className="w-full flex flex-col gap-3 mt-1.5">
            <Slider />
            <Search />
            <div>
                <h1 className="text-[32px] font-bold">{text.HOME_TITLE}</h1>
                <p className="text-lg text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>

            <Province />

        </div>
    )
}

export default RentalApaetment