import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Filter from '../../components/Filter/Filter'
import Essential from '../../components/Essential/Essential'
import Innovative from '../../components/Innovative/Innovative'
import SeeWhy from '../../components/See-Why/See-Why'
import Subscrib from '../../components/Subscrib/Subscrib'
import Image from '../../components/Image/Image'
import Performance from '../../components/Performance/Performance'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Filter />
        <Essential />
        <Performance />
        <Innovative />
        <Image />
        <SeeWhy />
        <Subscrib />
        <Footer />
    </div>
  )
}

export default Home