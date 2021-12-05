import React from 'react';
import './Cta.css';
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

const CTA = () => (
  <>
  <div className="gpt3__cta">
  <div className="gpt3__cta-btn">
      <button type="button">Follow me on : </button>
    </div>
    <div className="gpt3__cta-content">
      <a href="https://www.instagram.com/neo_0_o/" target="_blank"  className="FaIcons"><h2><FaInstagram/></h2></a>
      <a href="https://www.linkedin.com/in/anil-gadwal-807410144/" target="_blank"  className="FaIcons"><h2><FaLinkedin/></h2></a>
      <a href="https://github.com/AnilGadwal/" target="_blank"  className="FaIcons"><h2><FaGithub/></h2></a>
    </div>
    
  </div>
</>
  
);

export default CTA;