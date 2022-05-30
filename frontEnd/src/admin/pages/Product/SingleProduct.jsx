import React from 'react'
import styled from 'styled-components'
import TopBarAdmin from '../../components/TopBarAdmin'
import SideBar from '../../components/SideBar'
import SingleProductCom from '../SingleProductCom'

const Body = styled.div`
  display: flex;
`
function SingleProduct() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <SingleProductCom />
      </Body>
    </>
  )
}

export default SingleProduct
