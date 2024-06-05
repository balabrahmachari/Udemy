import React, { useState } from 'react';
import './Sfroml.css'
import sfroml from './Assets/srom.png';


const Sfroml=()=> {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      
    },
    {
      
    },
    {
      
    },
    {
      
    },
  ];

  return (
    <div className="container4">
      <div className="header4">
        <h2 className='h2'>Booz | Allen | Hamilton</h2>
        <h3 className='h34'>Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h3>
        <div className='ab'>
            <div className='a'>
                <h1>93%</h1>
                <p>retention rate among participating employees</p>
            </div>
            <div className='b'>
                <h1>65%</h1>
                <p>of learners noted a positive impact on their productivitys</p>
            </div>
        </div>
        
      <div className="button4">
        <button>Read full story →</button>
      </div>
      <div className="navigation4">
        <button className="prev" onClick={() => handleTabClick(activeTab - 1)} disabled={activeTab === 0}>
          &lt;
        </button>
        <div className="dots">
          {tabs.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
        <button className="next" onClick={() => handleTabClick(activeTab + 1)} disabled={activeTab === tabs.length - 1}>
          &gt;
        </button>
      </div>
      </div>
     
      
   
          <div className="image4">
          <img className='img4' src={sfroml}/>
          </div>
    </div>
  );
}

export default Sfroml;
