import React from 'react'
import './Footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h1>LOGO</h1>
      </div>
      <div className="right">
        <div className="part1">
          <div>
            <span>Address:</span>
            <div>
              <span>123, Road Name, City, State</span>
              <span>Country zipcode</span>
            </div>
          </div>

          <hr />

          <div>
            <span>Contact:</span>
            <div>
              <span>+91 9876543210</span>
              <span>+91 9638527410</span>
            </div>
          </div>
        </div>
        <div className="part2">
          <div>
            <a href="www.facebook.com"><img src={FacebookRoundedIcon} alt="FB" /></a>
            <a href="www.instagram.com"><img src={InstagramIcon} alt="IG" /></a>
            <a href="www.twitter.com"><img src={TwitterIcon} alt="TR" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer