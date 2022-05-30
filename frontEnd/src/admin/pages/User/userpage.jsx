import React from 'react'
import styled from 'styled-components'
import TopBarAdmin from '../../components/TopBarAdmin'
import SideBar from '../../components/SideBar'
import User from '../User'

const Body = styled.div`
  display: flex;
`
function Userpage() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <User />
      </Body>
    </>
  )
}

export default Userpage
