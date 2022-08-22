import React from 'react'
import styled from 'styled-components'
import { ErrorOutline, EventNoteOutlined, Check } from '@mui/icons-material'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3e3;
`
const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Left = styled.div`
  background-color: #fab564;
  height: 360px;
  width: 270px;
  border-radius: 50px;
  margin-right: -210px;
  margin-top: -260px;
`
const Center = styled.div`
  background-color: white;
  border-radius: 20px;
  height: 500px;
  width: 450px;

  z-index: 5;
`
const ContentWrap = styled.div`
  padding: 0px 40px 0px 40px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 40px 20px 0px 0px;
`
const FirstInputArea = styled.div`
  padding: 30px 0px 0px 0px;
  width: 100%;
`

const P = styled.p`
  margin-bottom: 5px;
  font-size: 12px;
`
const Input = styled.input`
  width: 100%;
  height: 25px;
  /* padding-left: 5px;
  padding-right: 5px; */
`

const CheckBoxAreaWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
`
const LABEL = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`
const InputLabel = styled.input``

const CheckBoxText = styled.div`
  font-size: 12px;
  font-weight: 600;
`
const DateArea = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`
const DateAreaLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 20px;
  margin-right: 30px;
`
const DateText = styled.p`
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 5px;
`
const InputDate = styled.input`
  padding: 8px;
  width: 90%;
  margin-right: 3px;
`
const WrapDate = styled.div`
  display: flex;
`
const SelectArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  border: 0.5px solid gray;
  padding: 5px;
  margin-top: 5px;
`
const Select = styled.select`
  border: none;
  display: flex;
  padding: 5px;
`
const Option = styled.option``

const DateAreaRight = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const SecondCheckBoxArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`
const SectionBeforeButton = styled.div`
  padding: 20px 40px 20px 0px;
`
const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: left;
  gap: 5px;
`
const Detail = styled.div`
  display: flex;
  justify-content: left;
`
const TextDetail = styled.p`
  font-size: 12px;
  font-weight: 600;
`
const Button = styled.button`
  background-color: #fc6c4c;
  color: white;
  border: none;
  border-radius: 15px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  cursor: pointer;
`
const Right = styled.div`
  background-color: #f99f8d;
  height: 220px;
  width: 150px;
  border-radius: 40px;
  margin-left: -60px;
  margin-bottom: -370px;
`
const SecondFreeStyle = () => {
  return (
    <MainContainer>
      <Wrap>
        <Left />
        <Center>
          <ContentWrap>
            <Title>Search for a rental car</Title>
            <FirstInputArea>
              <P>Pick up location</P>
              <Input
                type='text'
                placeholder='City, airport, region, district...'
              ></Input>

              <CheckBoxAreaWrap>
                <LABEL>
                  <InputLabel type='checkbox' />
                  <CheckBoxText>Deliver the car somewhere else</CheckBoxText>
                </LABEL>
              </CheckBoxAreaWrap>
              <DateArea>
                <DateAreaLeft>
                  <DateText>Date of pickup</DateText>
                  <InputDate type='date'></InputDate>
                  <WrapDate>
                    <SelectArea>
                      <EventNoteOutlined style={{ fontSize: '16px' }} />
                      <Select>
                        <Option Option='00'>00</Option>
                        <Option Option='01'>01</Option>
                        <Option Option='02'>02</Option>
                        <Option Option='03'>03</Option>
                        <Option Option='04'>04</Option>
                        <Option Option='05'>05</Option>
                        <Option Option='06'>06</Option>
                        <Option Option='07'>07</Option>
                        <Option Option='08'>08</Option>
                        <Option Option='09'>09</Option>
                        <Option Option='10'>10</Option>
                      </Select>
                    </SelectArea>
                    <SelectArea>
                      <Select>
                        <Option Option='00'>00</Option>
                        <Option Option='01'>01</Option>
                        <Option Option='02'>02</Option>
                        <Option Option='03'>03</Option>
                        <Option Option='04'>04</Option>
                        <Option Option='05'>05</Option>
                        <Option Option='06'>06</Option>
                        <Option Option='07'>07</Option>
                        <Option Option='08'>08</Option>
                        <Option Option='09'>09</Option>
                        <Option Option='10'>10</Option>
                      </Select>
                    </SelectArea>
                  </WrapDate>
                </DateAreaLeft>
                <DateAreaRight>
                  <DateText>Date of delivery</DateText>
                  <InputDate type='date'></InputDate>
                  <WrapDate>
                    <SelectArea>
                      <EventNoteOutlined style={{ fontSize: '16px' }} />
                      <Select>
                        <Option Option='00'>00</Option>
                        <Option Option='01'>01</Option>
                        <Option Option='02'>02</Option>
                        <Option Option='03'>03</Option>
                        <Option Option='04'>04</Option>
                        <Option Option='05'>05</Option>
                        <Option Option='06'>06</Option>
                        <Option Option='07'>07</Option>
                        <Option Option='08'>08</Option>
                        <Option Option='09'>09</Option>
                        <Option Option='10'>10</Option>
                      </Select>
                    </SelectArea>
                    <SelectArea>
                      <Select>
                        <Option Option='00'>00</Option>
                        <Option Option='01'>01</Option>
                        <Option Option='02'>02</Option>
                        <Option Option='03'>03</Option>
                        <Option Option='04'>04</Option>
                        <Option Option='05'>05</Option>
                        <Option Option='06'>06</Option>
                        <Option Option='07'>07</Option>
                        <Option Option='08'>08</Option>
                        <Option Option='09'>09</Option>
                        <Option Option='10'>10</Option>
                      </Select>
                    </SelectArea>
                  </WrapDate>
                </DateAreaRight>
              </DateArea>
              <SecondCheckBoxArea>
                <CheckBoxAreaWrap>
                  <LABEL>
                    <InputLabel type='checkbox' />
                    <CheckBoxText>
                      The driver's age between 30 and 65?
                    </CheckBoxText>
                    <ErrorOutline style={{ fontSize: '16px' }} />
                  </LABEL>
                </CheckBoxAreaWrap>
              </SecondCheckBoxArea>
              <SectionBeforeButton>
                <DetailWrap>
                  <Detail>
                    <Check style={{ fontSize: '16px' }} />
                    <TextDetail>No credit card fees</TextDetail>
                  </Detail>
                  <Detail>
                    <Check style={{ fontSize: '16px' }} />
                    <TextDetail>No change fees</TextDetail>
                  </Detail>
                  <Detail>
                    <Check style={{ fontSize: '16px' }} />
                    <TextDetail>Price match guarantee</TextDetail>
                  </Detail>
                </DetailWrap>
              </SectionBeforeButton>
              <Button>Search</Button>
            </FirstInputArea>
          </ContentWrap>
        </Center>
        <Right />
      </Wrap>
    </MainContainer>
  )
}

export default SecondFreeStyle
