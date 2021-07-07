import styled from 'styled-components';
import { diviceSize } from '../../../Components/Responsive';
import color from '../../../Components/Constants/color'
export const PageContainer = styled.div`
    font-size:10px;
    background-color:green;
    width:100%;
    height:auto;
    background-color:white;
    @media screen and (max-width:${diviceSize.mobile}px){
        background-color:white;
    }
`
export const Header = styled.header.attrs(props=>({
    bgImage:props.bgImage,
}))`
    background-image: url(${props=>props.bgImage});
    background-size:cover;
    background-position:center;
    width:70%;
    margin:0 auto 6rem;
    height:25rem;
    position:relative;
    .header-box{
        position:absolute;
        top:4rem;
        left:3rem;
        display:flex;
        flex-direction:column;
        align-items:left;
        width:28rem;
        height:15rem;
        background-color:white;
        padding:1rem;
        .text{
            font-size:1.2rem;
        }
    }
`
export const Intro = styled.div.attrs(props=>({

}))`
    width:60%;
    margin:0 auto; 
    .text{
        font-size:0.8rem;
        color:${color.border}
    }



`
export const Box =styled.div.attrs(props=>({
    height:props.height
}))`

    height:${props=>props.height};
    width:100%;
    background:yellow;

`
export const Main = styled.div`
    width:60%;
    margin:0 auto;
`
export const CateContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin:2rem 0rem;
    .item{
        width:calc(100%/4 - 1.6rem);
        height:20rem;
        background:green;
        margin-right:1.6rem;
        margin-bottom:1.6rem;
        img{
            width:100%;
        }
    }
`
export const TopicContainer = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:row;
    height:20rem;
`
export const Topic = styled.div`
    width:calc(100%/3);
    height:100%;
    display:flex;
    flex-direction:column;
    .item{
        height:calc(100%/4 - 1rem);
        margin-bottom:1rem;
    }
`
export const Outro = styled.div`
    width:100%;
`
export const Footer = styled.footer`

`