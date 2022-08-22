import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod'
import styled from 'styled-components'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'

const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const FeaturedItem = styled.div`
  margin: 10px 20px;
  flex: 1;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const FeaturedTitle = styled.span`
  font-size: 20px;
`
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`
const ArrowRed = styled.span`
  color: red;
  font-size: 14px;
  margin-left: 5px;
`
const ArrowGreen = styled.span`
  color: green;
  font-size: 14px;
  margin-left: 5px;
`
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`

function FeaturedInfo() {
  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income')
        setIncome(res.data)
        setPerc((res.data[1].total / res.data[0].total) * 100)
      } catch (error) {
        console.log(error)
      }
    }
    getIncome()
  }, [])
  console.log(income)
  console.log(perc)
  return (
    <Featured>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>${income[1]?.total}</FeaturedMoney>
          <FeaturedMoneyRate>
            {perc.toFixed(2)}%
            {perc < 0 ? (
              <ArrowRed>
                <ArrowDownwardOutlined />
              </ArrowRed>
            ) : (
              <ArrowGreen>
                <ArrowUpwardOutlined />
              </ArrowGreen>
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$15,123</FeaturedMoney>
          <FeaturedMoneyRate>
            -3.24
            <ArrowRed>
              <ArrowDownwardOutlined />
            </ArrowRed>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$1,123</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.24
            <ArrowGreen>
              <ArrowUpwardOutlined />
            </ArrowGreen>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
    </Featured>
  )
}

export default FeaturedInfo
