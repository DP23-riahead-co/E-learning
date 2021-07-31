import { Redirect } from 'react-router-dom';
import UserServices from '../../Services/Users';
import { FETCHCREDENTIALS } from '../Constants/Constants';
import { ActionCreator } from './ActionCreator';
export const FetchLogin=(login,history)=>{
    return dispatch =>{
    UserServices.fetchLogin(login)
    .then((res)=>{
        console.log("Đăng nhập thành công");
        dispatch(ActionCreator(FETCHCREDENTIALS,res.data))
        localStorage.setItem("user",res.data.maLoaiNguoiDung);
        localStorage.setItem("token",res.data.accessToken);
        localStorage.setItem("credentials",JSON.stringify(res.data));
        history.push("/");
    })   
    .catch((err)=>{
        console.log(err);
    })
    }
}
export const FetchSignUp= (signup,history)=>{

    console.log(signup);
      const promise=  UserServices.fetchSignUp(signup)
      promise.then((res)=>{
        console.log("Đăng ký thành công");
        console.log(res);
        history.push('/login')
    }).catch(err=>console.log(err.response.data))
 
   
}