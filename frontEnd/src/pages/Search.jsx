import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Product from '../components/Product'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px;
`
const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Search = () => {
  const [products, setProducts] = useState([])
  const query = useLocation().search

  useEffect(() => {
    const getProducts = async (req, res) => {
      try {
        const fetchedProducts = await axios.get(
          `http://localhost:5000/api/search${query}`
        )
        setProducts(fetchedProducts.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [query])

  return (
    <SearchContainer>
      <ProductsContainer>
        {products.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </ProductsContainer>
    </SearchContainer>
  )
}

export default Search
