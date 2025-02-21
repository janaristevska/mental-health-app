import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import { useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink and scroll
import { Link } from 'react-router-dom';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const [navbar, setNavbar] = useState(false);



    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const location = useLocation();

    const scrollToTop = () => {
        scroll.scrollToTop();
        closeMenu();
    }

    return (
        <div className={navbar ? 'navbar active' : 'navbar'} style={{ background: navbar ? 'white' : 'transparent', position: 'fixed' }}>
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <Link to="/main"><img src={Logo} /></Link>
                <Link to="/main" style={{ fontSize: '40px' }}><i>MindWellness</i></Link>
                <div className="hiddenLinks">
                    <Link to="/about" className={location.pathname === '/about' ? 'activeLink' : ''}>About</Link>
                    <Link to="/benefits" className={location.pathname === '/benefits' ? 'activeLink' : ''}>Benefits</Link>
                    <Link to="/advices" className={location.pathname === '/advices' ? 'activeLink' : ''}>Advices</Link>
                    <Link to="/login" className={location.pathname === '/login' ? 'activeLink' : ''}>Log in</Link>
                    <Link to="/getstarted" className={location.pathname === '/getstarted' ? 'activeLink' : ''}>Get started</Link>
                </div>

            </div>
            <div className="rightSide">
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={100}
                    spy={true}
                    offset={-70}
                    className={location.pathname === '/about' ? 'activeLink' : ''}
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to="benefits"
                    smooth={true}
                    duration={100}
                    spy={true}
                    offset={-70}
                    className={location.pathname === '/benefits' ? 'activeLink' : ''}
                >
                    Benefits
                </ScrollLink>
                <ScrollLink
                    to="advices"
                    smooth={true}
                    duration={100}
                    spy={true}
                    offset={-70}
                    className={location.pathname === '/advices' ? 'activeLink' : ''}
                >
                    Advices
                </ScrollLink>
                <Link to="/login">Log in</Link>
                <Link style={{ padding: '10px', backgroundColor: 'rgb(118, 118, 255)', color: 'white', borderRadius: '5px' }} to="/getstarted">Get started</Link>

                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div >
    )
}

export default Navbar
