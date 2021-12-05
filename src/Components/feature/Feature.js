import React from 'react';
import './Feature.css';
import { FaDesktop, FaGithub} from "react-icons/fa"

const Feature = ({ title, text, url }) => (
  <>
  <div className="gpt3__features-container__feature">    
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__cta-btn_demo">
      <a href={url} target="_blank"><button><h2><FaDesktop/></h2></button></a>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  </>
);

export default Feature;