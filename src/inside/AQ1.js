import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';
function AQ1() {
    return (
        <div className='question'>
            <h2 className='header'>
                How have you been feeling lately?
            </h2>

            <Link to="/aq2">
                <button>
                    Good
                </button>
            </Link>
            <Link to="/aq2">
                <button>
                    Stressed
                </button>
            </Link>
            <Link to="/aq2">
                <button>
                    Sad</button>
            </Link>
            <Link to="/aq2">
                <button>
                    Indifferent
                </button>
            </Link>
        </div>
    )
}

export default AQ1
