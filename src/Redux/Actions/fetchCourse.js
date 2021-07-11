
import { ActionCreator } from './ActionCreator';
import { FETCHCOURSES,FETCHBACKEND,FETCHFRONTEND,FETCHFULLSTACK,FETCHMOBILE,FETCHMINDSET,FETCHDESIGN} from '../Constants/Constants'
import { CoursesService } from '../../Services/Courses/Call';



export const FetchCourse = async () => {
    const fetchCourse=await CoursesService.fetchCourse();
    return dispatch => {
        fetchCourse.then((res) => {
            dispatch(ActionCreator(FETCHCOURSES,res.data));
        }).catch();
    }
}
export const FetchBackEnd= async () => {
    console.log("dispatched");
    const fetchCourse=await CoursesService.fetchCate("BackEnd");
    return dispatch => {
           fetchCourse.then((res) => {
                dispatch(ActionCreator(FETCHBACKEND,res.data));
                console.log("success");
            }).catch((err) => {
                console.log("err",err.response.data);
            });
    }
}
export const FetchFrontEnd= async () => {
    const fetchCourse=await CoursesService.fetchCate("FrontEnd");
    return dispatch => {
           fetchCourse.then((res) => {
                dispatch(ActionCreator(FETCHFRONTEND,res.data));
            }).catch((err) => {
                console.log("err",err.response.data);
            });
    }
}
export const FetchFullStack= async () => {
    const fetchCourse=await CoursesService.fetchCate("FullStack");
    return dispatch => {
           fetchCourse.then((res) => {
                dispatch(ActionCreator(FETCHFULLSTACK,res.data));
            }).catch();
    }
}
export const FetchDesign= async () => {
    const fetchCourse=await CoursesService.fetchCourse("Design");
    return dispatch => {
           fetchCourse.then((res) => {
                dispatch(ActionCreator(FETCHDESIGN,res.data));
            }).catch();
    }
}
export const FetchMindSet= async () => {
    const fetchCourse=await CoursesService.fetchCourse("TuDuy");
    return dispatch => {
           fetchCourse.then((res) => {
                dispatch(ActionCreator(FETCHMINDSET,res.data));
            }).catch();
    }
}
export const FetchMobile= async () => {
    const fetchCourse=await CoursesService.fetchCourse("TuDuy");
    return dispatch => {
           fetchCourse.then((res) => {
                dispatch(ActionCreator(FETCHMOBILE,res.data));
            }).catch();
    }
}