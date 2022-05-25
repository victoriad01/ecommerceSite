import React from 'react'
import SendSharpIcon from '@mui/icons-material/SendSharp'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
  height: 60vh;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 60px;
  color: white;
  ${mobile({ fontSize: '45px' })}
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center', fontSize: '20px' })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  border: 1px solid teal;
`
const Button = styled.button`
  flex: 1;
  border: 1px solid white;
  background-color: white;
  color: teal;
  cursor: pointer;
`

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter!</Title>
      <Description>Subscribe to our Newsletter for timely update</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <SendSharpIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
