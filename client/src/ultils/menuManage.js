import icons from './icons'

const { ImPencil2, MdOutlineLibraryBooks, GrSystem, FaCalendarAlt } = icons

const menuManage = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/he-thong/tao-moi-bai-dang',
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/he-thong/quan-ly-bai-dang',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Quản lý lịch hẹn',
        path: '/he-thong/quan-ly-lich-hen',
        icon: <FaCalendarAlt />
    },


];
const isAdmin = true; // Đây là nơi kiểm tra xem người dùng có phải là admin hay không

if (isAdmin) {
    menuManage.push({
        id: 4,
        text: 'Quản lý hệ thống',
        path: '/dashboard/quan-ly-he-thong',
        icon: <GrSystem />
    });
}

export default menuManage