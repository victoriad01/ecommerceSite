import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);

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
  const dispatch = useDispatch()
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')

  const changeQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [id])

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        model,
        total: product.price * quantity,
      })
    )
  }

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor
                color={product.color}
                onClick={() => setColor(product.color)}
              />
            </Filter>
            <Filter>
              <FilterTitle>Model</FilterTitle>
              <FilterModelSize onChange={(e) => setModel(e.target.value)}>
                <FilterModelOption key={product.model}>
                  {product.model}
                </FilterModelOption>
              </FilterModelSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveSharpIcon
                style={{ cursor: 'pointer' }}
                onClick={() => changeQuantity('dec')}
              />
              <Amount>{quantity}</Amount>
              <AddIcon
                style={{ cursor: 'pointer' }}
                onClick={() => changeQuantity('inc')}
              />
            </AmountContainer>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
