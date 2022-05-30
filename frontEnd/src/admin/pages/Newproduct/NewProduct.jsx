import React from 'react'
import styled from 'styled-components'
import TopBarAdmin from '../../components/TopBarAdmin'
import SideBar from '../../components/SideBar'
import NewProductCom from '../NewProductCom'

const Body = styled.div`
  display: flex;
`
function NewProduct() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <NewProductCom />
      </Body>
    </>
  )
}

export default NewProduct
