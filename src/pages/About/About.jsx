import React from 'react'
import './About.css'
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
        <div className="left-a">
          <h2>ABOUT</h2>
        </div>
        <div className="right-a">
          <h3>Try React</h3>
          <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
          <br />

          <h2>File Structure</h2>
          <h3>Is there a recommended way to structure React projects?</h3>
          <p>React doesn’t have opinions on how you put files into folders. That said there are a few common approaches popular in the ecosystem you may want to consider.</p>
          <br />

          <p>Grouping by features or routes
          <span>One common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.</span></p>

          <h3>Installation and Create First React App</h3>
          <p>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.</p>
          <p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:</p>

          <div>
            <p>npx create-react-app my-app</p>
            <p><span>cd </span> my-app</p>
            <p><span>npm </span> start</p>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
