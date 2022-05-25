import React from 'react'
import styled from 'styled-components'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import EmailIcon from '@mui/icons-material/Email'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import image1 from '../Pictures/720px/Payment-Options.jpg'
import { mobile } from '../Responsive'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  ${mobile({ flexDirection: 'column' })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({
    fontSize: '12px',
    textAlign: 'justify',
    letterSpacing: '0.03rem',
  })}
`
const Logo = styled.h2`
  color: teal;
  cursor: pointer;
`
const Desc = styled.p`
  margin: 20px 0px;
  line-height: 1.5;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ padding: '12px', backgroundColor: '#eee' })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 12px;
  ${mobile({ fontSize: '12px' })}

  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const TitleRight = styled.h3`
  margin-bottom: 30px;
`
const ContactItem = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: '12px' })}
`

const Payment = styled.img`
  width: 75%;
  margin: 0;
  cursor: pointer;
`

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>VI_AUTO</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          praesentium autem aut obcaecati fuga dolore amet harum sint aliquid
          distinctio, perspiciatis et aliquam nostrum sapiente quis sunt a
          eligendi accusamus.
        </Desc>
        <SocialContainer>
          <SocialIcon color='white'>
            <FacebookSharpIcon />
          </SocialIcon>
          <SocialIcon color='white'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='white'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color='white'>
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color='red'>
            <EmailIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Categories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Refer Others</ListItem>
          <ListItem>Our Supplies</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <TitleRight>Contact</TitleRight>
        <ContactItem>
          <MyLocationIcon style={{ marginRight: '10px' }} />
          72B, Avenue, Akure, Ondo State, Nigeria.
        </ContactItem>
        <ContactItem>
          <PhoneAndroidIcon style={{ marginRight: '10px' }} />
          +234 703 9140 269
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />
          vimedia@gmail.com
        </ContactItem>
        <ContactItem>
          <Payment src={image1}></Payment>
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
