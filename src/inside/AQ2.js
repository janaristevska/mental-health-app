import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function AQ2() {
    return (
        <div className='question'>
            <h2 className='header'>
                What's typically the biggest source of stress for you?
            </h2>

            <Link to="/aq3">
                <button >
                    Money
                </button>
            </Link>
            <Link to="/aq3">
                <button >
                    Health
                </button>
            </Link>
            <Link to="/aq3">
                <button>
                    Work or school
                </button>
            </Link>
            <Link to="/aq3">
                <button>
                    Relationships
                </button>
            </Link>
            <Link to="/aq3">
                <button>
                    Family
                </button>
            </Link>
            <Link to="/aq3">
                <button>
                    Other
                </button>
            </Link>
        </div>
    )
}

export default AQ2
