import axios from "axios";

class Users{

    fetchLogin(data){
        return axios({
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method:'POST',
            data:data
        })
    }
    fetchSignUp(data){
        console.log("data : ",data);
        return axios({
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            method:'POST',
            data:data
        })
    }
}

export default Users