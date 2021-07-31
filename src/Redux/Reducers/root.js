import {combineReducers} from 'redux'
import CourseReducer from './CourseReducer'
import UserReducer from './UsersReducer';
import AdminReducer from './AdminReducer';
const RootReducer=combineReducers({
    CourseReducer,
    UserReducer,
    AdminReducer,
});
export default RootReducer