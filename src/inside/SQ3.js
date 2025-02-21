import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function SQ3() {
    return (
        <div className='question'>
            <h2 className='header'>
                How do you feel physically and mentally due to lack of sleep caused by insomnia?
            </h2>

            <Link to="/insomnia" className="link">
                <button>
                    Fatigued and anxious
                </button>
            </Link>
            <Link to="/insomnia">
                <button >
                    Moody
                </button>
            </Link>
            <Link to="/insomnia">
                <button >
                    Headaches and tense
                </button>
            </Link>
            <Link to="/insomnia">
                <button>
                    Lack of focus
                </button>
            </Link>
            <Link to="/insomnia">
                <button>
                    Emotional instability
                </button>
            </Link>
            <Link to="/insomnia">
                <button>
                    Other
                </button>
            </Link>
        </div>
    )
}

export default SQ3
