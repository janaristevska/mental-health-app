import React from 'react';
import '../styles/Insomnia.css';
import depp from '../images/depp.jpg';
import { Link } from 'react-router-dom';
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
function Insomnia() {
    return (
        <div className="sleep-education">
            <img src={depp}></img>
            <div className='musics'>
                <Link to="/music-depression" className='link'>
                    <HiOutlineMusicalNote />
                </Link>
                <Link to="/read-depression" className='link2'>
                    <IoBookOutline />
                </Link>
            </div>
            <div className='symptoms-title'>
                <div className='orange-circle' />
                <h1 className='header'>Depression</h1>
            </div>

            <div className="content">
                <Link to='/motivation'>
                    <div className="content-item">
                        <h2>Motivation</h2>
                        <p>Focus on building discipline and rely on habits to keep you moving forward.</p>
                    </div>
                </Link>

                <Link to='/depression-tips'>
                    <div className="content-item">
                        <h2>Tips to Prevent Depression</h2>
                        <p>Here are several strategies and lifestyle changes you can implement to reduce your depression.</p>
                    </div>
                </Link>

                <Link to='/depression-disorders'>
                    <div className="content-item">
                        <h2>The Most Common Depression Disorders</h2>
                        <p>Get to know the most common depressive disorders better.</p>
                    </div>
                </Link>
                <Link to='depression-symptoms'>
                    <div className="content-item">
                        <h2>Symptoms and Causes</h2>
                        <p>Some common symptoms of depression that everyone should know.</p>
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


