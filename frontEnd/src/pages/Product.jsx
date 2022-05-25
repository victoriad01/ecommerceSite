import styled from 'styled-components'
import React from 'react'
import image from '../Pictures/720px/BenzSUVBlackGWagon1.jpg'
import AddIcon from '@mui/icons-material/Add'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp'
import { mobile } from '../Responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Img = styled.img`
  width: 80%;
  height: 65vh;
  object-fit: cover;
  ${mobile({
    display: 'block',
    margin: 'auto',
    height: '34vh',
  })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    flexDirection: 'column',
    padding: '20px 5px',
  })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ textAlign: 'justify' })}
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: '24px' })}
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0px;
  ${mobile({ paddingButtom: '40px' })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  ${mobile({ marginTop: '10px' })}
`
const FilterModelSize = styled.select`
  margin-left: 20px;
  padding: 5px;
`
const FilterModelOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: #f8f8f8;
  }
`

function Product() {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src={image} />
        </ImgContainer>
        <InfoContainer>
          <Title>G-Class</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, saepe esse. Illo nobis natus rerum quidem suscipit
            officiis quos excepturi quas adipisci sit quasi aliquid, quia
            assumenda delectus mollitia corporis.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='red' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Model</FilterTitle>
              <FilterModelSize>
                <FilterModelOption>2010</FilterModelOption>
                <FilterModelOption>2015</FilterModelOption>
                <FilterModelOption>2020</FilterModelOption>
                <FilterModelOption>2021</FilterModelOption>
                <FilterModelOption>2022</FilterModelOption>
              </FilterModelSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveSharpIcon style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <AddIcon style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
