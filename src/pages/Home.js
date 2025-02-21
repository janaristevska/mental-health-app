import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from './BackTopStyled';
import { Link } from 'react-router-dom';
import Background from '../images/bckground.mp4';
import '../styles/Home.css';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleIsVisible = () => {
            if (window.scrollY >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleIsVisible);

        return () => {
            window.removeEventListener('scroll', handleIsVisible);
        };
    }, []);



    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="home" id="home">
            <video autoPlay loop>
                <source src={Background} type="video/mp4" />
            </video>
            <div className="headerContainer" >
                <h1>We care for you</h1>
                <p>“It's your battle, but you don't need to fight alone.”</p>
                <Link to="/login">
                    <button className='loin'>LOG IN</button>
                    <Link to="/getstarted">
                        <button className="gets"> GET STARTED</button>
                    </Link>
                </Link>
            </div>
            <BackTopWrapper
                title="Back to top"
                className={isVisible ? 'show' : ''}
                onClick={backToTop}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
            </BackTopWrapper>

        </div >
    );
}
export default Home;
