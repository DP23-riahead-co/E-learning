import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import color from '../../Components/Constants/color'
import { NavLink } from 'react-router-dom'
import { Button } from '../../Components/Button'
import {diviceSize} from '../../Components/Responsive'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback } from 'react'
import { FetchBackEnd, FetchDesign, FetchFrontEnd, FetchFullStack, FetchMindSet, FetchMobile } from '../../Redux/Actions/fetchCourse'
const BigCarousel = styled.div`
    width:100%;
    margin:0 auto;
    position:relative;
    height:100%;
    .control{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        .next{
            margin-right:2rem;
        };
        .pre{
            margin-left:2rem;
        };

    }
`
const Circle = styled.button`
    opacity:1;
    width:50px;
    height:50px;
    border:none;
    text-align:center;
    font-size:1rem;
    font-weight:bold;
    border-radius:50%;
    outline:none;
    z-index:2;
    box-shadow: 0px 0px 5px 0px grey;
    &:focus{
        outline:none;
    };
    ${props => props.hide && css`
        opacity:0;
        z-index:-1;
    `}
`
const Slide = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    height:100%;
    width:100%;
    min-width:300px;
    position:relative;
    overflow:hidden; 
`
const ItemBase = styled(NavLink)`
    &:link{
        color:black;
        text-decoration:none;
        text-decoration-line:none;
    }
    &:visited{
        color:black;
        text-decoration:none;
        text-decoration-line:none;
    }
`
const Item = styled(ItemBase).attrs(props => ({
    index: props.index
}))`

    z-index:1;
    padding:1rem;
    img{
        width:100%;
        height:40%;
        min-height:80px;
        border:0.3px solid ${color.border};
        border-radius:5px;
    }
    h1{
        line-height:1.5;
        font-size:1.5rem;
        color:black;
        font-weight:bold;
        display: -webkit-box!important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    p{
        color:${color.border};
    }
    position:absolute;
    width:calc(100%/5);
    height:100%;
    top:0;
    left:0;
    transition:all ease 0.8s;
    transform:translateX(calc(100% * ${props => props.index}));
    ${props => props.active && css`
    transform:translateX(calc(100% * ${props => props.index} - 100% * ${props => props.active}));
    `};
    @media screen and (max-width:${diviceSize.mobile}px){
        width:calc(100%/3);
    }
    @media screen and (max-width:${diviceSize.laptop}px){
        width:calc(100%/3);
    }
`
export default function AdminCarousel(props) {
    const [num, setNum] = useState(1);
    const [active, setActive] = useState(0);
    // const dispatch = useDispatch();
    // const courseList=[
    //     {id:1,name:'设计模式',img:'https://static.bootcss.com/www/assets/img/carousel/design.jpg'},
    //     {id:2,name:'前端架构',img:'https://static.bootcss.com/www/assets/img/carousel/frontend.jpg'},
    //     {id:3,name:'移动端开发',img:'https://static.bootcss.com/www/assets/img/carousel/mobile.jpg'},
    // ]; 
    // const courseList=props.courseList|| ["Không có khóa học ghi danh"];
    var courseList=null;
    if(!props.courseList){
        courseList=["Không có khóa học ghi danh"];
    }else{
        courseList=props.courseList;
    }
    useEffect(
        () => {
            renderItem();
        }, [active]
    )


    // const courseList = useSelector(item => item.CourseReducer[props.cate])
    //ham them id
    // var count = 0;
    // courseList.map((item) => {
    //     item.id = count++;
    // })



    const handleNextSlide = () => {
        const len = courseList.length;
        if (num <= len && num + 1 !== len + 1) {
            setNum(num + 1);
        } else {
            setNum(1);
        }
    }
    const handlePreSlide = () => {
        const len = courseList.length;
        if (num > 0 && num - 1 !== 0) {
            setNum(num - 1);
        } else {
            setNum(len + 1);
        }
        console.log(num);
    }
    const renderItem = () => {
        return courseList.map((item,key) => (
            
            <Item
                abc={key}
                className="item"
                index={item.id}
                active={num}
                to={`/course/${item.maKhoaHoc}`}
            >
                <img src={item.hinhAnh} alt={item.maKhoaHoc}></img>
                <h1>{item.maKhoaHoc}</h1>
                <p>Author</p>
            </Item>
        ))
    }
    return (
        <BigCarousel>
            <div className="view"></div>
            <Slide>
                {renderItem()};
            </Slide>
            <div className="control">
                <Circle
                    className="pre"
                    hide={num === 1 ? true : false}
                    onClick={() => { handlePreSlide() }}
                >-
                </Circle>
                <Circle
                    className="next"
                    onClick={() => { handleNextSlide() }}
                    hide={num === Array.length +1 ? true : false}
                >+</Circle>


            </div>

        </BigCarousel>
    )
}
