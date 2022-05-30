import React from 'react'
import styled from 'styled-components'
import TopBarAdmin from '../../components/TopBarAdmin'
import SideBar from '../../components/SideBar'
import ProductsListCom from '../ProductListCom'

const Body = styled.div`
  display: flex;
`
function ProductsList() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <ProductsListCom />
      </Body>
    </>
  )
}

export default ProductsList
