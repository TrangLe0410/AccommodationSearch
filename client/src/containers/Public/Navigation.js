import React from "react"
import { NavLink } from "react-router-dom"

const nav = [
    { name: "Trang chủ", path: 'home' },
    { name: "Phòng trọ", path: 'cho-thue-phong-tro' },
    { name: "Nhà cho thuê", path: 'nha-cho-thue' },
    { name: "Căn hộ", path: 'cho-thue-can-ho' },
    { name: "Mặt bằng", path: 'cho-thue-mat-bang' },
]

const Navigation = () => {
    return (
        <div className="flex justify-center items-center text-white">
            <div className="w-1250 flex items-center gap-3 text-lg font-medium">
                {nav.length > 0 && nav.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLink to={item.path}>
                                {item.name}
                            </NavLink>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation;