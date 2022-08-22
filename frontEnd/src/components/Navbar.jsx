import React, { useState } from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingCartOutlined, FavoriteBorder } from '@mui/icons-material/'
import { mobile } from '../Responsive'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../redux/userRedux'

const Container = styled.div`
  height: 60px;
  background-color: white;
  color: black;
  position: sticky;
  top: 34px;
  z-index: 999;
  ${mobile({ height: '50px' })}
`
const MenuWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: '5px 0px', alignItem: 'center' })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.div`
  font-size: 16px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  justify-content: center;
  ${mobile({ marginLeft: '5px' })}
`
const Input = styled.input`
  border: none;
  ${mobile({ width: '50%' })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px;
  ${mobile({ textAlign: 'center' })}
`
const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  ${mobile({ fontSize: '14px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: 'flex-start' })}
`
const MenuItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: '12px', marginLeft: '20px' })}
`
function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartQuan = useSelector((state) => state.cart.quantity)
  const likes = useSelector((state) => state.love.likes)
  const [q, setQ] = useState('')

  const dUser = useSelector((state) => state.user.currentUser)

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  return (
    <Container>
      <MenuWrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder='search'
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchIcon
              style={{ fontSize: '16px', cursor: 'pointer' }}
              onClick={() => navigate(`/search?q=${q}`)}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate('/')}>VI_AUTO</Logo>
        </Center>

        <Right style={{ textDecoration: 'none' }}>
          {dUser ? (
            <MenuItem style={{ textDecoration: 'none' }} onClick={handleLogout}>
              LOGOUT
            </MenuItem>
          ) : (
            <>
              <Link to='/login'>
                <MenuItem style={{ textDecoration: 'none' }}>SIGN IN</MenuItem>
              </Link>
              <Link to='/register'>
                <MenuItem>REGISTER</MenuItem>
              </Link>
            </>
          )}

          <MenuItem>
            {dUser ? (
              <Link to='/cart'>
                <Badge badgeContent={cartQuan} color='primary'>
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            ) : (
              ''
            )}
          </MenuItem>

          <MenuItem>
            {dUser ? (
              <Link to='/wishlist'>
                <Badge badgeContent={likes} color='primary'>
                  <FavoriteBorder />
                </Badge>
              </Link>
            ) : (
              ''
            )}
          </MenuItem>
        </Right>
      </MenuWrapper>
    </Container>
  )
}

export default Navbar
