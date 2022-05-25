import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
  background-color: teal;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
  padding: 5px;
  letter-spacing: 0.1rem;
  ${mobile({ textAlign: 'center', fontSize: '10px' })}
`

function Annoucement() {
  return (
    <Container>
      <div>Free Shipping if you buy worth over 10Million Naira!</div>
    </Container>
  )
}

export default Annoucement
