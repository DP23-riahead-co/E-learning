import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import color from "../../../Components/Constants/color";
export const LoginPage = styled.div`
    width:100%;
    box-sizing:border-box;
    font-size:10px;
    margin:0;
    padding:0;

`
export const Switch = styled(NavLink)`
    &:link,&:visited{
        color:red;
        text-decoration-line:none;
    }
`
class FormClass {
    Container = styled.form`
        width:20rem;
        height:50rem;
        margin:0 auto;
        padding:0;
        border-radius:0;
        border:none;
        background-color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        &:focus{
            outline:none;
        }
        flex-direction:column;
        label{
            display:flex;
            flex-direction:row;
            width:100%;
            
            align-items:center;
           
            padding:0;
            input{
                margin:0;
                padding:0;
                width:fit-content;
            }
            span{
                margin-left:1rem;
                text-align:justify;
                line-height:1.5rem;
                font-size:0.7rem;
            }
        }   
    `
    BtnLogin = styled.button`
        width:100%;
        height:2.5rem;
        font-size:1.2rem; 
        font-weight:bold;
        background-color:${color.red};
        border:none;
        border-radius:1px;
        color:white;
    `
    BtnSignUp = styled(this.BtnLogin)`
        
    `
    Title = styled.h1`
        font-size:1rem;
        text-align:center;
    `
    Input = styled.input`
        width:100%;
        height:2.5rem;
        border:1px solid #ccc;
        margin-bottom:.5rem;
        padding-left:1rem;
        outline:${color.red};
    `
}
export const Form = new FormClass();