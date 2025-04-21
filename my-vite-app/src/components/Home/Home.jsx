import React from 'react'
import Hero from '../Hero/Hero.jsx'
import Services from '../Services/Services.jsx'
import Banner from '../Banner/Banner.jsx'
import AppStore from '../AppStore/AppStore.jsx'
import Testimonial1 from '../Testimonial/Testimonial1.jsx'
import Footer from "../Footer/Footer.jsx"

function Home() {
  return (
        <>
            <Hero></Hero>
            <Services></Services>
            <Banner></Banner>
            <AppStore></AppStore>
            <Testimonial1></Testimonial1>
            <Footer></Footer>
        </>
  )
}

export default Home