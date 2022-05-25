import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import styled from 'styled-components'
import PaymentIcon from '@mui/icons-material/Payment'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const CenterButton = styled.div``
// const KEY =
//   'pk_test_51L1u19AyUGwoMrM96nSsyhOAKEpmCf13h0mYqbahJnZh20HMWfmn9gEsrUNJbyatICtB7eZ9ZRBCownbRvvsg11700xKzwJe1H'

function Pay() {
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()
  const onToken = (token) => {
    setStripeToken(token)
  }
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          { tokenId: stripeToken.id, amount: 2000 }
        )
        console.log(res.data)
        navigate('/paymentsuccess')
        // window.location('/paymentsuccess')
      } catch (error) {
        console.log(error)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, navigate])
  return (
    <>
      <CenterButton>
        <Box sx={{ '& button': { m: 1 } }}>
          <div
            style={{
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100wh',
            }}
          >
            {stripeToken ? (
              <span>Processing. Please wait...</span>
            ) : (
              <StripeCheckout
                name='VI-AUTO'
                image=''
                billingAddress
                shippingAddress
                description=' Your total is $15000'
                amount={1500000}
                token={onToken}
                stripeKey='pk_test_51L1u19AyUGwoMrM96nSsyhOAKEpmCf13h0mYqbahJnZh20HMWfmn9gEsrUNJbyatICtB7eZ9ZRBCownbRvvsg11700xKzwJe1H'
              >
                <Button
                  variant='contained'
                  size='medium'
                  style={{
                    backgroundColor: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    fontWeight: '700',
                    paddingleft: '20px',
                  }}
                >
                  PAY NOW!
                  <PaymentIcon
                    style={{
                      padding: '10px',
                    }}
                  />
                </Button>
              </StripeCheckout>
            )}
          </div>
        </Box>
      </CenterButton>
    </>
  )
}

export default Pay
