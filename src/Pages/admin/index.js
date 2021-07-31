import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserInfo } from '../../Services/Admin/GetInfoUser'
import AdminCarousel from './AdminCarousel'
import { AdminPage, BtnInfos, Pannel, Select } from './style'

export default function Admin() {

    const dispatch = useDispatch()
    const [authUser, setAuthUser] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value);
        setAuthUser({ ...authUser, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(authUser)
        dispatch(GetUserInfo(authUser))
    }
    const userInfor = useSelector(state => state.AdminReducer.userInfo) || "";
    const enrollCoures = userInfor.chiTietKhoaHocGhiDanh;
    if (enrollCoures) {
        var num = 1;
        enrollCoures.forEach(item => {
            item.id = num++;
        })
    }

    console.log("enroll coures", enrollCoures);
    return (
        <AdminPage>
            <Select.OptionContainer>
                <Pannel>
                    <Select.Title
                        uppercase
                        color="#707070"
                        size="30"
                        className="title-panel">
                        user control panel
                    </Select.Title>
                    <Select.OptionContainer>
                        <Select.Option selected={true}>
                            User
                        </Select.Option>
                        <Select.Option>
                            Add a new user
                        </Select.Option>
                        <Select.Option>
                            update user
                        </Select.Option>
                        <Select.Option>
                            delete user
                        </Select.Option>

                    </Select.OptionContainer>
                    <Select.ResContainer>
                        <form className="getInfo" onSubmit={event => handleSubmit(event)}>
                            <Select.Input
                                placeholder="Tài khoản"
                                className="taiKhoan"
                                name="taiKhoan"
                                onChange={e => handleChange(e)}
                            >
                            </Select.Input>
                            <Select.Input
                                placeholder="Mật khẩu"
                                name="matKhau"
                                className="matKhau"
                                type="password"
                                onChange={e => handleChange(e)}
                            >
                            </Select.Input>
                            <BtnInfos >Lấy thông tin</BtnInfos>
                        </form>
                        <Select.ResTitle uppercase>
                            Khóa học đã ghi danh
                        </Select.ResTitle>
                        <Select.ResCarousel>
                            <AdminCarousel courseList={enrollCoures}></AdminCarousel>
                        </Select.ResCarousel>
                        <Select.ResCate>

                            <Select.ResItem>
                                <Select.ResTitle uppercase>
                                    Tài khoản & mật khẩu
                                </Select.ResTitle>
                                <Select.ResTitle>
                                    Tài khoản
                                </Select.ResTitle>
                                <Select.Res>
                                    {authUser.taiKhoan || "Không có tài khoản"}
                                </Select.Res>
                                <Select.ResTitle>
                                    Mật Khẩu
                                </Select.ResTitle>
                                <Select.Res>
                                    {authUser.matKhau || "Không có mật khẩu"}
                                </Select.Res>
                                <Select.ResTitle>
                                    Mã Nhóm
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.maNhom || "Không có mã nhóm"}
                                </Select.Res>
                                <Select.ResTitle>
                                    Mã loại người dùng
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.maLoaiNguoiDung || "Không có mã loại người dùng"}
                                </Select.Res>
                            </Select.ResItem>
                            <Select.ResItem>
                                <Select.ResTitle uppercase>
                                    Thông tin
                                </Select.ResTitle>
                                <Select.ResTitle>
                                    Họ tên
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.hoTen || "Không có họ tên"}
                                </Select.Res>
                                <Select.ResTitle>
                                    Số điện thoại
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.soDT || "Không có số điện thoại"}
                                </Select.Res>
                                <Select.ResTitle>
                                    Email
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.email || "Không có email"}
                                </Select.Res>
                            </Select.ResItem>
                        </Select.ResCate>
                    </Select.ResContainer>
                </Pannel>

            </Select.OptionContainer>
        </AdminPage>
    )
}
