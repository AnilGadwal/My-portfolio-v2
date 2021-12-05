import React from 'react'
import Feature from '../../Components/feature/Feature';
import './WhatGP3.css'

const WhatGP3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <h3 className="gradient__text">Projects</h3>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Portfolio v1" text="Made this Portfolio from scratch using ReactJs and bootstrap components" url="https://my-portfolio-76ddd.web.app/project"/>
        <Feature title="Netflix landing page" text="I recreated a clone of the Netflix landing page using ReactJs and the TMDb api and hosted it using Firebase, it can also play trailers using the Youtube embed" url="https://netflix-clone-c6707.web.app/"/>
        <Feature title="Spotify Clone" text="Recreated a frontend only clone of Spotify desktop version using ReactJs and Spotify's own api for developers and hosted using firebase, also has Spotify's user authentication" url="https://spotify-clone-8dbf1.web.app/"/>
        <Feature title="Amazon clone" text="Made this using amazon clone using reactJS, materialUI, react Router, Context Api" url="https://clone-90d65.web.app/"/>
      </div>
    </div>
  );

export default WhatGP3