import styled, { css } from "styled-components";
import color from '../Constants/color'
export const CarouContainer = styled.div`
    width:100%;
    height:100%;
`
export const Selection = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:2rem;
`
export const Option = styled.div`
    user-select:none;
    cursor:pointer;
    font-size:1rem;
    color:${color.border};
    font-weight:bold;
`
export const ContentContainer = styled.div`
    width:100%;
    height:33rem;
    background-color:transparent;
    border:0.5px solid ${color.border};
    position:relative;
    border-radius:3px;
`
export const Content = styled.div.attrs(props => ({
    index: props.index,

}))`
    width:100%;
    padding:1rem;
    .cover{
        width:!00%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        .cover-left{
            width:40rem;
        };
        .img-ava{
            width:15rem;
            height:15rem;
        }
    }
    position:absolute;
    z-index:-1;

    ${props => props.index === true && css`
        z-index:1;
    `}
    
`