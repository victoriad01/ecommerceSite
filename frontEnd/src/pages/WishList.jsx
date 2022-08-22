import { React } from 'react'
import styled from 'styled-components'
import {
  ShoppingCartCheckout,
  RemoveSharp,
  Add,
  ThumbDownOffAlt,
} from '@mui/icons-material/'
import { mobile } from '../Responsive'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearLikes, deleteLikes } from '../redux/likesRedux'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    marginButtom: '20px',
    textAlign: 'center',
    fontSize: '12px',
  })}
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'red' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({ padding: '5px', margin: '5px' })}
`
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ margin: '15px' })}
`
const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  padding: 20px;
`
const Image = styled.img`
  width: 200px;
  ${mobile({ width: '100px', height: '100px' })}
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: '5px', fontSize: '12px' })}
`
const ProductName = styled.span``
const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductBrand = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 20px;
  ${mobile({ fontSize: '14px' })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: '18px', padding: '10px' })}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: '22px', textAlign: 'center', fontWeight: '600' })}
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};

  ${mobile({ marginButtom: '10px' })}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``

const DeleteCartProduct = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 10px;
`
const Text = styled.p`
  color: gray;
  font-size: 14px;
`
function Cart() {
  const cart = useSelector((state) => state.cart)
  const likes = useSelector((state) => state.love.likes)
  const wishlist = useSelector((state) => state.love.products)
  const wishlistTotal = useSelector((state) => state.love.total)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/cart')
  }

  const removeLikedItems = (e) => {
    e.preventDefault()
    dispatch(clearLikes())
  }

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton
            style={{ border: '2px solid teal' }}
            onClick={() => navigate('/')}
          >
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText onClick={handleClick}>
              Shopping Bag ({cart.shoppingBag})
            </TopText>
            <TopText>Your Wishlist ({likes})</TopText>
          </TopTexts>

          <TopButton
            type='filled'
            style={{
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '0.2rem',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={removeLikedItems}
          >
            <ThumbDownOffAlt style={{ marginRight: '5px' }} />
            Unlike All!
          </TopButton>
        </Top>
        <Buttom>
          <Info>
            {wishlist?.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ProductID: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductBrand>
                      <b>ProductBrand: </b>
                      {product.brand}
                    </ProductBrand>
                  </Details>
                  <DeleteCartProduct
                    onClick={() => dispatch(deleteLikes({ product }))}
                    style={{ cursor: 'pointer' }}
                  >
                    <ThumbDownOffAlt style={{ color: 'pink' }} />
                    <Text>Unlike</Text>
                  </DeleteCartProduct>
                  <DeleteCartProduct>
                    <ShoppingCartCheckout
                      style={{ color: 'green', cursor: 'pointer' }}
                      onClick={() => dispatch(addProduct({ ...product }))}
                    />
                    <Text>To Cart</Text>
                  </DeleteCartProduct>
                </ProductDetail>

                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveSharp />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal:</SummaryItemText>
              <SummaryItemPrice>$ {Number(wishlistTotal)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>$ 190</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice>$ -190</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Grand Total:</SummaryItemText>
              <SummaryItemPrice>$ {wishlistTotal}</SummaryItemPrice>
            </SummaryItem>
          </Summary>
        </Buttom>
      </Wrapper>
    </Container>
  )
}

export default Cart
