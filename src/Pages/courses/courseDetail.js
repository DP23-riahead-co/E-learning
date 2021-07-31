import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchCourseDetail } from '../../Redux/Actions/fetchCourse';

export default function CourseDetail(props) {
   
    const maKhoaHoc=props.match.params.maKhoaHoc;
    const dispatch=useDispatch();   
    useEffect(()=>{
        dispatch(FetchCourseDetail(maKhoaHoc));
    },[]);
    const course=useSelector(state=>state.AdminReducer.courseDetail);
    console.log(course);
   
    return (
        <div>
            
        </div>
    )
}
