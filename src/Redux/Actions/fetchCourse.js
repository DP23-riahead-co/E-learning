
import { ActionCreator } from './ActionCreator';
import { FETCHCOURSES, FETCHBACKEND, FETCHFRONTEND, FETCHFULLSTACK, FETCHMOBILE, FETCHMINDSET, FETCHDESIGN } from '../Constants/Constants'
import { CoursesService } from '../../Services/Courses/Call';



export const FetchCourse = async () => {
    const fetchCourse = await CoursesService.fetchCourse();
    return dispatch => {
        fetchCourse.then((res) => {
            dispatch(ActionCreator(FETCHCOURSES, res.data));
        }).catch();
    }
}
export const FetchBackEnd = () => {
    return dispatch => {
        CoursesService.fetchCate("BackEnd")
            .then((res) => {
                dispatch(ActionCreator(FETCHBACKEND, res.data));
            }).catch((err) => {
                console.log("err", err.data);
            });
    }
}
export const FetchFrontEnd = () => {
    return dispatch => {
        CoursesService.fetchCate("FrontEnd")
            .then((res) => {
                dispatch(ActionCreator(FETCHFRONTEND, res.data));
            }).catch((err) => {
                console.log("err", err.data);
            });
    }
}
export const FetchFullStack =  () => {
    return dispatch => {
        CoursesService.fetchCate("FullStack")
            .then((res) => {
                dispatch(ActionCreator(FETCHFULLSTACK, res.data));
            }).catch((err) => {
                console.log("err", err.data);
            });
    }
}
export const FetchDesign =  () => {
    return dispatch => {
        CoursesService.fetchCate("Design")
            .then((res) => {
                dispatch(ActionCreator(FETCHDESIGN, res.data));
            }).catch((err) => {
                console.log("err", err.data);
            });
    }
}
export const FetchMindSet =  () => {
    return dispatch => {
        CoursesService.fetchCate("TuDuy")
            .then((res) => {
                dispatch(ActionCreator(FETCHMINDSET, res.data));
            }).catch((err) => {
                console.log("err", err.data);
            });
    }
}
export const FetchMobile =  () => {
    return dispatch => {
        CoursesService.fetchCate("DiDong")
            .then((res) => {
                dispatch(ActionCreator(FETCHMOBILE, res.data));
            }).catch((err) => {
                console.log("err", err.data);
            });
    }
}