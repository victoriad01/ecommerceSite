import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  Dashboard,
  Timeline,
  MonetizationOn,
  Group,
  QrCodeRounded,
  PaidOutlined,
  Assessment,
  AlternateEmail,
  DynamicFeed,
  SmsOutlined,
  HandymanOutlined,
  ReportGmailerrorredOutlined,
} from '@mui/icons-material/'

const SideBarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #f9fbfd;
  position: sticky;
  top: 50px;
`
const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #555;
  padding: 20px;
`
const SideBarMenu = styled.div`
  margin-bottom: 10px;
`
const SideBarTitle = styled.h3`
  font-size: 15px;
  color: lightgray;
`
const SidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 5px;
`
const SidebarListContent = styled.li`
  display: flex;
  padding: 5px;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: #dce1e2;
  }
  &:active {
    background-color: #f3f7f7;
  }
`
const Active = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 25px;
  background-color: #e3e8e9;
  width: 100%;
`
function SideBar() {
  const navigate = useNavigate()

  const handleUser = () => {
    navigate('/userlistpage')
  }

  const handleProducts = () => {
    navigate('/productss')
  }

  const handleHome = () => {
    navigate('/onlyadmin')
  }
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarTitle>DASHBROAD</SideBarTitle>
          <SidebarList>
            <SidebarListContent onClick={handleHome}>
              <Active>
                <Dashboard style={{ marginRight: '8px', fontSize: '20px' }} />
                Home
              </Active>
            </SidebarListContent>
            <SidebarListContent>
              <Timeline style={{ marginRight: '8px', fontSize: '20px' }} />
              Analytics
            </SidebarListContent>
            <SidebarListContent>
              <MonetizationOn
                style={{ marginRight: '8px', fontSize: '20px' }}
              />
              Sales
            </SidebarListContent>
          </SidebarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Quick Menu</SideBarTitle>
          <SidebarList>
            <SidebarListContent onClick={() => handleUser()}>
              <Group style={{ marginRight: '8px', fontSize: '20px' }} />
              Users
            </SidebarListContent>
            <SidebarListContent onClick={handleProducts}>
              <QrCodeRounded style={{ marginRight: '8px', fontSize: '20px' }} />
              Products
            </SidebarListContent>
            <SidebarListContent>
              <PaidOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
              Transactions
            </SidebarListContent>
            <SidebarListContent>
              <Assessment style={{ marginRight: '8px', fontSize: '20px' }} />
              Reports
            </SidebarListContent>
          </SidebarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Notifications</SideBarTitle>
          <SidebarList>
            <SidebarListContent>
              <AlternateEmail
                style={{ marginRight: '8px', fontSize: '20px' }}
              />
              Mail
            </SidebarListContent>
            <SidebarListContent>
              <DynamicFeed style={{ marginRight: '8px', fontSize: '20px' }} />
              Feedback
            </SidebarListContent>
            <SidebarListContent>
              <SmsOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
              Sales
            </SidebarListContent>
          </SidebarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Staff</SideBarTitle>
          <SidebarList>
            <SidebarListContent>
              <HandymanOutlined
                style={{ marginRight: '8px', fontSize: '20px' }}
              />
              Home
            </SidebarListContent>
            <SidebarListContent>
              <Timeline style={{ marginRight: '8px', fontSize: '20px' }} />
              Analytics
            </SidebarListContent>
            <SidebarListContent>
              <ReportGmailerrorredOutlined
                style={{ marginRight: '8px', fontSize: '20px' }}
              />
              Report
            </SidebarListContent>
          </SidebarList>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
