import axios from 'axios';
class Courses{
    fetchCourse=() => {
        return axios({
            method:'GET',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP02'
        })
    }
    fetchCate=(cate) => {
        return axios({
            url:`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${cate}&MaNhom=GP03`,
            method:'GET'
           
        })
    }  
}
export default Courses