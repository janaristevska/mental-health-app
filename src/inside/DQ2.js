import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function DQ2() {
    return (
        <div className='question'>
            <h2 className='header'>
                Have recent life events contributed to your current emotional state?
            </h2>
            <Link to="/dq3" >
                <button >
                    End of relationship
                </button>
            </Link>
            <Link to="/dq3">
                <button >
                    Recent job changes
                </button>
            </Link>
            <Link to="/dq3">
                <button >
                    Financial difficulties
                </button>
            </Link>
            <Link to="/dq3">
                <button >
                    Family conflicts
                </button>
            </Link>
            <Link to="/dq3">
                <button >
                    Discrimination
                </button>
            </Link>
            <Link to="/dq3">
                <button>
                    Other
                </button>
            </Link>
        </div>
    )
}

export default DQ2
