import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'
import { mobile } from '../Responsive'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '12px 0px' })}
`
const Option = styled.option`
  margin-bottom: 20px;
`
function ProductList() {
  return (
    <Container>
      <Title>Cars</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Cars: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Gray</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Van</Option>
            <Option>Car</Option>
            <Option>SUV</Option>
            <Option>G-Class</Option>
            <Option>Others</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Cars: </FilterText>
          <Select>
            <Option disabled selected>
              Brand
            </Option>
            <Option>Toyota</Option>
            <Option>Benz</Option>
            <Option>Honda</Option>
            <Option>Benz-G-Class</Option>
            <Option>Benz-Van</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  )
}

export default ProductList
