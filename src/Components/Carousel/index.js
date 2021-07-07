import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import { Button } from '../Button';

const Element = styled(Carousel).attrs(props => ({
    height: props.height,
    width: props.width,
}))`
    height:${props => props.height};
    width:${props => props.width};
`
const Caption = styled(Carousel.Caption).attrs(props => ({}))`
    height:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    .cover{
        display:flex;
        flex-direction:column;
        width:15rem;
        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width:100%;
        }
    }
    .img-course{
        height:10rem;
        width:10rem;
    }

`
const Item = styled(Carousel.Item)`
   height:15rem;
`
const CarouselContainer = (props) => {
    const { height, width } = props
    return (
        <Element height={height} width={width}>
            <Item>
                <Caption>
                    <img src='./logo512.png' alt='hình ảnh' className="img-course"></img>
                    <div className="cover">
                        <h3>Tên khóa học</h3>
                        <p>Mô tả lorem loremThe second useEffect will be necessary to finally set the active state to the desired one. Because we use a CSS transition, we are not controlling the transition from JS. As such, a timeout with the same time needs to be present to help us.</p>
                        <Button to="/home">Xem chi tiết</Button>
                    </div>
                </Caption>
            </Item>
        </Element>
    );
}

export default CarouselContainer;
