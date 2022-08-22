import React from 'react'
import styled from 'styled-components'
import {
  ModeEditOutlineOutlined,
  DeleteOutline,
  Search,
  ChevronLeft,
  ChevronRight,
  SettingsOutlined,
  CloseOutlined,
} from '@mui/icons-material'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e6ecf6;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  color: #0d2464;
`
const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #0d2464;
  height: 150px;
  width: 650px;
  border-radius: 20px;
  margin-bottom: -150px;
`
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: left;
  height: 200px;
  width: 700px;
  border-radius: 20px;
  margin-left: -600px;
`
const RightContent = styled.div`
  padding: 20px 40px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`
const RightHeader = styled.div`
  display: flex;
`
const UL = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
  font-size: 12px;
  margin: 10px auto;
  color: #0d2464;
`
const LI = styled.li`
  position: relative;
  text-decoration: none;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    text-decoration: underline;
    background-color: #130451;
    height: 4px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
  }
  &:hover:after {
    width: 100%;
  }

  &:hover {
    font-weight: 600;
  }
`
const RightHeaderTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 20px;
`
const LSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h3`
  color: #0d2464;
`
const RSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const RWrap = styled.div`
  padding: 20px;
`
const Button = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  padding: 7px;
  background-color: transparent;
  border-radius: 5px;
  border: 0.5px solid #96a0bc;
  margin-left: 3px;
  cursor: pointer;
`
const FButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  margin-left: 3px;
  border-radius: 5px;
  border: none;
  background-color: #0d2464;
  color: white;
  cursor: pointer;
`
const RightInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 20px;
`
const InputWrap = styled.div`
  flex: 3;
  padding: 10px 0px 10px 0px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border: 0.5px solid #96a0bc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IconSearch = styled.div`
  position: absolute;
  top: 13px;
  left: 10px;
  cursor: pointer;
`
const OtherSettingWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`
const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Setting = styled.div`
  cursor: pointer;
`
const RightFilter = styled.div`
  padding: 0px 40px 0px 20px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`
const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #6874a3;
  margin-right: 5px;
  background-color: transparent;
  cursor: pointer;
`

const FreeStyle = () => {
  return (
    <MainContainer>
      <Container>
        <LeftSide></LeftSide>
        <RightSide>
          <RightContent>
            <RightHeader>
              <UL>
                <LI>My parameters</LI>
                <LI>Public</LI>
                <LI>Configuration</LI>
              </UL>
            </RightHeader>
          </RightContent>
          <RightHeaderTwo>
            <LSide>
              <Title>My Parameters</Title>
            </LSide>
            <RSide>
              <Button>
                <ModeEditOutlineOutlined
                  style={{ color: '#0D2464', fontSize: '18px' }}
                />
                Edit
              </Button>
              <Button>
                <DeleteOutline style={{ color: '#0D2464', fontSize: '18px' }} />
                Delete
              </Button>
              <FButton>Create parameter</FButton>
            </RSide>
          </RightHeaderTwo>
          <RightInput>
            <InputWrap>
              <Input />
              <IconSearch>
                <Search />
              </IconSearch>
            </InputWrap>
            <OtherSettingWrap>
              <Counter style={{ fontSize: '12px', marginLeft: '28px' }}>
                <ChevronLeft style={{ cursor: 'pointer', fontSize: '18px' }} />1
                <ChevronRight style={{ cursor: 'pointer', fontSize: '18px' }} />
              </Counter>
              <Setting>
                <SettingsOutlined
                  style={{ cursor: 'pointer', fontSize: '18px' }}
                />
              </Setting>
            </OtherSettingWrap>
          </RightInput>
          <RightFilter>
            <ButtonWrapper>
              <FilterButton>
                Name: contains: auth0
                <CloseOutlined
                  style={{
                    fontSize: '14px',
                    marginLeft: '5px',
                    cursor: 'pointer',
                  }}
                />
              </FilterButton>
              <FilterButton style={{ border: '0.5px solid #96a0bc' }}>
                Clear filters
              </FilterButton>
            </ButtonWrapper>
          </RightFilter>
        </RightSide>
      </Container>
    </MainContainer>
  )
}

export default FreeStyle
