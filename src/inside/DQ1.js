import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function DQ1() {
    return (
        <div className='question'>
            <h2 className='header'>
                How has depression affected your daily life and responsibilities?
            </h2>

            <Link to="/dq2">
                <button>
                    Disrupted routines
                </button>
            </Link>
            <Link to="/dq2">
                <button >
                    Difficulty concentrating
                </button>
            </Link>
            <Link to="/dq2">
                <button >
                    Decreased appetite
                </button>
            </Link>
            <Link to="/dq2">
                <button >
                    Reduced social interaction
                </button>
            </Link>
            <Link to="/dq2">
                <button >
                    Trouble getting out of bed
                </button>
            </Link>
            <Link to="/dq2">
                <button>
                    Other
                </button>
            </Link>
        </div>
    )
}

export default DQ1
