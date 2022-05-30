import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 4;
  padding: 0px 20px;
`
const NewUserTitle = styled.h1`
  font-weight: 600;
`
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #c3c2c2;
`
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  height: 20px;
  border: 1px solid gray;
  border-radius: 5px;
`
const Gender = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`
const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`
const Option = styled.option``

const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: green;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 7px 10px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: red;
  }
`
function NewUserCom() {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <Label>Username</Label>
          <Input type='text' placeholder='username' />
        </NewUserItem>
        <NewUserItem>
          <Label>Full Name</Label>
          <Input type='text' placeholder='full name' />
        </NewUserItem>
        <NewUserItem>
          <Label>Email</Label>
          <Input type='email' placeholder='mail@email.com' />
        </NewUserItem>
        <NewUserItem>
          <Label>Password</Label>
          <Input type='password' placeholder='password' />
        </NewUserItem>
        <NewUserItem>
          <Label>Phone</Label>
          <Input type='text' placeholder='+ 234 0200 000 000' />
        </NewUserItem>
        <NewUserItem>
          <Label>Location</Label>
          <Input type='text' placeholder='e.g Houston | USA' />
        </NewUserItem>
        <NewUserItem>
          <Label>Gender</Label>
          <Gender>
            <Input type='radio' name='gender' id='male' value='male' />
            <Label
              for='male'
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                fontSize: '14px',
                color: '#b3b2b2',
              }}
            >
              Male
            </Label>
            <Input type='radio' name='gender' id='female' value='female' />
            <Label
              for='female'
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                fontSize: '14px',
                color: '#b3b2b2',
              }}
            >
              Female
            </Label>
            <Input type='radio' name='gender' id='others' value='others' />
            <Label
              for='others'
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                fontSize: '14px',
                color: '#b3b2b2',
              }}
            >
              Others
            </Label>
          </Gender>
        </NewUserItem>
        <NewUserItem>
          <Label>Active </Label>
          <NewUserSelect name='active' id='active'>
            <Option value='yes'>Yes</Option>
            <Option value='no'>No</Option>
          </NewUserSelect>
        </NewUserItem>
        <NewUserItem>
          <NewUserButton>Create</NewUserButton>
        </NewUserItem>
      </NewUserForm>
    </Container>
  )
}

export default NewUserCom
