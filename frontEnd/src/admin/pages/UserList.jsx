import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'

import { DeleteForeverRounded } from '@mui/icons-material'

import { rows } from '../components/dummyData'
import { Link } from 'react-router-dom'
const Container = styled.div`
  flex: 4;
`
const User = styled.div`
  display: flex;
  align-items: center;
`
const UserImg = styled.img`
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

function UserList() {
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const [data, setData] = useState(rows)
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <User>
              <UserImg src={params.row.avatar} alt='user' />
              {params.row.username}
            </User>
          </>
        )
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
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
            <Link to={'/user/' + params.row.id}>
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
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  )
}

export default UserList
