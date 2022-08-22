import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 10px;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h3`
  color: teal;
  background-color: #f4eded;
  margin-bottom: 20px;
  padding: 5px;
`
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  background-color: teal;
  color: white;
  border-radius: 40px;
`
function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
