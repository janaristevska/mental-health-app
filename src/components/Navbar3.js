import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

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
                <Link to="/symptoms" > Symptoms </Link>
                <Link to="/motivation2"> Motivation </Link>
                <Link to="/faq2" > FAQ </Link>
                <Link to="/games"> Games </Link>
                <Link to="/login"> Log out </Link>

                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar2

