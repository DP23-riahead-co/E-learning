import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
export const ButtonBase = styled(NavLink)`
    display:block;
    width:fit-content;
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
export const Button = styled(ButtonBase).attrs(props => ({
    border: props.border,
    background: props.background,
}))`
    &:link{
        color:${props => props.border};
    }
    &:visited{
        color:${props => props.border};
    }
    padding:1rem;
    border:1.5px solid ${props => props.border};
    background:${props => props.background};
    border-radius:0.5rem;
    font-size:1rem;
    margin-top:10px;
    ${props => props.mt5 && css`
        margin-top:5px;
    `
    }
`