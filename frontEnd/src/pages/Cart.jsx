import React from 'react'
import styled from 'styled-components'
import image from '../Pictures/720px/BenzSUVBlackGWagon1.jpg'
import image2 from '../Pictures/720px/HondaWhiteCar1.jpg'
import image3 from '../Pictures/720px/BenzBlueCar1.jpg'
import AddIcon from '@mui/icons-material/Add'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp'
import { mobile } from '../Responsive'

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
    props.type === 'filled' ? 'black' : 'transparent'};
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
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
`

function Cart() {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton style={{ border: '2px solid teal' }}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Buttom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={image} />
                <Details>
                  <ProductName>
                    <b>Product:</b>G-Class Benz
                  </ProductName>
                  <ProductId>
                    <b>ProductID:</b>93240582490
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductBrand>
                    <b>ProductBrand:</b>Benz{' '}
                  </ProductBrand>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveSharpIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 15,000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={image2} />
                <Details>
                  <ProductName>
                    <b>Product:</b>Honda Honda
                  </ProductName>
                  <ProductId>
                    <b>ProductID:</b>93240582490
                  </ProductId>
                  <ProductColor color='white' />
                  <ProductBrand>
                    <b>ProductBrand:</b>Honda{' '}
                  </ProductBrand>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveSharpIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 15,000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={image3} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Benz
                  </ProductName>
                  <ProductId>
                    <b>ProductID:</b>93240582490
                  </ProductId>
                  <ProductColor color='blue' />
                  <ProductBrand>
                    <b>ProductBrand:</b>Benz
                  </ProductBrand>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveSharpIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 15,000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal:</SummaryItemText>
              <SummaryItemPrice>$ 45,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>$ 590</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice>$ -590</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Grand Total:</SummaryItemText>
              <SummaryItemPrice>$ 45,000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT NOW!</Button>
          </Summary>
        </Buttom>
      </Wrapper>
    </Container>
  )
}

export default Cart
