import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addLikes } from '../redux/likesRedux'
import { addProduct } from '../redux/cartRedux'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  max-width: 280px;
  height: 350px;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: #e7fbfb;
`
const Image = styled.img`
  height: 75%;
  padding: 5px;
  flex: 1;
  z-index: 2;
  border-radius: 50%;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #4ac7c7;
    transform: scale(1.4);
    color: white;
  }
`
const Title = styled.h5`
  z-index: 6;
  text-align: left;
`

function Product({ item }) {
  const dispatch = useDispatch()

  const handleLikes = (e) => {
    e.preventDefault()
    const quantity = 1
    const sent = { ...item, quantity }

    dispatch(addLikes({ sent }))
  }

  const handleSentToCart = (e) => {
    e.preventDefault()
    const quantity = 1
    const total = item.price
    const model = item.model
    const color = item.color

    dispatch(
      addProduct({
        ...item,
        quantity,
        color,
        model,
        total,
      })
    )
  }
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleSentToCart}>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon onClick={handleLikes}>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
