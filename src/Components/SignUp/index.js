import React, { Component } from "react";
import { FormikStyled } from "../../Components/FormPanel/Formik";
import { FieldStyled } from "../../Components/FormPanel/Field";
import { FormStyled } from "../../Components/FormPanel/Form";
import { ErrorMessageStyled } from "../../Components/Alert";
import { signupSchema } from "../../Components/Schema";
import { ButtonSubmit } from "../../Components/Button";
import { FormPage } from "../../Components/FormPage";
import { TitleForm } from "../../Components/Title";
import { FormContainer } from "../../Components/FormPanel/FormContainer";
import { Link } from "react-router-dom";
import { SignUp } from "../../Redux/Actions/SignUp";
class index extends Component {
  handleSubmit = (data) => {
    SignUp(data);
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
        <FormContainer smallScreen={this.state.smallScreen ? true : false}>
          <FormikStyled
            onSubmit={(data) => this.handleSubmit(data)}
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              soDT: "",
              maNhom: "GP01",
              email: "",
            }}
            smallScreen={this.state.smallScreen ? true : false}
            validationSchema={signupSchema}
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
                <TitleForm smallScreen={this.state.smallScreen ? true : false}>
                  Họ và tên
                </TitleForm>
                <FieldStyled
                  type="text"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                  smallScreen={this.state.smallScreen ? true : false}
                ></FieldStyled>
                <ErrorMessageStyled
                  name="hoTen"
                  smallScreen={this.state.smallScreen ? true : false}
                />
                <TitleForm smallScreen={this.state.smallScreen ? true : false}>
                  Số điện thoại
                </TitleForm>
                <FieldStyled
                  type="text"
                  name="soDT"
                  smallScreen={this.state.smallScreen ? true : false}
                  onChange={formikProps.handleChange}
                ></FieldStyled>
                <ErrorMessageStyled
                  name="soDT"
                  smallScreen={this.state.smallScreen ? true : false}
                />
                <TitleForm smallScreen={this.state.smallScreen ? true : false}>
                  Mã nhóm
                </TitleForm>
                <FieldStyled
                  component="select"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                  smallScreen={this.state.smallScreen ? true : false}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </FieldStyled>
                <TitleForm smallScreen={this.state.smallScreen ? true : false}>
                  Email{" "}
                </TitleForm>
                <FieldStyled
                  type="text"
                  name="email"
                  onChange={formikProps.handleChange}
                  smallScreen={this.state.smallScreen ? true : false}
                ></FieldStyled>
                <ErrorMessageStyled
                  name="email"
                  smallScreen={this.state.smallScreen ? true : false}
                />
                <ButtonSubmit
                  type="submit"
                  smallScreen={this.state.smallScreen ? true : false}
                >
                  Sign Up
                </ButtonSubmit>
                <p>
                  Bạn chưa có tài khoản ? Hãy <Link to="/login">đăng nhập</Link>
                </p>
              </FormStyled>
            )}
          />
        </FormContainer>
      </FormPage>
    );
  }
}

export default index;
