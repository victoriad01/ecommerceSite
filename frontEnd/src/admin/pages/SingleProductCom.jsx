import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Chart from '../components/Chart'
import { productData } from '../components/dummyData'
import image1 from '../../Pictures/720px/BenzWhiteCar1.jpg'
import { Publish } from '@mui/icons-material'

const Container = styled.div`
  flex: 4;
  padding: 20px;
`
const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProductTitle = styled.h1`
  font-weight: 700;
`
const AddProductButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 700;
`
const ProductTop = styled.div`
  display: flex;
  align-items: center;
`
const TopLeft = styled.div`
  flex: 1;
`
const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`
const ProductInfoImage = styled.img`
  margin: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
const ProductName = styled.span`
  text-align: left;
  font-weight: 600;
`
const ProductInfoButtom = styled.div`
  /* margin-top: 10px; */
`
const ProductInfoItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`
const ProductInfoKey = styled.span`
  margin-top: 5px;
`
const ProductInfoValue = styled.span`
  font-weight: 200;
`
const ProductButtom = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const ProductForm = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`
const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`
const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`
const Select = styled.select`
  margin-bottom: 10px;
`
const Option = styled.option``
const ProductUploadButton = styled.button`
  border: none;
  padding: 5px;
  background-color: gray;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`

function SingleProductCom() {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to='/newproduct'>
          <AddProductButton>Create</AddProductButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <TopLeft>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </TopLeft>
        <TopRight>
          <ProductInfoTop>
            <ProductInfoImage src={image1} />
            <ProductName>Benz White Car</ProductName>
          </ProductInfoTop>
          <ProductInfoButtom>
            <ProductInfoItem>
              <ProductInfoKey>Product id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales:</ProductInfoKey>
              <ProductInfoValue>4210</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Active:</ProductInfoKey>
              <ProductInfoValue>Yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In Stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoButtom>
        </TopRight>
      </ProductTop>
      <ProductButtom>
        <ProductForm>
          <ProductFormLeft>
            <Label>Product Name</Label>
            <Input type='text' placeholder='product name' />
            <Label>In Stock</Label>
            <Select name='instock' id='instock'>
              <Option value='yes'>Yes</Option>
              <Option value='no'>No</Option>
            </Select>
            <Label>Active</Label>
            <Select name='active' id='active'>
              <Option value='yes'>Yes</Option>
              <Option value='no'>No</Option>
            </Select>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductInfoImage
                src={image1}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  marginRight: '20px',
                }}
              />
              <Label for='file'>
                <Publish style={{ color: 'blue' }} />
              </Label>
              <Input type='file' id='file' style={{ display: 'none' }} />
            </ProductUpload>
            <ProductUploadButton>Update</ProductUploadButton>
          </ProductFormRight>
        </ProductForm>
      </ProductButtom>
    </Container>
  )
}

export default SingleProductCom
