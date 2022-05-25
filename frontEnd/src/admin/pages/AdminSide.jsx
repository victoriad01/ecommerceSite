import React from 'react'
import SideBar from '../components/SideBar'
import TopBarAdmin from '../components/TopBarAdmin'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
`
const BodyLeft = styled.div`
  flex: 5;
`
function adminpageside() {
  return (
    <>
      <TopBarAdmin />
      <Body>
        <SideBar />
        <BodyLeft>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          eius ut odio mollitia veniam pariatur amet, repudiandae rem ab facilis
          deserunt, esse cupiditate sequi doloribus quaerat voluptas laborum id
          molestias. Accusamus, magnam. Omnis non delectus saepe pariatur nam
          explicabo exercitationem sint iure blanditiis ex.
        </BodyLeft>
      </Body>
    </>
  )
}

export default adminpageside
