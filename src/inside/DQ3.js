import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function DQ3() {
    return (
        <div className='question'>
            <h2 className='header'>
                How long have you been experiencing these depression feelings?
            </h2>

            <Link to="/depression">
                <button>
                    Several months
                </button>
            </Link>
            <Link to="/depression">               <button>
                About a year
            </button>
            </Link>
            <Link to="/depression">
                <button>
                    Most  my life
                </button>
            </Link>
            <Link to="/depression">
                <button>
                    Quite recently
                </button>
            </Link>
        </div>
    )
}

export default DQ3
