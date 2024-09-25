import React from 'react'
import Nav from '../Nav/Nav'
import FashionBanner from '../Banner/Banner'
import Category from '../Category/Category'
import FeaturedCarousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
   
      <FashionBanner/>
      <Category/>
      <FeaturedCarousel/>
      <Footer/>
    </div>
  )
}

export default Home