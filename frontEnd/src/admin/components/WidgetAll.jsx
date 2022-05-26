import React from 'react'
import styled from 'styled-components'
import image1 from '../../Pictures/IMG_20190125_085401.jpg'
import image2 from '../../Pictures/edited5.jpg'
import image3 from '../../Pictures/edited2.jpg'
import { Visibility } from '@mui/icons-material'

const WidgetContainer = styled.div``
const Container = styled.div`
  display: flex;
  padding: 20px;
`
const WidgetSmall = styled.div`
  height: fit-content;
  flex: 1;
  padding: 20px;
  margin-right: 20px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const SmallWidgetTitle = styled.h3``
const InfoContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`
const InfoContainerImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 20px;
`
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`
const UserInfoName = styled.h4`
  color: gray;
`
const UserInfoJobTittle = styled.p`
  color: lightgray;
  font-size: 14px;
`
const Display = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  padding: 12px;
  height: 2px;
  border-radius: 20%;
  color: gray;
  cursor: pointer;
`
const LeftTitle = styled.div`
  display: flex;
  font-size: 12px;
`
const WidgetLarge = styled.div`
  height: fit-content;
  flex: 2;
  padding: 20px 20px 0px 20px;
  box-shadow: 2px 1px 8px -2px rgba(228, 220, 220, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const Table = styled.table`
  justify-content: space-between;
  margin: 20px 0px;
  color: gray;
  font-size: 14px;
`
const Tr = styled.tr``
const Th = styled.th`
  text-align: left;
  margin-right: 20px;
`
const ThRowOneInfo = styled.td`
  display: flex;
  align-items: center;
`
const ThRowOneImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 10px;
`
const ThRowOneName = styled.span`
  margin-right: 80px;
`
const ThRowOneDate = styled.td``

const DateText = styled.span`
  margin-right: 100px;
`
const ThRowOneAmount = styled.td`
  margin-right: 20px;
`
const AmountText = styled.span`
  margin-right: 60px;
`

const ThRowOneStatus = styled.td``
const StatusText = styled.button`
  font-size: 12px;
  margin-right: 20px;
  border: none;
  border-radius: 10%;
  padding: 5px 8px;
  color: ${(props) => props.type === 'declined' && 'red'};
  color: ${(props) => props.type === 'pending' && 'blue'};
  color: ${(props) => props.type === 'approved' && 'green'};
  background-color: ${(props) => props.type === 'declined' && '#FEDFDC'};
  background-color: ${(props) => props.type === 'pending' && '#DCDEFE'};
  background-color: ${(props) => props.type === 'approved' && '#DCFEE2'};
`

function WidgetAll() {
  return (
    <WidgetContainer>
      <Container>
        <WidgetSmall>
          <SmallWidgetTitle>New Joining Members</SmallWidgetTitle>
          <InfoContainer>
            <InfoContainerImg src={image1} />
            <UserInfoContainer>
              <UserInfoName>Oluwafemi Victor</UserInfoName>
              <UserInfoJobTittle>Full Stack Developer</UserInfoJobTittle>
            </UserInfoContainer>
            <Display>
              <Visibility style={{ marginRight: '6px', fontSize: '18px' }} />
              <LeftTitle>Display</LeftTitle>
            </Display>
          </InfoContainer>
          <InfoContainer>
            <InfoContainerImg src={image1} />
            <UserInfoContainer>
              <UserInfoName>Oluwafemi Victor</UserInfoName>
              <UserInfoJobTittle>Full Stack Developer</UserInfoJobTittle>
            </UserInfoContainer>
            <Display>
              <Visibility style={{ marginRight: '6px', fontSize: '18px' }} />
              <LeftTitle>Display</LeftTitle>
            </Display>
          </InfoContainer>
          <InfoContainer>
            <InfoContainerImg src={image1} />
            <UserInfoContainer>
              <UserInfoName>Oluwafemi Victor</UserInfoName>
              <UserInfoJobTittle>Full Stack Developer</UserInfoJobTittle>
            </UserInfoContainer>
            <Display>
              <Visibility style={{ marginRight: '6px', fontSize: '18px' }} />
              <LeftTitle>Display</LeftTitle>
            </Display>
          </InfoContainer>
          <InfoContainer>
            <InfoContainerImg src={image1} />
            <UserInfoContainer>
              <UserInfoName>Oluwafemi Victor</UserInfoName>
              <UserInfoJobTittle>Full Stack Developer</UserInfoJobTittle>
            </UserInfoContainer>
            <Display>
              <Visibility style={{ marginRight: '6px', fontSize: '18px' }} />
              <LeftTitle>Display</LeftTitle>
            </Display>
          </InfoContainer>
          <InfoContainer>
            <InfoContainerImg src={image1} />
            <UserInfoContainer>
              <UserInfoName>Oluwafemi Victor</UserInfoName>
              <UserInfoJobTittle>Full Stack Developer</UserInfoJobTittle>
            </UserInfoContainer>
            <Display>
              <Visibility style={{ marginRight: '6px', fontSize: '18px' }} />
              <LeftTitle>Display</LeftTitle>
            </Display>
          </InfoContainer>
        </WidgetSmall>
        <WidgetLarge>
          <SmallWidgetTitle>Latest Transactions</SmallWidgetTitle>
          <Table>
            <Tr>
              <Th>Customer</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>

            <Tr>
              <ThRowOneInfo>
                <ThRowOneImage src={image3}></ThRowOneImage>
                <ThRowOneName>Jan Mary</ThRowOneName>
              </ThRowOneInfo>
              <ThRowOneDate>2 December 2022</ThRowOneDate>
              <ThRowOneAmount>$132.00</ThRowOneAmount>
              <ThRowOneStatus>
                <StatusText type='declined'>Declined</StatusText>
              </ThRowOneStatus>
            </Tr>
            <Tr>
              <ThRowOneInfo>
                <ThRowOneImage src={image2}></ThRowOneImage>
                <ThRowOneName>Jan Smith Mary</ThRowOneName>
              </ThRowOneInfo>
              <ThRowOneDate>
                <DateText>2 May 2022</DateText>
              </ThRowOneDate>
              <ThRowOneAmount>
                <AmountText>$13267.00</AmountText>
              </ThRowOneAmount>
              <ThRowOneStatus>
                <StatusText type='pending'>Pending</StatusText>
              </ThRowOneStatus>
            </Tr>
            <Tr>
              <ThRowOneInfo>
                <ThRowOneImage src={image3}></ThRowOneImage>
                <ThRowOneName>Jan Mary</ThRowOneName>
              </ThRowOneInfo>
              <ThRowOneDate>2 December 2022</ThRowOneDate>
              <ThRowOneAmount>$132.00</ThRowOneAmount>
              <ThRowOneStatus>
                <StatusText type='approved'>Approved</StatusText>
              </ThRowOneStatus>
            </Tr>
            <Tr>
              <ThRowOneInfo>
                <ThRowOneImage src={image3}></ThRowOneImage>
                <ThRowOneName>Jan Mary</ThRowOneName>
              </ThRowOneInfo>
              <ThRowOneDate>2 December 2022</ThRowOneDate>
              <ThRowOneAmount>$132.00</ThRowOneAmount>
              <ThRowOneStatus>
                <StatusText type='declined'>Declined</StatusText>
              </ThRowOneStatus>
            </Tr>
          </Table>
        </WidgetLarge>
      </Container>
    </WidgetContainer>
  )
}

export default WidgetAll
