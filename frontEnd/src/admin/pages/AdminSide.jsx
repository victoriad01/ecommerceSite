import React from 'react'
import SideBar from '../components/SideBar'
import TopBarAdmin from '../components/TopBarAdmin'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
`
const BodyLeft = styled.div`
  flex: 4;
`
const Note = styled.div``
function adminpageside() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <BodyLeft>
          <Note>Lorem</Note>
        </BodyLeft>
      </Body>
    </>
  )
}

export default adminpageside
