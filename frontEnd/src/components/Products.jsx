import React from 'react'
import styled from 'styled-components'
import { productData } from '../data'
import Product from './Product'
import { mobile } from '../Responsive'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: 'column' })}
`
function Products() {
  return (
    <Container>
      {productData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products