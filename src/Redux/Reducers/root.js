import {combineReducers} from 'redux'
import CourseReducer from './CourseReducer'
import UserReducer from './UsersReducer';
const RootReducer=combineReducers({
    CourseReducer,
    UserReducer
});
export default RootReducer