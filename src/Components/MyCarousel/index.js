import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const BigCarousel=styled.div`
    width:50%;
    margin:0 auto;
    position:relative;
    height:100px;
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
const Button = styled.button`
    opacity:1;
    width:30px;
    height:30px;
    border:none;
    text-align:center;
    font-size:1rem;
    font-weight:bold;
    border-radius:50%;
    outline:none;
    box-shadow: 0px 0px 5px 0px grey;
    &:focus{
        outline:none;
    }
    ${props=>props.hide&&css`
        opacity:0;
        z-index:-1;
    `}
`
const Slide = styled.div`
    color:red;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    height:100px;
    width:100%;
    min-width:300px;
    position:relative;
    overflow:hidden; 
`
const Item = styled.div.attrs(props=>({
    index:props.index
}))`
    position:absolute;
    width:calc(100%/3);
    border:2px solid red;
    height:100%;
    top:0;
    left:0;
    transition:all ease 1s;
    transform:translateX(calc(100% * ${props=>props.index}));
    ${props => props.active && css`
    transform:translateX(calc(100% * ${props=>props.index} - 100% * ${props=>props.active}));
    `};
`
export default function MyCarousel() {
    const Array=[{
        id:1,
        content:"tag 1",
    },
    {
        id:2,
        content:"tag 2",
    },
    {
        id:3,
        content:"tag 3",
    },{
        id:4,
        content:"tag 4",
    },
    {
        id:5,
        content:"tag 5",
    },
    {
        id:6,
        content:"tag 6",
    },
    {
        id:7,
        content:"tag 7",
    }
];
    const [num, setNum] = useState(1);

    const handleNextSlide = () => {
        const len=Array.length;
        console.log(len);
        if (num <= len && num + 1 !== len+1) {
            setNum(num + 1);
        } else {
            setNum(1);
        }
        console.log(num);
    }
    const handlePreSlide = () => {
        const len=Array.length;
        if (num >0&&num-1!==0) {
            setNum(num-1);
        } else {
            setNum(len+1);
        }
        console.log(num);
    }
    const renderItem=()=>{
        return Array.map(item=>(
        <Item className="item" index={item.id} active={num}>
            <h1>{item.content}</h1>
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
                <Button 
                className="pre" 
                hide={num===1?true:false}
                onClick={() => { handlePreSlide() }}
                >-
                </Button>
                <Button 
                className="next" 
                onClick={() => { handleNextSlide() }}
                hide={num===Array.length-1?true:false}
                >+</Button>
            </div>
           
        </BigCarousel>
    )
}
