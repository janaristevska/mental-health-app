import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function SQ2() {
    return (
        <div className='question'>
            <h2 className='header'>
                In what way does your sleep get disrupted or problematic?
            </h2>

            <Link to="/sq3">
                <button>
                    Falling asleep
                </button>
            </Link>
            <Link to="/sq3">
                <button>
                    Staying asleep
                </button>
            </Link>
            <Link to="/sq3">
                <button>
                    Nightmares
                </button>
            </Link>
            <Link to="/sq3">
                <button>
                    Noise
                </button>
            </Link>
            <Link to="/sq3">
                <button>
                    Discomfort
                </button>
            </Link>
            <Link to="/sq3">
                <button>
                    Other
                </button>
            </Link>
        </div>
    )
}

export default SQ2
