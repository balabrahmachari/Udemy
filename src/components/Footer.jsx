import React from 'react'
import './Footer.css'
import { MdLanguage } from "react-icons/md";
import logo1 from './Assets/logo1.SVG'
import logo2 from './Assets/logo2.SVG'
import logo3 from './Assets/logo3.SVG'
import logo4 from './Assets/logo4.SVG'
import logo5 from './Assets/logo5.SVG'
import logo from './Assets/logo.svg'


const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="footer-upper">
                    <h1>Top companies choose <span>Udemy Business</span> to build in-demand career skills.</h1>
                    <div className="footer-logos">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                    </div>
                </div>
                {/* <hr className='footer-hr'/> */}
                <div className="footer-lower">

                    <div className="footer-lower-left">
                        <div className="footer-lower1">
                            <p>Udemy Business</p>
                            <p>Teach on Udemy</p>
                            <p>Get the app</p>
                            <p>About</p>
                            <p>Contact us</p>

                        </div>
                        <div className="footer-lower2">
                            <p>Careers</p>
                            <p>Blog</p>
                            <p>Help and Support</p>
                            <p>Affiliate</p>
                            <p>Investor</p>
                        </div>
                        <div className="footer-lower3">
                            <p>Terms</p>
                            <p>Privacy policy</p>
                            <p>Cookie settings</p>
                            <p>Sitemap</p>
                            <p>Accessibility statement</p>
                        </div>
                    </div>
                    <div className="footer-lower-right">
                        <div className="footer-lower4">
                            <button> <MdLanguage className='footer-lang' />English</button>
                            <p>@2024 Udemy, Inc.</p>
                        </div>
                    </div>

                </div>
                <div className="footer-logo-img">
                    <img src={logo} alt="" className='footer-logo-image' />
                </div>
            </div>


        </>
    )
}

export default Footer
