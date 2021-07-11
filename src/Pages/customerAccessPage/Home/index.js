import React, { useEffect } from 'react';
import { PageContainer, Header, Intro, Box, Main, CateContainer, TopicContainer, Topic, Outro, Footer } from './style';
import SearchBox from '../../../Components/SearchBox';
import BigCarousel from '../../../Components/BigCarousel';
import { NavLink } from 'react-router-dom';
import { FetchCourse ,FetchCate} from '../../../Redux/Actions/fetchCourse';
import { useDispatch ,useSelector} from 'react-redux';
import { ActionCreator } from '../../../Redux/Actions/ActionCreator';
import { FETCHCOURSES } from '../../../Redux/Constants/Constants';


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
      <Box height="5rem">
        <div>

        </div>
      </Box>
      <Main>
        <h2 className="title">Top categories</h2>
        <CateContainer>
          <NavLink className="item" to="/">
            <img src="./img/Categories/design.jpg" alt="abcz"></img>
            <h3>Design</h3>
          </NavLink>
          <NavLink className="item" to="/">
            <img src="./img/Categories/develop.jpg" alt="abcz"></img>
            <h3>Development</h3>
          </NavLink>
          <NavLink className="item" to="/">
            <img src="./img/Categories/it.jpg" alt="abcz"></img>
            <h3>IT and Software</h3>
          </NavLink>

        </CateContainer>
        <h2 className="title">Featured topics by category</h2>
        <TopicContainer>
          <Topic>
            <h1>Website</h1>
            <div className="item">
              <NavLink to="/login" className="link">Front End</NavLink>
              <p>100000 students</p>
            </div>
            <div className="item">
              <NavLink to="/login" className="link">Back End</NavLink>
              <p>100000 students</p>
            </div>
            <div className="item">
              <NavLink to="/login" className="link">Full Stack</NavLink>
              <p>100000 students</p>
            </div>
            <div className="item">
              <NavLink to="/login" className="link">Web design</NavLink>
              <p>100000 students</p>
            </div>
          </Topic>
          <Topic>
            <h1>Mobile</h1>
            <div className="item">
              <NavLink to="/login" className="link">Mobile development</NavLink>
              <p>100000 students</p>
            </div>
          </Topic>
          <Topic>
            <h1>Another</h1>
            <div className="item">
              <NavLink to="/login" className="link">Data Structors And Algorithms</NavLink>
              <p>100000 students</p>
            </div>
          </Topic>
        </TopicContainer>

      </Main>
      <Box height="5rem">

      </Box>
      <Outro>
        <h2>Trusted by companies of all sizes</h2>
        <ul>
          <li><a href="https://facebook.com"><i className="fab fa-facebook" />
          </a></li>
          <li><a href="https://instagram.com"><i className="fab fa-instagram" />
          </a></li>
          <li><a href="https://github.com"><i className="fab fa-github" />
          </a></li>
          <li><a href="https://google.com"><i className="fab fa-google" />
          </a></li>
        </ul>
      </Outro>
      <Footer>
        <h1>
          <a href="/"><i className="fab fa-angellist" />demy</a>
        </h1>
        <p>@ 2021 <i className="fab fa-angellist" />demy,Inc</p>
        <p>@ No copyright</p>
      </Footer>




    </PageContainer>
  );
}

export default Home;
