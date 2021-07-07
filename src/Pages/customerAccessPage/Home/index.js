import React from 'react';
import { PageContainer, Header, Intro, Box, Main, CateContainer, TopicContainer, Topic, Outro, Footer } from './style';
import SearchBox from '../../../Components/SearchBox';
import BigCarousel from '../../../Components/BigCarousel';
const Home = () => {
  return (
    <PageContainer>
      <Header bgImage={"./img/home-header-bg.jpg"}>
        <div className="header-box">
          <h1 className="title">Last day to save</h1>
          <p className="text">Prices as low as $13.99. Get a bonus 10% off with bonus 10% at checkout.</p>
          <SearchBox>
          </SearchBox>
        </div>
      </Header>
      <Intro>
        <h2 className="title">
          A broad selection of courses
        </h2>
        <p className="text">Choose from 155,000 online video courses with new additions published every month
        </p>
        <BigCarousel>
        </BigCarousel>
      </Intro>
      <Box height="3rem">
        <div>

        </div>
      </Box>
      <Main>
        <h1 className="title">Top categories</h1>
        <CateContainer>
          <div className="item">
            <img src="./logo512.png" alt="abcz"></img>
            <h2>Design</h2>
          </div>

        </CateContainer>
        <h1 className="title">Featured topics by category</h1>
        <TopicContainer>
          <Topic>
            <h1>Website</h1>
            <div className="item">
              <button>Front End</button>
              <p>100000 students</p>
            </div>
            <div className="item">
              <button>Back End</button>
              <p>100000 students</p>
            </div>
            <div className="item">
              <button>Full Stack</button>
              <p>100000 students</p>
            </div>
            <div className="item">
              <button>Web design</button>
              <p>100000 students</p>
            </div>
          </Topic>
          <Topic>
            <h1>Mobile</h1>
            <div className="item">
              <button>Mobile development</button>
              <p>100000 students</p>
            </div>
          </Topic>
          <Topic>
            <h1>Another</h1>
            <div className="item">
              <button>Data Structors And Algorithms</button>
              <p>100000 students</p>
            </div>
          </Topic>
        </TopicContainer>

      </Main>
      <Box height="10rem">

      </Box>
      <Outro>

      </Outro>
      <Footer>

      </Footer>




    </PageContainer>
  );
}

export default Home;
