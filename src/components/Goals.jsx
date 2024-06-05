import React from 'react';
import './Goals.css';
import hand from "./Assets/hand.png"
import cer from "./Assets/certificate.png"
import ins from "./Assets/ins.png"
import cus from "./Assets/cus.png"
import right from "./Assets/right.png"

function Goals() {
  return (
    <div className="app">
      <div className="header">
        <h1>Learning focused on your goals</h1>
      </div>
      <div className="content">
        <div className="left-column">
          <div className="card">
            <div className="card-icon">
              <img src={hand} />
            </div>
            <div className="card-title">
              <h3>Hands-on training</h3>
            <div className="card-description">Upskill effectively with AI-powered coding exercises,<br /> practice tests, skills assessments, labs, and workspaces.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cer} alt="Certification prep icon" />
            </div>
            <div className="card-title">
              <h3>Certification prep</h3>
            <div className="card-description">Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={ins} alt="Insights and analytics icon" />
            </div>
            <div className="card-title"><h3>Insights and analytics</h3>
            <div className="card-description">Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cus} alt="Customizable content icon" />
            </div>
            <div className="card-title"><h3>Customizable content</h3>
            <div className="card-description">Create tailored learning paths for team and organization goals and even host your own content and resources.</div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <img src={right}  className='right'/>
          
        </div>
      </div>
    </div>
  );
}

export default Goals