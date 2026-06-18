import React from 'react'
import Hero from "../components/Hero"
import FeaturedProperties from '../components/FeaturedProperties'
import ImpactStats from '../components/ImpactStats'
import PropertyProcess from '../components/PropertyProcess'
import PropertyTestimonials from '../components/PropertyTestimonials'
import Conntact from '../components/conntact'
import Specialities from '../components/Specialities'
import Backbone from '../components/Backbone'

const Home = () => {
    return (
        <div>
            <Hero />
            <Specialities/>
            <Backbone/>
            <FeaturedProperties />
            <ImpactStats />
            <PropertyProcess />
            <PropertyTestimonials />
            <Conntact/>
        </div>
    )
}

export default Home