import axios from "axios"
import { ActionCreator } from "../../Redux/Actions/ActionCreator"
import { FETCHUSERINFO } from "../../Redux/Constants/Constants"

const fetchUserInfo = (user) => {
    const adminToken=`Bearer ${localStorage.getItem('token')}`;
    return axios({
        method: 'post',
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
        headers: {
            "Authorization": adminToken
        },
        data: user
    })
}

export const GetUserInfo = (user) => {
    return dispatch=>{
        fetchUserInfo(user).then(
            (res) => {
                console.log('backdata :',res.data);
                dispatch(ActionCreator(FETCHUSERINFO,res.data));
            }
        ).catch(
            () => {
                console.log('fail');
            }
        )
    }
    
}