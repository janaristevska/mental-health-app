import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Questions.css';

function SQ1() {
    return (
        <div className='question'>
            <h2 className='header'>
                How often do you have trouble sleeping?
            </h2>

            <Link to="/sq2">
                <button>
                    Rarely
                </button>
            </Link>
            <Link to="/sq2">
                <button>
                    Occasionally
                </button>
            </Link>
            <Link to="/sq2">
                <button>
                    Frequently
                </button>
            </Link>
            <Link to="/sq2">
                <button>
                    Always
                </button>
            </Link>
            <Link to="/sq2">
                <button>
                    Never
                </button>
            </Link>

        </div>
    )
}

export default SQ1
