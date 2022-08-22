import React from 'react'
import styled from 'styled-components'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

import profilePicture from '../../Pictures/IMG_20190319_210438.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogout } from '../../redux/adminRedux'

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
const Logout = styled.p`
  letter-spacing: 0.09rem;
  background-color: #f7efef;
  color: gray;
  padding: 8px 16px;
  font-weight: 700;
  border-radius: 16px;
  &:hover {
    color: red;
  }
`

function TopBarAdmin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(adminLogout())
    navigate('/adminlogin')
  }

  return (
    <TopBar>
      <TopBarWrapper>
        <TopLeft>
          <Link to='/onlyadmin' style={{ textDecoration: 'none' }}>
            <Logo>VI-AutoAdmin</Logo>
          </Link>
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

          <TopBarIconContainer>
            <TopAvatar src={profilePicture} />
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Logout onClick={handleLogout}>Logout</Logout>
          </TopBarIconContainer>
        </TopRight>
      </TopBarWrapper>
    </TopBar>
  )
}

export default TopBarAdmin
