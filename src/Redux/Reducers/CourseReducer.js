import { FETCHCOURSES, FETCHBACKEND, FETCHFRONTEND, FETCHFULLSTACK, FETCHMOBILE, FETCHMINDSET, FETCHDESIGN } from '../Constants/Constants'
let initialState = {
    courseList: [],
    backEnd: [],
    frontEnd: [],
    fullStack: [],
    mobile: [],
    mindDev: [],
    design: [],
}

const CourseReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case FETCHCOURSES: {
            state.courseList = action.payload
            return { ...state }
        }
        case FETCHBACKEND: {
            newState.backEnd = action.payload;
            state = { ...newState }
            return { ...state }
        }
        case FETCHFRONTEND: {
            newState.frontEnd = action.payload;
            state = { ...newState }
            return { ...state }

        }
        case FETCHFULLSTACK: {
            newState.fullStack = action.payload;
            state = { ...newState }
            return { ...state }

        }
        case FETCHMOBILE: {
            newState.mobile = action.payload;
            state = { ...newState }
            return { ...state }

        }
        case FETCHMINDSET: {
            newState.mindDev = action.payload;
            state = { ...newState }
            return { ...state }

        }
        case FETCHDESIGN: {
            newState.design = action.payload;
            state = { ...newState }
            return { ...state }
        }
        default:
            return state;
    }
}
export default CourseReducer