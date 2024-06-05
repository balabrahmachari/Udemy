import React from 'react'
import Header from './components/Header'
import './Udemy.css'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Goals from './components/Goals'
import Price from './components/Price'
import Achi from './components/Achi'
import Cards2 from './components/Cards2'
import Sfroml from './components/Sfroml'

const Udemy = () => {
    return (
        <>
            <div className='udemy'>
                <div>
                    <Header />
                </div>

                <div className='udemybody'>
                    <Slider />
                </div>

                <div className='courses'>
                    <div className='coursescard'>
                        <Cards />
                    </div>
                </div>
                <div className='goals'>
                    <Goals/>
                </div>
                <Price/>
                <Achi/>
                <Cards2/>
                <Sfroml/>
                <div className='footercontainer'>
                    <div className='footerbox'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Udemy
