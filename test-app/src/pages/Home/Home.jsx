import React from 'react'
import './Home.css'
import HeroImg from '../../assets/hero_img_png.png'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Section from '../Components/Section/Section'

const Home = () => {
  return (
    <div className="home-body">
        <div className="home">
            <div className="left-h">
                <img src={HeroImg} alt="" />
            </div>
            <div className="right-h">
                <div>
                    <span className='stroke-text'>Welcome to</span>
                    <span>the World of</span>
                    <span className='stroke-text'>React</span>
                </div>
            </div>
        </div>
        <Banner />
        <Section />
        <Footer />
    </div>
  )
}

export default Home