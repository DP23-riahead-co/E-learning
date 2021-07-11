import {FETCHCOURSES,FETCHBACKEND,FETCHFRONTEND,FETCHFULLSTACK,FETCHMOBILE,FETCHMINDSET,FETCHDESIGN} from '../Constants/Constants'
let initialState={
    courseList:[],
    backEnd:[],
    frontEnd:[],
    fullStack:[],
    mobile:[],
    mindDev:[],
    design:[],
}

const CourseReducer =(state=initialState,action) => {
    switch (action.type){
        case FETCHCOURSES:{
            state.courseList=action.payload
            return {...state}
        }
        case FETCHBACKEND:{
            console.log(action.payload)
             state.backEnd=action.payload;
             return {...state}   
            
        }
        case FETCHFRONTEND:{
            state.frontEnd=action.payload;
            return {...state}   
        
        }
        case FETCHFULLSTACK:{
            state.fullStack=action.payload;
            return {...state}   
        
        }
        case FETCHMOBILE:{
            state.mobile=action.payload;
            return {...state}   
        
        }
        case FETCHMINDSET:{
            state.mindDev=action.payload;
            return {...state}   
        
        }
        case FETCHDESIGN:{
            state.design=action.payload;
            return {...state}   
        }
        default:
            return state;
    }
}
export default CourseReducer