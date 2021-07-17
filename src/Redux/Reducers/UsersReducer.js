import { FETCHCREDENTIALS } from "../Constants/Constants";

const initalState={
    Credential: {}
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
    
        default:
            return state;
    }
}
export default UserReducer