import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image1 from '../../Pictures/edited4.jpg'

import {
  CalendarToday,
  HomeOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material'

const Container = styled.div`
  flex: 4;
  padding: 20px;
`
const ContainerTitleSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ContainerTitle = styled.h1``

const CreateUserButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 700;
`
const UserContainerSection = styled.div`
  display: flex;
  margin: 20px 0px;
`
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  margin-right: 20px;
`
const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`
const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
`
const UserInfoName = styled.span`
  font-weight: 600;
  margin-bottom: 3px;
`
const UserInfoTitle = styled.span`
  font-weight: 300;
  font-size: 14px;
`
const UserShowButtom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  color: #a6a4a4;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  color: #444;
`
const UserShowInfoTitle = styled.span`
  margin-left: 10px;
  font-size: 16px;
`
const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
const UserUpdateLeft = styled.div``
const UserUpdateItem = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`
const Label = styled.label``
const Input = styled.input`
  padding: 5px;
  margin-left: 0px;
  border: none;
  border-bottom: 1px solid gray;
  width: 200px;
`
const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`
const UpdateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: gray;
  color: white;
  font-weight: 700;
  cursor: pointer;
`

function User() {
  return (
    <Container>
      <ContainerTitleSide>
        <ContainerTitle>Edit Users</ContainerTitle>
        <Link to='/user/newuser'>
          <CreateUserButton>Create</CreateUserButton>
        </Link>
      </ContainerTitleSide>
      <UserContainerSection>
        <UserShow>
          <UserShowTop>
            <UserImage src={image1} alt='dp user' />
            <UserShowTopTitle>
              <UserInfoName>Joy Smith</UserInfoName>
              <UserInfoTitle>Software Engineer</UserInfoTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowButtom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserInfo>
              <PermIdentity style={{ fontSize: '18px' }} />
              <UserShowInfoTitle>jsmith001</UserShowInfoTitle>
            </UserInfo>
            <UserInfo>
              <CalendarToday style={{ fontSize: '18px' }} />
              <UserShowInfoTitle>19.01.1999</UserShowInfoTitle>
            </UserInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserInfo>
              <PhoneAndroid style={{ fontSize: '18px' }} />
              <UserShowInfoTitle>+234 001 0000 000</UserShowInfoTitle>
            </UserInfo>
            <UserInfo>
              <MailOutline style={{ fontSize: '18px' }} />
              <UserShowInfoTitle>jsmith@gmail.com</UserShowInfoTitle>
            </UserInfo>
            <UserInfo>
              <HomeOutlined style={{ fontSize: '18px' }} />
              <UserShowInfoTitle>Texa | USA</UserShowInfoTitle>
            </UserInfo>
          </UserShowButtom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <Label>Username</Label>
                <Input type='text' placeholder='jsmith001'></Input>
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Full Name</Label>
                <Input type='text' placeholder='Joy Smith'></Input>
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Phone Number</Label>
                <Input type='text' placeholder='+234 001 0000 000'></Input>
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Email</Label>
                <Input type='text' placeholder='jsmith@gmail.com'></Input>
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Location</Label>
                <Input type='text' placeholder='Texa | USA'></Input>
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserImage
                  src={image1}
                  alt='dp user'
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    marginRight: '20px',
                  }}
                />
                <Label htmlFor='file'>
                  <Publish style={{ cursor: 'pointer', color: 'red' }} />
                </Label>
                <Input type='file' id='file' style={{ display: 'none' }} />
              </UserUpdateUpload>
              <UpdateButton>Update</UpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainerSection>
    </Container>
  )
}

export default User
