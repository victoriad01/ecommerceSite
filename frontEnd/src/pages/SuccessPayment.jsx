import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const CenterButton = styled.div``

function SuccessPayment() {
  const location = useLocation()
  // const aboutPath = location.pathname.split('/')[1]

  return (
    <>
      <CenterButton>
        <Box sx={{ '& button': { m: 1 } }}>
          <div
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100wh',
            }}
          >
            <Link to='/'>
              <Button
                variant='contained'
                size='medium'
                style={{
                  backgroundColor: 'teal',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  paddingleft: '20px',
                  marginBottom: '12px',
                }}
              >
                Payment Successfull!
                <CheckCircleOutlineIcon
                  style={{
                    padding: '10px',
                  }}
                />
              </Button>
            </Link>
            <p
              style={{
                width: '25%',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              Your order has been placed successfully. Thanks for choosing
              VI-AUTO
            </p>
          </div>
        </Box>
      </CenterButton>
    </>
  )
}

export default SuccessPayment
