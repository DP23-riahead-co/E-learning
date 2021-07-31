import styled,{css} from "styled-components";
import color from "../../Components/Constants/color";

export const AdminPage=styled.div`
width:100%;
height:771px;
box-sizing:border-box;
margin:0;
padding:0;
font-size:10px;
font-family:Segoe UI;
`
export const Pannel=styled.div`
 width:80%;
 max-width:1322px;
 height:632px;
 margin:0 auto;
 .title-panel{
 margin-top:43px;
 }
`
export const BtnInfos=styled.button`
`
class SelectClass{
   Title=styled.p.attrs(props=>({
    size:props.size,
    color:props.color||"white"
   }))`
   font-family:Segoe UI;
   line-height:1.5em;
   margin:0;
     font-size:${props=>props.size}px;
     color:${props=>props.color};
     ${props=>props.bold&&css`
       font-weight:bold;     
     `}
     ${
       props=>props.uppercase&&css`
       text-transform:uppercase;
       `
     }
   `;
   OptionContainer=styled.div`
   padding:0;
   margin:0;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:right;
   
   `;
   Input=styled.input.attrs(props=>({}))``;
   Option=styled.div`
     width:167px;
     height:41px;
     font-size:20px;
     text-transform:uppercase;
     text-align:center;
     color:${color.textAdmin};
     ${props=>props.selected&&css`
       background-color:${color.bgAdmin};
      color:white;
     `}
   `;
   //
   ResContainer=styled.div`
   padding:27px 81px;
   margin:0;
   font-size:10px;
   background-color:${color.bgAdmin};
   
   `;
   ResCarousel=styled.div`
   height:141px;
   width:100%;
   `;
   ResCate=styled.div`
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     margin:0;
     padding:0;
   
   `;
   ResItem=styled.div`
     width:calc(100%/2);
   `;
   ResTitle=styled.p.attrs(
    props=>({
     size:props.size||"20",
     
    }),

   )`
     line-height:1.5em;
     color:white;
     margin-left:25px;
     margin-top:10px;
     padding:0;
     font-size:0;
     font-size:${props=>props.size}px;
     ${props=>props.uppercase&&css`
      text-transform:uppercase;
      margin:0;
     `}
   `;
   Res=styled.div`
    width:321px;
    height:40px;
    border-radius:34px;
    background-color:white;
   
   `;



}
export const Select=new SelectClass();