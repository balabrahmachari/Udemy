import React from 'react'
import "./Achi.css"
import a1 from "./Assets/a1.svg"
import a2 from "./Assets/a1.svg"
import a3 from "./Assets/a1.svg"
import a4 from "./Assets/a1.svg"
import global from "./Assets/global.png"
const Achi = () => {
  return (
    <div className="containers">
    <div className="heading">
      <h2 className='h2'>See what others are achieving through learning</h2>
    </div>
    <div className="cardss">
      <div className="car">
        <div className="quote">
          <span>&#8220;</span>
          <p>Udemy was rated the most popular online course or certification program
            for learning how to code according to StackOverflow's 2023 Developer
            survey.
          </p>
        </div>
        <div className="logo">
          <img
            src={a1}/>
          <p>37,076 responses collected</p>
        </div>
          <a href="#">View Web Development courses &gt;</a>
      </div>
      <div className="car">
        <div className="quote">
          <span>&#8220;</span>
          <p>
            Udemy was truly a game-changer and a great guide for me as we brought
            Dimensional to life.
          </p>
        </div>
        <div className="user">
          <img src={a2}
          />
          <p>
            <b>Alvin Lim</b>
            <br />
            Technical Co-Founder, CTO at Dimensional
          </p>
        </div>
          <a href="#">View this iOS & Swift course &gt;</a>
      </div>
      <div className="car">
        <div className="quote">
          <span>&#8220;</span>
          <p>
            Udemy gives you the ability to be persistent. I learned exactly
            what I needed to know in the real world. It helped me sell myself
            to get a new role.
          </p>
        </div>
        <div className="user">
          <img src={a3}
          />
          <p>
            <b>William A. Wachlin</b>
            <br />
            Partner Account Manager at Amazon Web Services
          </p>
        </div>
          <a href="#">View this AWS course &gt;</a>
      </div>
      <div className="car">
        <div className="quote">
          <span>&#8220;</span>
          <p>
            With Udemy Business employees were able to marry the two
            together, technology and consultant soft skills... to help drive
            their careers forward.
          </p>
         
        </div>
        <div className="user">
          <img src={a4}
          />
          <p>
            <b>lan Stevens</b>
            <br />
            Head of Capability Development, North America at Publicis Sapient
          </p>
        </div>
          <a href="#">Read full story &gt;</a>
      </div>
    </div>

    <div className="conta">
      <div className="cont">
        <h1 className='h1'>Top trends for the future of work</h1>
        <p className='p'>GenAI and leadership are at the core of today's skills-based economy. Get the 2024 Global Learning & Skills Trends Report to learn more.</p>
        <button className="button">Get the report →</button>
      </div>
      <div className="image-container">
        <img className='img1' src={global}  />
      </div>
    </div>
  </div>

  )
}

export default Achi