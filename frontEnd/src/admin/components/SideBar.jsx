import React from 'react'
import styled from 'styled-components'
import { Dashboard, Timeline, TrendingUp } from '@mui/icons-material/'

const SideBarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: teal;
  position: sticky;
  top: 50;
`

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const SideBarTitle = styled.h3`
  margin: 15px;
`

const SidebarList = styled.ul`
  margin: 0;
  padding: 0;
`

const SidebarListContent = styled.li`
  display: flex;
  padding-left: 20px;
`

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarTitle>DASHBROAD</SideBarTitle>
        <SidebarList>
          <SidebarListContent>
            <Dashboard /> Home
          </SidebarListContent>
          <SidebarListContent>
            <Timeline /> Analytics
          </SidebarListContent>
          <SidebarListContent>
            <TrendingUp /> Sales
          </SidebarListContent>
        </SidebarList>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
