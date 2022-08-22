import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteForeverRounded } from '@mui/icons-material'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts, deleteProduct } from '../../redux/apiCalls'

const Container = styled.div`
  flex: 4;
  padding: 0px 20px;
`
const Product = styled.div`
  display: flex;
  align-items: center;
`
const ProductImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
const Action = styled.div`
  display: flex;
  align-items: center;
`
const EditButton = styled.button`
  margin-right: 15px;
  border: none;
  padding: 5px 20px;
  background-color: #eef8ec;
  color: gray;
  cursor: pointer;
  border-radius: 20px;
  font-size: 12px;
`

function ProductsComList() {
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const productFetchedToRedux = useSelector((state) => state.product.products)

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 240 },
    {
      field: 'product',
      headerName: 'Product',
      width: 240,
      renderCell: (params) => {
        return (
          <>
            <Product>
              <ProductImg src={params.row.img} alt='pd' />
              {params.row.title}
            </Product>
          </>
        )
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },

    {
      field: 'price',
      headerName: 'Price',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <Action>
            <Link to={'/singleproduct/' + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>

            <DeleteForeverRounded
              style={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
              onClick={() => handleDelete(params.row._id)}
            />
          </Action>
        )
      },
    },
  ]
  return (
    <Container>
      <DataGrid
        rows={productFetchedToRedux}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  )
}

export default ProductsComList
