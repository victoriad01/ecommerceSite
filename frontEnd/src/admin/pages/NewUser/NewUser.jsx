import React from 'react'
import styled from 'styled-components'
import TopBarAdmin from '../../components/TopBarAdmin'
import SideBar from '../../components/SideBar'
import NewUserCom from '../NewUserCom'

const Body = styled.div`
  display: flex;
`
function NewUser() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <NewUserCom />
      </Body>
    </>
  )
}

export default NewUser
