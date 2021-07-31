import { Link } from "react-router-dom";
import styled,{css} from "styled-components";
import color from "../Constants/color";
export const NavBar = styled.nav`
    width:100%;
    height:80px;
    background-color: #fafafa;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Logo = styled(Link)`
    &:link,&:visited{
        text-decoration:none;
        color:${color.buttonMain};
        font-size:2rem;
    }
    font-weight:bold;
`
export const Button = styled(Link).attrs(()=>{

})`
width:8rem;
text-align:center;
&:link,&:visited{
    text-decoration:none;
    color:${color.buttonMain};
    font-size:1rem;
    user-select:none;
}
    ${props=>props.hightLight&&css`
    &:link,&:visited{
        
        text-decoration:none;
        color:${color.buttonSub};
        background-color:${color.buttonMain};
        font-size:1rem;
        user-select:none;
        padding:0.8rem;
        font-weight:bold;
    }
      
    `}
`
export const SearchHeader = styled.div`
    position:relative;
    width:30rem;
    border:1px solid black;
    height:50px;
    border-radius:5rem;
    overflow:hidden;
    i{
        position:absolute;
        top:35%;
        left:10px;
        diplay:inline;
        z-index:1;
    }
    input{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:0;
        padding-left:40px;
        border:none;
        outline:none;
    }
`
export const Credential = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-direction: row;
    width:20rem;
    height:100%;
    justify-content: space-between;
    align-items: center;
    li{
        display:block;
        width:calc(100%/3-10px);
        margin-right:10px;
    }
`