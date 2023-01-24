import React from 'react'
import './Section.css'
import code from '../../../assets/react-code.png'

const Section = () => {
  return (
    <div className="section">
        <div className="section-body">
            <div className="section-box">
                <div className="box-left">
                    <h1>A Simple Component</h1>
                    <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
                </div>
                <div className="box-right">
                    <img src={code} alt="" />
                </div>
            </div>
            <div className="blank"></div>
        </div>

        <div className="section-body">    
            <div className="blank"></div>
            <div className="section-box2">
                <div className="box-left">
                    <h1>A Simple Component</h1>
                    <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
                </div>
                <div className="box-right">
                    <img src={code} alt="" />
                </div>
            </div>
        </div>

        <div className="section-body">
            <div className="section-box">
                <div className="box-left">
                    <h1>A Simple Component</h1>
                    <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
                </div>
                <div className="box-right">
                    <img src={code} alt="" />
                </div>
            </div>
            <div className="blank"></div>
        </div>
    </div>
  )
}

export default Section