import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { mobile } from '../Responsive'

const Container = styled.div`
  height: 60px;
  background-color: white;
  color: black;
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
  return (
    <Container>
      <MenuWrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <SearchIcon style={{ fontSize: '16px', cursor: 'pointer' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>VI_AUTO</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </MenuWrapper>
    </Container>
  )
}

export default Navbar
