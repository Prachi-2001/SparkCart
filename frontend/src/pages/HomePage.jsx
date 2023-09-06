import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero'
import Categories from "../components/Route/Categories"
import BestDeals from '../components/Route/BestDeals'
import FeatureProducts from '../components/Route/FeatureProducts'
import Events from "../components/Route/Events"
import Sponsored from "../components/Route/Sponsored"
import Footer from "../components/Layout/Footer"

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals />
      <Events/>
      <FeatureProducts/>
      <Sponsored />
      <Footer /> 
    </div>
  )
}

export default HomePage
