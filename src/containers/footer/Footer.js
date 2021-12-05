import React from 'react'
import './Footer.css'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Contact</h1>
    </div>

    <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <input type="phone" placeholder="Your Phone Number" />
        <input type="text" placeholder="Message"/>
        <button type="button">Submit</button>
      </div>
  </div>
);

export default Footer;