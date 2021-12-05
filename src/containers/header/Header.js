import React from 'react';
import deer from '../../assets/deer.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hi, I am Anil Gadwal</h1>
      <p>I am a Front-End/UI Web developer</p>

      <div className="gpt3__header-content__input">
        <button type="button"><a href="#wgpt3">View Projects</a></button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={deer} alt="deer"/>
    </div>
  </div>
);

export default Header;