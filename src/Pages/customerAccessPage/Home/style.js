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
    background:transparent;
    box-shadow:0px 8px 11px 3px #c0c0c0;
    margin:1rem 0;
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
        text-decoration:none;
        &:link{
            color:${color.border};
        }
        &:visited{
            color:${color.border};
        }
        border:1px solid ${color.border};
        width:calc(100%/3 - 1.6rem);
        height:30rem;
        margin-right:1.6rem;
        margin-bottom:1.6rem;
        img{
            border-bottom:1px solid ${color.border};
            width:100%;
            height:90%;
        };
        h3{
            text-align:center;
        }
    }
    @media screen and (max-width:${diviceSize.laptop}px){
        .item{
            height:15rem;
            img{
                height:90%;
            }
            h3{
                font-size:1rem;
                padding-bottom:10px;
            }
        }
    }
    @media screen and (max-width:${diviceSize.mobile}px){
        
        .item{
            height:fit-content;
         
            
            text-align:justify;
            border:1px solid ${color.buttonMain};
            &:link{
                color:${color.buttonMain};
            }
            &:visited{
                color:${color.buttonMain};
            }
            border-radius:2rem;
            width:fit-content;
            margin:0;
            img{
                display:none;
            }
            h3{
                display:block;
                padding:10px;
            }
        }
    }
`
export const TopicContainer = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:row;
    height:25rem;
`
export const Topic = styled.div`
    width:calc(100%/3);
    height:100%;
    display:flex;
    flex-direction:column;
    h1{
        line-height:1.5rem;
        font-size:1.5rem;
    }
    .item{
        height:calc(100%/4);
        font-size:1rem;
        .link{
            text-decoration:none;
            &:link{
                color:${color.buttonMain};
                text-decoration:none;
                 text-decoration-line:none;
            }
            &:active{}
            &:visited{
                color:${color.buttonMain};
                text-decoration:none;
                text-decoration-line:none;
            }
        }
    }
    @media screen and (max-width:${diviceSize.mobile}px){
        width:calc(100%/2);
        .item{
           
        flex-wrap:wrap;
        }
    }
`
export const Outro = styled.div` 
    width:100%;
    height:10rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid ${color.button};
    ul{
        text-decoration:none;
        list-style:none;
        display:flex;
        li{
            margin-right:2rem;
            a{
                &:link{
                    color:${color.buttonMain};
                }
                &:visited{
                    color:${color.buttonMain};
                }
                display:block;
                i{
                    font-size:2rem;
                }
            }
        }
    }
`
export const Footer = styled.footer`
    height:10rem;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

    h1{
        line-height:1.5rem;
        color:${color.buttonMain};
        a{
            text-decoration:none;
            &:link{
                color:${color.buttonMain};
            }
            &:visited{
                color:${color.buttonMain};
            }
            display:block;
            i{
                font-size:3rem;
            }
        }
    }
`