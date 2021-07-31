import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FetchSignUp } from '../../../Redux/Actions/fetchUsers'
import { Form, Switch } from '../Login/style'
import { SignUpPage } from './style'

export default function SignUp(props) {

    const [form, setForm] = useState({
        "taiKhoan": "",
        "matKhau": "",
        "hoTen": "",
        "soDT": "",
        "maNhom": "GP01",
        "email": ""
    });

    const handleSignUp = (e) => {
        e.preventDefault();
        const { history } = props
        FetchSignUp(form,history)
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <SignUpPage >
            <Form.Container
                onSubmit={(e) => handleSignUp(e)}
            >
                <Form.Title>Sign Up and Start Learning!</Form.Title>
                <Form.Input
                    className="user"
                    name="taiKhoan"
                    placeholder="Username"
                    type="text"
                    validation="required"
                    onChange={e=>handleChange(e)}
                />
                <Form.Input
                    className="pass"
                    name="matKhau"
                    placeholder="Password"
                    type="password"
                    validation="required"
                    onChange={e=>handleChange(e)}
                />
                <Form.Input
                    className="fullname"
                    name="hoTen"
                    placeholder="Full Name"
                    type="text"
                    validation="required"
                    onChange={e=>handleChange(e)}
                />
                <Form.Input
                    className="phone"
                    name="soDT"
                    placeholder="Phone Number"
                    type="text"
                    validation="required"
                    onChange={e=>handleChange(e)}
                />
                <Form.Input
                    className="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    validation="required"
                    onChange={e=>handleChange(e)}
                />

                <label>
                    <Form.Input
                        type="checkbox"
                        name="chon"
                    />
                    <span>Yes! I want to get the most out of Udemy by receiving emails with exclusive deals, personal recommendations and learning tips!</span>
                </label>
                <Form.BtnSignUp
                    type="submit"
                >
                    Sign Up
                </Form.BtnSignUp>
                <hr></hr>
                <span className="switch">
                    Already have a demy account?
                    <Switch to="/login">Log In</Switch>
                </span>
            </Form.Container>
        </SignUpPage>

    )
}
