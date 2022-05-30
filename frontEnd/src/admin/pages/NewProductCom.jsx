import React from 'react'
import styled from 'styled-components'

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
  margin-left: 20px;
  font-weight: 700;
`
const ProductTop = styled.div`
  display: flex;
  align-items: center;
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
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
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

const ImageTitle = styled.h4`
  color: gray;
  margin-bottom: 15px;
`
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
  font-weight: 600;
`
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  color: gray;
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
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`

function NewProductCom() {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>New Product</ProductTitle>
      </ProductTitleContainer>
      <ProductTop></ProductTop>
      <ProductButtom>
        <ProductForm>
          <ProductFormLeft>
            <ImageTitle>Image</ImageTitle>
            <ProductUpload>
              <Label for='file'></Label>
              <Input
                type='file'
                id='file'
                placeholder='no file chosen'
                style={{ border: 'none', padding: '0', margin: '0' }}
              />
            </ProductUpload>
            <Label>Name</Label>
            <Input type='text' placeholder='Benz Car' />
            <Label>Stock</Label>
            <Input type='text' placeholder='123' />
            <Label>Active</Label>
            <Select name='active' id='active'>
              <Option value='yes'>Yes</Option>
              <Option value='no'>No</Option>
            </Select>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUploadButton>Update</ProductUploadButton>
          </ProductFormRight>
        </ProductForm>
      </ProductButtom>
    </Container>
  )
}

export default NewProductCom
