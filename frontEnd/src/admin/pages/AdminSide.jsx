import React from 'react'
import SideBar from '../components/SideBar'
import TopBarAdmin from '../components/TopBarAdmin'
import styled from 'styled-components'
import AdminHome from './Home/Home'

const Body = styled.div`
  display: flex;
`

function adminpageside() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <AdminHome />
      </Body>
    </>
  )
}

export default adminpageside
