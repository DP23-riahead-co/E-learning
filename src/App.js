import React, { useState } from 'react';
import Home from './Pages/customerAccessPage/Home'
import { BrowserRouter, Switch, NavLink ,Route} from 'react-router-dom'
import Login from './Pages/customerAccessPage/Login';
import MyCarousel from './Components/MyCarousel'


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/home"></Route>
                <Route exact component={Login} path="/login"></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
