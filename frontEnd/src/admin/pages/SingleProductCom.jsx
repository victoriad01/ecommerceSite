import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../components/Chart'

import { Publish } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { userRequest } from '../../requestMethod'

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import App from '../../firebase'
import { updateProduct } from '../../redux/apiCalls'

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
  margin-right: 50px;
  display: flex;
  width: 40%;
`
const ProductInfoValue = styled.span`
  font-weight: 800;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
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
  const dispatch = useDispatch()
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const [pStats, setPStats] = useState([])
  const [uPicture, setUPicture] = useState(null)
  const [details, setDetails] = useState(null)
  const [cat, setCat] = useState([])

  console.log(details)
  console.log(cat)

  const handleChange = (e) => {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleCat = (e) => {
    setCat(e.target.value.split(','))
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + uPicture.name
    const storage = getStorage(App)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, uPicture)

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

          console.log({ ...details, img: downloadURL, categories: cat })

          const uProduct = { ...details, img: downloadURL, categories: cat }

          // updateProduct(uProduct, dispatch)
        })
      }
    )
  }

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  )

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/orders/income?pid' + productId)

        const sorted = res.data.sort((a, b) => {
          return a._id - b._id
        })
        sorted.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        )
      } catch (error) {}
    }
    getStats()
  }, [MONTHS, productId])

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
          <Chart data={pStats} dataKey='Sales' title='Sales Performance' />
        </TopLeft>
        <TopRight>
          <ProductInfoTop>
            <ProductInfoImage src={product.img} />
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>
          <ProductInfoButtom>
            <ProductInfoItem>
              <ProductInfoKey>Product id:</ProductInfoKey>
              <ProductInfoValue>{product._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales:</ProductInfoKey>
              <ProductInfoValue>4210</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In Stock:</ProductInfoKey>
              <ProductInfoValue>{product.inStock}</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoButtom>
        </TopRight>
      </ProductTop>
      <ProductButtom>
        <ProductForm>
          <ProductFormLeft>
            <Label>Product Name</Label>
            <Input
              type='text'
              name='title'
              placeholder={product.title}
              onChange={handleChange}
            />

            <Label>Desciption</Label>
            <Input
              type='text'
              name='desc'
              placeholder={product.desc}
              onChange={handleChange}
            />

            <Label>Product Price</Label>
            <Input
              type='text'
              name='price'
              placeholder={product.price}
              onChange={handleChange}
            />

            <Label>Product Categories</Label>
            <Input
              type='text'
              name='categories'
              placeholder={product.categories}
              onChange={handleCat}
            />

            <Label>Product Brand</Label>
            <Input
              type='text'
              name='brand'
              placeholder={product.brand}
              onChange={handleChange}
            />

            <Label>Product Color</Label>
            <Input
              type='text'
              name='color'
              placeholder={product.color}
              onChange={handleChange}
            />

            <Label>In Stock</Label>
            <Select name='inStock' id='instock' onChange={handleChange}>
              <Option value='true'>Yes</Option>
              <Option value='false'>No</Option>
            </Select>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductInfoImage
                src={product.img}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  marginRight: '20px',
                }}
              />
              <Label htmlfor='file'>
                <Publish style={{ color: 'blue', cursor: 'pointer' }} />
              </Label>
              <Input
                type='file'
                id='file'
                // style={{ display: 'none' }}
                onChange={(e) => setUPicture(e.target.files[0])}
              />
            </ProductUpload>
            <ProductUploadButton onClick={handleUpdate}>
              Update
            </ProductUploadButton>
          </ProductFormRight>
        </ProductForm>
      </ProductButtom>
    </Container>
  )
}

export default SingleProductCom
