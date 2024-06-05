import React, { useState } from 'react'
import './Header.css'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
const Navbar = () => {
    const [style, setStyle] = useState({ display: 'none' });
    const [style1, setStyle1] = useState({ display: 'none' });
    const [style2, setStyle2] = useState({ display: 'none' });
    const [style3, setStyle3] = useState({ display: 'none' });
    const [style4, setStyle4] = useState({ display: 'none' });
    
    const handleMouseEnter = () => {
      setStyle({ display: 'block' })}
    const handleMouseLeave = () => {
      setStyle({ display: 'none' })}

      const handleMouseEnter1 = () => {
        setStyle1({ display: 'block' })}
      const handleMouseLeave1 = () => {
        setStyle1({ display: 'none' })}

        const handleMouseEnter2 = () => {
            setStyle2({ display: 'block' })}
          const handleMouseLeave2 = () => {
            setStyle2({ display: 'none' })}

            const handleMouseEnter3 = () => {
                setStyle3({ display: 'block' })}
              const handleMouseLeave3 = () => {
                setStyle3({ display: 'none' })}

                const handleMouseEnter4 = () => {
                    setStyle4({ display: 'block' })}
                  const handleMouseLeave4 = () => {
                    setStyle4({ display: 'none' })}
                    let x=()=>{
                        handleMouseEnter3()
                        handleMouseEnter4()
                    }
                    let Y=()=>{
                        handleMouseLeave4()
                        handleMouseLeave3()
                    }
    return (
        <div className='navbar'>
            <div className='subnav'>
                <div className='udemylogo'>
                    <img src='https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg' alt="udemy logo" height='35px' />
                </div>
                <div className='udemycategory'   onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}>
                    Categories
                </div>
                
                <div className='udemysearch'>
                    <IoMdSearch className='searchicon' />
                    <input className='searchinput' type="text" placeholder='Search for anything' />
                </div>
                <div className='pricesdiv' >
                    <div className='prices'onMouseEnter={handleMouseEnter1} 
                      onMouseLeave={handleMouseLeave1}>Udemy Business</div>
                    <div className='prices' onMouseEnter={handleMouseEnter2} 
                      onMouseLeave={handleMouseLeave2}>Teach on Udemy</div>
                </div>

                <div className='udemycart'>
                    <MdOutlineShoppingCart className='cartc' />
                </div>

                <div className='udemylogin'>
                    <div className='loginsign'>
                        <a className='anchoretag' href="">Login</a>
                    </div>
                    <div className='loginsign signup'>
                        <a className='anchoretag signuptext' href="">Sign Up</a>
                    </div>
                    <div className='globe'>
                        <IoGlobeSharp className='globetext' />
                    </div>
                </div>
            </div>
            <div className='pop1' style={style} onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}>
                <div>
                <ol>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Development          </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Business             </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Finance & Accpunting </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>It & Software        </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Personal DEvelopment </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Design               </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Marketing            </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Health & Fitness     </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}><p>Teaching & Academics </p><i class="fa-solid fa-angle-right"></i></li>
                </ol>
                <ul style={style3} onMouseEnter={handleMouseEnter3} 
                      onMouseLeave={handleMouseLeave3}>
                <li  onMouseEnter={x} 
                      onMouseLeave={Y}><p>Development          </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Business             </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Finance & Accpunting </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>It & Software        </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Personal DEvelopment </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Design               </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Marketing            </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Health & Fitness     </p><i class="fa-solid fa-angle-right"></i></li>
                    <li><p>Teaching & Academics </p><i class="fa-solid fa-angle-right"></i></li>
                </ul>
                <ol className='ol1'style={style4} onMouseEnter={x} 
                      onMouseLeave={Y}>
                <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>Finance & Accpunting </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>It & Software        </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>Office Productivity  </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>Personal DEvelopment </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>Design               </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>Marketing            </p><i class="fa-solid fa-angle-right"></i></li>
                    <li onMouseEnter={x} 
                      onMouseLeave={Y} ><p>Health & Fitness     </p><i class="fa-solid fa-angle-right"></i></li>

                </ol>
                </div>
            </div>
            <div className='pop2'style={style1} onMouseEnter={handleMouseEnter1} 
                      onMouseLeave={handleMouseLeave1}>
                        <h1>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</h1>
                        <button>Try Udemy Business</button>
                      </div>
            <div className='pop3' style={style2} onMouseEnter={handleMouseEnter2} 
                      onMouseLeave={handleMouseLeave2}>
                <h1>Turn what you know into an opportunity and reach millions around the world.</h1>
                <button>Learn more</button>
            </div>
        </div>
    )
}

export default Navbar
