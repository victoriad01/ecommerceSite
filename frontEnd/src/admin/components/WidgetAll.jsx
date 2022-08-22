import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod'
import styled from 'styled-components'
import dp from '../../Pictures/dp.png'
import { format } from 'timeago.js'
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

const InfoUL = styled.ul`
  padding: 0px;
`
const InfoContainer = styled.li`
  display: flex;
  margin-top: 20px;
  align-items: center;
`
const InfoContainerImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
  align-items: left;
`
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: 45%;
`
const UserInfoName = styled.h4`
  color: gray;
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
const TBODY = styled.tbody``
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
  border-radius: 10px;
  padding: 5px 8px;
  color: ${(props) => props.type === 'declined' && 'red'};
  color: ${(props) => props.type === 'pending' && 'blue'};
  color: ${(props) => props.type === 'approved' && 'white'};
  background-color: ${(props) => props.type === 'declined' && '#FEDFDC'};
  background-color: ${(props) => props.type === 'pending' && '#DCDEFE'};
  background-color: ${(props) => props.type === 'approved' && '#15ef3d'};
`

function WidgetAll() {
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('/users/?new=true')
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('/orders/')
        setOrders(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [])

  return (
    <WidgetContainer>
      <Container>
        <WidgetSmall>
          <SmallWidgetTitle>New Joining Members</SmallWidgetTitle>
          <InfoUL>
            {users.map((user) => (
              <InfoContainer key={user._id}>
                <InfoContainerImg src={user.img || dp} />
                <UserInfoContainer>
                  <UserInfoName>{user.username}</UserInfoName>
                </UserInfoContainer>
                <Display>
                  <Visibility
                    style={{ marginRight: '6px', fontSize: '18px' }}
                  />
                  <LeftTitle>Display</LeftTitle>
                </Display>
              </InfoContainer>
            ))}
          </InfoUL>
        </WidgetSmall>

        <WidgetLarge>
          <SmallWidgetTitle>Latest Transactions</SmallWidgetTitle>
          <Table>
            <TBODY>
              <Tr>
                <Th>Order</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </TBODY>
            {orders.map((order) => (
              <>
                <TBODY key={order._id}>
                  <Tr>
                    <ThRowOneInfo>
                      <ThRowOneName>{order._id}</ThRowOneName>
                    </ThRowOneInfo>
                    <ThRowOneDate>
                      <DateText>{format(order.createdAt)}</DateText>
                    </ThRowOneDate>
                    <ThRowOneAmount>
                      <AmountText>${order.amount}</AmountText>
                    </ThRowOneAmount>
                    <ThRowOneStatus>
                      <StatusText type={order.status}>
                        {order.status}
                      </StatusText>
                    </ThRowOneStatus>
                  </Tr>
                </TBODY>
              </>
            ))}
          </Table>
        </WidgetLarge>
      </Container>
    </WidgetContainer>
  )
}

export default WidgetAll
