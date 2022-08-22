import { React, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../../../redux/apiCalls'
import { useNavigate } from 'react-router-dom'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Login = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const AdminText = styled.h1`
  font-weight: 200;
  font-size: 45px;
  text-align: center;
  margin-bottom: 30px;
  text-decoration: underline;
  color: lightseagreen;
`
const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: none;
  background: #ececec;
  color: teal;
  font-size: 18px;
`
const Error = styled.span`
  color: red;
  margin-top: 20px;
`
const Loading = styled.span`
  color: gray;
  margin-top: 20px;
`
const Button = styled.button`
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.12rem;
  &:disabled {
    background-color: #cae4e4;
    cursor: not-allowed;
  }
  &:hover {
    color: red;
    background-color: lightgreen;
    font-size: 18px;
  }
`

function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await adminLogin(dispatch, { username, password })

      navigate('/onlyadmin')
    } catch (error) {
      console.log(error)
    }
  }

  const error = useSelector((state) => state.admin.error)
  const isFetching = useSelector((state) => state.admin.isFetching)

  return (
    <>
      <Body>
        <Login>
          <AdminText>Admin Login</AdminText>
          <Input
            type='text'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          {error && <Error>Something went wrong...</Error>}
          {isFetching && <Loading>Loading... Please wait.</Loading>}
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
        </Login>
      </Body>
    </>
  )
}

export default AdminLogin
