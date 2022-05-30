import React from 'react'
import styled from 'styled-components'
import UserList from '../UserList'
import TopBarAdmin from '../../components/TopBarAdmin'
import SideBar from '../../components/SideBar'

const Body = styled.div`
  display: flex;
`

function Userlistpage() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <UserList />
      </Body>
    </>
  )
}

export default Userlistpage
