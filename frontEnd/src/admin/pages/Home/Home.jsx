import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from '../../components/Chart'
import FeaturedInfo from '../../components/FeaturedInfo'
import WidgetAll from '../../components/WidgetAll'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../../../requestMethod'

const Container = styled.div`
  flex: 4;
`
function AdminHome() {
  const [stats, setStats] = useState([])
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        const sorted = res.data.sort((a, b) => {
          return a._id - b._id
        })
        sorted.map((item) =>
          setStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        )
      } catch (error) {}
    }
    getStats()
  }, [MONTHS])

  return (
    <Container>
      <FeaturedInfo />
      <Chart data={stats} title='User Analytics' grid dataKey='Active User' />
      <WidgetAll />
    </Container>
  )
}

export default AdminHome
