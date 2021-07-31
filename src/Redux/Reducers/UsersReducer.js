import { FETCHCREDENTIALS, FETCHLOGGOUT } from "../Constants/Constants";

const initalState={
    Credential: null
}

const UserReducer= (state=initalState, action) => {
    const newState={...state}
    switch (action.type) {
        case FETCHCREDENTIALS:{
            console.log("Thông tin người dùng : ",action.payload);
            newState.Credential=action.payload
            state={...newState}
            return {...state}
        }
        case FETCHLOGGOUT:{
            console.log("Đã đăng xuất");
            newState.Credential=null
            state={...newState}
            localStorage.clear();
            
            return {...state}
        }
        default:
            return state;
    }
}
export default UserReducer