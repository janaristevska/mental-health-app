import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import { AiOutlineUser } from 'react-icons/ai';


function Navbar2() {
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

    return (
        <div className={navbar ? 'navbar active' : 'navbar'} style={{ background: navbar ? 'white' : 'transparent', position: 'fixed' }}>
            <div className="leftSide" id={openLinks ? "open" : "close"}>

                <p>
                    <div className="hiddenLinks">
                        <Link to="/about"> About </Link>
                        <Link to="/benefits"> Benefits </Link>
                        <Link to="/advices"> Advices </Link>
                        <Link to="/login"> Log in </Link>
                        <Link to="/getstarted">Get started</Link>
                    </div>
                </p>
            </div>
            <div className="rightSide">
                <Link to="/meditation" > Meditation </Link>
                <Link to="/motivation"> Motivation </Link>
                <Link to="/faq" > FAQ </Link>
                <Link to="/games"> Games </Link>
                <Link to="/login"> Log out </Link>
                <Link to="/login"><AiOutlineUser /></Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

/* <Link to="/about" spy={true} smooth={true} offset={50} duration={500}> About </Link>
                <Link to="/benefits" spy={true} smooth={true} offset={50} duration={500}> Benefits </Link>
                <Link to="/login" spy={true} smooth={true} offset={50} duration={500}> Log in </Link>
                <Link to="/register" spy={true} smooth={true} offset={50} duration={500}> Get started </Link>*/

export default Navbar2

/*<div className="rightSide">
                <Link to="/about" spy={true} smooth={true} offset={50} duration={500} className='nav-item'> About </Link>
                <Link to="/benefits" spy={true} smooth={true} offset={50} duration={500} nav-item> Benefits </Link>
                <Link to="/login" spy={true} smooth={true} offset={50} duration={500} nav-item> Log in </Link>
                <Link to="/register" spy={true} smooth={true} offset={50} duration={500} nav-item> Get started </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
*/