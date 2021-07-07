import React, { useState, useEffect } from 'react';
import { CarouContainer, Selection, Content, Option, ContentContainer } from './style'
import CarouselContainer from '../Carousel'
import {Button} from '../Button'
import color from '../Constants/color'






const BigCarousel = () => {

    const [index, setIndex] = useState(4);
    const handleClick = (num) => {
        setIndex(num);
    }
    return (
        <CarouContainer>
            <Selection>
                <Option onClick={() => { handleClick(1) }}>Back End Development</Option>
                <Option onClick={() => { handleClick(2) }}>Web Design</Option>
                <Option onClick={() => { handleClick(3) }}>Mobile Development</Option>
                <Option onClick={() => { handleClick(4) }}>Front end Development</Option>
                <Option onClick={() => { handleClick(5) }}>Full Stack</Option>
                <Option onClick={() => { handleClick(6) }}>Data Structors And Algorithms </Option>
            </Selection>
            <ContentContainer>
                <Content index={index === 1 ? true : false}>
                    <div className="cover">
                        <div className="cover-left">
                            <h2 className="title">Expand your career opportunities with Back End Development</h2>
                            <p className="text"> The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.</p>
                            <Button border={color.buttonMain} background={color.buttonSub} to="/login"  >Explore Back End Development</Button>
                        </div>
                        <img src='./logo512.png' alt="avata" className="img-ava"></img>
                    </div>
                    <CarouselContainer width="100%"height="auto"></CarouselContainer>
                </Content>
            </ContentContainer>
        </CarouContainer>
    );
}

export default BigCarousel;
