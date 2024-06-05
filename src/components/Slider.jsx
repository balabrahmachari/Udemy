import React, { useState } from 'react'
import './Slider.css'
import slide1 from './Assets/slide1.jpg';
import slide2 from './Assets/slide2.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
const Slider = () => {
    const [currentindex, setcurrentindex] = useState(0);
    const slides = [
        { url: slide1, title: '1' },
        { url: slide2, title: '2' }
      ];
      let goleft=()=>{
        const x=currentindex===slides.length-1
        const newIndex=x?0:currentindex+1
        setcurrentindex(newIndex)
      }
   
    return (
        <>
            <div className='sliderimage'>
                <div className='slideimg'>
                    <div className='slid'>
                        <div className='topimage'>
                            Skills that drive you forward
                        </div>
                        <div className='toptext'><p className='toppara'>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p></div>
                        <div className='topplan' >
                            <p className='topplantext'>Plan an organization</p>
                        </div>
                    </div>
                    <img src={`${slides[currentindex].url}`} className='sli' alt="udemy silde" />
                </div>
                <div className='gl' onClick={goleft}> <FaArrowRight /></div>

                <div className='slidedowntext'>
                    <div className='textheading'>
                        <h1 className='textall'>All the skills you need in one place</h1>

                        <p className='textfrom'>From critical skills to technical topics, Udemy supports your professional development.</p>
                    </div>
                </div>
            </div>
            <div className='webtext'>
                <a className='anchertagtext' href="https://www.udemy.com/">Web Development</a>
                <a className='anchertagtext' href="https://www.udemy.com/">IT Certification</a>
                <a className='anchertagtext' href="https://www.udemy.com/">Leadership</a>
                <a className='anchertagtext' href="https://www.udemy.com/">Data Science</a>
                <a className='anchertagtext' href="https://www.udemy.com/">Communication</a>
                <a className='anchertagtext' href="https://www.udemy.com/">Business Analytics & Intelligences</a>
            </div>
            
        </>
    )
}

export default Slider
