import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ActionCreator } from '../../Redux/Actions/ActionCreator';
import { FETCHLOGGOUT } from '../../Redux/Constants/Constants';

import { Button, Credential, Logo, NavBar, SearchHeader } from './style'
export default function Nav(props) {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.UserReducer.Credential);
    console.log("login", isLogged);
    const isCredential=localStorage.getItem("credentials");
    const renderButton = () => {

        return (
            isCredential||isLogged!==null?
            <Button
                to='/learning'
                hightLight
            >
                My learning
            </Button>
                : <Button
                    to='/login'
                    hightLight
                >
                    Login
                </Button>
        )
    }
    useEffect(() => {
        renderButton()
    })
    const handleLoggout = () => {
        dispatch(ActionCreator(FETCHLOGGOUT, null))
    }
    return (
        <NavBar>
            <Logo to='/home'>
                <i className="fab fa-angellist" />
                demy
            </Logo>
            <Button>Categories</Button>
            <SearchHeader>
                <i className="fas fa-search" />
                <input></input>
            </SearchHeader>
            {
                renderButton()
            }
            <Credential>
                <li>
                    <Button to='/about'>About us</Button>
                </li>
                <li>
                    <Button to='/contact'>Contact</Button>
                </li>
                <li>
                    {isLogged!==null||isCredential? 
                    <Button to='/profile'>Profile</Button>
                    :
                    <Button to='/signup'>Sign Up</Button>
                    }                
                </li>
                <li>
                    {isLogged!==null||isCredential?<i className="fas fa-power-off"
                        onClick={() => { handleLoggout() }}
                    />:""}
                </li>
            </Credential>
        </NavBar>
    )
}
