import React from 'react';
import '../styles/Insomnia.css';
import sky from '../images/sky2.jpg';
import { Link } from 'react-router-dom';
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
function Insomnia() {
    return (
        <div className="sleep-education">
            <img src={sky}></img>
            <div className='musics'>
                <Link to="/music-insomnia" className='link'>
                    <HiOutlineMusicalNote />
                </Link>
                <Link to="/read-insomnia" className='link2'>
                    <IoBookOutline />
                </Link>
            </div>

            <div className='symptoms-title'>
                <div className='orange-circle' />
                <h1 className='header'>Insomnia</h1>
            </div>

            <div className="content">
                <Link to='/sleep-diary'>
                    <div className="content-item">
                        <h2>Sleep diary</h2>
                        <p>Track your sleep patterns every day.</p>
                    </div>
                </Link>

                <Link to='/tips-insomnia'>
                    <div className="content-item">
                        <h2>Tips to Prevent Insomnia</h2>
                        <p>Take steps to reduce the risk of developing chronic insomnia.</p>
                    </div>
                </Link>

                <Link to='/sleep-disorders'>
                    <div className="content-item">
                        <h2>The Most Common Sleep Disorders</h2>
                        <p>Discover the different types of insomnia disorders based on the duration and frequency of symptoms.</p>
                    </div>
                </Link>
                <Link to='/sleep-symptoms'>
                    <div className="content-item">
                        <h2>Symptoms and Causes</h2>
                        <p>Find out the most common symptoms that lead to insomnia.</p>
                    </div>
                </Link>

            </div>



            <footer>
                <p>&copy; {new Date().getFullYear()} Sleep Education. All rights reserved.</p>
            </footer>
        </div >
    );
}

export default Insomnia;


