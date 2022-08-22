import React from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const ChartTitle = styled.h3`
  margin-bottom: 20px;
`
function Chart({ title, data, dataKey, grid }) {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#f1f0f0' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart
