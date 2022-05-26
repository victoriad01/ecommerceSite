import React from 'react'
import styled from 'styled-components'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

import profilePicture from '../../Pictures/IMG_20190319_210438.jpg'

const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 999;
`
const TopBarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopLeft = styled.div``

const Logo = styled.span`
  font-weight: lighter;
  font-size: 30px;
  color: #000000;
  cursor: pointer;
`
const TopRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopBarIconContainer = styled.div`
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  color: #555;
`
const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
`
const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`
function TopBarAdmin() {
  return (
    <TopBar>
      <TopBarWrapper>
        <TopLeft>
          <Logo>VI-Auto</Logo>
        </TopLeft>
        <TopRight>
          <TopBarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Language />
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Settings />
          </TopBarIconContainer>
          <TopAvatar src={profilePicture} />
        </TopRight>
      </TopBarWrapper>
    </TopBar>
  )
}

export default TopBarAdmin
