import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteForeverRounded } from '@mui/icons-material'

import { productRows } from '../components/dummyData'
import { Link } from 'react-router-dom'

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
  const [data, setData] = useState(productRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Product>
              <ProductImg src={params.row.img} alt='the product' />
              {params.row.name}
            </Product>
          </>
        )
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
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
            <Link to={'/product/' + params.row.id}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteForeverRounded
              style={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
              onClick={() => handleDelete(params.row.id)}
            />
          </Action>
        )
      },
    },
  ]
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  )
}

export default ProductsComList
