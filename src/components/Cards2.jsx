import React, { useState } from 'react';
import './Cards2.css';
import card1 from './Assets/Card1.jpg';
import card2 from './Assets/idol2.jpg';
import card3 from './Assets/js2.jpg';
import card4 from './Assets/udemi.jpg';
import card5 from './Assets/udemi...jpg';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

const Cards2 = () => {
    const [style, setStyle] = useState({ display: 'none', marginLeft: '0px', transform: 'scale(0.9)' });

    const handleMouseEnter = (marginLeftValue) => {
        setStyle({ display: 'block', marginLeft: marginLeftValue, transform: 'scale(0.9)' });
    }

    const handleMouseLeave = () => {
        setStyle({ display: 'none', marginLeft: '0px', transform: 'scale(1)' });
    }

    return (
        <>
         <h1>Learners are viewing</h1>
            <div className='coursestext2'>
            

                <div className='cardscontainer2'>
                    <div className='cards2' onMouseEnter={() => handleMouseEnter('300px')}
                        onMouseLeave={handleMouseLeave}>
                        <img className='jsimg' src={card1} alt="" height='175px' />
                        <div className='card1text'>
                            <p>The Complete 2024 Web <br /> Development Bootcamp</p>
                            <p>Dr.Angela Yu</p>
                            <p className='i'>4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                            <p><FaRupeeSign />3,099</p>
                        </div>
                    </div>

                    <div className='cards2' onMouseEnter={() => handleMouseEnter('20px')}
                        onMouseLeave={handleMouseLeave}>
                        <img className='jsimg' src={card2} alt="" height='175px' />
                        <div className='card1text'>
                            <p>The Web Development Bootcamp</p>
                            <p>Dr.Angela Yu</p>
                            <p className='i'>4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                            <p><FaRupeeSign />3,099</p>
                        </div>
                    </div>
                    <div className='cards2' onMouseEnter={() => handleMouseEnter('710px')}
                        onMouseLeave={handleMouseLeave}>
                        <img className='jsimg' src={card5} alt="" height='175px' />
                        <div className='card1text'>
                            <p>The Complete 2024 Web <br /> Development Bootcamp</p>
                            <p>Dr.Angela Yu</p>
                            <p className='i'>4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                            <p><FaRupeeSign />3,099</p>
                        </div>
                    </div>

                    <div className='cards2' onMouseEnter={() => handleMouseEnter('320px')}
                        onMouseLeave={handleMouseLeave}>
                        <img className='jsimg' src={card3} alt="" height='175px' />
                        <div className='card1text'>
                            <p>The Web Development Masterclass </p>
                            <p>Dr.Angela Yu</p>
                            <p className='i'>4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                            <p><FaRupeeSign />3,099</p>
                        </div>
                    </div>

                    <div className='cards2' onMouseEnter={() => handleMouseEnter('610px')}
                        onMouseLeave={handleMouseLeave}>
                        <img className='jsimg' src={card4} alt="" height='175px' />
                        <div className='card1text'>
                            <p>The Complete 2024 Web <br /> Development Bootcamp</p>
                            <p>Dr.Angela Yu</p>
                            <p className='i'>4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                            <p><FaRupeeSign />3,099</p>
                        </div>
                    </div>

                    <div className='cards2' onMouseEnter={() => handleMouseEnter('710px')}
                        onMouseLeave={handleMouseLeave}>
                        <img className='jsimg' src={card5} alt="" height='175px' />
                        <div className='card1text'>
                            <p>The Complete 2024 Web <br /> Development Bootcamp</p>
                            <p>Dr.Angela Yu</p>
                            <p className='i'>4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                            <p><FaRupeeSign />3,099</p>
                        </div>
                    </div>
                </div>

                
            </div>
            <div className='popup1' style={style} onMouseEnter={() => handleMouseEnter(style.marginLeft)}
                onMouseLeave={handleMouseLeave}>
                <ol>
                    <li><h2>The Complete 2024 Web Development Bootcamp</h2></li>
                    <li>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</li>
                    <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                    <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                    <li>After the course you will be able to build ANY website you want.</li>
                </ol>
                <div>
                    <button>Add to cart</button>
                    <div><FaHeart /></div>
                </div>
            </div>
        </>
    );
}

export default Cards2;
