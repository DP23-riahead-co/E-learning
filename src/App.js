import React, { useState } from 'react';
import Home from './Pages/customerAccessPage/Home'
import { BrowserRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom'
import Login from './Pages/customerAccessPage/Login';
import MyCarousel from './Components/MyCarousel'
import SignUp from './Pages/customerAccessPage/Sign Up';
import Admin from './Pages/admin';
import Nav from './Components/NavBar';
import { Logo } from './Components/NavBar/style';
import { Footer } from './Pages/customerAccessPage/Home/style';
import Profile from './Pages/customerAccessPage/Profile';
import CourseDetail from './Pages/courses/courseDetail';


const App = (props) => {

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Switch>
                <Route exact component={Home} path="/"></Route>
                <Route exact component={Home} path="/home"></Route>
                <Route
                    exact
                    path="/login"
                    component={
                        Login
                    }
                ></Route>

                <Route exact
                    path="/admin"
                    render={() => {
                        return (
                            localStorage.getItem('token')
                                ? localStorage.getItem('user') === "GV"
                                    ? <Admin></Admin>
                                    : <Redirect to="/profile" />
                                : <Redirect to="/login" />
                        )
                    }}></Route>


                <Route exact 
                 path="/profile"
                 render={() => {
                    return (
                        localStorage.getItem('token')
                            ? localStorage.getItem('user') === "GV"
                                ? <Admin></Admin>
                                : <Redirect to="/profile" />
                            : <Redirect to="/login" />
                    )
                }}
                 ></Route>
                <Route exact component={SignUp} path="/signup"></Route>
                <Route exact component={CourseDetail} path="/course/:maKhoaHoc"></Route>
            </Switch>
            <Footer>
                <h1>
                    <a href="/"><i className="fab fa-angellist" />demy</a>
                </h1>
                <p>@ 2021 <i className="fab fa-angellist" />demy,Inc</p>
                <p>@ No copyright</p>
            </Footer>

        </BrowserRouter>
    );
}

export default App;
