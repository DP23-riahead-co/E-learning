import React, { useState } from 'react';
import Home from './Pages/customerAccessPage/Home'
import { BrowserRouter, Switch, NavLink ,Route, Redirect} from 'react-router-dom'
import Login from './Pages/customerAccessPage/Login';
import MyCarousel from './Components/MyCarousel'
import SignUp from './Pages/customerAccessPage/Sign Up';
import Admin from './Pages/admin';


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/home"></Route>
                <Route exact component={Login} path="/login"></Route>
                <Route exact
                path="/admin"
                render={()=>{
                    return(
                    localStorage.getItem('token') 
                    ?localStorage.getItem('user')==="GV"
                        ?<Admin></Admin>
                        :<Redirect to="/profile" />
                    :<Redirect to="/login" />
                    )
                }}></Route>   
                <Route exact component={SignUp} path="/signup"></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
