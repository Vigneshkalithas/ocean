// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { NavLink, Link} from "react-router-dom";









import React, { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import logo from './zion logo.png';
import { useNavigate ,Link,NavLink} from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  const navigate = useNavigate();


  return (
    <>
   
 {/* <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="web">Web</span><span className="uiexpert"> UiExpert</span>
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="home" className="nav-links">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="portfolio" className="nav-links">
                            PORTFOLIO
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-links">
                              ABOUT
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="blog" className="nav-links">
                            BLOG
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" className="nav-links">
                            CONTACT
                        </Link>
                    </li>
                    <li>
                    <button onClick={()=>navigate("/login")} className="fancy-button bg-gradient1">Login</button>
                    </li>
                </ul>
            </div>
        </nav>  */}

<div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    {/* <img src={logo} alt='logo' /> */}
                    <span className="web">Web</span><span className="uiexpert"> UiExpert</span>
                </a>
               
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<AiOutlineClose size={26} style={{ color: '#3d3d3d ' }} />)
                        : (<VscThreeBars size={26} style={{ color: '#3d3d3d ' }} />)}

{/* instad color : #3d3d3d */}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <NavLink to='/home' onClick={closeMenu}>HOME</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/portfolio' onClick={closeMenu}>PORTFOLIO</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' onClick={closeMenu}>ABOUT</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/blog' onClick={closeMenu}>BLOG</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' onClick={closeMenu}>CONTACT</NavLink>
                    </li>
                    <li>
                    <button onClick={()=>navigate("/login")} className="fancy-button my-1 bg-gradient1">Login</button>
                    </li>
                </ul>
            </nav>
        </div>



    </>
  )
  
}

export default Navbar