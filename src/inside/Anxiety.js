import React from 'react';
import '../styles/Insomnia.css';
import sky from '../images/anxbg.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
function Insomnia() {
    return (
        <div className="sleep-education">
            <img src={sky}></img>
            <div className='musics'>
                <Link to="/music-anxiety" className='link'>
                    <HiOutlineMusicalNote />
                </Link>
                <Link to="/read-anxiety" className='link2'>
                    <IoBookOutline />
                </Link>
            </div>
            <div className='symptoms-title'>
                <div className='orange-circle' />
                <h1 className='header'>Anxiety</h1>
            </div>

            <div className="content">
                <Link to='/anxiety-meditation'>
                    <div className="content-item">
                        <h2>Meditation</h2>
                        <p>Discover how meditation practice can positively impact various aspects of your life.</p>
                    </div>
                </Link>

                <Link to='/tips-insomnia'>
                    <div className="content-item">
                        <h2>Tips to Prevent Anxiety</h2>
                        <p>Learn how to prevent anxiety and maintain mental well-being.</p>
                    </div>
                </Link>

                <Link to='/sleep-disorders'>
                    <div className="content-item">
                        <h2>The Most Common Anxiety Disorders</h2>
                        <p>Get to know everything about the most common anxiety disorders.</p>
                    </div>
                </Link>
                <Link to='/anxiety-symptoms'>
                    <div className="content-item">
                        <h2>Symptoms and Causes</h2>
                        <p>Find out which symptoms are a sign of anxiety and stress.</p>
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


