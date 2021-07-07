import React, { Component } from "react";
import {connect} from 'react-redux'
import { FormikStyled } from "../../Components/FormPanel/Formik";
import { FieldStyled } from "../../Components/FormPanel/Field";
import { FormStyled } from "../../Components/FormPanel/Form";
import { ErrorMessageStyled } from "../../Components/Alert";
import { signinSchema } from "../../Components/Schema";
import { ButtonSubmit } from "../../Components/Button";
import { FormPage } from "../../Components/FormPage";
import { TitleForm } from "../../Components/Title";
import { FormContainerLogin } from "../../Components/FormPanel/FormContainer";
import {Link} from 'react-router-dom'
import { login } from "../../Redux/Actions/FetchCredentials";
class SignIn extends Component {
  handleSubmit = (data) => {
    const {history}=this.props; 
    return this.props.dispatch(login(data,history))
  };
  state = {
    bigScreen: true,
    smallScreen: false,
  };
  handleChangeScreenSize = () => {
    if (window.innerWidth < 944) {
      this.setState({ bigScreen: false, smallScreen: true });
    } else {
      this.setState({ bigScreen: true, smallScreen: false });
    }
  };

  componentDidMount = () => {
    this.handleChangeScreenSize();
    
  };
  componentDidUpdate = () => {
    window.addEventListener("resize", this.handleChangeScreenSize);
  };
  render() {
    return (
      <FormPage smallScreen={this.state.smallScreen ? true : false}>
        <FormContainerLogin smallScreen={this.state.smallScreen ? true : false}>
          <FormikStyled
            onSubmit={(data) => this.handleSubmit(data)}
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            smallScreen={this.state.smallScreen ? true : false}
           validationSchema={signinSchema}
            render={(formikProps) => (
              <FormStyled smallScreen={this.state.smallScreen ? true : false}>
                <TitleForm smallScreen={this.state.smallScreen ? true : false}>
                  Tên tài khoản
                </TitleForm>
                <FieldStyled
                  type="text"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                  smallScreen={this.state.smallScreen ? true : false}
                ></FieldStyled>
                <ErrorMessageStyled
                  smallScreen={this.state.smallScreen ? true : false}
                  name="taiKhoan"
                />
                <TitleForm smallScreen={this.state.smallScreen ? true : false}>
                  Mật khẩu{" "}
                </TitleForm>
                <FieldStyled
                  type="password"
                  name="matKhau"
                  smallScreen={this.state.smallScreen ? true : false}
                  onChange={formikProps.handleChange}
                ></FieldStyled>
                <ErrorMessageStyled
                  name="matKhau"
                  smallScreen={this.state.smallScreen ? true : false}
                />
                <ButtonSubmit
                  type="submit"
                  smallScreen={this.state.smallScreen ? true : false}
                  
                >
                  Sign In
                </ButtonSubmit>
                <p>Bạn chưa có tài khoản ? Hãy <Link to="/signup">đăng kí</Link></p>
              </FormStyled>
            )}
          />
        </FormContainerLogin>
      
      </FormPage>
    );
  }
}

export default connect()(SignIn);
