import icons from './icons'

const { ImPencil2, MdOutlineLibraryBooks, GrSystem, MdManageAccounts } = icons

const memuSidebar = [
    {
        id: 1,
        text: 'Quản lý hệ thống',
        path: '/dashboard/quan-ly-he-thong',
        icon: <GrSystem />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/dashboard/quan-ly-bai-dang',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Quản lý người dùng',
        path: '/dashboard/quan-ly-lich-hen',
        icon: <MdManageAccounts />
    },




]

export default memuSidebar