import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('newest')

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({ ...filters, [e.target.name]: value })
  }

  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Cars: </FilterText>
          <Select name='color' onChange={handleFilters} defaultValue>
            <Option>Color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>gray</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>brown</Option>
          </Select>
          <Select name='categories' onChange={handleFilters} defaultValue>
            <Option>Type</Option>
            <Option>van</Option>
            <Option>car</Option>
            <Option>suv</Option>
            <Option>G-Class</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Cars: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Asc. Price</Option>
            <Option value='desc'>Des. Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  )
}

export default ProductList
