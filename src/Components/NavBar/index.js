
import styled from 'styled-components'
import * as Colors from '../Constants/Color'

export const NavBar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    height:8rem;
    width:100%;
    background-color:${Colors.NAVCOLOR};
    position:fixed;
    top:0;left:0;
    z-index:1;
`
