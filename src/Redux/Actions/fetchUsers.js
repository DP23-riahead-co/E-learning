import UserServices from '../../Services/Users';
import { FETCHCREDENTIALS } from '../Constants/Constants';
import { ActionCreator } from './ActionCreator';
export const FetchLogin=(login,props)=>{
    console.log("chay vào fetch");
    return dispatch =>{
    UserServices.fetchLogin(login)
    .then((res)=>{
        console.log("Đăng nhập thành công");
        console.log(res.data);
        dispatch(ActionCreator(FETCHCREDENTIALS,res.data))
        localStorage.setItem("user",res.data.maLoaiNguoiDung);
        localStorage.setItem("token",res.data.accessToken);
        props.history.push('/home');
    })   
    .catch((err)=>{
        console.log("err : ",err.response.data);
        console.log("Đăng nhập không thành công");
    })
    }
}