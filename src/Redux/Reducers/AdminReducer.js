import { FETCHUSERINFO,FETCHCOURSEDETAIL } from "../Constants/Constants";

const initalState ={
    userInfo:null,
    courseDetail:null,
}
const AdminReducer=(state=initalState,action)=>{
    const newState = {...state}
    switch (action.type){
        case FETCHUSERINFO:{
            newState.userInfo = action.payload;
            state={...newState};
            return {...state};
        }
        case FETCHCOURSEDETAIL:{
            newState.courseDetail = action.payload;
            state={...newState};
            return {...state};
        }
        default:
            return state;
    }
}
export default AdminReducer;