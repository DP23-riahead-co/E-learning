import React, { useState } from 'react';
import { Form, LoginPage, Switch } from './style'
import { FetchLogin } from '../../../Redux/Actions/fetchUsers';
import { useDispatch } from 'react-redux';
const Login = (props) => {
    console.log("Props ",props);
    const dispatch = useDispatch()
    const [form,setForm] = useState({
        taiKhoan:'',
        matKhau:'',
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        const history=props.history
       dispatch( FetchLogin(form,history));

    }
    const handleChange=(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value,
        });
    }
    return (
        <LoginPage>     
            <Form.Container onSubmit={(event)=>handleSubmit(event)}>
            <Form.Title>Log In to Your Demy Account!</Form.Title>
                <Form.Input
                    className="user"
                    name="taiKhoan"
                    placeholder="Username"
                    onChange={(event)=>{handleChange(event)}}
                ></Form.Input>
                <Form.Input
                    type="password"
                    name="matKhau"
                    className="password"
                    placeholder="Password"
                    onChange={(event)=>{handleChange(event)}}
                ></Form.Input>
                <Form.BtnLogin>Log In</Form.BtnLogin>
                Don't have an account?
            <Switch to='/signup'>Sign Up</Switch>
            </Form.Container>
        </LoginPage>
    )
}

export default Login;
