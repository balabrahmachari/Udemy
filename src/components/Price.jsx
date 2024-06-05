import React from "react";
import "./Price.css"
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

function Price() {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2>Accelerate growth – for you or your organization</h2>
        <p>
          Reach goals faster with one of our plans or programs. Try one free
          today or contact sales to learn more.
        </p>
      </div>

      <div className="pricing-plans">
        <div className="pricing-plan">
          <h3>Personal Plan</h3>
          <p>For you</p>
          <p><FaUser size={15}  /> Individual</p>
          <div className="plan-price">
            <h4>Starting at 850 per month</h4>
            <p>Billed monthly or annually. Cancel anytime.</p>
          </div>
          <button className="plan-button">Start subscription</button>
          <ul className="plan-features">
            <li>
              <i className="fa fa-check"></i> Access to 11,000+ top courses
            </li>
            <li>
              <i className="fa fa-check"></i> Certification prep
            </li>
            <li>
              <i className="fa fa-check"></i> Goal-focused recommendations
            </li>
            <li>
              <i className="fa fa-check"></i> Al-powered coding exercises
            </li>
          </ul>
        </div>

        <div className="pricing-plan">
          <h3>Team Plan</h3>
          <p>For your team</p>
          <p><FaUsers size={15}  /> 2 to 20 people</p>
          <div className="plan-price">
            <h4>1,167 a month per user</h4>
            <p>Billed annually. Cancel anytime.</p>
          </div>
          <button className="plan-button">Start subscription</button>
          <ul className="plan-features">
            <li>
              <i className="fa fa-check"></i> Access to 11,000+ top courses
            </li>
            <li>
              <i className="fa fa-check"></i> Certification prep
            </li>
            <li>
              <i className="fa fa-check"></i> Goal-focused recommendations
            </li>
            <li>
              <i className="fa fa-check"></i> Al-powered coding exercises
            </li>
            <li>
              <i className="fa fa-check"></i> Analytics and adoption reports
            </li>
          </ul>
        </div>

        <div className="pricing-plan">
          <h3>Enterprise Plan</h3>
          <p>For your whole organization</p>            
          <p><FaUsers size={15}  />More than 20 people</p>
          <div className="plan-price">
            <h4>Contact sales for pricing</h4>
          </div>
          <button className="plan-button">Request a demo</button>
          <ul className="plan-features">
            <li>
              <i className="fa fa-check"></i> Access to 25,000+ top courses
            </li>
            <li>
              <i className="fa fa-check"></i> Certification prep
            </li>
            <li>
              <i className="fa fa-check"></i> Goal-focused recommendations
            </li>
            <li>
              <i className="fa fa-check"></i> Al-powered coding exercises
            </li>
            <li>
              <i className="fa fa-check"></i> Advanced analytics and insights
            </li>
            <li>
              <i className="fa fa-check"></i> Dedicated customer success team
            </li>
            <li>
              <i className="fa fa-check"></i> International course collection
            </li>
            <li>
              <i className="fa fa-check"></i> Customizable content
            </li>
            <li>
              <i className="fa fa-check"></i> Hands-on tech training with add-on
            </li>
            <li>
              <i className="fa fa-check"></i> Strategic implementation services
              with add-on
            </li>
          </ul>
        </div>
      </div>
    </div>


  );
}

export default Price;
