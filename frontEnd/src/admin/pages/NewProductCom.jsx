import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import App from '../../firebase'
import { addProduct } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'

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
  padding: 10px;
`
const Option = styled.option`
  padding: 10px;
`

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
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({})
  const [picture, setPicture] = useState(null)
  const [cat, setCat] = useState([])

  const handleCat = (e) => {
    setCat(e.target.value.split(','))
  }

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleCreateProduct = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + picture.name
    const storage = getStorage(App)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, picture)

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL)
          console.log({ ...inputs, img: downloadURL, categories: cat })
          const product = { ...inputs, img: downloadURL, categories: cat }
          addProduct(product, dispatch)
        })
      }
    )
  }

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
              <Label htmlfor='file'></Label>
              <Input
                type='file'
                id='file'
                placeholder='no file chosen'
                style={{ border: 'none', padding: '0', margin: '0' }}
                onChange={(e) => setPicture(e.target.files[0])}
              />
            </ProductUpload>
            <Label>Title:</Label>
            <Input
              type='text'
              name='title'
              placeholder='Benz Car'
              onChange={handleChange}
            />
            <Label>Description:</Label>
            <Input
              type='text'
              name='desc'
              placeholder='About the product'
              onChange={handleChange}
            />
            <Label>Price:</Label>
            <Input
              type='number'
              name='price'
              placeholder='$xxxx'
              onChange={handleChange}
            />
            <Label>Catergories:</Label>
            <Input
              type='text'
              name='categories'
              placeholder='separate with "," e.g car, suv etc.'
              onChange={handleCat}
            />
            <Label>Product Color:</Label>
            <Input
              type='text'
              name='color'
              placeholder='e.g black etc.'
              onChange={handleChange}
            />
            <Label>In Stock:</Label>
            <Select name='inStock' onChange={handleChange}>
              <Option value='true'>Yes</Option>
              <Option value='false'>No</Option>
            </Select>
            <Label>Brand:</Label>
            <Select name='brand' onChange={handleChange}>
              <Option value='honda'>Honda</Option>
              <Option value='benz'>Benz</Option>
              <Option value='lexus'>Lexuz</Option>
              <Option value='marcopolo'>Marcopolo</Option>
            </Select>
            <Input
              type='text'
              name='model'
              placeholder='e.g 2015 etc.'
              onChange={handleChange}
            />
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUploadButton onClick={handleCreateProduct}>
              Add Product
            </ProductUploadButton>
          </ProductFormRight>
        </ProductForm>
      </ProductButtom>
    </Container>
  )
}

export default NewProductCom
