import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function AQ3() {
    return (
        <div className='question'>
            <h2 className='header'>
                How does stress usually show up for you?
            </h2>

            <Link to="/anxiety" className="link">
                <button >
                    Anxious thoughts
                </button>
            </Link>
            <Link to="/anxiety">
                <button >
                    Moodiness
                </button>
            </Link>
            <Link to="/anxiety">
                <button >
                    Physical discomfort
                </button>
            </Link>
            <Link to="/anxiety">
                <button>
                    Difficulty sleeping
                </button>
            </Link>
        </div>
    )
}

export default AQ3
