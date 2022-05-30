import React from 'react'
import styled from 'styled-components'
import Chart from '../../components/Chart'
import FeaturedInfo from '../../components/FeaturedInfo'
import { userData } from '../../components/dummyData'
import WidgetAll from '../../components/WidgetAll'
import UserList from '../UserList'

const Container = styled.div`
  flex: 4;
`
function AdminHome() {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <WidgetAll />
      <UserList />
    </Container>
  )
}

export default AdminHome
