import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'


function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home
